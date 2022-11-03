import classes from "./about.module.css";
import { useLottie } from "lottie-react";
import teamAnim from "../assets/team.json";
import { useMediaQuery } from 'react-responsive';
import CustomButton from "../components/customButton";

export default function CreditsPage() {
    const options = {
        animationData: teamAnim,
        loop: true
    };

    const { View } = useLottie(options);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 750px)' });

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
            <div className={classes.creditsText + " " + classes.techStack}>
                <h1>TECH STACK</h1>
                <p className={classes.stackIcons}>
                    <img src={`https://skillicons.dev/icons?i=javascript,mongodb,expressjs,react,nodejs,git,github,linux,azure,cloudflare${isSmallScreen ? '&perline=5' : ''}`} alt="Tech Stack Icons" />
                </p>
                <p className={classes.stackText}>
                    This site is made using the mern stack and hosted on a linux virtual machine on microsoft azure. Cloudflare is used as the CDN. Git and Github are used for version control, ci/cd, and collaboration.
                </p>
                <CustomButton text="OPEN GITHUB REPOSITORY" link="https://github.com/roshan1337d/iiit-bbsr-cse-26" absolute />
            </div>
        </div>
    );
}