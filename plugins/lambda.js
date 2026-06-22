
var lambda_clientVersionElement = document.createElement("p")
lambda_clientVersionElement.innerText = "Lambda Client 1.0.0"
lambda_clientVersionElement.className = "lambdaClientVersion"

var lambda_tianluGif = document.createElement("img")
lambda_tianluGif.src = "https://media.tenor.com/jYtYuqYSQ6MAAAAi/dance-fabulous-beasts.gif"
lambda_tianluGif.style.position = "fixed"
lambda_tianluGif.style.bottom = "-7px"
lambda_tianluGif.style.left = "32px"
lambda_tianluGif.style.width = "200px"
var lambda_styleSheets = document.createElement("style")
lambda_styleSheets.innerHTML = `
.chat-log {
        backdrop-filter: blur(8px);
}
body {
        background-color: transparent;
        overflow-x: hidden
}
main {
        backdrop-filter: blur(32px);
        padding: 64px;
        border-radius: 16px;
        width: max-content;
        max-width: 60vw !important;
        background: #00000040;
        position: absolute;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);

}
character-preview {
        border-radius: 16px;
        background: transparent !important
}
.lambdaCoolBg {
        z-index: -15;
        position: fixed;
        left: 0;
        top: 0;
        width: 500vw;
        height: 500vh;
        image-rendering: pixelated;
        object-fit: cover;
        transition: transform 30s linear;
        transform: translate(0px, 0px);
        filter: brightness(0.8)
}
.lambdaClientVersion {
        z-index: 999999999;
        position: fixed;
        right: 4px;
        bottom: 4px;
        margin: 0;
        opacity: 0.6
}
.navbar {
        z-index: 4;
}
.navbarBg {
        z-index: 3;
        background: linear-gradient(180deg,rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 64px
}
menu-item:nth-of-type(3),
menu-item:nth-of-type(4) {
        display: none;
}
play-notice {
        display: none
}
footer {
        position: fixed;
        width: 80vw;
        bottom: 0;
        left: 10vw;
        height: fit-content;
        z-index: -2
}
support-button {
        position: absolute;
        left: 50%;
        bottom: 8px;
        transform: translateX(-50%);
        width: 400px
}
.home-logo {
        object-fit: contain;
        height: max-content !important;
        margin-bottom: -30px
}
.btn-default {
        background-color: #00000020;
        border: none;
        color: white !important;
        height: 34px
}
input {
        background-color: #00000020 !important;
        border: none;
        outline: none
}
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #ffffff00
}
*::-webkit-scrollbar-track {
  background-color: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 20px;
  min-height: 80px;
}
*::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}
`

var navbarBg = document.createElement("div")
navbarBg.className = "navbarBg"
var lambda_coolBackground = document.createElement("img")
lambda_coolBackground.className = "lambdaCoolBg"
lambda_coolBackground.src = "https://i.ibb.co/GfC70KZN/Ponytown-Map-Spring-2025.webp"
const maxX = window.innerWidth * 4;
const maxY = window.innerHeight * 4;
function moveBackground() {
    const x = Math.random() * -maxX;
    const y = Math.random() * -maxY;

    lambda_coolBackground.style.transform = `translate(${x}px, ${y}px)`;
}

window.addEventListener('webpageLoaded', () => {
        document.body.appendChild(lambda_clientVersionElement)
        document.head.appendChild(lambda_styleSheets)
        document.body.appendChild(lambda_tianluGif)
        document.body.appendChild(lambda_coolBackground)
        document.body.appendChild(navbarBg)
        setTimeout(moveBackground, 100)
        setInterval(moveBackground, 30000);
        document.querySelectorAll("footer *, footer .text-muted").forEach(el => {
                el.style.setProperty("color", "white", "important");
        });
        document.querySelector(".home-logo").src = "https://i.ibb.co/0yDD453F/image.png"
});
window.addEventListener("gameplayStarted", () => {
        lambda_tianluGif.style.top = "3000vh"
});
