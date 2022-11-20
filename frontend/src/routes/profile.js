import classes from "./profile.module.css";
import Button from "../components/customButton";
import EqualLoading from "../components/equalLoading";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';

export default function ProfilePage() {
    const alert = useAlert();
    const [formData, setformData] = useState({ name: "", city: "", state: "", about: "", github: "", linkedin: "", instagram: "" });
    const [imgUploading, setImgUploading] = useState(0);
    const [aboutUpdating, setaboutUpdating] = useState(false);
    const imgUpStates = [
        "Drop image here or click to upload",
        "Uploading image",
        "Image updated successfully",
        "Failed to update image",
    ];

    function change(e) {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    }

    async function uploadImg(e) {
        setImgUploading(1);
        const data = new FormData();
        data.append("image", e.target.files[0]);
        try {
            await axios.post(window.APIROOT + 'api/user/image', data);
            setImgUploading(2);
        } catch (error) {
            setImgUploading(3);
        }
    }

    async function setInfo() {
        if (!formData.name || !formData.state || !formData.city || !formData.about) {
            alert.error("Some of the required fields are empty");
            return;
        }
        setaboutUpdating(true);
        try {
            await axios.post(window.APIROOT + 'api/user/setAbout', formData);
            alert.success("Changed saved successfully");
        } catch (error) {
            alert.error("Failed to save changes");
        }
        setaboutUpdating(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(window.APIROOT + 'api/user/getAbout');
                const d = response.data;
                setformData({
                    name: d.name,
                    city: d.city,
                    state: d.state,
                    about: d.about,
                    github: d.github,
                    linkedin: d.linkedin,
                    instagram: d.instagram
                });
            } catch (error) {
                alert.error("Failed to retrive profile");
            }
        }
        fetchData();
    }, [alert]);

    return (
        <div className={classes.profile}>
            <div className={classes.top}>
                <h1>EDIT IMAGE</h1>
            </div>
            <div className={classes.uploadImg}>
                {imgUploading === 1 ? <EqualLoading /> : null} {imgUpStates[imgUploading]}
                <input disabled={imgUploading !== 0} style={{ cursor: imgUploading ? "not-allowed" : "pointer" }} type="file" accept="image/png, image/jpeg" className={classes.inputImg} onChange={uploadImg} />
            </div>
            <div className={classes.top}>
                <h1>EDIT INFO</h1>
                <div>* Required fields</div>
            </div>
            <div className={classes.form}>
                <div className={classes.inputs}>
                    <div className={classes.inputText}>
                        <div>* Name</div>
                        <input name="name" type="text" onChange={change} maxlength="100" defaultValue={formData.name} />
                    </div>
                    <div className={classes.inputText}>
                        <div>* City</div>
                        <input name="city" type="text" onChange={change} maxlength="30" defaultValue={formData.city} />
                    </div>
                    <div className={classes.inputText}>
                        <div>* State</div>
                        <input name="state" type="text" onChange={change} maxlength="30" defaultValue={formData.state} />
                    </div>
                </div>

                <div className={classes.aboutText}>
                    <div>* ABOUT</div>
                    <textarea name="about" type="text" rows={10} onChange={change} maxlength="400" placeholder="max 400 chars" defaultValue={formData.about} />
                </div>

                <div className={classes.inputs}>
                    <div className={classes.inputText}>
                        <div>Github</div>
                        <input name="github" type="text" onChange={change} placeholder="https://github.com/name" defaultValue={formData.github} />
                    </div>
                    <div className={classes.inputText}>
                        <div>LinkedIn</div>
                        <input name="linkedin" type="text" onChange={change} placeholder="https://linkedin.com/in/name" defaultValue={formData.linkedin} />
                    </div>
                    <div className={classes.inputText}>
                        <div>Instagram</div>
                        <input name="instagram" type="text" onChange={change} placeholder="https://instagram.com/name" defaultValue={formData.instagram} />
                    </div>
                </div>
            </div>
            <div className={classes.submitWrap}>
                <Button loading={aboutUpdating} text="SAVE CHANGES" static onClick={setInfo} />
            </div>
        </div>
    );
}