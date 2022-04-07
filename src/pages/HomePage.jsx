import Brand from "../components/brand/Brand";
import Header from "../components/common/Header/Header";
import Experience from "../components/experience/Experience";
import FeelSpecial from "../components/feelSpecial/FeelSpecial";
import HeroSection from "../components/heroComponents/HeroSection"
import ProductShow from "../components/productShow/ProductShow";
import Security from "../components/security/Security";
import WindowPeak from "../components/windowPeak/WindowPeak";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShow />
            <FeelSpecial />
            <Brand />
            <Experience />
            <WindowPeak />
            <Security />
        </>
    )
}

export default HomePage;