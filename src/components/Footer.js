import React from "react";
import "../style/Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Play Now And Win Your Match
        </p>
        <p className="footer-subscription-text">
          Register And Improve Your Skill Now{" "}
        </p>
        <div className="input-areas">
          {/* <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form> */}
        </div>
      </section>

      <section
        className="social-media"
        style={{ textAlign: "center", marginLeft: "90px" }}
      >
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              PLAY UP!
            </Link>
          </div>
          <small className="website-rights">PLAY UP! © 2020</small>
          <div className="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" style={{ color: "blue" }} />
              </a>
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a href="https://www.instagram.com/" style={{ color: "Purple" }}>
                <i className="fab fa-instagram" />
              </a>
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube" style={{ color: "red" }} />
              </a>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <a href="https://twitter.com/" style={{ color: "#00BFFF" }}>
                <i className="fab fa-twitter" />
              </a>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <a
                href="https://www.linkedin.com/"
                style={{ color: "Slate Blue" }}
              >
                <i className="fab fa-linkedin" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
