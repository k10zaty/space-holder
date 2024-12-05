import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Instagram.css';

const Instagram = () => {
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
        <animated.section ref={ref} style={props} className="instagram">
            <h2 className="instagram__title">Instagram</h2>
            <div className="instagram__gallery">
                <div className="instagram__row">
                    <img src="/img/imgg1.png" alt="Instagram 1" className="instagram__image" />
                    <img src="/img/imgg2.png" alt="Instagram 2" className="instagram__image" />
                    <img src="/img/imgg3.png" alt="Instagram 3" className="instagram__image" />
                </div>
                <div className="instagram__row">
                    <img src="/img/imgg4.png" alt="Instagram 4" className="instagram__image" />
                    <img src="/img/imgg5.png" alt="Instagram 5" className="instagram__image" />
                    <img src="/img/imgg6.png" alt="Instagram 6" className="instagram__image" />
                </div>
            </div>
            <a href="#" className="instagram__button">
                <img src="/img/instagram-logo.png" alt="Instagram Logo" className="instagram__logo" />
                View Instagram
            </a>
        </animated.section>
    );
};

export default Instagram;