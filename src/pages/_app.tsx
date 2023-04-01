import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import Link from 'next/link'
import NProgress from 'nprogress';

import 'nprogress/nprogress.css'
// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="hfeed site" id="page">
      <header
        className="site-header ast-primary-submenu-animation-fade header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
        id="masthead"
        itemType="https://schema.org/WPHeader"
      >
        <div id="ast-desktop-header" data-toggle-type="dropdown">
          <div className="ast-main-header-wrap main-header-bar-wrap ">
            <div
              className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
              data-section="section-primary-header-builder"
            >
              <div
                className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
                data-section="section-primary-header-builder"
              >
                <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                  <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                    <div
                      className="ast-builder-layout-element ast-flex site-header-focus-item"
                      data-section="title_tagline"
                    >
                      <div
                        className="site-branding ast-site-identity"
                        itemType="https://schema.org/Organization"
                      >
                        <span className="site-logo-img">
                          <Link
                            href="/"
                            className="custom-logo-link"
                            rel="home"
                            aria-current="page"
                          >
                            <img
                              width={80}
                              height={98}
                              src="images/ioceLogo.png"
                              className="custom-logo"
                              alt="Online Health Coach"
                              decoding="async"
                              sizes="(max-width: 164px) 100vw, 164px"
                            />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                    <div
                      className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                      data-section="section-hb-menu-1"
                    >
                      <div className="ast-main-header-bar-alignment">
                        <div className="main-header-bar-navigation">
                          <nav
                            className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                            id="primary-site-navigation"
                            aria-label="Site Navigation"
                            itemType="https://schema.org/SiteNavigationElement"
                          >
                            <div className="main-navigation ast-inline-flex">
                              <ul
                                id="ast-hf-menu-1"
                                className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile"
                              >
                                <li
                                  id="menu-item-11"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-11"
                                >
                                  <Link
                                    href="/"
                                    aria-current="page"
                                    className="menu-link"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li
                                  id="menu-item-24300"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24300"
                                >
                                  <Link
                                    href="/all-courses/"
                                    className="menu-link"
                                  >
                                    All Courses
                                  </Link>
                                </li>
                                {/* <li
                                  id="menu-item-24192"
                                  className="menu-item menu-item-type-post_type menu-item-object-sfwd-courses menu-item-24192"
                                >
                                  <Link
                                    href="/courses/yoga-sadhana/"
                                    className="menu-link"
                                  >
                                    Yoga Sadhna
                                  </Link>
                                </li>
                                <li
                                  id="menu-item-24301"
                                  className="menu-item menu-item-type-post_type menu-item-object-sfwd-courses menu-item-24301"
                                >
                                  <Link
                                    href="/courses/pranayama/"
                                    className="menu-link"
                                  >
                                    Eating Healthy
                                  </Link>
                                </li> */}
                                <li
                                  id="menu-item-113"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
                                >
                                  <Link
                                    href="/about/"
                                    className="menu-link"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li
                                  id="menu-item-114"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"
                                >
                                  <Link
                                    href="/contact/"
                                    className="menu-link"
                                  >
                                    Contact
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div
                      className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1"
                      data-section="section-hb-button-1"
                    >
                      <div className="ast-builder-button-wrap ast-builder-button-size-">
                        <a
                          className="ast-custom-button-link"
                          href="https://docs.google.com/forms/d/19RqpaeMkFgOZ2Lj5Arg53XNdcoy2epFqxX9ediI7vkw/edit"
                          target="_blank"
                        >
                          <div className="ast-custom-button">
                            Student Registration
                          </div>
                        </a>
                        <a className="menu-link" href="#" target="_self">
                          Student Registration
                        </a>
                      </div>
                    </div>
                    <div
                      className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1"
                      data-section="section-hb-button-1"
                    >
                      <div className="ast-builder-button-wrap ast-builder-button-size-">
                        <a
                          className="ast-custom-button-link"
                          href="https://docs.google.com/forms/d/15NaLZWX258_dRqDGTkSlo_wQWAtTnSOp1l7O5pfX3L8/edit"
                          target="_blank"
                        >
                          <div className="ast-custom-button">
                            Teacher Registration
                          </div>
                        </a>
                        <a className="menu-link" href="#" target="_self">
                          Teacher Registration
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ast-desktop-header-content content-align-flex-start "></div>
        </div>
        <div
          id="ast-mobile-header"
          className="ast-mobile-header-wrap "
          data-type="dropdown"
        >
          <div className="ast-main-header-wrap main-header-bar-wrap">
            <div
              className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
              data-section="section-primary-header-builder"
            >
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="title_tagline"
                  >
                    <div
                      className="site-branding ast-site-identity"
                      itemType="https://schema.org/Organization"
                    >
                      <span className="site-logo-img">
                        <Link href="/" className="custom-logo-link"
                          rel="home"
                          aria-current="page">
                          <img
                            width={80}
                            height={98}
                            src="images/ioceLogo.png"
                            className="custom-logo"
                            alt="Online Health Coach"
                            decoding="async"
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="section-header-mobile-trigger"
                  >
                    <div className="ast-button-wrap">
                      <button
                        type="button"
                        className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                        aria-expanded="false"
                      >
                        <span className="screen-reader-text">Main Menu</span>
                        <span className="mobile-menu-toggle-icon">
                          <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                            <svg
                              className="ast-mobile-svg ast-menu-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                            </svg>
                          </span>
                          <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                            <svg
                              className="ast-mobile-svg ast-close-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
                            </svg>
                          </span>{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ast-mobile-header-content content-align-flex-start ">
            <div
              className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
              data-section="section-hb-menu-1"
            >
              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <nav
                    className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                    id="primary-site-navigation"
                    aria-label="Site Navigation"
                    itemType="https://schema.org/SiteNavigationElement"
                  >
                    <div className="main-navigation ast-inline-flex">
                      <ul
                        id="ast-hf-menu-1"
                        className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile"
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-11">
                          <Link
                            href="/"
                            aria-current="page"
                            className="menu-link"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24300">
                          <Link
                            href="/all-courses/"
                            className="menu-link"
                          >
                            All Courses
                          </Link>
                        </li>
                        {/* <li className="menu-item menu-item-type-post_type menu-item-object-sfwd-courses menu-item-24192">
                          <a
                            href="/courses/yoga-sadhana/"
                            className="menu-link"
                          >
                            Yoga Sadhna
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-sfwd-courses menu-item-24301">
                          <a
                            href="/courses/pranayama/"
                            className="menu-link"
                          >
                            Eating Healthy
                          </a>
                        </li> */}
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
                          <Link
                            href="/about/"
                            className="menu-link"
                          >
                            About
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114">
                          <Link
                            href="/contact/"
                            className="menu-link"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div
              className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1"
              data-section="section-hb-button-1"
            >
              <div className="ast-builder-button-wrap ast-builder-button-size-">
                <a
                  className="ast-custom-button-link"
                  href="https://docs.google.com/forms/d/19RqpaeMkFgOZ2Lj5Arg53XNdcoy2epFqxX9ediI7vkw/edit"
                  target="_blank"
                >
                  <div className="ast-custom-button">Student Registration</div>
                </a>
                <a className="menu-link" href="#" target="_self">
                  Student Registration
                </a>
              </div>
            </div>
            <div
              className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1"
              data-section="section-hb-button-1"
            >
              <div className="ast-builder-button-wrap ast-builder-button-size-">
                <a
                  className="ast-custom-button-link"
                  href="https://docs.google.com/forms/d/15NaLZWX258_dRqDGTkSlo_wQWAtTnSOp1l7O5pfX3L8/edit"
                  target="_blank"
                >
                  <div className="ast-custom-button">Teacher Registration</div>
                </a>
                <a className="menu-link" href="#" target="_self">
                  Teacher Registration
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  )
}
