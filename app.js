new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Ryker',
    url: "http://www.youtube.com",
    classes: ["one", "two"],
    wage: 10,
    pet: "dog",
    coords: {
      x:0,
      y:0
    }
  },
  
  methods: {
    greet(time){
      return `Live long and prosper on this good ${time} in your journey whilst ${this.title}, ${this.name}`
    },
    wageIncrease(){
      this.wage++;
    },
    updateName(e){
      this.name = e.target.value
        // console.log(e.target.value)
    },
    wageDecrease(){
      this.wage--;
    },
    changeWage(amount){
      this.wage += amount;
    },
    logEvent(e){
      console.log(e);
    },
    logCoords(e){
      this.coords.x =e.offsetX
      this.coords.y =e.offsetY
    }
  }
})