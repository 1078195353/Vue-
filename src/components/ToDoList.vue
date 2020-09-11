<template>
    <ul class="todo-main">
        <ToDoItem v-for="(todo, index) in todos" :key="index" :todo='todo' :index='index' :delItem='delItem'/>
    </ul>
</template>

<script>
    import ToDoItem from './ToDoItem.vue'
    export default {
        props: ['todos','delItem'],
        components:{
            ToDoItem
        }
    }
    
</script>

<style>
    /*main*/
    
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    
    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
    
</style>
