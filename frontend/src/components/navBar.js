import classes from "./navBar.module.css";
import CustomButton from "./customButton";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";

export default function NavBar() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 750px)' });
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuVisible, setmenuVisible] = useState(false);

    useEffect(() => {
        if (menuOpen) setmenuVisible(true);
        else
            setTimeout(() => {
                setmenuVisible(false);
            }, 300);
    }, [menuOpen]);

    return (
        <div className={classes.navBarWrap}>
            <div className={classes.menuOpen} style={{ opacity: (menuOpen && isSmallScreen) ? 1 : 0, display: menuVisible ? "" : "none" }}>
            </div>
            <nav className={classes.navBar}>
                <div className={classes.logoWrap}>
                    <span className={classes.logo}>CSE SITE</span>
                </div>
                {isSmallScreen ?
                    <div className={classes.items}>
                        <span className={classes.item} style={{ marginRight: 0 }} onClick={() => setMenuOpen(!menuOpen)}>[ MENU ]</span>
                    </div>
                    :
                    <div className={classes.items}>
                        <span className={classes.item}>Item</span>
                        <span className={classes.item}>Item</span>
                        <span className={classes.item}>Item</span>
                        <span className={classes.item}>Item</span>
                        <span className={classes.item}>Item</span>
                        <CustomButton text="Click Me" link="/link" />
                    </div>
                }
            </nav>
            <div className={classes.menuOpenBody} style={{ opacity: (menuOpen && isSmallScreen) ? 1 : 0, display: menuVisible ? "" : "none" }}>
                <span className={classes.item + " " + classes.openItem}>Item</span>
                <span className={classes.item + " " + classes.openItem}>Item</span>
                <span className={classes.item + " " + classes.openItem}>Item</span>
                <span className={classes.item + " " + classes.openItem}>Item</span>
                <span className={classes.item + " " + classes.openItem}>Item</span>
                <span className={classes.openItemBtn}><CustomButton text="Click Me" link="/link" fullWidth={true} /></span>
            </div>
        </div>
    );
}