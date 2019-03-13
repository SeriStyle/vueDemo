<template>
  <div>
	
    <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo" :proptext='a' />
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" @a="hello" @b='hello2' />
		</ul>
	
    <p v-else>
				<h2>
						{{todoprams}}
					</h2>
      Nothing left in the list. Add a new todo in the input above.
    </p>
    <ul>
      <li v-for="item in list" :key="item">{{item}} <button @click="removeList(item)">x</button> </li>
		</ul>
		
		<!-- vuex3 demo -->
 

		 
  </div>
</template>

<script>
  import BaseInputText from './BaseInputText.vue'
	import TodoListItem from './TodoListItem.vue'
	import {mapState}from 'vuex'

  let nextTodoId = 1

  export default {
    components: {
      BaseInputText,
      TodoListItem
    },
    data() {
      return {
        newTodoText: '',
        a: 'props',
        todos: [
          // {
          // 	id: nextTodoId++,
          // 	text: 'Learn Vue'
          // },
          // {
          // 	id: nextTodoId++,
          // 	text: 'Learn about single-file components'
          // },
          // {
          // 	id: nextTodoId++,
          // 	text: 'Fall in love'
          // }
        ],
				list: [1, 2, 3, 4, 5, 6],
		
      }
		},
		computed:{
			...mapState({
				      todoprams:state=>state.todoprams
			})
			// todoprams(){
			// 	return this.$store.getters.getToDo;
			// }
		}
		,
    created() {
      console.log("todo--------------------------");
		},
		mounted() {
		 console.log(mapState(['todoprams']));
	
		},
    methods: {
      addTodo() { //回车键事件
        console.log(this.newTodoText.trim());
        const trimmedText = this.newTodoText.trim()
        if (trimmedText) {
          this.todos.push({
            id: nextTodoId++,
            text: trimmedText
          })
          this.newTodoText = ''
        }
      },
      removeTodo(idToRemove) {
        // var index = this.todos.indexOf(todo)
        // this.todos.splice(index, 1)

        this.todos = this.todos.filter(todo => {
          console.log(idToRemove);
          return todo.id !== idToRemove
        })
      },
      hello(e) {
        console.log(e);
      },
      hello2(e) {
        console.log(e);
      },
      removeList(item) {
        this.list = this.list.filter(todo => {
          return todo !== item
        })

      }
    }
  }

</script>
