<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <ToDoHeader :todos='todos' :addItem='addItem' />
            <ToDoList :todos='todos' :delItem='delItem' />
            <ToDoFooter :todos='todos' :delDownItem='delDownItem' :setallItem='setallItem' />
        </div>
    </div>
</template>

<script>
    import ToDoHeader from './components/ToDoHeader.vue'
    import ToDoList from './components/ToDoList.vue'
    import ToDoFooter from './components/ToDoFooter.vue'

    export default {
        components: {
            ToDoHeader,
            ToDoList,
            ToDoFooter
        },
        watch: {//深度监视
            todos:{
                deep:true,
                handler:function (value) {
                    // 将todos最新的值保存到localStorage
                    window.localStorage.setItem('todos_key',JSON.stringify(value))
                }
            }
        },
        data () {
            return {//从localStorage读取todos
                todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
            }
        },
        methods: {
            addItem (task, flag = false) {
                let newItem = {
                    'flag': flag,
                    'task': task
                }
                this.todos.unshift(newItem);
            },
            delItem (index) {
                this.todos.splice(index, 1);
            },
            setallItem (check) {
                if (check) {
                    for (let i = 0; i < this.todos.length; i++) {
                        this.todos[i].flag = check
                    }
                }else {
                    for (let i = 0; i < this.todos.length; i++) {
                        this.todos[i].flag = check
                    }
                }
            },
            delDownItem () {
                this.todos = this.todos.filter(todo => !todo.flag)
            }
        },
    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
