import classes from "./angledLine.module.css";

export default function AngledLine(props) {
    return (
        <div className={classes.angledLineWrap}>
            <div className={classes.angledLine}></div>
        </div>
    );
}