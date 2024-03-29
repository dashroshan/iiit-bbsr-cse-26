import classes from "./navBar.module.css";
import CustomButton from "./customButton";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from 'react-alert';

const defaultMenuConfig = [
    { name: "SOCIETIES", link: "/societies" },
];

export default function NavBar() {
    const alert = useAlert();
    const isSmallScreen = useMediaQuery({ query: '(max-width: 875px)' });
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({ text: "", link: "", hasProfile: false, isLoggedIn: false });
    const [menuItemConfig, setMenuItemConfig] = useState(defaultMenuConfig);

    useEffect(() => {
        let menuData = [...defaultMenuConfig];
        if (data.hasProfile) menuData.push({ name: "PROFILE", link: "/profile" });
        if (data.isLoggedIn) {
            menuData.unshift({ name: "2022", link: "/2022" });
            menuData.unshift({ name: "2021", link: "/2021" });
        }
        setMenuItemConfig(menuData);
    }, [data]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(window.APIROOT + 'api/auth/check');
                if (response.blocked) alert.show(response.blocked, { timeout: 10000 });
                if (response.isLoggedIn)
                    setData({ text: "SIGN OUT", link: window.APIROOT + 'api/auth/signout', hasProfile: response.hasProfile, isLoggedIn: true });
                else
                    setData({ text: "SIGN IN", link: window.APIROOT + 'api/auth/signin', hasProfile: false, isLoggedIn: false });
            } catch (error) {
                setData({ text: "REVERIFY", link: window.APIROOT + 'api/auth/signout', hasProfile: false, isLoggedIn: false });
            }
            setLoading(false);
        }

        fetchData();
    }, []);

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
                        {menuItemConfig.map((e, i) => <Link key={i} className={classes.routerLink + " " + classes.item} to={e.link}>{e.name}</Link>)}
                        <CustomButton text={data.text} loading={loading} link={data.link} absolute />
                    </div>
                }
            </nav >
            <AnimatePresence>
                {menuOpen ? <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }} className={classes.menuOpenBody}>
                    {menuItemConfig.map((e, i) => <Link key={i} onClick={closeMenu} className={classes.routerLink + " " + classes.item + " " + classes.openItem} to={e.link}>{e.name}</Link>)}
                    <span onClick={closeMenu} className={classes.openItemBtn}><CustomButton text={data.text} link={data.link} loading={loading} absolute fullWidth={true} /></span>
                </motion.div> : null}
            </AnimatePresence>
        </div >
    );
}
