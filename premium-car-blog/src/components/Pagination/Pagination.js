import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Pagination.css';

const Pagination = () => {
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
        <animated.section ref={ref} style={props} className="pagination">
            <div className="pagination__container">
                <button className="pagination__button">1</button>
                <button className="pagination__button">2</button>
                <button className="pagination__button">3</button>
                <button className="pagination__button">...</button>
                <button className="pagination__button">8</button>
                <button className="pagination__button">&gt;</button>
            </div>
        </animated.section>
    );
};

export default Pagination;