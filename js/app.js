// ES5 for older phones
var controller, i;
var datGuiFolderElement = { folder: ' 00' }; // dat.GUI needs an object
var folders = [];
var gui = new dat.GUI();
var numFolders = 50;
var scene = document.querySelector('a-scene');

function run() {
  var playButton = document.getElementById('play-button');
  var video1 = document.getElementById('video1');
  var video2 = document.getElementById('video2');
  var video3 = document.getElementById('video3');
  var video4 = document.getElementById('video4');
  var video5 = document.getElementById('video5');
  var video6 = document.getElementById('video6');
  playButton.innerText = 'START';
  playButton.addEventListener('click', function (e) {
    console.log('button clicked');
    this.style.display = 'none';
    video1.play();
    video2.play();
    video3.play();
    video4.play();
    video5.play();
    video6.play();
  }, false);

  controller.onFinishChange(function (selected) {
    var folder = selected.substring(1); // workaround for dat.GUI bug sorting strings
    localStorage.setItem('folder', folder);
    location.reload();
  });
}

for (i = 1; i <= numFolders; i++) {
  folders.push(i < 10 ? ' 0' + i : ' ' + i); // the leading space is a workaround for a dat.GUI bug sorting strings
}

controller = gui.add(datGuiFolderElement, 'folder', folders);
folder = localStorage.getItem('folder');
if (folder == null) {
  folder = '01'; // default
}
controller.setValue(folder);

document.getElementById('video1').setAttribute('src', `assets/${folder}/dimension1.mp4`);
document.getElementById('video2').setAttribute('src', `assets/${folder}/dimension2.mp4`);
document.getElementById('video3').setAttribute('src', `assets/${folder}/dimension3.mp4`);
document.getElementById('video4').setAttribute('src', `assets/${folder}/dimension4.mp4`);
document.getElementById('video5').setAttribute('src', `assets/${folder}/dimension5.mp4`);
document.getElementById('video6').setAttribute('src', `assets/${folder}/dimension6.mp4`);

if (scene.hasLoaded === true) { run(); } else { scene.addEventListener('loaded', run); }
