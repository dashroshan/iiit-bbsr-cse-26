import classes from "./credits.module.css";
import { useLottie } from "lottie-react";
import teamAnim from "../assets/team.json";

export default function CreditsPage() {
    const options = {
        animationData: teamAnim,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div className={classes.creditsBody}>
            <div className={classes.creditsWrap}>
                <div className={classes.heartWrap}>{View}</div>
            </div>
            <div className={classes.creditsText}>
                <h1>CREDITS</h1>
                <p>This site wouldn't have been possible without the love and support of our various different teams and the entire batch of CSE 2021-25</p>
            </div>
            <div className={classes.teams}>
                <div className={classes.card + " " + classes.small}>
                    <p>RESEARCH TEAM</p>
                    <ul>
                        <li>- Kirti Padhi</li>
                        <li>- Rituparna Senapati</li>
                        <li>- Sameer Ranjan Sahu</li>
                        <li>- Shruti Swarupa Dhar</li>
                        <li>- Suman Prity Gilua</li>
                    </ul>
                </div>
                <div className={classes.card + " " + classes.small}>
                    <p>UI UX TEAM</p>
                    <ul>
                        <li>- Bhabani Shankar Murmu</li>
                        <li>- Shivakshi Singh</li>
                        <li>- Swoyam Sidharth Nayak</li>
                    </ul>
                </div>
                <div className={classes.card}>
                    <p>CONTENT TEAM</p>
                    <ul>
                        <li>- Abishek Upadhyay</li>
                        <li>- Akankshya Nayak</li>
                        <li>- Kirti Padhi</li>
                        <li>- Rituparna Senapati</li>
                        <li>- Sameer Ranjan Sahu</li>
                        <li>- Sangdil Biswal</li>
                        <li>- Shivakshi Singh</li>
                        <li>- Shruti Swarupa Dhar</li>
                    </ul>
                </div>
                <div className={classes.card}>
                    <p>WEB DEV TEAM</p>
                    <ul>
                        <li>- Aman Gupta</li>
                        <li>- Kirti Padhi</li>
                        <li>- Naisargika Subudhi</li>
                        <li>- Prateek Tripathy</li>
                        <li>- Roshan Dash</li>
                        <li>- Shivakshi Singh</li>
                        <li>- Sneha Mandal</li>
                        <li>- Swoyam Sidharth Nayak</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}