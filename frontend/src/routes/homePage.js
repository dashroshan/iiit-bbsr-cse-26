import classes from "./homePage.module.css";
import HelloWorld from "../components/helloWorld";

export default function HomePage() {
    return (
        <div className={classes.helloWrap}>
            <HelloWorld />
        </div>
    );
}