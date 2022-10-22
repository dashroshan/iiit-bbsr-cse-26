import classes from "./navBar.module.css";
import CustomButton from "./customButton";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-router-dom";

const menuItemConfig = [
    { name: "ITEM", link: "/link1" },
    { name: "ITEM", link: "/link2" },
    { name: "ITEM", link: "/link3" },
    { name: "ITEM", link: "/link4" },
    { name: "ITEM", link: "/link5" },
];

const menuBtnConfig = { name: "CLICK ME", link: "/link" };

export default function NavBar() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 750px)' });
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuVisible, setmenuVisible] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            setmenuVisible(true);
            document.body.style.position = "fixed";
            document.body.style.overflowY = "scroll";
        }
        else {
            document.body.style.position = "unset";
            document.body.style.overflowY = "unset";
            setTimeout(() => {
                setmenuVisible(false);
            }, 300);
        }
    }, [menuOpen]);

    return (
        <div className={classes.navBarWrap}>
            <div className={classes.menuOpen} style={{ opacity: (menuOpen && isSmallScreen) ? 1 : 0, display: menuVisible ? "" : "none" }}>
            </div>
            <nav className={classes.navBar}>
                <div className={classes.logoWrap}>
                    <span className={classes.logo}>SITE TITLE</span>
                </div>
                {isSmallScreen ?
                    <div className={classes.items}>
                        <span className={classes.item} style={{ marginRight: 0 }} onClick={() => setMenuOpen(!menuOpen)}>[ <TextTransition springConfig={presets.gentle} inline>{menuOpen ? "CLOSE" : "MENU"}</TextTransition> ]</span>
                    </div>
                    :
                    <div className={classes.items}>
                        {menuItemConfig.map(e => <span className={classes.item}><Link className={classes.routerLink} to={e.link}>{e.name}</Link></span>)}
                        <CustomButton text={menuBtnConfig.name} link={menuBtnConfig.link} />
                    </div>
                }
            </nav >
            <div className={classes.menuOpenBody} style={{ opacity: (menuOpen && isSmallScreen) ? 1 : 0, display: menuVisible ? "" : "none" }}>
                {menuItemConfig.map(e => <span className={classes.item + " " + classes.openItem}><Link className={classes.routerLink} to={e.link}>{e.name}</Link></span>)}
                <span className={classes.openItemBtn}><CustomButton text={menuBtnConfig.name} link={menuBtnConfig.link} fullWidth={true} /></span>
            </div>
        </div >
    );
}