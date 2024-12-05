import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './PopularPosts.css';

const PopularPosts = () => {
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
        <animated.section ref={ref} style={props} className="popular-posts">
            <h2 className="popular-posts__title">Popular posts</h2>
            <div className="popular-posts__item">
                <img src="/img/imagine1.png" alt="Imagine 1" className="popular-posts__image" />
                <div className="hero-images__tag">Vehicle</div>
                <h3 className="popular-posts__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                <p className="popular-posts__item-author">Rickie Baroch - June 6, 2019</p>
            </div>
            <div className="popular-posts__item">
                <img src="/img/imagine2.png" alt="Imagine 2" className="popular-posts__image" />
                <div className="hero-images__tag">Vehicle</div>
                <h3 className="popular-posts__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                <p className="popular-posts__item-author">Rickie Baroch - June 6, 2019</p>
            </div>
            <div className="popular-posts__item">
                <img src="/img/imagine3.png" alt="Imagine 3" className="popular-posts__image" />
                <div className="hero-images__tag">Vehicle</div>
                <h3 className="popular-posts__item-title">One of Saturn's largest rings may be newer than anyone</h3>
                <p className="popular-posts__item-author">Rickie Baroch - June 6, 2019</p>
            </div>
        </animated.section>
    );
};

export default PopularPosts;