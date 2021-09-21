import classes from "./Header.module.css"

const Header = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.logo}><i class="fas fa-project-diagram"></i></div>
            <h1>NetworkPlex</h1>
        </div>
    );
}

export default Header;