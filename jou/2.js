// Animacja przesuwająca tekst w sekcji z życzeniami
window.onload = function () {
    let message = document.getElementById('birthdayAnimation');
    let messages = ["🎉 Wesołych Urodzin, Kochanie!", "🎂 Życzę Ci spełnienia marzeń!", "❤️ Miłość, szczęście i uśmiech na każdy dzień!"];
    let currentMessage = 0;
    
    setInterval(function () {
        message.textContent = messages[currentMessage];
        currentMessage = (currentMessage + 1) % messages.length;
    }, 3000);
};

// Funkcja do przesyłania życzeń
function submitMessage() {
    let userMessage = document.getElementById('userMessage').value;
    if (userMessage) {
        alert("Twoje życzenia zostały wysłane! Dziękujemy!");
    } else {
        alert("Proszę napisać życzenia przed wysłaniem.");
    }
}
