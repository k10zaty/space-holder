import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './RightBlock.css';

const RightBlock = () => {
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
        <animated.section ref={ref} style={props} className="right-block">
            <div className="right-block__container">
                <img src="/img/imege.png" alt="Leon Hunt" className="right-block__image" />
                <div className="right-block__content">
                    <h2 className="right-block__title">Leon Hunt</h2>
                    <p className="right-block__subtitle">Food & cooking bloger</p>
                    <p className="right-block__description">Hi, I'm Leon. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on...</p>
                    <a href="#" className="right-block__button">Continue Reading</a>
                </div>
            </div>
        </animated.section>
    );
};

export default RightBlock;