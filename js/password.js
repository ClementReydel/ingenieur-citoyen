function generatePassword() {
    const length = 12;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("generatedPassword").textContent = "Mot de passe généré : " + password;
}

function checkStrength() {
    const password = document.getElementById("passwordInput").value;
    const strengthText = document.getElementById("strength");
    let strengthScore = 0;

    if (password.length >= 8) strengthScore++;
    if (password.length >= 12) strengthScore++;
    if (/[A-Z]/.test(password)) strengthScore++;
    if (/[a-z]/.test(password)) strengthScore++;
    if (/[0-9]/.test(password)) strengthScore++;
    if (/[^A-Za-z0-9]/.test(password)) strengthScore++;

    if (strengthScore <= 2) {
        strengthText.textContent = "⚠️ Très faible : Ajoutez plus de caractères et mélangez les types !";
        strengthText.style.color = "red";
    } else if (strengthScore <= 4) {
        strengthText.textContent = "🔶 Moyen : Ajoutez des majuscules, chiffres et symboles !";
        strengthText.style.color = "orange";
    } else if (strengthScore <= 5) {
        strengthText.textContent = "🟢 Bon : Encore un peu d'amélioration !";
        strengthText.style.color = "green";
    } else {
        strengthText.textContent = "✅ Très fort : Excellent mot de passe !";
        strengthText.style.color = "darkgreen";
    }
}