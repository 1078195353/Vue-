<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="checkAll" />
        </label>
        <span>
            <span>已完成{{DownSize}}/ 全部{{todos.length}}</span>
        </span>
        <button v-show="DownSize > 0" class="btn btn-danger" @click='del'>清除已完成任务</button>
    </div>
</template>

<script>

    export default {
        props: {
            todos: Array,
            delDownItem: Function,
            setallItem: Function
        },

        methods: {
            del () {
                this.delDownItem()
            }
        },
        computed: {
            DownSize () {
                let count = 0
                for (let index = 0; index < this.todos.length; index++) {
                    if (this.todos[index].flag === true) {
                        count++
                    }
                }
                return count
            },
            checkAll: {
                get () { // 决定是否勾选
                    return this.DownSize === this.todos.length && this.DownSize > 0
                },

                set (value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
                    this.setallItem(value)
                }
            }


        },
    }
</script>

<style>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>
