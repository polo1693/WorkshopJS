<template>
<div>
  <div>
    {{headerName}}
    <ToDo 
        text = 'I have a bike'
        input-name = 'bike'
        input-value = 'Bike'
    />
    <ToDo text = 'I have a nike'/>
    <ToDo text = 'I have a mike'/>
    </div>
  
</div>
</template>

<script>
import ToDo from './ToDo.vue'
export default {
      name: 'ToDoList',
      props:{
         headerName: String
},
    components:{
        ToDo
    }
}
</script>
