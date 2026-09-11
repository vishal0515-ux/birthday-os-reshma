/* =========================================
   RESHMA OS — BIRTHDAY EDITION
   ========================================= */

/* ---------- CONFIG ---------- */

const surprisePassword = "bestie";

const photos = [
    "photos/photo1.jpeg",
    "photos/photo2.jpeg",
    "photos/photo3.jpeg"
];

const birthdayDate = new Date("2026-09-14T00:00:00");

/* ---------- GLOBAL ---------- */

let currentPhoto = 0;

/* ---------- BOOT ---------- */

document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.getElementById("progressBar");
    const bootText = document.getElementById("bootText");

    let progress = 0;

    const messages = [
        "Initializing birthday system...",
        "Loading Friendship.service...",
        "Loading Memories.service...",
        "Loading Happiness.service...",
        "Preparing surprise...",
        "SYSTEM READY ❤️"
    ];

    const bootInterval = setInterval(() => {

        progress += 2;

        if (progressBar) {
            progressBar.style.width = progress + "%";
        }

        const index = Math.min(
            Math.floor(progress / 17),
            messages.length - 1
        );

        if (bootText) {
            bootText.textContent = messages[index];
        }

        if (progress >= 100) {

            clearInterval(bootInterval);

            setTimeout(() => {

                const bootScreen = document.getElementById("bootScreen");
                const desktop = document.getElementById("desktop");

                if (bootScreen) {
                    bootScreen.classList.add("hidden");
                }

                if (desktop) {
                    desktop.classList.remove("hidden");
                }

            }, 500);
        }

    }, 60);

    updateClock();
    setInterval(updateClock, 1000);

    updateCountdown();
    setInterval(updateCountdown, 1000);
});


/* ---------- CLOCK ---------- */

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}


/* ---------- COUNTDOWN ---------- */

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date();
    const difference = birthdayDate - now;

    if (difference <= 0) {

        countdown.innerHTML =
            "🎉 HAPPY BIRTHDAY RESHMA! 🎂💚";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdown.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


/* ---------- APP SYSTEM ---------- */

function openApp(appName) {

    const overlay = document.getElementById("overlay");
    const title = document.getElementById("windowTitle");
    const content = document.getElementById("windowContent");

    if (!overlay || !title || !content) return;

    overlay.classList.remove("hidden");

    switch (appName) {

        case "memories":
            showMemories(title, content);
            break;

        case "message":
            showMessage(title, content);
            break;

        case "surprise":
            showSurprise(title, content);
            break;

        case "terminal":
            showTerminal(title, content);
            break;

        case "about":
            showAbout(title, content);
            break;

        case "music":
            showMusic(title, content);
            break;

        default:
            title.textContent = "Unknown App";
            content.innerHTML = `
                <div class="card">
                    <h2>⚠️ App not found</h2>
                </div>
            `;
    }
}


/* ---------- CLOSE APP ---------- */

function closeApp() {

    const overlay = document.getElementById("overlay");

    if (overlay) {
        overlay.classList.add("hidden");
    }
}


function closeOutside(event) {

    if (event.target.id === "overlay") {
        closeApp();
    }
}


/* =========================================
   MEMORIES
   ========================================= */

function showMemories(title, content) {

    title.textContent = "📸 Memories";

    content.innerHTML = `
        <div class="card">

            <h2>Our Memories 💚</h2>

            <p>
                Some moments are simple...
                but they become special memories. 🫶🏻
            </p>

            <div class="gallery">

                <img
                    src="${photos[0]}"
                    onclick="zoom(0)"
                    alt="Memory 1"
                >

                <img
                    src="${photos[1]}"
                    onclick="zoom(1)"
                    alt="Memory 2"
                >

                <img
                    src="${photos[2]}"
                    onclick="zoom(2)"
                    alt="Memory 3"
                >

            </div>

        </div>
    `;
}


/* =========================================
   FULLSCREEN PHOTO VIEWER
   ========================================= */

function zoom(index) {

    currentPhoto = index;

    let viewer = document.getElementById("photoViewer");

    if (!viewer) {

        viewer = document.createElement("div");

        viewer.id = "photoViewer";

        viewer.innerHTML = `
            <button id="photoClose"
                    onclick="closePhotoViewer()">
                ✕
            </button>

            <button id="photoPrev"
                    onclick="previousPhoto()">
                ❮
            </button>

            <img id="fullPhoto"
                 src=""
                 alt="Full Screen Memory">

            <button id="photoNext"
                    onclick="nextPhoto()">
                ❯
            </button>

            <div id="photoCounter"></div>
        `;

        document.body.appendChild(viewer);

        addPhotoViewerStyles(viewer);

        let startX = 0;

        viewer.addEventListener("touchstart", e => {
            startX = e.touches[0].clientX;
        });

        viewer.addEventListener("touchend", e => {

            const endX = e.changedTouches[0].clientX;
            const difference = endX - startX;

            if (Math.abs(difference) < 50) return;

            if (difference < 0) {
                nextPhoto();
            } else {
                previousPhoto();
            }
        });
    }

    viewer.classList.add("active");

    updateFullPhoto();
}


function updateFullPhoto() {

    const image = document.getElementById("fullPhoto");
    const counter = document.getElementById("photoCounter");

    if (!image) return;

    image.src = photos[currentPhoto];

    if (counter) {
        counter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;
    }
}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    updateFullPhoto();
}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    updateFullPhoto();
}


function closePhotoViewer() {

    const viewer = document.getElementById("photoViewer");

    if (viewer) {
        viewer.classList.remove("active");
    }
}


/* ---------- PHOTO VIEWER CSS ---------- */

function addPhotoViewerStyles(viewer) {

    const style = document.createElement("style");

    style.textContent = `

        #photoViewer {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.96);
            z-index: 99999;

            display: none;

            align-items: center;
            justify-content: center;
        }

        #photoViewer.active {
            display: flex;
        }

        #photoViewer img {
            max-width: 90vw;
            max-height: 88vh;

            object-fit: contain;

            border-radius: 12px;

            box-shadow:
                0 0 30px rgba(0,255,120,0.25);
        }

        #photoClose {
            position: absolute;
            top: 20px;
            right: 20px;

            width: 45px;
            height: 45px;

            border: 1px solid #00ff88;
            border-radius: 50%;

            background: rgba(0,0,0,0.7);
            color: #00ff88;

            font-size: 22px;
            cursor: pointer;

            z-index: 10;
        }

        #photoPrev,
        #photoNext {

            position: absolute;

            top: 50%;
            transform: translateY(-50%);

            width: 50px;
            height: 50px;

            border: 1px solid #00ff88;
            border-radius: 50%;

            background: rgba(0,0,0,0.7);
            color: #00ff88;

            font-size: 25px;

            cursor: pointer;

            z-index: 10;
        }

        #photoPrev {
            left: 20px;
        }

        #photoNext {
            right: 20px;
        }

        #photoCounter {

            position: absolute;

            bottom: 20px;

            left: 50%;
            transform: translateX(-50%);

            color: #00ff88;

            font-family: monospace;

            font-size: 15px;

            background: rgba(0,0,0,0.7);

            padding: 8px 15px;

            border-radius: 20px;
        }

        @media(max-width:600px) {

            #photoViewer img {
                max-width: 94vw;
                max-height: 82vh;
            }

            #photoPrev,
            #photoNext {

                width: 42px;
                height: 42px;

                font-size: 20px;
            }

            #photoPrev {
                left: 8px;
            }

            #photoNext {
                right: 8px;
            }
        }
    `;

    document.head.appendChild(style);
}


/* =========================================
   BIRTHDAY MESSAGE
   ========================================= */

function showMessage(title, content) {

    title.textContent = "💌 Birthday Message";

    content.innerHTML = `
        <div class="card">

            <div class="big">Happy Birthday Diii 🤍🥹</div>

            <p>
                Wish you a very Happy Birthday diii 🤍🥹
            </p>

            <p>
                Un life-la unakku neraya per important-ah
                irukkalaam… aana en life-la nee occupy
                panra place romba special.
            </p>

            <p>
                ❤️ Un kooda pesina sila simple moments,
                namma share pannina memories —
                enakku adhellam romba precious.
            </p>

            <p>
                Nee happy-ah irukkumbodhu paakuradhe
                enakku oru different happiness.
            </p>

            <p>
                🫶🏻 Life eppadi maarinaalum,
                nee unmaiya happy-ah, peaceful-ah
                irukkanum nu manasara wish panren.
            </p>

            <p>
                Unakku pidicha ellame un life-la
                nadakkanum.
            </p>

            <p>
                Happy Birthday diii 💗
                always keep that beautiful smile.
                🤍🎂✨
            </p>

            <hr>

            <p>
                — With lots of wishes,<br>
                <strong>Abishek 💚</strong>
            </p>

        </div>
    `;
}


/* =========================================
   SURPRISE
   ========================================= */

function showSurprise(title, content) {

    title.textContent = "🎁 Surprise Box";

    content.innerHTML = `

        <div class="reveal">

            <div>

                <div style="font-size:70px;">
                    🎁
                </div>

                <h2>
                    SECRET SURPRISE
                </h2>

                <p>
                    This surprise is locked 🔐
                </p>

                <p style="opacity:.8;">
                    Hint: Her cute nickname 💚
                </p>

                <input
                    id="surpriseInput"
                    type="password"
                    placeholder="Enter password"
                    autocomplete="off"
                    style="
                        padding:12px;
                        width:min(280px,90%);
                        border-radius:12px;
                        border:1px solid #00ff88;
                        background:#06100a;
                        color:#00ff88;
                        outline:none;
                        margin-top:10px;
                    "
                >

                <br>

                <button
                    onclick="unlockSurprise()"
                    style="margin-top:15px;"
                >
                    🔓 Unlock Surprise
                </button>

                <p
                    id="surpriseError"
                    style="
                        color:#ff6b6b;
                        display:none;
                    "
                >
                    ❌ Wrong password
                </p>

                <div id="secret">

                    <div
                        style="
                            font-size:65px;
                            margin-bottom:15px;
                        "
                    >
                        🎉💚🎂
                    </div>

                    <h1>
                        SURPRISE UNLOCKED!
                    </h1>

                    <p>
                        Happy Birthday Reshma! 🥹💚
                    </p>

                    <p>
                        You found the secret! 🔐✨
                    </p>

                    <p>
                        May your life always be
                        filled with happiness,
                        peace and beautiful memories.
                    </p>

                    <button
                        onclick="startCelebration()"
                        style="margin-top:15px;"
                    >
                        🎉 Celebrate
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* ---------- SURPRISE PASSWORD ---------- */

function unlockSurprise() {

    const input =
        document.getElementById("surpriseInput");

    const secret =
        document.getElementById("secret");

    const error =
        document.getElementById("surpriseError");

    if (!input || !secret) return;

    if (input.value.trim().toLowerCase() === surprisePassword) {

        secret.style.display = "block";

        if (error) {
            error.style.display = "none";
        }

        input.style.display = "none";

        const button =
            input.parentElement.querySelector("button");

        if (button) {
            button.style.display = "none";
        }

        startCelebration();

    } else {

        if (error) {
            error.style.display = "block";
        }

        input.value = "";
        input.focus();
    }
}


/* =========================================
   CELEBRATION
   ========================================= */

function startCelebration() {

    createConfetti();
    createHearts();
}


/* ---------- CONFETTI ---------- */

function createConfetti() {

    for (let i = 0; i < 70; i++) {

        const confetti =
            document.createElement("div");

        confetti.textContent =
            ["🎉", "✨", "💚", "🎂", "💖"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "100000";

        confetti.style.pointerEvents = "none";

        const duration =
            2 + Math.random() * 3;

        confetti.style.transition =
            `transform ${duration}s linear, opacity ${duration}s`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000 + 500);
    }
}


/* ---------- HEARTS ---------- */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.textContent = "💚";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        heart.style.zIndex = "100000";

        heart.style.pointerEvents = "none";

        const duration =
            3 + Math.random() * 3;

        heart.style.transition =
            `transform ${duration}s ease-out, opacity ${duration}s`;

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-110vh) translateX(${(Math.random() - 0.5) * 150}px)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000 + 500);
    }
}


/* =========================================
   TERMINAL
   ========================================= */

function showTerminal(title, content) {

    title.textContent = "💻 Terminal";

    content.innerHTML = `

        <div class="terminal">

            <p>
                <span>abishek@reshma-os</span>:~$
                ./birthday_system
            </p>

            <p>
                Initializing Birthday OS...
            </p>

            <p>
                Friendship.service ........ OK
            </p>

            <p>
                Memories.service .......... OK
            </p>

            <p>
                Happiness.service ......... OK
            </p>

            <p>
                Birthday.service .......... RUNNING
            </p>

            <p>
                User: Reshma
            </p>

            <p>
                Age: 19
            </p>

            <p>
                Status:
                <span>HAPPY BIRTHDAY 🎂</span>
            </p>

            <p>
                <span>
                    System message:
                    You are special. 💚
                </span>
            </p>

            <p>
                <span>abishek@reshma-os</span>:~$
                _
            </p>

        </div>
    `;
}


/* =========================================
   BIRTHDAY INFO
   ========================================= */

function showAbout(title, content) {

    title.textContent = "🎂 Birthday Info";

    content.innerHTML = `

        <div class="card">

            <h2>🎂 Birthday Information</h2>

            <p>
                <strong>Name:</strong> Reshma
            </p>

            <p>
                <strong>Birthday:</strong>
                14 September 2026
            </p>

            <p>
                <strong>Turning:</strong> 19 🎉
            </p>

            <p>
                <strong>Birthday OS:</strong>
                Reshma OS v19.0
            </p>

            <hr>

            <p>
                💚 Created with friendship,
                memories and lots of happiness.
            </p>

            <p>
                — Abishek
            </p>

        </div>
    `;
}


/* =========================================
   MUSIC
   ========================================= */

function showMusic(title, content) {

    title.textContent = "🎵 Music Box";

    content.innerHTML = `

        <div class="card" style="text-align:center;">

            <div style="font-size:65px;">
                🎵
            </div>

            <h2>
                Birthday Music Box
            </h2>

            <p>
                A little birthday music for you 💚
            </p>

            <audio
                controls
                style="width:100%;margin-top:20px;"
            >
                <source
                    src="music/birthday-song.mp4"
                    type="audio/mpeg"
                >

                Your browser does not support
                audio playback.
            </audio>

        </div>
    `;
}


/* =========================================
   KEYBOARD SUPPORT
   ========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        const viewer =
            document.getElementById("photoViewer");

        if (viewer &&
            viewer.classList.contains("active")) {

            closePhotoViewer();

        } else {

            closeApp();
        }
    }

    if (event.key === "ArrowRight") {

        const viewer =
            document.getElementById("photoViewer");

        if (viewer &&
            viewer.classList.contains("active")) {

            nextPhoto();
        }
    }

    if (event.key === "ArrowLeft") {

        const viewer =
            document.getElementById("photoViewer");

        if (viewer &&
            viewer.classList.contains("active")) {

            previousPhoto();
        }
    }
});
