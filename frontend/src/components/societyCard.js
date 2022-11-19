import "./societyCard.css";

export default function SocietyCard(props) {
    return (
        <div class="society_card_wrap">
            <div class="container">
                <div class="card">
                    <div class="front">
                        <p class="binary top large"></p>
                        <p class="binary side right"></p>
                        <p class="binary bottom"></p>
                        <p class="binary side left"></p>
                        <div class="content_front">
                            <h1 class="society_name">{props.name}</h1>
                            <img alt="society" src={props.img} height="100%" width="100%" />
                        </div>
                    </div>
                    <div class="back">
                        <p class="binary top large"></p>
                        <p class="binary side right"></p>
                        <p class="binary bottom"></p>
                        <p class="binary side left"></p>
                        <div class="content_back">
                            <a href={props.link}><div class="card_button">Visit Page</div></a>
                            <div class="about_society">{props.about}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}