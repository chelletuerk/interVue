import Vue from 'vue'
import Question from '@/components/Question'
import Button from '@/components/Button'
import App from '@/App'

describe('Question.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header h1').textContent)
      .toEqual('interVue')
  })

  it('correctly sets the message when created', () => {
     const vm = new Vue(App).$mount()
     expect(vm.appTitle).toBe('interVue')
   })

  it('correctly sets the message when created', () => {
     const vm = new Vue(Question).$mount()
     expect(vm.title).toBe('')
   })

  it('correctly sets the message when created', () => {
     const vm = new Vue(Question).$mount()
     expect(vm.body).toBe('')
   })
})

describe('Button.vue', () => {
  it('correctly sets the message when created', () => {
     const vm = new Vue(Button).$mount()
     expect(vm.msg).toBe('Submit')
   })
})
