var contentDiv = document.getElementById('contentpage');
var piDiv = document.getElementById('pi');
var piTimer;
var piLength;
var piCountLength = 0;
var currNumTxt = '';
var currPosTxt = '';
$('#conentpage').hide();

var sfx = new Audio('blob.mp3');

$(document).on('keypress', function(e) {
	console.log('Key pressed');
	if (e.which == 13) {
		console.log('Enter pressed');

		$.get('milion.txt', {}, function(data) {
			console.log('Got the file');

			console.log('Showing ' + document.getElementById('input').value + ' digits of pi');
			console.log(data);
			$('#inputpage').hide();
			$('#conentpage').show();
			Main(data, document.getElementById('input').value);
		});
	}
});
function wait(ms) {
	var d = new Date();
	var d2 = null;
	do {
		d2 = new Date();
	} while (d2 - d < ms);
}

function Main(content, count) {
	console.log('shiiit ' + count);
	var piray = content.split('');
	console.log(piray);
	piLength = piray.length;

	ShowPime();
	function ShowPime() {
		if (document.getElementById('input').value > currPosTxt) {
			if (piCountLength < piLength) {
				if (piCountLength > -1) {
					currNumTxt = piray[piCountLength];
					currPosTxt = piCountLength + 1;
					sfx.play();
				}
				piCountLength++;
			}
		}
		document.getElementById('pi').innerHTML = currNumTxt;
		document.getElementById('pos').innerHTML = currPosTxt;

		setTimeout(ShowPime, 400);
	}
}
