// Fonction ready
$(function() {
  // déclaration de ma variable pour travailler sur mon canvas
  var house = document.getElementById('house').getContext('2d');

  // Corps de la maison
  house.fillStyle = 'lightblue';
  house.fillRect(100,150,100,110);

  // Toit de la maison
  house.beginPath();
  house.moveTo(100,150);
  house.lineTo(150,100);
  house.lineTo(200,150);
  house.lineTo(100,150);
  house.closePath();
  house.fillStyle = 'peru';
  house.fill();

  // Fenêtre et porte de la maison
  house.fillStyle = 'pink';
  house.fillRect(110,165,20,20);
  house.fillRect(170,165,20,20);
  house.fillRect(135,210,30,50);
});
