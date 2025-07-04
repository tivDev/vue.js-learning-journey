import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Tiv',
    role: 'Student'
  }),
  actions: {
    updateName(newName) {
      this.name = newName
    }
  }
})
