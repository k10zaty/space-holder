import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Tags.css';

const Tags = () => {
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
        <animated.section ref={ref} style={props} className="tags">
            <h2 className="tags__title">Tags</h2>
            <div className="tags__list">
                <span className="tags__item">Business</span>
                <span className="tags__item">Freelance</span>
                <span className="tags__item">Money</span>
                <span className="tags__item">Experience</span>
                <span className="tags__item">Lifestyle</span>
                <span className="tags__item">SEO</span>
                <span className="tags__item">Wordpress</span>
                <span className="tags__item">Marketing</span>
                <span className="tags__item">UX</span>
                <span className="tags__item">Modern</span>
                <span className="tags__item">Success</span>
                <span className="tags__item">Nature</span>
                <span className="tags__item">Productivity</span>
                <span className="tags__item">Sales page</span>
                <span className="tags__item">Sell</span>
                <span className="tags__item">Teamwork</span>
                <span className="tags__item">Monetize</span>
            </div>
        </animated.section>
    );
};

export default Tags;