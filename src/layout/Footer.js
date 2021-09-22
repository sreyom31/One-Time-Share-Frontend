import { Fragment } from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.social}>
      <ul className={classes.socialLinks}>
            <li>
              <a
                className={classes.insta}
                href="https://www.instagram.com/sreyom_sresaan/"
              >
                <i className={"fab fa-instagram"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/in/sreyom-sresaan-nayak-a3985a1b7/"
              >
                <i className={"fab fa-linkedin"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.twitter}
                href="https://twitter.com/sreyom_sresaan"
              >
                <i className={"fab fa-twitter"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.github}
                href="https://github.com/sreyom31"
              >
                <i className={"fab fa-github"}></i>
              </a>
            </li>
          </ul>
      </div>
      <div className={classes.footerInfo}>
        <p>
          Made with <i class="fas fa-heart" style={{ color: "red" }}></i> by
          Sreyom
        </p>
      </div>
    </div>
  );
};

export default Footer;
