function tampilPesan() {
  var pesan = document.getElementById("pesan");
  var audio = document.getElementById("loveMusic");
  pesan.classList.add("visible");
  audio.play();
}
