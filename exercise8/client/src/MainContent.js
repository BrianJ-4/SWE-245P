import "./MainContent.css";

function MainContent() {
    return (
        <main className="mainContent">
            <h1>My Projects</h1>

            <div className="projectContainer">

                <div className="projectRow">
                    <div className="projectCard">
                        <h2>AI Race Engineer</h2>
                        <p>A lightweight assistant for the F1 video game that listens to your voice and gives back real-time telemetry insights. It reads live data such as tyre temps, fuel levels, and lap sectors to help you make better decisions during the race. Built in Python and utilizes UDP telemetry.</p>
                    </div>
                    <div className="projectCard">
                        <h2>Go Video Server</h2>
                        <p>A simple video streaming server built using Go's standard library. It serves local video files over HTTP so you can watch media from any device on your network. Implements byte range requests from scratch.</p>
                    </div>
                    <div className="projectCard">
                        <h2>GestCTRL</h2>
                        <p>GestCTRL is a hand-gesture computer control system built with Python, MediaPipe, and TensorFlow Lite. It recognizes custom poses and maps them to real actions like mouse movement or keyboard shortcuts. The project includes a small desktop UI for recording gestures, training the model, and managing pose-to-action mappings.</p>
                    </div>
                    <div className="projectCard">
                        <h2>PixelBoard</h2>
                        <p>A Raspberry Pi powered LED matrix display that shows images and animations. Controlled entirely through a small web UI you can open on your phone or laptop. The project uses Flask to send pixel data directly to the RGB matrix hardware.</p>
                    </div>
                </div>

                <div className="projectRow">
                    <div className="projectCard">
                        <h2>MP3 Player</h2>
                        <p>A retro-style portable music player built using an ESP32 Feather and a VS1053 audio decoder. It plays MP3 files from an SD card and shows info on a small OLED screen.</p>
                    </div>
                    <div className="projectCard">
                        <h2>Modular Macropad</h2>
                        <p>A custom macropad system where each small module has its own microcontroller and connects using I²C. You can attach modules like rotary encoders or button pads depending on what you need. Designed to be expandable and easy to reconfigure.</p>
                    </div>
                    <div className="projectCard">
                        <h2>VLR API</h2>
                        <p>A custom Node.js and Express API that scrapes match results, player stats, and news from VLR.gg. It provides clean JSON endpoints for upcoming games, team info, and detailed match breakdowns. It also uses Jest tests and a caching layer for fast, reliable responses.</p>
                    </div>
                    <div className="projectCard">
                        <h2>FPV Module</h2>
                        <p>An ESP32-based control module designed to interface with an ExpressLRS transmitter. It lets you send programmable stick inputs to an FPV drone without using a physical radio controller. Useful for automation, testing, and custom flight behaviors.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default MainContent;
