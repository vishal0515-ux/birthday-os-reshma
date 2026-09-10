/* ================= GREEN THEME ================= */

const greenTheme = document.createElement("style");

greenTheme.textContent = `
body {
  background: linear-gradient(135deg, #052e16, #064e3b, #022c22) !important;
}

#desktop {
  background: linear-gradient(135deg, #052e16, #064e3b, #022c22) !important;
}

.desktop-area {
  background: transparent !important;
}

.welcome {
  color: white;
}

.app {
  background: rgba(20, 100, 65, 0.65) !important;
  border-color: rgba(150, 255, 190, 0.25) !important;
}

.app:hover {
  background: rgba(30, 130, 80, 0.85) !important;
  transform: translateY(-3px);
}

.dock {
  background: rgba(2, 44, 34, 0.9) !important;
}

/* PHOTO SLIDER */

.photo-slider {
  width: 100%;
  max-width: 430px;
  margin: 20px auto;
  text-align: center;
}

.slider-frame {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 18px;
  background: #022c22;
  box-shadow: 0 8px 30px rgba(0,0,0,.35);
}

.slider-frame img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}

.slider-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 14px;
}

.slider-buttons button {
  width: 48px;
  height: 42px;
  border: none;
  border-radius: 12px;
  background: #16a34a;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

.slider-buttons button:active {
  transform: scale(.92);
}

.slide-count {
  color: white;
  font-weight: bold;
  min-width: 60px;
}

.slider-hint {
  color: #b7f7cc;
  font-size: 13px;
  margin-top: 10px;
}

@media (max-width: 600px) {

  .slider-frame img {
    height: 300px;
  }

  .photo-slider {
    max-width: 100%;
  }

}
`;

document.head.appendChild(greenTheme);


/* ================= BOOT SCREEN ================= */

const progressBar = document.getElementById("progressBar");
const bootText = document.getElementById("bootText");

let p = 0;

const bootTimer = setInterval(() => {

  p += 4;

  if (progressBar) {
    progressBar.style.width = p + "%";
  }

  if (bootText) {

    if (p < 35) {
      bootText.textContent = "Loading memories...";
    }

    else if (p < 70) {
      bootText.textContent = "Preparing birthday surprise...";
    }

    else if (p < 100) {
      bootText.textContent = "Starting Reshma OS...";
    }

    else {

      clearInterval(bootTimer);

      setTimeout(() => {

        const boot = document.getElementById("bootScreen");
        const desktop = document.getElementById("desktop");

        if (boot) boot.classList.add("hidden");
        if (desktop) desktop.classList.remove("hidden");

      }, 450);

    }

  }

}, 70);


/* ================= APPS ================= */

const apps = {

  memories: {

    title: "📸 Memories",

    html: `
      <h2>Some beautiful memories 💚</h2>

      <div class="photo-slider">

        <div class="slider-frame">

          <img
            id="memoryPhoto"
            src="photos/photo1.jpeg"
            draggable="false"
          >

        </div>

        <div class="slider-buttons">

          <button onclick="previousPhoto()">
            ◀
          </button>

          <span id="slideCount" class="slide-count">
            1 / 3
          </span>

          <button onclick="nextPhoto()">
            ▶
          </button>

        </div>

        <div class="slider-hint">
          👈 Swipe left / right to see memories 👉
        </div>

      </div>
    `

  },


  message: {

    title: "💌 Birthday Message",

    html: `
      <div class="card">

        <p class="small">
          MESSAGE FROM ABISHEK
        </p>

        <h2 class="big">
          Happy Birthday Reshma! 🎂
        </h2>

        <p>
          Unakku indha birthday romba special-a irukkanum nu
          wish panren. Life-la nee edha achieve panna nenachalum,
          adha confident-ah achieve pannanum.
          Eppavume happy-ah iru, smile pannitu iru. ✨
        </p>

        <p>
          Indha small Birthday OS unakku oru cute memory-ah
          irukkattum. 😄
        </p>

        <p>
          <b>
            Once again, Happy 19th Birthday! 🎉
          </b>
        </p>

        <p>
          — Abishek
        </p>

      </div>
    `

  },


  surprise: {

    title: "🎁 Secret Surprise",

    html: `
      <div class="reveal">

        <div>

          <div style="font-size:80px">
            🔐
          </div>

          <h2>
            Secret Birthday Locker
          </h2>

          <p>
            Enter the secret password to unlock your surprise 😄
          </p>

          <input
            id="passwordInput"
            type="password"
            placeholder="Enter password"
            style="
              padding:13px 15px;
              border-radius:12px;
              border:1px solid #46536d;
              background:#111a2b;
              color:#fff;
              outline:none;
              width:min(280px,90%);
              margin:10px;
            "
          >

          <br>

          <button onclick="unlockSurprise()">
            UNLOCK 🔓
          </button>

          <p
            id="passwordError"
            style="
              color:#ff9b9b;
              display:none;
            "
          >
            Wrong password. Try again 😄
          </p>


          <div id="secret">

            <h2>
              🎉 SURPRISE UNLOCKED 🎉
            </h2>

            <div class="message-card">

              <div id="typedMessage"></div>

              <div
                id="messageEnd"
                class="message-end"
              >
                🎂 Happy Birthday Reshma 💗
                <br>
                <span>
                  — Abishek 🤍
                </span>
              </div>

            </div>

            <div class="hearts">
              💖 ✨ 🤍 🎈 ✨ 💖
            </div>

          </div>

        </div>

      </div>
    `

  },


  terminal: {

    title: "💻 Birthday Terminal",

    html: `
      <div class="terminal">

        <div>
          <span>reshma@birthday-os</span>:~$ whoami
        </div>

        <div>
          birthday_girl_19 🎂
        </div>

        <br>

        <div>
          <span>reshma@birthday-os</span>:~$ date
        </div>

        <div>
          14 September 2026
        </div>

        <br>

        <div>
          <span>reshma@birthday-os</span>:~$
          message --from Abishek
        </div>

        <div>
          Happy Birthday Reshma! 🎉 Stay awesome.
        </div>

        <br>

        <div>
          <span>reshma@birthday-os</span>:~$ status
        </div>

        <div>
          19 years of memories loaded successfully ✔
        </div>

      </div>
    `

  },


  about: {

    title: "🎂 Birthday Info",

    html: `
      <div class="card">

        <h2>
          Reshma OS — Birthday Edition
        </h2>

        <p>
          <b>Birthday:</b> 14/09/2026
        </p>

        <p>
          <b>DOB:</b> 14/09/2007
        </p>

        <p>
          <b>Turning:</b> 19 🎉
        </p>

        <p>
          <b>Created by:</b> Abishek
        </p>

      </div>
    `

  }

};


/* ================= OPEN / CLOSE APP ================= */

function openApp(name) {

  if (!apps[name]) return;

  document.getElementById("windowTitle").textContent =
    apps[name].title;

  document.getElementById("windowContent").innerHTML =
    apps[name].html;

  document.getElementById("overlay").classList.remove("hidden");

  if (name === "memories") {
    setupPhotoSlider();
  }

}


function closeApp() {

  document
    .getElementById("overlay")
    .classList.add("hidden");

}


function closeOutside(e) {

  if (e.target.id === "overlay") {
    closeApp();
  }

}


/* ================= PHOTO SLIDER ================= */

const photos = [
  "photos/photo1.jpeg",
  "photos/photo2.jpeg",
  "photos/photo3.jpeg"
];

let currentPhoto = 0;


function updatePhoto() {

  const image =
    document.getElementById("memoryPhoto");

  const count =
    document.getElementById("slideCount");

  if (!image) return;

  image.src = photos[currentPhoto];

  if (count) {
    count.textContent =
      `${currentPhoto + 1} / ${photos.length}`;
  }

}


function nextPhoto() {

  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  updatePhoto();

}


function previousPhoto() {

  currentPhoto--;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  updatePhoto();

}


/* ================= MOBILE SWIPE ================= */

let touchStartX = 0;
let touchEndX = 0;


function handleSwipe() {

  const difference =
    touchStartX - touchEndX;

  if (Math.abs(difference) < 50) {
    return;
  }

  if (difference > 0) {
    nextPhoto();
  } else {
    previousPhoto();
  }

}


function setupPhotoSlider() {

  currentPhoto = 0;

  updatePhoto();

  const frame =
    document.querySelector(".slider-frame");

  if (!frame) return;

  frame.addEventListener(
    "touchstart",
    function(e) {

      touchStartX =
        e.changedTouches[0].screenX;

    },
    { passive: true }
  );


  frame.addEventListener(
    "touchend",
    function(e) {

      touchEndX =
        e.changedTouches[0].screenX;

      handleSwipe();

    },
    { passive: true }
  );

}


/* ================= SURPRISE ================= */

const birthdayMessage = `Wish you a very Happy Birthday diii 🤍🥹

Un life-la unakku neraya per important-ah irukkalaam… aana en life-la nee occupy panra place romba special.

❤️ Un kooda pesina sila simple moments, namma share pannina memories — enakku adhellam romba precious. Nee happy-ah irukkumbodhu paakuradhe enakku oru different happiness.

🫶🏻 Life eppadi maarinaalum, nee unmaiya happy-ah, peaceful-ah irukkanum nu manasara wish panren.

Unakku pidicha ellame un life-la nadakkanum.

Happy Birthday diii 💗… always keep that beautiful smile. 🤍🎂✨`;


function unlockSurprise() {

  const input =
    document.getElementById("passwordInput");

  const error =
    document.getElementById("passwordError");

  if (input && input.value === "bestie2026") {

    document
      .getElementById("secret")
      .style.display = "block";

    error.style.display = "none";

    input.style.display = "none";

    typeBirthdayMessage();

    confetti();

    hearts();

  }

  else {

    error.style.display = "block";

    if (input) {

      input.value = "";

      input.focus();

    }

  }

}


function typeBirthdayMessage() {

  const el =
    document.getElementById("typedMessage");

  const end =
    document.getElementById("messageEnd");

  if (!el) return;

  el.textContent = "";

  end.style.display = "none";

  let i = 0;

  const timer = setInterval(() => {

    el.textContent =
      birthdayMessage.slice(0, ++i);

    if (i >= birthdayMessage.length) {

      clearInterval(timer);

      setTimeout(() => {

        end.style.display = "block";

      }, 300);

    }

  }, 18);

}


/* ================= HEARTS ================= */

function hearts() {

  for (let i = 0; i < 22; i++) {

    const h =
      document.createElement("div");

    h.textContent =
      ["💖", "🤍", "✨"][
        Math.floor(Math.random() * 3)
      ];

    h.className =
      "floating-heart";

    h.style.left =
      Math.random() * 100 + "vw";

    h.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    document.body.appendChild(h);

    setTimeout(
      () => h.remove(),
      6000
    );

  }

}


/* ================= CONFETTI ================= */

function confetti() {

  for (let i = 0; i < 70; i++) {

    const x =
      document.createElement("div");

    x.textContent =
      ["🎉", "✨", "🎈", "💚", "🎂"][
        Math.floor(Math.random() * 5)
      ];

    x.style.position = "fixed";

    x.style.left =
      Math.random() * 100 + "vw";

    x.style.top = "-30px";

    x.style.fontSize =
      (14 + Math.random() * 20) + "px";

    x.style.zIndex = 9999;

    document.body.appendChild(x);

    x.animate(

      [
        {
          transform:
            "translateY(0) rotate(0deg)"
        },

        {
          transform:
            `translateY(${innerHeight + 80}px)
             rotate(${Math.random() * 720}deg)`
        }
      ],

      {
        duration:
          1800 + Math.random() * 2200
      }

    ).onfinish = () => x.remove();

  }

}


/* ================= CLOCK ================= */

function updateClock() {

  const clock =
    document.getElementById("clock");

  if (!clock) return;

  clock.textContent =
    new Date().toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );

}

setInterval(updateClock, 1000);

updateClock();


/* ================= COUNTDOWN ================= */

function updateCountdown() {

  const target =
    new Date(
      "2026-09-14T00:00:00+05:30"
    ).getTime();

  const now =
    Date.now();

  const diff =
    target - now;

  const el =
    document.getElementById("countdown");

  if (!el) return;

  if (diff <= 0) {

    el.textContent =
      "🎂 HAPPY BIRTHDAY RESHMA! 🎉";

    return;

  }

  const days =
    Math.floor(
      diff / 86400000
    );

  const hours =
    Math.floor(
      (diff % 86400000) / 3600000
    );

  const mins =
    Math.floor(
      (diff % 3600000) / 60000
    );

  const secs =
    Math.floor(
      (diff % 60000) / 1000
    );

  el.textContent =
    `${days}d
     ${String(hours).padStart(2, "0")}h
     ${String(mins).padStart(2, "0")}m
     ${String(secs).padStart(2, "0")}s`;

}

setInterval(updateCountdown, 1000);

updateCountdown();
/* ================= FULL SCREEN PHOTO VIEWER ================= */

let fullPhotoIndex = 0;

const fullPhotos = [
  "photos/photo1.jpeg",
  "photos/photo2.jpeg",
  "photos/photo3.jpeg"
];

function zoom(src) {

  fullPhotoIndex = fullPhotos.indexOf(src);

  if (fullPhotoIndex < 0) {
    fullPhotoIndex = 0;
  }

  const viewer = document.createElement("div");

  viewer.id = "fullPhotoViewer";

  viewer.innerHTML = `
    <button id="photoClose">✕</button>

    <button id="photoPrev">❮</button>

    <img id="fullPhoto" src="${fullPhotos[fullPhotoIndex]}">

    <button id="photoNext">❯</button>

    <div id="photoNumber">
      ${fullPhotoIndex + 1} / ${fullPhotos.length}
    </div>
  `;

  document.body.appendChild(viewer);

  document.getElementById("photoClose").onclick = () => {
    viewer.remove();
  };

  document.getElementById("photoPrev").onclick = () => {
    fullPhotoIndex--;

    if (fullPhotoIndex < 0) {
      fullPhotoIndex = fullPhotos.length - 1;
    }

    updateFullPhoto();
  };

  document.getElementById("photoNext").onclick = () => {
    fullPhotoIndex++;

    if (fullPhotoIndex >= fullPhotos.length) {
      fullPhotoIndex = 0;
    }

    updateFullPhoto();
  };


  /* Mobile swipe */

  let startX = 0;

  viewer.addEventListener("touchstart", e => {
    startX = e.changedTouches[0].screenX;
  });

  viewer.addEventListener("touchend", e => {

    const endX = e.changedTouches[0].screenX;
    const difference = startX - endX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      fullPhotoIndex++;

      if (fullPhotoIndex >= fullPhotos.length) {
        fullPhotoIndex = 0;
      }
    } else {
      fullPhotoIndex--;

      if (fullPhotoIndex < 0) {
        fullPhotoIndex = fullPhotos.length - 1;
      }
    }

    updateFullPhoto();
  });


  function updateFullPhoto() {

    document.getElementById("fullPhoto").src =
      fullPhotos[fullPhotoIndex];

    document.getElementById("photoNumber").textContent =
      `${fullPhotoIndex + 1} / ${fullPhotos.length}`;

  }

}


/* ================= FULL SCREEN STYLE ================= */

const fullPhotoStyle = document.createElement("style");

fullPhotoStyle.textContent = `

#fullPhotoViewer {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(0,0,0,0.96);

  display: flex;
  align-items: center;
  justify-content: center;

  touch-action: pan-y;
}

#fullPhotoViewer img {
  max-width: 94%;
  max-height: 88%;

  object-fit: contain;

  border-radius: 10px;

  user-select: none;
  -webkit-user-drag: none;
}

#photoClose {
  position: absolute;
  top: 18px;
  right: 18px;

  width: 45px;
  height: 45px;

  border: none;
  border-radius: 50%;

  background: rgba(255,255,255,0.15);
  color: white;

  font-size: 24px;
  cursor: pointer;

  z-index: 10;
}

#photoPrev,
#photoNext {
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  width: 50px;
  height: 60px;

  border: none;
  border-radius: 15px;

  background: rgba(255,255,255,0.15);
  color: white;

  font-size: 30px;
  cursor: pointer;

  z-index: 10;
}

#photoPrev {
  left: 15px;
}

#photoNext {
  right: 15px;
}

#photoNumber {
  position: absolute;
  bottom: 20px;

  color: white;
  font-size: 16px;

  background: rgba(0,0,0,0.5);
  padding: 8px 15px;

  border-radius: 20px;
}

@media (max-width: 600px) {

  #fullPhotoViewer img {
    max-width: 96%;
    max-height: 82%;
  }

  #photoPrev,
  #photoNext {
    width: 42px;
    height: 50px;
    font-size: 24px;
  }

  #photoPrev {
    left: 8px;
  }

  #photoNext {
    right: 8px;
  }

}

`;

document.head.appendChild(fullPhotoStyle);
