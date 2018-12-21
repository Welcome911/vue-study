import Vue from 'vue';
import Todo from './components/Todo.vue';
Vue.config.debug = true;
new Vue({
	el: '#app',
	components: {
		'my-todo-list': Todo
	}
})

