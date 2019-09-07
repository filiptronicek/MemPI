var contentDiv = document.getElementById('contentpage');
var piDiv = document.getElementById('pi');
var piTimer;
var piLength;
var piCountLength = 0;
var currNumTxt = '';
var currPosTxt = '';
var file = '250ts.txt';
$('#conentpage').hide();

var sfx = new Audio('sound/blob.mp3');


$(document).on('keypress', function(e) {
	console.log('Key pressed');
	if (e.which == 13) {
		console.log('Enter pressed');
		if(document.getElementById('input').value <= 250000) {
			file = "250ts.txt";
		} else if (document.getElementById('input').value <= 500000) {
			file = "500ts.txt";
		} else if (document.getElementById('input').value <= 1000000) {
			file = "milion.txt";
		} else {
			file = "25mil.txt";	
		}
		$.get("/txt/"+	file, {}, function(data) {
			console.log('Got the file');

			console.log('Showing ' + document.getElementById('input').value + ' digits of pi');
			console.log(data);
			$('#inputpage').hide();
			$('#conentpage').show();
			Main(data, (document.getElementById('input').value)+2);
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
		document.getElementById('pi').innerHTML = "Position: "+currPosTxt;
		document.getElementById('pos').innerHTML = currNumTxt;

		setTimeout(ShowPime, 800);
	}
}
