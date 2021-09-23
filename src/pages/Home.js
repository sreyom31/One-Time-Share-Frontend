import { Fragment } from "react";
import {Link} from "react-router-dom"
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
              <Link to="/load/u"><button className={classes.upload}><i className="fas fa-cloud-upload-alt"></i>Upload</button></Link>
              <Link to="/load/d"><button className={classes.download}><i className="fas fa-cloud-download-alt"></i>Download</button></Link>
            </div>
          </div>
          <div className={classes.homeImg}>
            <img src={link} alt="fielIcon"/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
