function tarkistaID() {
    const userIDInput = document.getElementById("ID");
    const userIDError = document.getElementById("IDError");

    if (userIDInput.value.length < 5) {
        userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.";
    } else {
        userIDError.textContent = "";
    }
}
