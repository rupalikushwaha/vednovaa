import React from "react";
import { ImageIcon } from "lucide-react";

const CollegeBanner = () => {

const boxes = Array(14).fill("");

return (

<div className="w-full min-h-screen bg-sky-300 flex items-center justify-center p-6">

<div className="w-full max-w-7xl">

{/* TOP */}

<div className="grid grid-cols-6 gap-4">

{boxes.slice(0,6).map((_,index)=>(

<div
key={index}
className="bg-white rounded-3xl h-52 flex items-center justify-center shadow-md"
>

<ImageIcon
size={90}
strokeWidth={1.7}
className="text-black"
/>

</div>

))}

</div>


<div className="flex gap-4 my-4">

{/* LEFT */}

<div className="flex flex-col gap-4">

{boxes.slice(0,2).map((_,index)=>(

<div
key={index}
className="bg-white rounded-3xl w-64 h-52 flex items-center justify-center shadow-md"
>

<ImageIcon
size={90}
strokeWidth={1.7}
/>

</div>

))}

</div>


{/* CENTER */}

<div className="flex-1 bg-slate-100 rounded-3xl flex flex-col justify-center items-center py-16 px-10">

<h1 className="text-[5rem] font-extrabold uppercase text-slate-900 leading-none text-center">

WE’VE WORKED WITH

</h1>

<h1 className="text-[5rem] font-extrabold uppercase text-orange-500 leading-none text-center">

AMAZING COLLEGES.

</h1>

<div className="flex items-center gap-6 mt-10">

<div className="w-52 h-[1px] bg-gray-400"/>

<div className="text-3xl">

★

</div>

<div className="w-52 h-[1px] bg-gray-400"/>

</div>

<h2 className="mt-6 text-5xl font-bold uppercase tracking-wider">

<span className="text-slate-900">

YOUR COLLEGE

</span>

<span className="text-orange-500 ml-3">

DESERVE THIS.

</span>

</h2>

</div>


{/* RIGHT */}

<div className="flex flex-col gap-4">

{boxes.slice(0,2).map((_,index)=>(

<div
key={index}
className="bg-white rounded-3xl w-64 h-52 flex items-center justify-center shadow-md"
>

<ImageIcon
size={90}
strokeWidth={1.7}
/>

</div>

))}

</div>

</div>


{/* BOTTOM */}

<div className="grid grid-cols-6 gap-4">

{boxes.slice(0,6).map((_,index)=>(

<div
key={index}
className="bg-white rounded-3xl h-52 flex items-center justify-center shadow-md"
>

<ImageIcon
size={90}
strokeWidth={1.7}
/>

</div>

))}

</div>

</div>

</div>

);

};

export default CollegeBanner;