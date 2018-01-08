export const buildList = (
	ul: HTMLElement = document.createElement('ul'),
	items: any[],
	callback?: (event: Event, item: object) => any): HTMLElement => {
		ul.innerHTML = '';

		items.forEach((item) => {
			const li = document.createElement('li');
			li.innerHTML = `${item.title} <span class="blue underline pointer">unlink</span>`;

			if (callback) {
				li.querySelector('.pointer').addEventListener('click', (event) => {
					callback(event, item);
				});
			}

			ul.appendChild(li);
		});

		return ul;
};
