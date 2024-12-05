import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './ImageWithText.css';

const ImageWithText = ({ imageSrc, title, author, description }) => {
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
        <animated.section ref={ref} style={props} className="image-with-text">
            <div className="image-with-text__container">
                <img src={`/img/${imageSrc}`} alt="Image" className="image-with-text__image" />
                <div className="image-with-text__overlay">
                    <div className="hero-images__tag">Vehicle</div>
                    <h2 className="image-with-text__title">{title}</h2>
                    <p className="image-with-text__author">{author}</p>
                    <p className="image-with-text__description">{description}</p>
                </div>
            </div>
        </animated.section>
    );
};

export default ImageWithText;