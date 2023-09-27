<template>
<NuxtLayout>
  <div>
    <h1>タスク管理</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTask" name="newTask" autocomplete="off" />
      <button>追加</button>
    </form>
    <ul>
      <li v-for="(task, index) in store.tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="$event => deleteTask(index)">削除</button>
      </li>
    </ul>
    <button @click="clearTask">全削除</button>

  </div>
</NuxtLayout>
</template>
<script setup>

import { ref } from 'vue';
import { useTaskStore } from '~/stores/taskStore';

const store = useTaskStore();
const newTask = ref('');

function addTask() {
  store.addTask(newTask.value);
  newTask.value = '';
  console.log(store.tasks);
}

function deleteTask(index) {
  store.deleteTask(index);
}

function clearTask() {
  store.clearTasks();
}

</script>