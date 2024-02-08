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

    const enBillett = {
        film: film,
        seter: seter,
        fornavn: fornavn,
        etternavn: etternavn,
        tlf: tlf,
        mail: mail
    };
    billetter.push(enBillett);
    document.getElementById("film").value="";
    document.getElementById("seter").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("tlf").value="";
    document.getElementById("mail").value="";
    visBilletter()
}



function slettAlt() {
    billetter = [];
    visBilletter();
}

