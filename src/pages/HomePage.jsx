import Header from "../components/common/Header/Header";
import Experience from "../components/experience/Experience";
import FeelSpecial from "../components/feelSpecial/FeelSpecial";
import HeroSection from "../components/heroComponents/HeroSection"
import ProductShow from "../components/productShow/ProductShow";
import Security from "../components/security/Security";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShow />
            <FeelSpecial />
            <Experience />
            <Security />
        </>
    )
}

export default HomePage;