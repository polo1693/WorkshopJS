<template>
<div>
  <div>
    {{headerName}}
    </div>
    <ul>
        <li v-for="(todo, index) in toDoListItems" :key="index">
    <ToDo 
        :text="todo.text"
        :input-name="todo.inputName"
        :input-value="todo.inputValue"
    />
        </li>
    </ul>
    <input
     v-model="newToDoText"
     v-on:keyup.enter="addTodo(newToDoText)"
     />
    <button @click="addTodo(newToDoText)">Add new item</button>
</div>
</template>

<script>
import ToDo from './ToDo.vue'
export default {
      name: 'ToDoList',
      props:{
         headerName: String
},
methods: {
addTodo(newText) {
    this.toDoListItems.push({
         text: newText,
         inputName: newText.replace(' ', '-'),
         inputValue:  newText.replace(' ', '-')
    })
    this.newToDoText = '';
}
},
data() {
    return {
        newToDoText: 'default',
        toDoListItems: [
            {
            text: 'shopping',
            inputName: 'shopping',
            inputValue: 'value'
        },
        {
            text: 'homework',
            inputName: 'homework',
            inputValue: 'value'
        },
        {
            text: 'cleaning',
            inputName: 'cleaning',
            inputValue: 'value'
        }
        ]
    }
},
    components:{
        ToDo
    }
}
</script>
