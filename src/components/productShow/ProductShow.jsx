import './ProductShow.css';
import images from './images';
import { useState, useEffect, useRef } from 'react';

const ProductShow = () => {

  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting){
      setShowAnimation(true)
    }
  };

  const options = {
    root : null,
    rootMargin : '0px',
    threshold : 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if(!showAnimation){
      if (ref.current){
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  });

  return (
    <div className= {`product-showcase ${showAnimation ? 'scale-in-bottom' : '' }`} ref={ref}>
      {showAnimation && (
        <div className="showcase-wrapper">
          {images.map((i) => {
            return <img src={i.img} alt="" key={i.id} className={`showcase-ui showcase-mockup-${i.id}`} />
          })}
        </div>
      )}
    </div>
  )
}

export default ProductShow;