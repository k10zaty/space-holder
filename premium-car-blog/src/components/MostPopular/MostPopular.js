import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './MostPopular.css';

const MostPopular = () => {
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
        <animated.section ref={ref} style={props} className="most-popular">
            <h2 className="most-popular__title">Most popular</h2>
            <div className="most-popular__items">
                <div className="most-popular__item">
                    <img src="/img/popular-image1.png" alt="Popular Image 1" className="most-popular__image" />
                    <div className="most-popular__tag">BMW</div>
                    <h3 className="most-popular__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                    <p className="most-popular__item-author">Rickie Baroch - June 6, 2019</p>
                </div>
                <div className="most-popular__item">
                    <img src="/img/popular-image2.png" alt="Popular Image 2" className="most-popular__image" />
                    <div className="most-popular__tag">BMW</div>
                    <h3 className="most-popular__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                    <p className="most-popular__item-author">Rickie Baroch - June 6, 2019</p>
                </div>
                <div className="most-popular__item">
                    <img src="/img/popular-image3.png" alt="Popular Image 3" className="most-popular__image" />
                    <div className="most-popular__tag">BMW</div>
                    <h3 className="most-popular__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                    <p className="most-popular__item-author">Rickie Baroch - June 6, 2019</p>
                </div>
                <div className="most-popular__item">
                    <img src="/img/popular-image4.png" alt="Popular Image 4" className="most-popular__image" />
                    <div className="most-popular__tag">BMW</div>
                    <h3 className="most-popular__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                    <p className="most-popular__item-author">Rickie Baroch - June 6, 2019</p>
                </div>
            </div>
        </animated.section>
    );
};

export default MostPopular;