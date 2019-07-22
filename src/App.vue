<template>
  <div id="app" class="container">
    <!-- header box -->
    <span class="toggle-text tada2">Toggle Here! </span>
    <div class="row sticky-top pt-5 pb-3 align-items-end header">
      <div class="col-auto mx-auto">
        <h1 class="display-5">
          <transition name="fadeUp">
            <sun v-if="bodyMode === 'morning'" @click.native="toggleTheme()"></sun>
            <moon v-if="bodyMode === 'night'" @click.native="toggleTheme()"></moon>
          </transition>
          <a href="/">สุ่มสี่สุ่มห้า</a>
        </h1>
      </div>
    </div>
    <!-- random list box -->
    <div class="row justify-content-center">
      <div class="col">
        <center>
        <div v-for="(item, i) in list" :key="i" class="alert alert-dismissible fade show list" @dblclick="selectedList(item.id)">
          <div v-if="item.id === selectedIndex">
            <input 
              v-model="item.text" 
              class="list-input"
              @blur="unSelected()"
              @keypress.enter="unSelected()"
              v-focus
              v-autowidth="{maxWidth: '60vw', minWidth: '20px', comfortZone: 0}"
            >
          </div>
          <div v-else>
            {{ item.text }}
          </div>
          <button type="button" class="btn-close" @click="deleteList(item.id)">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        </center>
      </div>
    </div>
    <!-- input box -->
    <div class="row">
      <div class="col-auto mx-auto">
        <form @submit.prevent="addNewList()">
          <input type="text" v-model="newList" class="form-control">
        </form>
      </div>
    </div>
    
    <div class="row">
      <div class="col-auto mx-auto">
        <button @click="random()" class="btn btn-outline-dark my-3">สุ่มโลดด</button>
      </div>
    </div>
    <!-- random result -->
    <div class="row">
      <div class="col-auto mx-auto">
        <h3>{{ randomResult.text }}</h3>
      </div>
    </div>
    <!-- footer box -->
    <div class="row text-center my-4">
      <div class="col">
        <small>Power by F9Uf. Code on <a class="small-link-white" href="https://github.com/F9Uf/vue-random-choice" target="_BLANK">Github</a></small>
      </div>
    </div>
  </div>
</template>

<script>
import Sun from './Sun'
import Moon from './Moon'

export default {
  name: 'app',
  beforeCreate() {
    document.body.className = localStorage.getItem('mode') || 'morning';
  },
  components: {
    Sun, Moon
  },
  data () {
    return {
      list: [{id: 1,text: '1'}, {id: 2,text: 'slkdfjlskdjfksjf'}, {id:3,text:'11'},{id:4,text:'2222'},{id:5,text:'22'}],
      newList: '',
      selectedIndex: null,
      randomResult: {},
      bodyMode: localStorage.getItem('mode'),
    }
  },
  methods: {
    addNewList() {
      if (this.newList.trim() !== '') {
        this.list.push(
          {
            id: this.list.length + 1,
            text: this.newList,   
          }
        );
      }
      this.newList = '';
    },

    deleteList(id) {
      this.list = this.list.filter(e => e.id !== id);
    },

    selectedList(id) {
      this.selectedIndex = id;
    },

    unSelected() {
      const element = this.list.find(e => e.id===this.selectedIndex);
      if (element && element.text === '') {
        this.deleteList(this.selectedIndex);
      }
      this.selectedIndex = null;
    },

    random() {
      if (this.list.length < 2) {
        this.randomResult = {};
      } else {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        this.randomResult = this.list[randomIndex];
      }
    },

    toggleTheme() {
      document.body.className = document.body.className === 'morning' ? 'night': 'morning';
      this.bodyMode = document.body.className;
      localStorage.setItem('mode', document.body.className);
    },

  },

  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>
