import classes from "./futuristicLine.module.css";

export default function FuturisticLine() {
    return (
        <div className={classes.futuristicLine}>
            <div className={classes.linewrap}>
                <div className={classes.garnish_wrapper}>
                    <div className={classes.garnish + " " + classes.short}></div>
                    <div className={classes.garnish + " " + classes.short}></div>
                    <div className={classes.garnish + " " + classes.long}></div >
                </div >
                <div className={classes.long}></div>
                <div className={classes.angled_wrapper}>
                    <div className={classes.angled}></div>
                </div>
                <div className={classes.short}></div>
            </div >
        </div>
    );
}
