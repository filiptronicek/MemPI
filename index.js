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
	if (e.which == 13) {
		$.get(
			'https://api.pi.delivery/v1/pi',
			{
				start: 0,
				numberOfDigits: document.getElementById('input').value
			},
			function(data) {
				console.log('Showing ' + document.getElementById('input').value + ' digits of pi');
				console.log(data.content);
				$('#inputpage').hide();
				$('#conentpage').show();
				Main(data.content, document.getElementById('input').value);
			}
		);
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
	/*
	piray.forEach(piDis);
	function piDis(current) {
		console.log(current);
		//document.write(current);
		piTimer = setInterval(() => {
			document.getElementById('pi').innerHTML += current;
		}, 1000);
	}
	*/
	/*
	piLength = piray.length;

	if (piray[2] > 1) {
		alert('shiiit');
	} else {
		console.log(piray.length);
	}
	*/
	ShowPime();
	function ShowPime() {
		if (piCountLength < piLength) {
			if (piCountLength > -1) {
				currNumTxt = piray[piCountLength];
				currPosTxt = piCountLength + 1;
				sfx.play();
			}
			piCountLength++;
		}
		document.getElementById('pi').innerHTML = currNumTxt;
		document.getElementById('pos').innerHTML = currPosTxt;

		setTimeout(ShowPime, 500);
	}
}
