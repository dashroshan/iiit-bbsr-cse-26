import classes from "./homePage.module.css";
import ScrollingText from "../components/scrollingText";
import AngledLine from "../components/angledLine";
import { useLottie } from "lottie-react";
import teamAnim from "../assets/homepage.json";

export default function HomePage() {
    const options = {
        animationData: teamAnim,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <div className={classes.homePage}>
            <div className={classes.helloWrap}>
                <div className={classes.heartWrap}>{View}</div>
            </div>
            <AngledLine />
            <div className={classes.video}>
                <p>With great branches come more assignments and more classes</p>
                <iframe title="cse" src="https://www.youtube.com/embed/TH4EkRqZsCQ?autoplay=1&mute=1&modestbranding=1&showinfo=0&loop=1&playlist=TH4EkRqZsCQ" allow='autoplay' frameborder="0" allowfullscreen></iframe>
            </div>
            <ScrollingText forward={true} text={["I don't know, you tell", "Clear or not clear?", "Do not write, try to understand", "Padhai chodo aur research gate pai mere ppt dekho"]} />
            <ScrollingText forward={false} text={["Any clarifications required", "I know some of you know", "Now I will hand simulate", "You already know this", "Ok honey"]} />
        </div>
    );
}