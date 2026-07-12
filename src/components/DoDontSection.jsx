import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Rocket,
  ShieldCheck,
  Layers,
  BrainCircuit,
  Users,
  Briefcase,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "CB Bhandari Jain College",
    desc: "As Artificial Intelligence continues to reshape industries, students need more than academic knowledge...",
    icon: ShieldCheck,
     path: "/cb-bhandari",
  },
  {
    id: 2,
    title: "The Oxford College of Engineering",
    desc: "Students often understand AI and Machine Learning theoretically but struggle to connect these...",
    icon: ShieldCheck,
    path: "/oxford-college",
  },
  {
    id: 3,
    title: "Upcoming",
    desc: "Your story can be our next case study!!",
    icon: Briefcase,
     path: "/upcoming",
  },
  {
    id: 4,
    title: "Upcoming",
    desc: "Your story can be our next case study!!",
    icon:Briefcase,
     path: "/upcoming",
  },
  {
    id: 5,
    title: "Upcoming",
    desc: "Your story can be our next case study!! we are exited to be a part of your organization",
    icon: Briefcase,
     path: "/upcoming",
  },
  {
    id: 6,
    title: "Upcoming",
    desc: "Your story can be our next case study!! Be a part of it soon",
    icon: Briefcase,
     path: "/upcoming",
  },
];

// ─── Dino Game ────────────────────────────────────────────────────────────────

const GROUND_OFFSET = 40;
const DINO_W = 36;
const DINO_H = 44;
const GRAVITY = 0.7;
const JUMP_VY = -13;
const BASE_SPEED = 4;
const MAX_SPEED = 14;

function useGame(canvasRef, active) {
  const stateRef = useRef("idle"); // idle | running | dead
  const dinoRef = useRef(null);
  const obstaclesRef = useRef([]);
  const scoreRef = useRef(0);
  const hiRef = useRef(0);
  const speedRef = useRef(BASE_SPEED);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const [hud, setHud] = useState({ score: 0, hi: 0, speed: "1.0x" });
  const [msg, setMsg] = useState("Press Space / Tap to start");

  const groundY = (canvas) => canvas.height - GROUND_OFFSET;

  function resetEntities(canvas) {
    const gy = groundY(canvas);
    dinoRef.current = {
      x: 80,
      y: gy,
      vy: 0,
      grounded: true,
      legPhase: 0,
    };
    obstaclesRef.current = [];
    scoreRef.current = 0;
    speedRef.current = BASE_SPEED;
    frameRef.current = 0;
  }

  function updateHud() {
    setHud({
      score: scoreRef.current,
      hi: hiRef.current,
      speed: (speedRef.current / BASE_SPEED).toFixed(1) + "x",
    });
  }

  // ── Draw helpers ──

  function drawGround(ctx, canvas) {
    const gy = groundY(canvas);
    ctx.fillStyle = "#b4b2a9";
    ctx.fillRect(0, gy + DINO_H, canvas.width, 3);
    ctx.fillStyle = "#d3d1c7";
    for (let i = 0; i < 3; i++) {
      const cx = 80 + i * 220;
      const cy = 38 + i * 14;
      ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 20, cy - 8, 13, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 36, cy, 15, 0, Math.PI * 2); ctx.fill();
    }
  }

  function drawDino(ctx, dino, dead = false) {
    const { x, y, grounded, legPhase } = dino;
    ctx.fillStyle = "#185fa5";

    // body
    ctx.beginPath();
    ctx.roundRect(x, y + DINO_H * 0.25, DINO_W, DINO_H * 0.55, 6);
    ctx.fill();

    // head
    ctx.beginPath();
    ctx.roundRect(x + DINO_W * 0.45, y, DINO_W * 0.62, DINO_H * 0.42, 5);
    ctx.fill();

    // tail
    ctx.beginPath();
    ctx.moveTo(x, y + DINO_H * 0.55);
    ctx.lineTo(x - 14, y + DINO_H * 0.72);
    ctx.lineTo(x, y + DINO_H * 0.75);
    ctx.fill();

    // eye white
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x + DINO_W * 0.88, y + DINO_H * 0.12, 4, 0, Math.PI * 2);
    ctx.fill();

    if (dead) {
      // X eyes
      ctx.strokeStyle = "#0c447c";
      ctx.lineWidth = 2;
      const ex = x + DINO_W * 0.88;
      const ey = y + DINO_H * 0.12;
      ctx.beginPath(); ctx.moveTo(ex - 4, ey - 4); ctx.lineTo(ex + 4, ey + 4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex + 4, ey - 4); ctx.lineTo(ex - 4, ey + 4); ctx.stroke();
    } else {
      // pupil
      ctx.fillStyle = "#0c447c";
      ctx.beginPath();
      ctx.arc(x + DINO_W * 0.89, y + DINO_H * 0.13, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // legs
    ctx.fillStyle = "#185fa5";
    const lp = grounded ? Math.sin(legPhase) * 6 : 0;
    ctx.fillRect(x + DINO_W * 0.15, y + DINO_H * 0.77, 10, DINO_H * 0.28 + lp);
    ctx.fillRect(x + DINO_W * 0.52, y + DINO_H * 0.77, 10, DINO_H * 0.28 - lp);
  }

  function drawCactus(ctx, o) {
    ctx.fillStyle = "#3b6d11";
    ctx.beginPath(); ctx.roundRect(o.x + o.w / 2 - 5, o.y, 10, o.h, 3); ctx.fill();
    const armY = o.y + o.h * 0.25;
    const armH = Math.min(o.h * 0.5, 22);
    ctx.beginPath(); ctx.roundRect(o.x, armY, o.w / 2 - 3, 8, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(o.x, armY, 7, armH, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(o.x + o.w / 2 + 3, armY + 8, o.w / 2 - 3, 8, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(o.x + o.w - 7, armY + 8, 7, armH, 3); ctx.fill();
  }

  function drawScene(ctx, canvas, dead = false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround(ctx, canvas);
    obstaclesRef.current.forEach((o) => drawCactus(ctx, o));
    drawDino(ctx, dinoRef.current, dead);
  }

  // ── Game loop ──

  function startLoop(canvas, ctx) {
    function tick() {
      if (!document.getElementById("dino-canvas")) { cancelAnimationFrame(rafRef.current); return; }

      const dino = dinoRef.current;
      const gy = groundY(canvas);
      frameRef.current++;

      // physics
      dino.vy += GRAVITY;
      dino.y += dino.vy;
      if (dino.y >= gy) { dino.y = gy; dino.vy = 0; dino.grounded = true; }
      if (dino.grounded) dino.legPhase += 0.25;

      // speed
      speedRef.current = Math.min(BASE_SPEED + scoreRef.current * 0.004, MAX_SPEED);

      // spawn
      const obs = obstaclesRef.current;
      const minGap = Math.max(180, 320 - scoreRef.current * 0.4);
      if (
        frameRef.current > 60 &&
        (obs.length === 0 || canvas.width - obs[obs.length - 1].x > minGap + Math.random() * 160)
      ) {
        const h = 30 + Math.floor(Math.random() * 40);
        obs.push({ x: canvas.width + 20, w: 22, h, y: gy + DINO_H - h });
      }

      // move & cleanup obstacles
      obstaclesRef.current = obs
        .map((o) => ({ ...o, x: o.x - speedRef.current }))
        .filter((o) => o.x + o.w > 0);

      // collision
      const hit = obstaclesRef.current.some(
        (o) =>
          dino.x + 4 < o.x + o.w &&
          dino.x + DINO_W - 4 > o.x &&
          dino.y + 6 < o.y + o.h &&
          dino.y + DINO_H > o.y
      );

      if (hit) {
        stateRef.current = "dead";
        if (scoreRef.current > hiRef.current) hiRef.current = scoreRef.current;
        updateHud();
        drawScene(ctx, canvas, true);
        setMsg(`Game over! Score: ${scoreRef.current} — Press Space / Tap to retry`);
        return;
      }

      scoreRef.current++;
      updateHud();
      drawScene(ctx, canvas, false);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  function handleJump() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (stateRef.current === "idle" || stateRef.current === "dead") {
      stateRef.current = "running";
      resetEntities(canvas);
      setMsg("");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startLoop(canvas, ctx);
    } else if (stateRef.current === "running" && dinoRef.current.grounded) {
      dinoRef.current.vy = JUMP_VY;
      dinoRef.current.grounded = false;
    }
  }

  // ── Effects ──

  useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stateRef.current = "idle";
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const gy = groundY(canvas);

    // draw idle frame
    dinoRef.current = { x: 80, y: gy, vy: 0, grounded: true, legPhase: 0 };
    obstaclesRef.current = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround(ctx, canvas);
    drawDino(ctx, dinoRef.current, false);
    setMsg("Press Space / Tap to start");

    const onKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleJump();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  return { hud, msg, handleJump };
}

// ─── DinoGame component ───────────────────────────────────────────────────────

function DinoGame() {
  const canvasRef = useRef(null);
  const { hud, msg, handleJump } = useGame(canvasRef, true);

  return (
    <div className="flex flex-col items-center bg-[#f1efe8] rounded-3xl p-6 gap-4 min-h-[380px] sm:min-h-[420px]">
      {/* HUD */}
      <div className="flex justify-between w-full max-w-[600px] text-sm font-semibold text-gray-500">
        <span>Score: <span className="text-gray-800">{hud.score}</span></span>
        <span>Best: <span className="text-gray-800">{hud.hi}</span></span>
        <span>Speed: <span className="text-gray-800">{hud.speed}</span></span>
      </div>

      {/* Canvas */}
      <canvas
        id="dino-canvas"
        ref={canvasRef}
        width={600}
        height={200}
        onClick={handleJump}
        onTouchStart={handleJump}
        className="rounded-xl border-2 border-dashed border-[#b4b2a9] cursor-pointer w-full max-w-[600px]"
        style={{ touchAction: "none" }}
      />

      {/* Message */}
      <p className="text-sm font-semibold text-[#004aad] min-h-[20px] text-center">{msg}</p>
      <p className="text-xs text-gray-400 text-center">
        Jump to avoid cacti — toggle back to{" "}
        <span className="font-bold text-[#004aad]">DO</span> to see services
      </p>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

const DoDontSection = () => {
  const [isDo, setIsDo] = useState(true);
  const [activeCard, setActiveCard] = useState(1);
  const navigate = useNavigate();

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 px-3 sm:px-4 mt-8">
      <div className="max-w-7xl mx-auto bg-blue-100 rounded-[28px] sm:rounded-[40px] shadow-xl p-5 sm:p-8 md:p-12 lg:p-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 sm:mb-12 lg:mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              When people
            </h2>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
              <span
                className={`text-3xl sm:text-4xl md:text-6xl font-bold transition-all ${
                  isDo ? "text-[#004aad]" : "text-red-500"
                }`}
              >
                {isDo ? "do" : "don't"}
              </span>

              <button
                onClick={() => setIsDo(!isDo)}
                className={`relative w-16 h-8 sm:w-20 sm:h-10 rounded-full transition-all duration-300 ${
                  isDo ? "bg-[#004aad]" : "bg-gray-400"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full transition-all duration-300 ${
                    isDo ? "left-9 sm:left-11" : "left-1"
                  }`}
                />
              </button>

              <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
                work with us.
              </span>
            </div>
          </div>

          <button className="mt-2 lg:mt-0 bg-gray-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition text-sm sm:text-base whitespace-nowrap">
          <Link to="/contactus">Let's build something</Link>
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Content */}
        {isDo ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((item) => {
              const Icon = item.icon;
              const isActive = activeCard === item.id;

              return (
                <div
  key={item.id}
  onClick={() => {
    setActiveCard(item.id);
    navigate(item.path);
  }}
  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
    isActive
      ? "bg-[#004aad] text-white shadow-xl sm:scale-105"
      : "bg-white text-gray-900 hover:shadow-lg"
  }`}
>
                  <div className="flex justify-between items-center mb-4 sm:mb-5">
                    <Icon size={26} />
                    <ArrowUpRight size={20} />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isActive ? "text-blue-100" : "text-gray-600"}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <DinoGame />
        )}
      </div>
    </section>
  );
};

export default DoDontSection;