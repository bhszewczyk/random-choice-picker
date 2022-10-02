const tagsEl = document.querySelector('.tags');
const textArea = document.getElementById('choices');

textArea.focus();

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');

	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	if (!tag) {
		return;
	}
	tag.classList.add('highlight');
}

function unHiglightTag(tag) {
	if (!tag) {
		return;
	}
	tag.classList.remove('highlight');
}

function selectRandomChoice() {
	const min = 10;
	const max = 30;
	const times = Math.floor(Math.random() * (max - min) + min);

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		highlightTag(randomTag);

		setTimeout(() => {
			unHiglightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		});
	}, times * 100);
}

textArea.addEventListener('keyup', (e) => {
	if (!e.target.value.trim()) {
		console.log('nima');
		return;
	}

	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		selectRandomChoice();
	}
});
