import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './HeroImages.css';

const HeroImages = () => {
    const ref = useRef();
    const [props, set] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(50px)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { tension: 280, friction: 60 },
    }));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    set({ opacity: 1, transform: 'translateY(0)' });
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, set]);

    return (
        <animated.section ref={ref} style={props} className="hero-images">
            <div className="hero-images__container">
                <div className="hero-images__item hero-images__item--large">
                    <img src="/img/hero-image-1.png" alt="Hero Image 1" className="hero-images__image" />
                    <div className="hero-images__tag">Vehicle</div>
                    <div className="hero-images__info hero-images__overlay">
                        <p className="hero-images__author">Rickie Baroch - June 6, 2019</p>
                        <h2 className="hero-images__title">One of Saturn’s largest rings may be newer than anyone</h2>
                    </div>
                </div>
                <div className="hero-images__item hero-images__item--small">
                    <img src="/img/hero-image-2.png" alt="Hero Image 2" className="hero-images__image" />
                    <div className="hero-images__tag">Vehicle</div>
                    <div className="hero-images__info hero-images__overlay">
                        <p className="hero-images__author">Rickie Baroch - June 6, 2019</p>
                        <h2 className="hero-images__title">One of Saturn’s largest rings may be newer than anyone</h2>
                    </div>
                </div>
                <div className="hero-images__item hero-images__item--small">
                    <img src="/img/hero-image-3.png" alt="Hero Image 3" className="hero-images__image" />
                    <div className="hero-images__tag">Vehicle</div>
                    <div className="hero-images__info hero-images__overlay">
                        <p className="hero-images__author">Rickie Baroch - June 6, 2019</p>
                        <h2 className="hero-images__title">One of Saturn’s largest rings may be newer than anyone</h2>
                    </div>
                </div>
                <div className="hero-images__item hero-images__item--small">
                    <img src="/img/hero-image-4.png" alt="Hero Image 4" className="hero-images__image" />
                    <div className="hero-images__tag">Vehicle</div>
                    <div className="hero-images__info hero-images__overlay">
                        <p className="hero-images__author">Rickie Baroch - June 6, 2019</p>
                        <h2 className="hero-images__title">One of Saturn’s largest rings may be newer than anyone</h2>
                    </div>
                </div>
                <div className="hero-images__item hero-images__item--small">
                    <img src="/img/hero-image-5.png" alt="Hero Image 5" className="hero-images__image" />
                    <div className="hero-images__tag">Vehicle</div>
                    <div className="hero-images__info hero-images__overlay">
                        <p className="hero-images__author">Rickie Baroch - June 6, 2019</p>
                        <h2 className="hero-images__title">One of Saturn’s largest rings may be newer than anyone</h2>
                    </div>
                </div>
            </div>
        </animated.section>
    );
};

export default HeroImages;