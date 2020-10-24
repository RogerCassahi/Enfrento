function configInfo() {
    var nome = document.getElementById("nome-").value;
    var idade = document.getElementById("idade-").value;
    var cidade = document.getElementById("cidade-").value;
    var modalidades = document.getElementById("modalidades-").value;
    var face = document.getElementById("face-").value;
    var insta = document.getElementById("insta-").value;
    var twitter = document.getElementById("twitter-").value;
    var youtube = document.getElementById("ytube-").value;
    var hist = document.getElementById("histcomp").value;



    document.getElementById("nomecompleto").innerHTML = nome;
    document.getElementById("idade-").innerHTML = idade;
    document.getElementById("cidade").innerHTML = cidade;
    document.getElementById("esportes").innerHTML = modalidades;
    document.getElementById("face-").innerHTML = face;
    document.getElementById("insta-").innerHTML = insta;
    document.getElementById("twitter-").innerHTML = twitter;
    document.getElementById("ytube-").innerHTML = youtube;
    document.getElementById("titulo").innerHTML = hist;
}