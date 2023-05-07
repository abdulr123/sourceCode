for (var a=1; a<=20; a++){
    if (a%3 == 0) {
        document.getElementById("hasil").innerHTML += "<li> <b>Daftar ke "+ a + "</b></li>";
    } else {
        document.getElementById("hasil").innerHTML += "<li> Daftar ke "+ a + "</li>";
    }
}
