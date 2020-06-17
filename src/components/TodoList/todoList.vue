<template>
  <div class="mt-5">
    <input
      type="text"
      class="todo-input"
      :placeholder="$t('inputMessage')"
      v-model="newTodo"
      @keyup.enter="addTodo"
      aria-label="New Todo item"
    />
    <todo-item
      v-for="todo in todosFiltered"
      :key="todo.id"
      :todo="todo"
      :checkAll="!anyRemaining"
      @removedTodo="removeTodo"
      @finishedEdit="finishedEdit"
    >
    </todo-item>

    <div class="extra-container">
      <div>
        <label
          ><input
            type="checkbox"
            :checked="!anyRemaining"
            @change="checkAllTodos"
          />
          {{ $t("checkAll") }}
        </label>
      </div>
      <div>{{ remaining }} {{ $t("itemLeft") }}</div>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>

      <div>
        <button @click="clearCompleted">
          {{ $t("btn.clearCompleted") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./todoList.js"></script>

<style>
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}
.todo-input:focus,
button:focus {
  outline: 0;
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
}
.remove-item :hover {
  color: black;
}
.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}
.todo-item-edit:hover {
  outline: none;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
button {
  font-size: 22px;
  background-color: white;
  appearance: none;
  border-radius: 6px;
  border: 1px #505050 solid;
  padding: 6px 18px;
}
button:hover {
  background: #2e5cc5;
  cursor: pointer;
}
.active {
  color: #fff;
}
</style>
