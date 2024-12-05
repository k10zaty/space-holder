import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <div className="footer__logo">
                        <span className="header__logo-text header__logo-text--premium">Premium</span>
                        <span className="header__logo-text header__logo-text--car">Car</span>
                    </div>
                    <p className="footer__description">Short description about the company Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h3 className="footer__title">Keep in touch</h3>
                    <div className="footer__social">
                        <a href="#" className="footer__social-icon"><img src="/img/instagram-icon.png" alt="Instagram" /></a>
                        <a href="#" className="footer__social-icon"><img src="/img/twitter-icon.png" alt="Twitter" /></a>
                        <a href="#" className="footer__social-icon"><img src="/img/pinterest-icon.png" alt="Pinterest" /></a>
                        <a href="#" className="footer__social-icon"><img src="/img/google-icon.png" alt="Google" /></a>
                        <a href="#" className="footer__social-icon"><img src="/img/facebook-icon.png" alt="Facebook" /></a>
                    </div>
                </div>
                <div className="footer__right">
                    <h2 className="recent-posts__title">Recent posts</h2>
                    <div className="recent-posts__item">
                        <img src="/img/recent-post1.png" alt="Recent Post 1" className="recent-posts__image" />
                        <div className="recent-posts__content">
                            <h3 className="recent-posts__item-title">One of Saturn's largest rings may be newer than...</h3>
                            <p className="recent-posts__item-author">Rickie Baroch - June 6, 2019</p>
                        </div>
                    </div>
                    <div className="recent-posts__item">
                        <img src="/img/recent-post2.png" alt="Recent Post 2" className="recent-posts__image" />
                        <div className="recent-posts__content">
                            <h3 className="recent-posts__item-title">One of Saturn's largest rings may be newer than...</h3>
                            <p className="recent-posts__item-author">Rickie Baroch - June 6, 2019</p>
                        </div>
                    </div>
                    <div className="recent-posts__item">
                        <img src="/img/recent-post3.png" alt="Recent Post 3" className="recent-posts__image" />
                        <div className="recent-posts__content">
                            <h3 className="recent-posts__item-title">One of Saturn's largest rings may be newer than...</h3>
                            <p className="recent-posts__item-author">Rickie Baroch - June 6, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__newsletter">
                <h2 className="newsletter__title">Newsletter</h2>
                <form className="newsletter__form">
                    <input type="email" className="newsletter__input" placeholder="Your email address" />
                    <button type="submit" className="newsletter__button">Subscribe to newsletter</button>
                </form>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom-text">@2019 Logwork. All Right Reserved.</p>
                <nav className="footer__bottom-nav">
                    <a href="#" className="footer__bottom-link">Home</a>
                    <a href="#" className="footer__bottom-link">Recipes</a>
                    <a href="#" className="footer__bottom-link">Article</a>
                    <a href="#" className="footer__bottom-link">Contact</a>
                    <a href="#" className="footer__bottom-link">Purchase</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;