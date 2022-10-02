const tagsEl = document.querySelector('.tags');
const textArea = document.getElementById('choices');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
	createTags(e.target.value);
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		console.log(tag);
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}
