import React from 'react';

const AboutUs = () => {

const customStyles = `
@keyframes bounce-slow {
0%,100% {transform:translateY(-5%)}
50% {transform:translateY(5%)}
}

.animate-bounce-slow{
animation:bounce-slow 4s ease-in-out infinite;
}
`;

const topLogos = [
"https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1782841902/oxfort_lvhq7k.jpg",
"https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1782841902/cbbhandari_bsqfs7.jpg",
"https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png",
"https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png",
"https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png",
"https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png",
];

return (

<div
id="collage-section"
className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 font-sans"
>

<style
dangerouslySetInnerHTML={{__html:customStyles}}
/>

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

{/* LEFT COLLAGE */}

<div className="relative grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[420px] sm:h-[500px] md:h-[600px]">

<div className="col-span-2 row-span-4 bg-blue-600 rounded-3xl overflow-hidden shadow-xl">

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_500/v1783256244/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320_zmpguv.avif"
alt=""
className="w-full h-full object-cover"
loading="lazy"
decoding="async"
/>

</div>

<div className="col-span-4 row-span-2 bg-purple-500 rounded-3xl overflow-hidden">

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_500/v1783255618/young-businessman-sitting-cozy-cafe-bar-using-laptop-computer-looking-aside_342744-945_bc99bb.avif"
alt=""
className="w-full h-full object-cover"
loading="lazy"
decoding="async"
/>

</div>

<div className="col-span-2 row-span-2 col-start-3 row-start-3 rounded-full overflow-hidden">

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_400/v1783256446/360_F_652601325_usLnbQVWAf8pejZ02hkVgcU5TUSuugki_w05tff.jpg"
alt=""
className="w-full h-full object-cover"
loading="lazy"
decoding="async"
/>

</div>

<div className="col-span-2 row-span-3 col-start-5 row-start-3 rounded-3xl overflow-hidden">

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_500/v1783256547/360_F_639589574_BaoWjhM8fn8QOJbeRuXgJzKGDyidXwHb_ixkfcu.jpg"
alt=""
className="w-full h-full object-cover"
loading="lazy"
decoding="async"
/>

</div>

<div className="col-span-4 row-span-2 col-start-1 row-start-5 rounded-3xl overflow-hidden">

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_600/v1783256353/business-partners-shaking-hands-agreement-260nw-2547322653_rsolqu.webp"
alt=""
className="w-full h-full object-cover"
loading="lazy"
decoding="async"
/>

</div>

</div>


{/* RIGHT SIDE */}

<div className="space-y-6 sm:space-y-8">

<h2 className="text-4xl sm:text-5xl font-bold text-[#004aad]">

About Us

</h2>

<p className="text-gray-600 text-base sm:text-lg">

Vednovaa was founded with a simple belief:
students learn best when they experience,
apply, and execute.

<br/><br/>

While traditional education focuses on concepts
and examinations, today's industry expects
graduates who can think critically, solve problems,
collaborate effectively, and adapt to real-world challenges.

<br/><br/>

Through our Placement Readiness Accelerator Program (PRAP),
we help institutions build placement-ready and future-ready students.

<br/><br/>

Powered by our CORE Framework and Talent Development Engine (TDE),
Vednovaa delivers structured learning experiences.

<br/><br/>

<b>

<i>

Transforming Potential into Performance.

</i>

</b>

</p>

</div>

</div>



{/* BLUE SECTION */}

<div className="max-w-6xl mx-auto mt-10 sm:mt-12 lg:mt-15 bg-sky-100 rounded-[28px] sm:rounded-[40px] p-4 sm:p-6 md:p-8">

{/* TOP */}

<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">

{topLogos.map((logo,i)=>(

<div
key={i}
className="bg-white rounded-2xl sm:rounded-3xl h-20 sm:h-24 md:h-32 flex items-center justify-center"
>

<img
src={logo}
alt=""
className="w-9 sm:w-12 md:w-16"
loading="lazy"
decoding="async"
/>

</div>

))}

</div>


<div className="flex flex-col lg:flex-row gap-4 my-4">

{/* LEFT — decorative side logos, lg and up only */}

<div className="hidden lg:flex flex-col gap-4">

{[...Array(2)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-3xl w-32 h-44 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-16"
/>

</div>

))}

</div>


{/* CENTER */}

<div className="flex-1 bg-slate-100 rounded-3xl flex flex-col justify-center items-center py-8 sm:py-10 px-4">

<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-slate-900 text-center">

WE'VE WORKED WITH

</h2>

<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-[#004aad] text-center">

AMAZING COLLEGES.

</h2>


<div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">

<div className="w-12 sm:w-24 h-[1px] bg-gray-400"/>

★

<div className="w-12 sm:w-24 h-[1px] bg-gray-400"/>

</div>


<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-8 uppercase text-center">

<span className="text-slate-900">

YOUR COLLEGE

</span>

<span className="text-[#004aad] ml-3">

DESERVE THIS.

</span>

</h2>

</div>


{/* RIGHT — decorative side logos, lg and up only */}

<div className="hidden lg:flex flex-col gap-4">

{[...Array(2)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-3xl w-32 h-44 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-16"
/>

</div>

))}

</div>

</div>


{/* BOTTOM */}

<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">

{[...Array(6)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-2xl sm:rounded-3xl h-20 sm:h-24 md:h-32 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_128/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-9 sm:w-12 md:w-16"
/>

</div>

))}

</div>

</div>

</div>

);

};

export default AboutUs;
