window.addEventListener('load', startCarouselTimer);

function startCarouselTimer() {
	const firstButton = document.getElementById('carousel_1');
	const secondButton = document.getElementById('carousel_2');

	let isFirstCarouselActive = true;

	window.setInterval(() => {
		if (isFirstCarouselActive) {
			secondButton.click();
		} else {
			firstButton.click();
		}

		isFirstCarouselActive = !isFirstCarouselActive;
	}, 2000);
}
