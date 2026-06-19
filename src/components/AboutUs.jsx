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

return (

<div
id="collage-section"
className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 font-sans"
>

<style
dangerouslySetInnerHTML={{__html:customStyles}}
/>

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

{/* LEFT COLLAGE */}

<div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[500px] sm:h-[600px]">

<div className="col-span-2 row-span-4 bg-blue-600 rounded-3xl overflow-hidden shadow-xl">

<img
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400"
alt=""
className="w-full h-full object-cover"
/>

</div>

<div className="col-span-4 row-span-2 bg-purple-500 rounded-3xl overflow-hidden">

<img
src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600"
alt=""
className="w-full h-full object-cover"
/>

</div>

<div className="col-span-2 row-span-2 col-start-3 row-start-3 rounded-full overflow-hidden">

<img
src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
alt=""
className="w-full h-full object-cover"
/>

</div>

<div className="col-span-2 row-span-3 col-start-5 row-start-3 rounded-3xl overflow-hidden">

<img
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300"
alt=""
className="w-full h-full object-cover"
/>

</div>

<div className="col-span-4 row-span-2 col-start-1 row-start-5 rounded-3xl overflow-hidden">

<img
src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600"
alt=""
className="w-full h-full object-cover"
/>

</div>

</div>


{/* RIGHT SIDE */}

<div className="space-y-8">

<h2 className="text-5xl font-bold text-[#004aad]">

About Us

</h2>

<p className="text-gray-600 text-lg">

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

<div className="max-w-6xl mx-auto mt-15 bg-sky-100 rounded-[40px] p-6">

{/* TOP */}

<div className="grid grid-cols-6 gap-4">

{[...Array(6)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-3xl h-32 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-16"
/>

</div>

))}

</div>


<div className="flex gap-4 my-4">

{/* LEFT */}

<div className="flex flex-col gap-4">

{[...Array(2)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-3xl w-32 h-44 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-16"
/>

</div>

))}

</div>


{/* CENTER */}

<div className="flex-1 bg-slate-100 rounded-3xl flex flex-col justify-center items-center py-10">

<h1 className="text-6xl font-extrabold uppercase text-slate-900 text-center">

WE'VE WORKED WITH

</h1>

<h1 className="text-7xl font-extrabold uppercase text-[#004aad] text-center">

AMAZING COLLEGES.

</h1>


<div className="flex items-center gap-4 mt-8">

<div className="w-24 h-[1px] bg-gray-400"/>

★

<div className="w-24 h-[1px] bg-gray-400"/>

</div>


<h2 className="text-4xl font-bold mt-8 uppercase text-center">

<span className="text-slate-900">

YOUR COLLEGE

</span>

<span className="text-[#004aad] ml-3">

DESERVE THIS.

</span>

</h2>

</div>


{/* RIGHT */}

<div className="flex flex-col gap-4">

{[...Array(2)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-3xl w-32 h-44 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-16"
/>

</div>

))}

</div>

</div>


{/* BOTTOM */}

<div className="grid grid-cols-6 gap-4">

{[...Array(6)].map((_,i)=>(

<div
key={i}
className="bg-white rounded-3xl h-32 flex items-center justify-center"
>

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1780510841/Screenshot_2026-06-03_232105_lyjla7.png"
alt=""
className="w-16"
/>

</div>

))}

</div>

</div>

</div>

);

};

export default AboutUs;