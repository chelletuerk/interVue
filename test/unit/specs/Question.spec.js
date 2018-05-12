import Vue from 'vue'
import Question from '@/components/Question'
import Button from '@/components/Button'

describe('Question.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Question)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header h1').textContent)
      .toEqual('interVue')
  })

  it('correctly sets the message when created', () => {
     const vm = new Vue(Question).$mount()
     expect(vm.title).toBe('interVue')
   })

  it('correctly sets the message when created', () => {
     const vm = new Vue(Question).$mount()
     expect(vm.questions.questionTitle).toBe('')
   })

  it('correctly sets the message when created', () => {
     const vm = new Vue(Question).$mount()
     expect(vm.questions.questionBody).toBe('')
   })
})

describe('Button.vue', () => {
  it('correctly sets the message when created', () => {
     const vm = new Vue(Button).$mount()
     expect(vm.msg).toBe('Submit')
   })
})
