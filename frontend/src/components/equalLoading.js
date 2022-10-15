import classes from "./equalLoading.module.css";
import { useState, useEffect } from "react";

export default function EqualLoading() {
    let options = ["    ", "=   ", "==  ", "=== ", "====", " ===", "  ==", "   =", "    "];
    const [loadingStr, setLodingStr] = useState({ str: options[0], curId: 0, forward: true });

    const getLoadingStr = () => {
        let curId = loadingStr.curId;
        let forward = loadingStr.forward;
        if (curId === 0) forward = true;
        else if (curId === options.length - 1) forward = false;
        curId = (forward) ? (curId + 1) : (curId - 1);
        return { str: `[${options[loadingStr.curId]}]`, curId: curId, forward: forward };
    }

    useEffect(() => {
        const myInterval = setInterval(() => {
            setLodingStr(getLoadingStr());
        }, 150);
        return () => clearInterval(myInterval);
    });

    return (
        <div className={classes.loadingStr}>{loadingStr.str}</div>
    );
}