import classes from "./Header.module.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.navbar}>
            <Link to="/home"><div className={classes.logo}><i className="fas fa-project-diagram"></i></div></Link>
            <Link to="/home" style={{textDecoration: "none"}} ><h1>NetworkPlex</h1></Link>
        </div>
    );
}

export default Header;