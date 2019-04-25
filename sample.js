new Vue ({
  el:'#sample',
  data: {
    title: 'Vueing Party',
    showName:false,
    showAge:true
  },
  methods: {
    toggleName(){
      this.showName =!this.showName
    },
    toggleAge(){
      this.showAge =!this.showAge
    }
  }

})

if(condition){

}