"use client";

import React from 'react';
import Link from "next/link";

export default function Footer() {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>Start</h2>
                                            <p>2006</p>
                                        </li>
                                        <li>
                                            <h2>Period</h2>
                                            <p>Quarterly</p>
                                        </li>
                                        <li>
                                            <h2>Abbreviated key-title</h2>
                                            <p>J. Int. Environmental Application & Science</p>
                                        </li>
                                        <li>

                                            <a href="https://dergipark.org.tr/en/pub/jieas/writing-rules" className="thm-btn">Guide for Authors</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>e-ISSN</h2>
                                            <p>2636-7661</p>
                                        </li>
                                        <li>
                                            <h2>Website</h2>
                                            <p>https://jieas.com</p>
                                        </li>
                                        <li>
                                            <h2>Publisher</h2>
                                            <p>Şükrü Dursun</p>
                                        </li>
                                        <li>
                                            <a href="https://dergipark.org.tr/en/pub/jieas/policy" className="thm-btn"> Ethics and Malpractice Statement</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__about">
                                    <h2 className="footer-widget__title">About</h2>
                                    <p className="footer-widget__text">Journal of International Environmental Application and Science is a peer reviewed quarterly journal since 2006
                                    </p>
                                    <div className="footer-widget__btn-block">
                                        <a href="https://dergipark.org.tr/en/pub/jieas/archive" className="thm-btn">Volumes</a>
                                        <a href="/contact" className="thm-btn">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">&copy; Copyright 2023 by <a target="_blank" href="https://sub.fyi/">Sub.fyi</a></p>
                        <div className="site-footer__social">
                            <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                className="fas fa-arrow-up"></i></div>
                            <a href="https://dergipark.org.tr/en/pub/jieas/indexes"><i className="fas fa-book"></i></a>
                            <a href="https://drive.google.com/drive/folders/1GOH1W0EVGKHvQrcQzZhuU3l2-AWrvgqa?usp=sharing"><i className="fas fa-archive"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-popup">
                <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                <div className="search-popup__inner">
                    <form action="#" className="search-popup__form">
                        <input type="text" name="search" placeholder="Type here to Search...." />
                        <button type="submit"><i className="kipso-icon-magnifying-glass"></i></button>
                        <div className="cancel"><i className="fas fa-times-circle"></i></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

