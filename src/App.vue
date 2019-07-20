<template>
  <div id="app" class="container">
    <div class="row header py-4 fixed-top" style="background-color: #726cac;">
      <div class="col-auto mx-auto">
        <h1 class="display-5"><a class="link-white" href="http://vue-random-choice.herokuapp.com/">VUE RANDOM</a></h1>
      </div>
    </div>
    <form @submit.prevent="randomChoice">
      <div class="row justify-content-center" style="margin-top: 150px;">
        <div class="col-sm-auto my-2 text-center" v-for="(choice,index) in choices" :key="index">
          <input type="text" placeholder="Enter somthing..."
            v-model="choice.value" class="flat-input-blue">
          <button @click="deleteChoice(index)" class="flat-button-blue" type="button">-</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center my-2">
          <button @click="addChoice" class="flat-button-violet" type="button">ADD CHOICE</button>
          <button @click="clearChoices" class="flat-button-violet flat-sm" type="button">CLEAR ALL</button>
        </div>
        <div class="col-12 text-center my-2">
          <button @click="randomChoice" class="flat-button-pink">RANDOM</button>
        </div>
        <div class="col-12 text-center my-2">
          <h1 class="display-5" v-if="random">{{random}}</h1>
        </div>
      </div>
    </form>

    <div class="row text-center my-4">
      <div class="col">
        <small>Power by F9Uf. Code on <a class="small-link-white" href="https://github.com/F9Uf/vue-random-choice" target="_BLANK">Github</a></small>
      </div>
    </div>
  </div>
</template>

<script>
// import Spinner from 'vue-simple-spinner'
export default {
  name: 'app',
  data () {
    return {
      choices: [
        {value: ''}
      ],
      random: null,
      loading: false,
    }
  },
  methods: {
    addChoice () {
      this.choices.push({value: ''})
    },
    deleteChoice (index) {
      this.choices.splice(index, 1)
    },
    randomChoice () {
      if (this.choices.length < 2) {
        this.random = 'Can not random'
      } else {
        this.random = this.choices[Math.floor(Math.random()*this.choices.length)].value
      }
    },
    clearChoices () {
      this.choices = [{ value: ''}]
    }
  },
  components: {
    // Spinner
  }
}
</script>

<style>
a.small-link-white{
  color: rgb(191, 224, 255);
}
a.link-white{
  text-decoration: none;
  color: white;
  transition: .2s all;
  text-shadow: 0px 1px 0 #52519d, 0px 2px 0 #52519d, 0px 3px 0 #52519d, 0px 4px 0 #52519d, 0px 4px 0 #52519d,
  0px 5px 0 #52519d,0px 6px 0 #52519d;
  position: relative;
}
a.link-white:hover{
  opacity: .7;
}
a.link-white:active{
  text-shadow: none;
  top: 7px;
}
.flat-button-violet.flat-sm {
  width: 120px;
}
.flat-button-violet {
  transition: .2s all;
  position: relative;
  vertical-align: top;
  width: 150px;
  height: 35px;
  padding: 0;
  font-size: 18px;
  color: #c8cafc;
  text-align: center;
  background: #4e509b;
  border: 0;
  border-bottom: 3px solid #353766;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #353766;
  box-shadow: inset 0 -2px #353766;
}
.flat-button-violet:active {
  top: 2px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.flat-input-blue {
  border: #39c1db 2px solid;
  /* border-bottom: 4px solid #39c1db; */
  background-color: transparent;
  color: white;
  padding: 3px 10px;
  border-radius: 2px;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #39c1db;
  opacity: 0.8; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #39c1db;
  opacity: 0.8;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #39c1db;
  opacity: 0.8;
}

.flat-button-blue{
  transition: .2s all;
  position: relative;
  vertical-align: top;
  width: 35px;
  height: 35px;
  padding: 0;
  font-size: 18px;
  color: #316ea8;
  text-align: center;
  background: #39c1db;
  border: 0;
  border-bottom: 3px solid #316ea8;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #316ea8;
  box-shadow: inset 0 -2px #316ea8;
}
.flat-button-blue:active{
  top: 2px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.flat-button-pink{
  transition: .2s all;
  position: relative;
  vertical-align: top;
  width: 100px;
  height: 35px;
  padding: 0;
  font-size: 18px;
  color: #fcd6da;
  text-align: center;
  background: #ed71a3;
  border: 0;
  border-bottom: 3px solid #d2487c;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #d2487c;
  box-shadow: inset 0 -2px #d2487c;
}
.flat-button-pink:active{
  top: 2px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
