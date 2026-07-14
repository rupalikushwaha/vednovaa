import CallSection from "../components/CallSection";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet-async";

function ContactUs(){

const title = "Contact Vednovaa | College Training and Partnership Enquiries";
const description = "Contact Vednovaa for college partnerships, placement readiness programs, AI/ML training, cybersecurity sessions and institutional enquiries.";
const canonical = "https://vednovaa.com/contactus";
const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";

return(

<div>

<Helmet>
<title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
<meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:site_name" content="Vednovaa" /><meta property="og:image" content={socialImage} />
</Helmet>

<CallSection />
<ContactSection />
</div>

)

}

export default ContactUs;
