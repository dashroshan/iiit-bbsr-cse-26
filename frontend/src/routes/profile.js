import classes from "./profile.module.css";
import Button from "../components/customButton";
import { useState } from "react";

export default function ProfilePage() {
    const [formData, setformData] = useState({ name: "", city: "", state: "", about: "", github: "", linkedin: "", instagram: "" });

    function change(e) {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    }

    return (
        <div className={classes.profile}>
            <div className={classes.top}>
                <h1>EDIT IMAGE</h1>
            </div>
            <div className={classes.uploadImg}>
                Drop image here or click to upload
                <input type="file" accept="image/png, image/jpeg" className={classes.inputImg} />
            </div>
            <div className={classes.top}>
                <h1>EDIT INFO</h1>
                <div>* Required fields</div>
            </div>
            <div className={classes.form}>
                <div className={classes.inputs}>
                    <div className={classes.inputText}>
                        <div>* Name</div>
                        <input name="name" type="text" onChange={change} maxlength="100" />
                    </div>
                    <div className={classes.inputText}>
                        <div>* City</div>
                        <input name="city" type="text" onChange={change} maxlength="30" />
                    </div>
                    <div className={classes.inputText}>
                        <div>* State</div>
                        <input name="state" type="text" onChange={change} maxlength="30" />
                    </div>
                </div>

                <div className={classes.aboutText}>
                    <div>* ABOUT</div>
                    <textarea name="about" type="text" rows={10} onChange={change} maxlength="400" placeholder="max 400 chars" />
                </div>

                <div className={classes.inputs}>
                    <div className={classes.inputText}>
                        <div>Github</div>
                        <input name="github" type="text" onChange={change} placeholder="https://github.com/name" />
                    </div>
                    <div className={classes.inputText}>
                        <div>LinkedIn</div>
                        <input name="linkedin" type="text" onChange={change} placeholder="https://linkedin.com/in/name" />
                    </div>
                    <div className={classes.inputText}>
                        <div>Instagram</div>
                        <input name="instagram" type="text" onChange={change} placeholder="https://instagram.com/name" />
                    </div>
                </div>
            </div>
            <div className={classes.submitWrap}>
                <Button text="SAVE CHANGES" />
            </div>
        </div>
    );
}