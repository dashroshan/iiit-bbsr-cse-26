import classes from "./homePage.module.css";

export default function HomePage() {
    return (
        <div className={classes.helloWrap}>
            <h1 className={classes.helloWorld}>HELLO WORLD</h1>
            <p>This will be the fresher's site for CSE'26</p>
        </div>
    );
}