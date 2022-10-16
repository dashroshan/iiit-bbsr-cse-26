import classes from "./scrollingText.module.css";

export default function ScrollingText(props) {
    return (
        <div className={classes.wrap}>
            <ul className={classes.content} style={props.forward ? { animationDirection: "reverse" } : {}}>
                {props.text.map(e => <><li>{e}</li><li>•</li></>)}
            </ul>
            <ul className={classes.content} style={props.forward ? { animationDirection: "reverse" } : {}} aria-hidden="true">
                {props.text.map(e => <><li>{e}</li><li>•</li></>)}
            </ul>
        </div>
    );
}
