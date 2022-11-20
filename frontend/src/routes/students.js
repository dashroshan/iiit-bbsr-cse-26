import classes from "./students.module.css";
import StudentCard from "../components/studentCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';

export default function StudentsPage(props) {
    const alert = useAlert();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(window.APIROOT + ((props.year === 1) ? 'api/user/get2022' : 'api/user/get2021'));
                setData(response.data);
            } catch (error) {
                alert.error("Failed to retrive students");
            }
        }
        fetchData();
    }, [alert, props]);

    return (
        <div className={classes.sectionWrap}>
            <h1>CSE {props.year === 1 ? 2022 : 2021}</h1>
            <p>The {props.year === 1 ? "Freshers" : "sophomores"}</p>
            <div className={classes.cards}>
                {data.map(e =>
                    <div className={classes.card}>
                        <StudentCard id={e.id} name={e.name} github={e.github} linkedin={e.linkedin} instagram={e.instagram} city={e.city} state={e.state} about={e.about} />
                    </div>
                )}
            </div>
        </div>
    );
}