import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import HeroPage from "../HeroPage";
import Curriculars from "../Curriculars";
import Programs from "../Programs";

export default function Home(){
    return(
        <>
            <HeroPage />
            <AboutUs />
            <Programs />
            <Curriculars />
            <ContactUs />
            <Footer/>
          
           
        
        </>
    );
}