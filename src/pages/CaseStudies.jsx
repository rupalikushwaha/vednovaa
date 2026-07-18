import DoDontSection from '../components/DoDontSection';
import { Helmet } from "react-helmet-async";
function CaseStudies(){

const title = "College Training Case Studies and Student Outcomes | Vednovaa";
const description = "Explore Vednovaa's college sessions, practical programs and student outcomes across AI/ML, cybersecurity and placement readiness.";
const canonical = "https://www.vednovaa.com/casestudies";
const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";

return(

<div>

<Helmet>
<title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
<meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:site_name" content="Vednovaa" /><meta property="og:image" content={socialImage} />
</Helmet>

<DoDontSection/>

</div>

)

}

export default CaseStudies;
