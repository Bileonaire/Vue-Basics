const helloWorld = new Vue({
	el: '#helloVue',
	data: {
		title: 'Hello, World!',
		message: 'this is aLEOn',
	},
});

const example = new Vue({
	el: '#example',
	data: {
		title: 'Hello, example!',
		message: 'this is example',
		img: {
			src: 'https://placeimg.com/200/200/animals',
			alt: 'A placeholder image of animals',
		},
	},
});
