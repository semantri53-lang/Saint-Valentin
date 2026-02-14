const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsZone = document.querySelector(".buttons");

/* --- LOGIQUE DU BOUTON NON (FUITE) --- */
noBtn.style.position = "absolute";

function moveButton() {
    const zoneRect = buttonsZone.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = zoneRect.width - btnRect.width;
    const maxY = zoneRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});

/* --- LOGIQUE DU CADENAS (BOUTON OUI) --- */

function checkUnlock() {
    // Utilisation de sessionStorage pour une session unique
    const isUnlocked = sessionStorage.getItem("valentineUnlocked");
    
    if (isUnlocked === "true") {
        window.location.href = 'rose.html';
    } else {
        alert("Action impossible ! Trouve d'abord la bonne image pour débloquer ton cadeau... 🧐");
    }
}

/* --- INITIALISATION AU CHARGEMENT --- */

window.addEventListener('load', () => {
    // Vérifier si le bouton Oui doit être déverrouillé pour CETTE session
    const isUnlocked = sessionStorage.getItem("valentineUnlocked");
    
    if (isUnlocked === "true") {
        yesBtn.innerHTML = "Oui 💖";
        yesBtn.style.background = "#ff4d88"; 
        yesBtn.style.opacity = "1";
        yesBtn.style.cursor = "pointer";
    } else {
        // État verrouillé par défaut
        yesBtn.innerHTML = "🔒 Oui (Verrouillé)";
        yesBtn.style.opacity = "0.7";
        yesBtn.style.cursor = "not-allowed";
    }

    // Timer pour l'indice sur l'image 5 (après 20 secondes)
    const img5 = document.querySelector('.images img:nth-child(5)');
    setTimeout(() => {
        if (img5) {
            img5.classList.add('winner-active');
        }
    }, 20000); 
});
