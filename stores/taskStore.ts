import { defineStore } from 'pinia';

export const useTaskStore = defineStore({
  id: 'taskStore',
  state: () => ({
    tasks: [] as string[],
  }),
  actions: {
    addTask(task: string) {
      if (task.length >= 1) {
        this.tasks.push(task);
      }
    },
    deleteTask(index: number) {
      this.tasks.splice(index, 1);
    },
    clearTasks() {
      this.tasks = [];
    },
  },
});
