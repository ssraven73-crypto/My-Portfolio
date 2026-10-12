const audio = document.getElementById("myAudio");

function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
}

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}

let divlist = document.querySelectorAll('.main');

for(i = 0; i < divlist.length; i++) {
  let elem = divlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "lightskyblue"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "royalblue"));
}

let headerlist = document.querySelectorAll('.words');

for(i = 0; i < headerlist.length; i++) {
  let elem = headerlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "dodgerblue"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}

let paragraphlist = document.querySelectorAll('.title');

for(i = 0; i < paragraphlist.length; i++) {
  let elem = paragraphlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "lightcyan"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}
let goldlist = document.querySelectorAll('.gold');

for (i = 0; i < goldlist.length; i++) {
  let elem = goldlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "gold"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}

let forestlist = document.querySelectorAll('.forestgreen');

for (i = 0; i < forestlist.length; i++) {
  let elem = forestlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "forestgreen"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}

let redlist = document.querySelectorAll('.red');

for (i = 0; i < redlist.length; i++) {
  let elem = redlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "red"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}

let cyanlist = document.querySelectorAll('.darkcyan');

for (i = 0; i < cyanlist.length; i++) {
  let elem = cyanlist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "darkcyan"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}

let royalbluelist = document.querySelectorAll('.royalblue');

for (i = 0; i < royalbluelist.length; i++) {
  let elem = royalbluelist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "royalblue"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));

}

let purplelist = document.querySelectorAll('.purple');

for (i = 0; i < purplelist.length; i++) {
  let elem = purplelist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "purple"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}

let bluelist = document.querySelectorAll('.blue');

for (i = 0; i < bluelist.length; i++) {
  let elem = bluelist[i];
  elem.addEventListener("mouseover", changeelemcolor.bind(null, elem, "blue"));
  elem.addEventListener("mouseout", changeelemcolor.bind(null, elem, "transparent"));
}
function changeelemcolor(elem, c) {
  elem.style.backgroundColor = c;
}
function changeBackgroundImage(imageFile) {
  document.body.style.backgroundImage = `url('${imageFile}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
function swapImage(imageFile, linkFile) {
  document.getElementById("swapImage").src = imageFile;
  document.getElementById("imageLink").href = linkFile;
}
function swapBottomImage(imageFile, linkFile) {
  const img = document.getElementById("bottomSwapImage");
  const link = document.getElementById("bottomImageLink");

  if (img && link) {
    img.src = imageFile;
    link.href = linkFile;
  }

  const img2 = document.getElementById("bottomSwapImage2");
  const link2 = document.getElementById("bottomImageLink2");

  if (img2 && link2) {
    img2.src = imageFile;
    link2.href = linkFile;
  }
}
function changeLayout(type) {
  const container = document.getElementById("memeContainer");
  if (type === "grid") {
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(3, 1fr)";
    container.style.gap = "10px";
  } else {
    container.style.display = "block";
  }
}
document.querySelectorAll('.images img').forEach(img => {
  img.addEventListener("mousedown", () => {
    img.style.transform = "scale(0.9)";
  });
  img.addEventListener("mouseup", () => {
    img.style.transform = "scale(1)";
  });
});
document.querySelectorAll('.images img').forEach(img => {
  img.addEventListener("dblclick", () => {
    img.style.width = "500px";
    img.style.height = "auto";
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    document.getElementById("memeContainer").style.display = "none";
  }
  if (event.key === "s") {
    document.getElementById("memeContainer").style.display = "block";
  }
});




