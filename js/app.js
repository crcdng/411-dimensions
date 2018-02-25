// ES5 for older phones
var controller, i;
var datGuiFolderElement = { folder: ' 00' }; // dat.GUI needs an object
var folders = [];
var gui = new dat.GUI();
var numFolders = 50;
var scene = document.querySelector('a-scene');

function run() {
  controller.onFinishChange(function (selected) {
    var folder = selected.substring(1); // workaround for dat.GUI bug sorting strings

    localStorage.setItem('folder', folder);
    document.getElementById('panel1').setAttribute('src', `assets/${folder}/dimension1.mp4`);
    document.getElementById('panel2').setAttribute('src', `assets/${folder}/dimension2.mp4`);
    document.getElementById('panel3').setAttribute('src', `assets/${folder}/dimension3.mp4`);
    document.getElementById('panel4').setAttribute('src', `assets/${folder}/dimension4.mp4`);
    document.getElementById('panel5').setAttribute('src', `assets/${folder}/dimension5.mp4`);
    document.getElementById('panel6').setAttribute('src', `assets/${folder}/dimension6.mp4`);
  });
}

for (i = 1; i < numFolders; i++) {
  folders.push(i < 10 ? ' 0' + i : ' ' + i); // the leading space is a workaround for a dat.GUI bug sorting strings
}

controller = gui.add(datGuiFolderElement, 'folder', folders);
folder = localStorage.getItem('folder');
if (folder == null) {
  folder = '01'; // default
}
controller.setValue(folder);

if (scene.hasLoaded === true) { run(); } else { scene.addEventListener('loaded', run); }
