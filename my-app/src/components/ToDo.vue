<template>
<div>
    <!-- id-ul il generam pe baza de name si value -->
    <input type="checkbox" :id="`${inputName}_id`" :name='inputName' :value='inputValue'>
    <label :for="`${inputName}_id`"> {{ text }} </label>
</div>
</template>

<script>
export default {
      name: 'ToDo',
      props:{
          text: String,
          inputName: String,
          inputValue: String
},
computed: {
    id() {
        return `${this.inputName}_id`
    }
}
}
</script>