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

    useEffect(() => {
        if (menuOpen) {
            document.body.style.position = "fixed";
        }
        else {
            document.body.style.position = "unset";
        }
    }, [menuOpen]);

    const closeMenu = () => {
        if (isSmallScreen)
            setMenuOpen(false);
    }

    return (
        <div className={classes.navBarWrap}>
            <AnimatePresence>
                {menuOpen ? <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className={classes.menuOpen} /> : null}
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
                                    transition={{ duration: 0.3, ease: "linear" }}
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
            <AnimatePresence>
                {menuOpen ? <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }} className={classes.menuOpenBody}>
                    {menuItemConfig.map(e => <Link onClick={closeMenu} className={classes.routerLink + " " + classes.item + " " + classes.openItem} to={e.link}>{e.name}</Link>)}
                    <span onClick={closeMenu} className={classes.openItemBtn}><CustomButton text={menuBtnConfig.name} link={menuBtnConfig.link} fullWidth={true} /></span>
                </motion.div> : null}
            </AnimatePresence>
        </div >
    );
}