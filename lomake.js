function tarkistaID() {
    const userIDInput = document.getElementById("ID");
    const userIDError = document.getElementById("IDError");

    if (userIDInput.value.length < 5) {
        userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.";
    } else {
        userIDError.textContent = "";
    }
}

function tarkistaSalasana() {
    const salasanaInput = document.getElementById("salasana");
    const salasanaError = document.getElementById("salasana-error");

    if (salasanaInput.value.length < 8 || !validatePassword(salasanaInput.value)) {
        salasanaError.textContent = "Salasanan pituuden tulee olla vähintään 8 merkkiä ja sisältää vähintään yksi iso kirjain, yksi pieni kirjain, numero ja erikoismerkki.";
    } else {
        salasanaError.textContent = "";
    }
}

function validatePassword(password) {
    // Tarkistetaan, että salasana täyttää vaatimukset
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,}$/;
    return passwordPattern.test(password);
}

function tarkistaNimi() {
    const nimiInput = document.getElementById("nimi");
    const nimiError = document.getElementById("nimi-error");

    const nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/; // Sallii kirjaimet, välilyönnit ja ääkköset

    if (!nimiPattern.test(nimiInput.value)) {
        nimiError.textContent = "Nimi voi sisältää vain kirjaimia, välilyöntejä ja ääkkösiä.";
    } else {
        nimiError.textContent = "";
    }
}

function tarkistaOsoite() {
    const osoiteInput = document.getElementById("osoite");
    const osoiteError = document.getElementById("osoite-error");

    const osoitePattern = /^[A-Za-z0-9ÄÖÅäöå\s]+$/; // Sallii kirjaimet, numerot, välilyönnit ja ääkköset

    if (!osoitePattern.test(osoiteInput.value)) {
        osoiteError.textContent = "Osoite voi sisältää kirjaimia, numeroita, välilyöntejä ja ääkkösiä.";
    } else {
        osoiteError.textContent = "";
    }
}

function tarkistaMaa() {
    const maaInput = document.getElementById("maa");
    const maaError = document.getElementById("maa-error");

    if (maaInput.value === "valitse") {
        maaError.textContent = "Valitse vähintään yksi maa.";
    } else {
        maaError.textContent = "";
    }
}

function tarkistaPostinumero() {
    const postinumeroInput = document.getElementById("postinumero");
    const postinumeroError = document.getElementById("postinumero-error");

    if (!/^\d{5}$/.test(postinumeroInput.value)) {
        postinumeroError.textContent = "Postinumeron pitää olla 5 numeroa.";
    } else {
        postinumeroError.textContent = "";
    }
}

function tarkistaEmail(emailInput, emailError) {
    console.log(emailInput);
    console.log(emailError);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.value.length === 0) {
        emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    } else {
        emailError.textContent = '';
    }
}

function tarkistaSukupuoli() {
    const sukupuoliError = document.getElementById("sukupuoli-error");
    console.log(sukupuoliError);
    const sukupuoliInputs = document.getElementsByName("sukupuoli");
    let sukupuoliValittu = false;

    for (let i = 0; i < sukupuoliInputs.length; i++) {
        if (sukupuoliInputs[i].checked) {
            sukupuoliValittu = true;
            break; // Jos jokin sukupuolen vaihtoehto on valittu, poistu loopista
        }
    }

    if (!sukupuoliValittu) {
        sukupuoliError.textContent = "Valitse sukupuoli.";
    } else {
        sukupuoliError.textContent = "";
    }
}

function tarkistaKieli() {
    const kieliError = document.getElementById("kieli-error");

    const kieliInputs = document.getElementsByName("kieli");
    let kieliValittu = false;

    for (let i = 0; i < kieliInputs.length; i++) {
        if (kieliInputs[i].checked) {
            kieliValittu = true;
            break; // Jos jokin kielen vaihtoehto on valittu, poistu loopista
        }
    }

    if (!kieliValittu) {
        kieliError.textContent = "Valitse vähintään yksi kieli.";
    } else {
        kieliError.textContent = "";
    }
}


function validateForm(event) {
    event.preventDefault(); // Estä lomakkeen lähettäminen oletuksena
    
    // Tarkista kaikki kentät ja päivitä virheilmoitukset
    tarkistaID();
    tarkistaSalasana();
    tarkistaNimi();
    tarkistaOsoite();
    tarkistaMaa();
    tarkistaPostinumero();
    tarkistaEmail(document.getElementById("email"), document.getElementById("email-error"));

    tarkistaSukupuoli();
    tarkistaKieli();
    const userIDError = document.getElementById("IDError");
    // Tarkista, onko jossain kentässä vielä virheitä
    if (
        document.getElementById("IDError").textContent !== "" || 
        document.getElementById("salasana-error").textContent !== "" || 
        document.getElementById("nimi-error").textContent !== "" ||
        document.getElementById("sukupuoli-error").textContent !== "" || 
        document.getElementById("kieli-error").textContent !== "" || 
        document.getElementById("osoite-error").textContent !== "" || 
        document.getElementById("maa-error").textContent !== "" || 
        document.getElementById("postinumero-error").textContent !== "" || 
        document.getElementById("email-error").textContent !== ""
    ) {
        // Jos kentissä on virheitä, älä lähetä lomaketta
        return false;
    }

    // Kaikki kentät ovat kunnossa, voit lähettää lomakkeen
    alert("Lomake lähetetty onnistuneesti!");
    document.getElementById("lomake").reset(); // Tyhjennä lomake

    const ilmoitus = document.getElementById('ilmoitus');
    ilmoitus.style.display = 'block';

    return true;
}
