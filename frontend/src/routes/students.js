import classes from "./students.module.css";
import StudentCard from "../components/studentCard";

export default function StudentsPage() {
    return (
        <div className={classes.cards}>
            <div className={classes.card}><StudentCard /></div>
            <div className={classes.card}><StudentCard /></div>
            <div className={classes.card}><StudentCard /></div>
            <div className={classes.card}><StudentCard /></div>
            <div className={classes.card}><StudentCard /></div>
            <div className={classes.card}><StudentCard /></div>

        </div>
    );
}