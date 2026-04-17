import heroImg from "../assets/img1.png";

export default function HomePage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <header className="card">
                        <hgroup>
                            <h1 className="cinzel">GEAR &amp; GUTTER SPEAKEASY</h1>
                            <p className="cinzel">Disreputable Since 2077</p>
                        </hgroup>
                        <img
                            src={heroImg}
                            alt="Steampunk Bulldogs in Smoky Speakeasy"
                            width={500}
                        />
                        <p style={{ marginTop: "1rem", fontSize: "0.75rem", opacity: 0.4 }}>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                                Secret menu password
                            </a>
                        </p>
                    </header>
                </div>
            </div>
        </div>
    );
}
