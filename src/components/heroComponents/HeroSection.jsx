import Button from '../common/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section-wrapper">
            <div className='flex absolute-center hero-claim-label'>
                <div>pay credit card bill. earn guaranteed ₹200 back. 
                </div>
                <div className='claim-anchor'>
                    claim now <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="cred arrow" className='claim-arrow'/>
                </div>
            </div>
            <div className="flex absolute-center flex-col hero-section  max-width">
                <div className='hero-heading'>
                    rewards for paying credit card bills.
                </div>
                <div className="hero-subheading">
                    join 9M+ members who win rewards and cashbacks everyday
                </div>
                <Button buttonText='Download CRED' />
            </div>
        </div>
    )
}

export default HeroSection;