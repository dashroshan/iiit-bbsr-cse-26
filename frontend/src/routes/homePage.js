import classes from "./homePage.module.css";
import HelloWorld from "../components/helloWorld";

export default function HomePage() {
    return (
        <div className={classes.helloWrap}>
            <HelloWorld />
            <p>This will be the fresher's site for CSE'26</p>
        </div>
    );
}