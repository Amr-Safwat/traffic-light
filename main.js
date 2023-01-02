let counter = document.querySelector('.counter');
let spans = document.getElementsByTagName('span');
let icons = document.getElementsByTagName('i');

function countRed() {
  icons[1].style.display = 'inline';
	counter.innerHTML = '1';
	counter.style.color = 'red';
	let id = setInterval(() => {
		if (counter.innerHTML !== '10') {
			counter.innerHTML++;
		} else {
			countGreen();
			clearInterval(id);
			spans[2].classList.add('active-g');
			spans[0].classList.remove('active-r');
		}
	}, 1000);
}
function countOrange() {
	counter.innerHTML = '1';

	let id = setInterval(() => {
		if (counter.innerHTML !== '5') {
			counter.innerHTML++;
		} else {
			countRed();
			clearInterval(id);
			spans[1].classList.remove('active-o');
			spans[0].classList.add('active-r');
		}
	}, 1000);
	counter.style.color = 'orange';
}
function countGreen() {
  icons[1].style.display = 'none';
	counter.innerHTML = '1';
	spans[2].classList.add('active-g');
	let id = setInterval(() => {
		if (counter.innerHTML !== '20') {
			counter.innerHTML++;
		} else {
			countOrange();
			spans[1].classList.add('active-o');
			spans[2].classList.remove('active-g');
			clearInterval(id);
		}
	}, 1000);
	counter.style.color = 'green';
}

countRed();
