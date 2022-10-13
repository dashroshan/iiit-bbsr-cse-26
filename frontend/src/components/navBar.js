import classes from "./navBar.module.css";
import CustomButton from "./customButton";

export default function NavBar() {
    return (
        <div className={classes.navBarWrap}>
            <nav className={classes.navBar}>
                <div>
                    <span className={classes.logo}>SITE TITLE</span>
                </div>
                <div className={classes.items}>
                    <span className={classes.item}>Item</span>
                    <span className={classes.item}>Item</span>
                    <span className={classes.item}>Item</span>
                    <span className={classes.item}>Item</span>
                    <span className={classes.item}>Item</span>
                    <CustomButton text="Click Me" link="/link" />
                </div>
            </nav>
        </div>
    );
}