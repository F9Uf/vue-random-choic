<template>
  <div id="app" class="container">
    <div class="row header py-4 fixed-top" >
      <div class="col-auto mx-auto">
        <h1 class="display-5"><a class="link-white">สุ่มสิจ๊ะ</a></h1>
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

</style>
