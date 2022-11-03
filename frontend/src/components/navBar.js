import classes from "./navBar.module.css";
import CustomButton from "./customButton";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const defaultMenuConfig = [
    { name: "STUDENTS", link: "/students" },
    { name: "SOCIETIES", link: "/socities" },
    { name: "CREDITS", link: "/credits" }
];

export default function NavBar() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 750px)' });
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({ text: "", link: "", editProfile: false });
    const [menuItemConfig, setMenuItemConfig] = useState(defaultMenuConfig);

    useEffect(() => {
        if (data.editProfile) setMenuItemConfig(
            [
                ...defaultMenuConfig,
                { name: "PROFILE", link: "/profile" },
            ]
        );
        else setMenuItemConfig(defaultMenuConfig);
    }, [data])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(window.APIROOT + 'api/auth/check');
                console.log(response);
                if (response.isLoggedIn)
                    setData({ text: "SIGN OUT", link: window.APIROOT + 'api/auth/signout', editProfile: true });
                else
                    setData({ text: "SIGN IN", link: window.APIROOT + 'api/auth/signin', editProfile: false });
            } catch (error) {
                setData({ text: "REVERIFY", link: window.APIROOT + 'api/auth/signout', editProfile: false });
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