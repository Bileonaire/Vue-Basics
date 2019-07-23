const colours = ['red', 'blue', 'green', 'indigo', 'yellow'];

const book = new Vue({
	el: '#book',
	data: {
		rainbow: colours,
		title: 'The Sirens of Titan',
		author: 'Kurt Vonnegut',
		summary: 'This is a summary of the Sirens of Titan.',
		showDetail: false,
	},
	methods: {
		toggleDetails: function() {
			this.showDetail = !this.showDetail;
		},
	},
});
