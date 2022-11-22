import classes from "./students.module.css";
import StudentCard from "../components/studentCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import { Navigate } from "react-router-dom";

export default function StudentsPage(props) {
    const alert = useAlert();
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(window.APIROOT + ((props.year === 1) ? 'api/data/get2022' : 'api/data/get2021'));
                setData(response.data);
            } catch (error) {
                alert.error("You need to be online and logged in to view this page");
                setIsError(true);
            }
        }
        fetchData();
    }, [alert, props]);

    return (
        <div className={classes.sectionWrap}>
            {isError ? <Navigate to="/" replace={true} /> : null}
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