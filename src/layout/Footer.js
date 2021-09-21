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
                href="https://www.instagram.com/codificacion_circulo/"
              >
                <i className={"fab fa-instagram"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/company/codificacion-circulo/"
              >
                <i className={"fab fa-linkedin"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.discord}
                href="https://discord.gg/6rqXhXrYYc"
              >
                <i className={"fab fa-discord"}></i>
              </a>
            </li>
            <li>
              <a
                className={classes.github}
                href="https://github.com/Codificacion-Circulo"
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
