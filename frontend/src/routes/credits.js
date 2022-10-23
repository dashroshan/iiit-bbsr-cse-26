import classes from "./credits.module.css";

export default function CreditsPage() {
    return (
        <div className={classes.creditsBody}>
            <div className={classes.creditsWrap}>
                <div className={classes.heartWrap}>
                    <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M84 36H81V33L84 33V36Z" fill="currentColor"></path><path d="M87 39H84V36H87V39Z" fill="currentColor"></path><path d="M87 39H90V42H87V39Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72 30H69V33H63V36H57V33L51 33V30L48 30V27H30V30L27 30V33L24 33V36H21V60H24V63H27V66H30V69H33V72H36V75H39V78H42V81H45V84H48V87H51V90H54V93H66V90H69V87H72V84H75V81H78V78H81V75H84V72H87V69H90V66H93V63H96V60H99V36H96V33H93V30H90V27H72V30ZM90 30V33L93 33V36H96V60H93V63H87V69H84V72H81V75H78V78H75V81H72V84H69V87H66V90H54V87H51V84H48V81H45V78H42V75H39V72H36V69H33V63H27L27 60H24L24 36H27L27 33H30V30H48V33L51 33V36H57V39H63V36H69V33L72 33V30L90 30Z" fill="currentColor"></path><path d="M186 33H192V36H186V33Z" fill="currentColor"></path><path d="M183 39V36H186V39H183Z" fill="currentColor"></path><path d="M177 39H183V42H177V39Z" fill="currentColor"></path><path d="M174 36H177V39H174V36Z" fill="currentColor"></path><path d="M168 33H174V36H168V33Z" fill="currentColor"></path><path d="M150 33V30H168V33H150Z" fill="currentColor"></path><path d="M147 36V33H150V36H147Z" fill="currentColor"></path><path d="M147 57H144V36H147V57Z" fill="currentColor"></path><path d="M156 69H153V66H150V63H147V57H150V60H153V63H156V69Z" fill="currentColor"></path><path d="M159 72H156V69H159V72Z" fill="currentColor"></path><path d="M162 75H159V72H162V75Z" fill="currentColor"></path><path d="M165 78H162V75H165V78Z" fill="currentColor"></path><path d="M174 84H168V81H165V78H171V81H174V84Z" fill="currentColor"></path><path d="M186 84V87H174V84H186Z" fill="currentColor"></path><path d="M195 78V81H192V84H186V81H189V78H195Z" fill="currentColor"></path><path d="M198 75V78H195V75H198Z" fill="currentColor"></path><path d="M201 72V75H198V72H201Z" fill="currentColor"></path><path d="M204 69V72H201V69H204Z" fill="currentColor"></path><path d="M213 57V63H210V66H207V69H204V63H207V60H210V57H213Z" fill="currentColor"></path><path d="M213 36H216V57H213V36Z" fill="currentColor"></path><path d="M210 33H213V36H210V33Z" fill="currentColor"></path><path d="M210 33V30H192V33H210Z" fill="currentColor"></path><path d="M204 39H201V36H204V39Z" fill="currentColor"></path><path d="M204 39H207V42H204V39Z" fill="currentColor"></path></svg>
                </div>
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