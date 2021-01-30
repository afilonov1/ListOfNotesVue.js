const App = {
	data() {
		return {
			placeholderString: 'Введите название заметки',
			title: 'Список заметок',
			inputValue: '',
			notes: ['Заметка 1', 'Заметка 2', 'Заметка 4']
		}
	},
	methods: {
		addNewNote() {
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue);
				this.inputValue = '';
			}
		},
		removeNote(index) {
			this.notes.splice(index, 1);
		}
	},
	watch: {
		inputValue(value) {
			if (value.length > 40) {
				this.inputValue = '';
			}
		}
	}
}

Vue.createApp(App).mount('#app');