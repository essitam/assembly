var photos_of_artworks=["<img src=\"assets/assets/accesislove/1-_MG_0071.jpg\"/>", "<img src=\"assets/assets/accesislove/13-_MG_0056.jpg\"/>", "<img src=\"assets/assets/accesislove/17-_MG_0054.jpg\"/>", "<img src=\"assets/assets/accesislove/3-_MG_0075.jpg\"/>", "<img src=\"assets/assets/accesislove/7-_MG_0079.jpg\"/>", "<img src=\"assets/assets/accesislove/10-_MG_0101.jpg\"/>", "<img src=\"assets/assets/accesislove/14-_MG_0061.jpg\"/>", "<img src=\"assets/assets/accesislove/18-_MG_0067.jpg\"/>", "<img src=\"assets/assets/accesislove/4-_MG_0076.jpg\"/>", "<img src=\"assets/assets/accesislove/8-_MG_0086.jpg\"/>", "<img src=\"assets/assets/accesislove/11-_MG_0064.jpg\"/>", "<img src=\"assets/assets/accesislove/15-_MG_0050.jpg\"/>", "<img src=\"assets/assets/accesislove/19-_MG_0070.jpg\"/>", "<img src=\"assets/assets/accesislove/5-_MG_0077.jpg\"/>", "<img src=\"assets/assets/accesislove/9-_MG_0087.jpg\"/>", "<img src=\"assets/assets/accesislove/12-_MG_0066.jpg\"/>", "<img src=\"assets/assets/accesislove/16-_MG_0052.jpg\"/>", "<img src=\"assets/assets/accesislove/2-_MG_0042.jpg\"/>", "<img src=\"assets/assets/accesislove/6-_MG_0078.jpg\"/>"]

function lexicon(photos_of_artworks){
for (var i = 0; i< photos_of_artworks.length; i++){
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "app"+i);
  newDiv.setAttribute("class", "child");
  newDiv.innerHTML = photos_of_artworks[i];
  document.getElementById("parentChild").appendChild(newDiv);
  randomPosition();
}
}

lexicon(photos_of_artworks);
