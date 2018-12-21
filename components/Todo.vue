<template>
	<div>
		<input v-model="myTodo" placeholder="todo" @keyup.enter="addTodo"/>
		<button v-on:click="addTodo">add</button>
		<ul v-show="todos.length">
			<li v-for="(todo, index) in todos"
				:key="index"
				:class="{finished: todo.complete}"
				v-on:click="todo.complete = !todo.complete">
				<input type="checkbox" :checked="todo.complete"/>
				<label>{{todo.name}}</label>
				<button v-on:click="todos.splice(index, 1)" class="delete-btn">X</button>
			</li>
		</ul>
		<!-- <slot name="test">test</slot> -->
	</div>
</template>
<script type="text/javascript">
	export default {
		created: function(){
			//alert('todo list created!!!');
		},
		mounted: function() {
			// alert('mounted')
		},
		props: ['customizeList'],
		data: function(){
			return {
				myTodo:'',
				todos:[
					{name:'reading vue books', complete: true},
					// {name:'react', complete:false},
					{name:'angular js', complete: false}
				]
			}
		},
		methods:{
			addTodo: function() {
				if (this.myTodo.trim().length) {
					this.todos.push({name:this.myTodo, complete: false});
				}
				this.myTodo='';
			}
		}
	}
</script>
<style type="text/css">
	ul{
		padding: 0;
	}
	button{
		border-radius: 5px;
		padding: 2px;
		/*color: yellow;*/
		width: 50px;
	}
	li{
		list-style: none;
	}
	.delete-btn{
		margin-left: 5px;
		width: 20px;
	}
	.finished{
		color:#aaa;
		text-decoration: line-through;
	}
</style>
