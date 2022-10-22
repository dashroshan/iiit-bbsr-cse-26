import classes from "./navBar.module.css";
import CustomButton from "./customButton";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const menuItemConfig = [
    { name: "STUDENTS", link: "/students" },
    { name: "SOCIETIES", link: "/socities" },
    { name: "CREDITS", link: "/credits" },
];

const menuBtnConfig = { name: "SIGN IN", link: "/experimental" };

export default function NavBar() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 750px)' });
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuVisible, setmenuVisible] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            setmenuVisible(true);
            document.body.style.position = "fixed";
            // document.body.style.overflowY = "scroll";
        }
        else {
            document.body.style.position = "unset";
            // document.body.style.overflowY = "unset";
            setTimeout(() => {
                setmenuVisible(false);
            }, 300);
        }
    }, [menuOpen]);

    const closeMenu = () => {
        if (isSmallScreen)
            setMenuOpen(false);
    }

    return (
        <div className={classes.navBarWrap}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={classes.menuOpen} style={{ opacity: (menuOpen && isSmallScreen) ? 1 : 0, display: menuVisible ? "" : "none" }} />
            </AnimatePresence>

            <nav className={classes.navBar}>
                <div className={classes.logoWrap}>
                    <span className={classes.logo}><Link onClick={closeMenu} className={classes.routerLink} to="/">CSE BOOTCAMP 2K22</Link></span>
                </div>
                {isSmallScreen ?
                    <div className={classes.items}>
                        <span className={classes.item + " " + classes.menuTextWrap} style={{ marginRight: 0 }} onClick={() => setMenuOpen(!menuOpen)}>
                            <AnimatePresence>
                                <motion.span
                                    key={menuOpen}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className={classes.menuText}>
                                    {menuOpen ? "[ CLOSE ]" : "[ MENU ]"}
                                </motion.span>
                            </AnimatePresence></span>
                    </div>
                    :
                    <div className={classes.items}>
                        {menuItemConfig.map(e => <Link className={classes.routerLink + " " + classes.item} to={e.link}>{e.name}</Link>)}
                        <CustomButton text={menuBtnConfig.name} link={menuBtnConfig.link} />
                    </div>
                }
            </nav >
            <div className={classes.menuOpenBody} style={{ opacity: (menuOpen && isSmallScreen) ? 1 : 0, display: menuVisible ? "" : "none" }}>
                {menuItemConfig.map(e => <Link onClick={closeMenu} className={classes.routerLink + " " + classes.item + " " + classes.openItem} to={e.link}>{e.name}</Link>)}
                <span onClick={closeMenu} className={classes.openItemBtn}><CustomButton text={menuBtnConfig.name} link={menuBtnConfig.link} fullWidth={true} /></span>
            </div>
        </div >
    );
}