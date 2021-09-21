import { Fragment } from "react";
import classes from "./Home.module.css";

import link from "../images/link.svg";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.home}>
        <div className={classes.homeContainer}>
          <div className={classes.homeInfo}>
            <h3>
              File sharing is our radio; that's the way people hear our stuff.
            </h3>
            <p>Easily share files with anyone, access anywhere and anytime.</p>
            <div className={classes.homeButtons}>
              <button className={classes.upload}><i class="fas fa-cloud-upload-alt"></i>Upload</button>
              <button className={classes.download}><i class="fas fa-cloud-download-alt"></i>Download</button>
            </div>
          </div>
          <div className={classes.homeImg}>
            <img src={link} alt="image" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
