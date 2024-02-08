let billetter = [];

function visBilletter(){
    let ut =
        "<table><tr>" +
        "<th>Film</th><th>Seter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Mail</th>" +
        "</tr>";
    for (let b of billetter){
        ut+="<tr>";
        ut+="<td>"+b.film+"</td><td>"+b.seter+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.tlf+"</td><td>"+b.mail+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billetter").innerHTML=ut;
}

function registrerBillett(){
    const film = document.getElementById("film").value;
    const seter = document.getElementById("seter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const tlf = document.getElementById("tlf").value;
    const mail = document.getElementById("mail").value;

    const feilFilm = document.getElementById("feilFilm");
    const feilMail = document.getElementById("feilMail");
    // søkte opp dette under for å finne måte å feilsøke mail.
    const sjekkMail = /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const feilSeter = document.getElementById("feilSeter");
    const feilFnavn = document.getElementById("feilFnavn");
    const feilEnavn = document.getElementById("feilEnavn");
    const feilTlf = document.getElementById("feilTlf");

    if (film === "") {
        feilFilm.textContent = "Velg en film!";
        slettInput();
        return;
    } else feilFilm.textContent = "";

    if (isNaN(seter) || !Number.isInteger(Number(seter)) || Number(seter) <=  0){
        feilSeter.textContent = "Skriv antall seter!";
        slettInput();
        return;
    } else feilSeter.textContent = "";

    if (typeof fornavn != "string" || fornavn.trim().length === 0|| /\d/.test(fornavn)){
        feilFnavn.textContent = "Skriv inn ett gyldig fornavn!";
        slettInput();
        return;
    } else feilFnavn.textContent ="";

    if (typeof etternavn != "string" || etternavn.trim().length === 0 || /\d/.test(etternavn)) {
        feilEnavn.textContent = "Skriv inn ett gyldig etternavn!";
        slettInput();
        return;
    } else feilEnavn.textContent = "";

    if (isNaN(tlf || !Number.isFinite(tlf))){
        feilTlf.textContent = "Skriv inn ett gyldig telefonummer!";
        slettInput();
        return;
    } else feilTlf.textContent = "";

    if (!sjekkMail.test(mail)) {
        feilMail.textContent = "Skriv en gyldig e-postadresse!";
        slettInput();
        return;
    } else feilMail.textContent = "";


    const enBillett = {
        film: film,
        seter: seter,
        fornavn: fornavn,
        etternavn: etternavn,
        tlf: tlf,
        mail: mail
    };
    billetter.push(enBillett);
    slettInput()
    visBilletter()
}

function slettInput() {
    document.getElementById("film").value = "";
    document.getElementById("seter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("mail").value = "";





}
function slettAlt() {
    billetter = [];
    visBilletter();
}