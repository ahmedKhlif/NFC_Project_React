import "./home.css";
import {Link} from 'react-router-dom';

function Home() {

  return (

<>
  
  <div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icofont-close js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <nav className="site-nav">
    <div className="container">
      <div className="site-navigation">
        <a href="index.html" className="logo m-0 float-start">
          iDigix ™{" "}
        </a>
        <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
          <li className="active">
          <Link to={'/'}
          >Home</Link>
          </li>
          <li>
          <a href="#servic"
          >Services</a>  
          </li>
          <li>
          <Link to={'/loginii'}
          >login </Link>
          </li>
          <li>
          <Link to={'/ajoutuser'}
          >Sign up</Link>
          </li>
        </ul>
        <a
          href="#"
          className="burger ml-auto float-end site-menu-toggle light js-menu-toggle d-inline-block d-lg-none"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span />
        </a>
        <ul className="site-menu float-end d-none d-md-block">
          <li>
            <a
              href="#"
              className="d-flex align-items-center text-white h2 fw-bold"
            >
              <span className="icon-phone me-2" /> <span>+ 216 94 272 455</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    className="hero-2 overlay"
    style={{ backgroundImage: 'url("images/img_2.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 mx-auto">
          <h1 className="mb-5">
            <span>One Card.</span>{" "}
            <span className="d-block"> Share everything.</span>
          </h1>
          <div className="play-vid">
            <a
              href="https://www.youtube.com/watch?v=mwtbEGNABWU"
              className="play glightbox"
            >
              <span className="icon-play" />
            </a>
          </div>
          <div className="intro-desc">
            <div className="line" />
            <p>
              Do so much more than just tapping and sharing phone numbers. Tell
              your stories, share your passion, present your mobile optimized
              personal portfolio for the best presentation of yourself.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section bg-light sec-1">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-3">
          <h2 className="heading">We create your cards</h2>
          <p>
            Your most important data, visible at a glance. Stored in your
            smartphone with just one click. No more business cards that get lost
            with tedious entries.
          </p>
        </div>
        <div className="col-lg-7 ms-auto">
          <img src="images/3.png" alt="Image" className="img-fluid img-r" />
        </div>
      </div>
    </div>
  </div>
  <div className="section bg-light sec-2">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src="images/img_4.jpg" alt="IMage" className="img-fluid" />
        </div>
        <div className="col-lg-3 ms-auto">
          <h2 className="heading">Unlimited connections</h2>
          <p>
            With the digital and intelligent iDigix business card, you can very
            simply transmit your information during your professional or
            personal meetings, without any limit on the number of connections.
          </p>
          <p>
            <a href="#" className="more-2">
              Learn more <span className="icon-arrow_forward" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="section bg-light  sec-1">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-3">
          <h2 className="heading">Premium presentation</h2>
          <p>
            Stainless steel business card with watchmaking grade craftsmanship.
            The brushed surface finish contrast beautifully with the polished
            edges. The most impressive stainless steel business card yet.
          </p>
        </div>
        <div className="col-lg-7 ms-auto">
          <img
            src="images/image5.jpg"
            alt="Image"
            className="img-fluid img-r"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="sec-3 section  bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h2 id="servic" className="heading">Services</h2>
          <p>
            Beautiful Personal Mini-Website Create beautiful mini-sites to share
            contact information, tell your story and make an impression. Powered
            by iDigix{" "}
          </p>
        </div>
        <div className="col-lg-6 ms-auto">
          <div
            className="accordion accordion-flush accordion-1"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne"
                >
                  your Cards
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row justify-content-between">
                    <div className="col-md-4">
                      <img
                        src="images/0.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <p>
                        With our NFC smart card you can quickly switch between
                        sharing of different links:
                      </p>
                      <p> A Personal Profile Mini-site </p>
                      Share your contact, digital profile, social media, and
                      more. Tell your story and make an impression.
                      <p />
                      <p>Direct WhatsApp chat</p>
                      Scan the card and initiate WhatsApp connection immediately
                      <p />
                      <p />
                      Social Media Profiles
                      <p />
                      <p>
                        Share your LinkedIn, Instagram, YouTube, and more with a
                        tap
                      </p>
                      <p>Any links</p>
                      <p>
                        Redirect your NFC card to any website, or even share
                        cloud files with a link. You can also redirect your
                        smart card to your digital name card by other card
                        makers (V1CE, 1 good card, Popl, Mobilo, and more)
                      </p>
                      <a href="#" className="more-2">
                        Learn more <span className="icon-arrow_forward" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section bg-light  sec-team sec-4 pb-5">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 mx-auto text-center">
          <h2 className="heading">We Are The Team</h2>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="person">
            <img
              src="images/12.png"
              alt="Image"
              className="img-fluid rounded-circle mx-auto w-50 mb-3"
            />
            <h3 className="mb-1">Kamel Abouchaala</h3>
            <span className="d-block text-black-50 mb-3">
              the Manager of the djagora fablab.
            </span>
            <ul className="social-2 list-unstyled mb-5">
              <li>
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="person">
            <img
              src="images/1.png"
              alt="Image"
              className="img-fluid rounded-circle mx-auto w-50 mb-3"
            />
            <h3 className="mb-1">Ahmed khlif</h3>
            <span className="d-block text-black-50 mb-3">developer</span>
            <ul className="social-2 list-unstyled mb-5">
              <li>
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="person">
            <img
              src="images/76587329.jfif"
              alt="Image"
              className="img-fluid rounded-circle mx-auto w-50 mb-3"
            />
            <h3 className="mb-1">Wissem Hajbi</h3>
            <span className="d-block text-black-50 mb-3">tester</span>
            <ul className="social-2 list-unstyled mb-5">
              <li>
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-footer bg-light">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <div className="widget">
            <h3 className="line-top">About</h3>
            <p className="mb-5">
              Tunisian app to instantly share everything you are, in one simple
              card, with our QR code &amp; NFC card solution.
            </p>
          </div>
          <div className="widget">
            <h3 className="line-top">Connect with us</h3>
            <ul className="social list-unstyled mb-5">
              <li>
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center copyright">
        <div className="col-md-8">
          <p className="small text-black-50">
            Copyright ©. All Rights Reserved. — Designed with love by{" "}
            <a href="https://untree.co">Untree.co</a>
            <br />
            Distributed By <a href="https://themewagon.com/">Themewagon</a>{" "}
            {/* License information: https://untree.co/license/ */}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Preloader */}

  
</>

    );
  }
  
  export default Home;