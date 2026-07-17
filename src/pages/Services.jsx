
import { useNavigate } from "react-router-dom";
import Servicebanner from "../components/Servicebanner";
import DiagnosticCallPopup from "../components/DiagnosticCallPopup";
import { Helmet } from "react-helmet-async";
function Services(){
  const navigate = useNavigate();

const title = "AI/ML and Cybersecurity Training Services for Colleges | Vednovaa";
const description = "Explore Vednovaa's practical AI/ML, cybersecurity, placement readiness and hackathon-based training services for colleges and students.";
const canonical = "https://vednovaa.com/services";
const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";

return(

<div>

<Helmet>
<title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
<meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:site_name" content="Vednovaa" /><meta property="og:image" content={socialImage} />
</Helmet>

<DiagnosticCallPopup
  contactPageUrl="/contactus"
  onNavigate={(url) => navigate(url)}
/>

<Servicebanner/>
</div>

)

}

export default Services;
