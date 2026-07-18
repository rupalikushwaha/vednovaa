import Cysec from "../components/Cysec";
import { Helmet } from "react-helmet-async";

function Products(){

const title = "Cybersecurity Simulation and Placement Readiness Products | Vednovaa";
const description = "Explore Vednovaa's technology products for cybersecurity simulations, student readiness assessment and practical experiential learning.";
const canonical = "https://www.vednovaa.com/products";
const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";

return(

<div>

<Helmet>
<title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
<meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:site_name" content="Vednovaa" /><meta property="og:image" content={socialImage} />
</Helmet>

<Cysec  />
</div>

)

}

export default Products;
