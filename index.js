var i = 0;
var txt = 'Creative copywriting met een scherpe toon en een knipoog. Wij praten met mensen, niet tegen ze.';
var speed = 75;



document.addEventListener('DOMContentLoaded', function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
 }, false);