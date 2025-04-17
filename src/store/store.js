import { reactive } from 'vue'

export const store = reactive({
  mode: null,
  easyMode() {
    this.mode = 'easy'
    console.log('easy')
  },
  mediumMode() {
    this.mode = 'medium'
    console.log('med')
  },
  hardMode() {
    this.mode = 'hard'
    console.log('hard')
  },
})
