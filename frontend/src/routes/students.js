import classes from "./students.module.css";
import StudentCard from "../components/studentCard";

export default function StudentsPage(props) {
    return (
        <div className={classes.sectionWrap}>
            <h1>CSE {props.year === 1 ? 2022 : 2021}</h1>
            <p>The {props.year === 1 ? "Freshers" : "sophomores"}</p>
            <div className={classes.cards}>
                <div className={classes.card}><StudentCard /></div>
                <div className={classes.card}><StudentCard /></div>
                <div className={classes.card}><StudentCard /></div>
                <div className={classes.card}><StudentCard /></div>
                <div className={classes.card}><StudentCard /></div>
            </div>
        </div>
    );
}