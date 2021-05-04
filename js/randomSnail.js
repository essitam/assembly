function snail(){
  const snailLinks = ["Chain2-text.html", "pacing.html", "Chain2-textwave.html", "collatz-text2.html", "Smoothing-text-moves.html", "space.html"];
  const randomLink = Math.floor(Math.random() * snailLinks.length);
  var snailHref = document.createElement('a');
  snailHref.setAttribute('href', snailLinks[randomLink]);
  var snailImage = document.createElement("img");
  snailImage.setAttribute('src', "../images/snail.png");
  snailImage.setAttribute('id', "footer");
  snailImage.setAttribute('style', "width:100px");
  snailHref.appendChild(snailImage);
  // document.body.appendChild(snailHref);
  document.getElementById("snailspot").appendChild(snailHref);
}
snail();
