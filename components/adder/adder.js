const add = (x, y) => { return x * y }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'jeevan',
    firstNumber: 3,
    secondNumber: 1
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, Total storage space required to store items is ${add(i, j)}.`
    }
  }
})