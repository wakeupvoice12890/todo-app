import TodoItem from '@/components/TodoItems/todoItems.vue';
import TodoFiltered from '@/components/TodoFilter/todoFilter.vue';
import Auth from '@/components/mixins/auth';
export default {
  name: 'todo-list',
  mixins: [Auth],
  components: {
    TodoItem,
    TodoFiltered
  },
  data() {
    return {
      newTodo: '',
      idForTodo: 3
    };
  },
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    },
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
    todosFiltered() {
      return this.$store.getters.todosFiltered;
    }
  },
  methods: {
    addTodo() {
      this.checklogin();
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.$store.state.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = '';
      this.idForTodo++;
    },
    removeTodo(id) {
      this.checklogin();
      const index = this.$store.state.todos.findIndex(item => item.id == id);
      this.$store.state.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.$store.state.todos.forEach(
        todo => (todo.completed = event.target.checked)
      );
    },
    clearCompleted() {
      this.checklogin();
      this.$store.state.todos = this.$store.state.todos.filter(
        todo => !todo.completed
      );
    },
    finishedEdit(data) {
      this.checklogin();
      const index = this.$store.state.todos.findIndex(
        item => item.id == data.id
      );
      this.$store.state.todos.splice(index, 1, data);
    }
  }
};
