<template>
  <div id="app" class="container">
    <!-- header box -->
    <span class="toggle-text">Toggle Here! </span>
    <div class="row sticky-top py-5 align-items-end">
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
    <div class="row">
      <div class="col">

        <div v-for="(item, i) in list" :key="i" class="alert border-dark alert-dismissible fade show list" @dblclick="selectedList(i)">
          <div v-if="i === selectedIndex">
            <input 
              v-model="item.text" 
              class="list-input"
              @blur="unSelected()"
              v-focus
              v-autowidth="{maxWidth: '60vw', minWidth: '20px', comfortZone: 0}"
            >
          </div>
          <div v-else>
            {{ item.text }}
          </div>
          <button type="button" class="close" @click="deleteList(i)">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
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
  components: {
    Sun, Moon
  },
  data () {
    return {
      list: [],
      newList: '',
      selectedIndex: null,
      randomResult: {},
      bodyMode: document.body.className,
    }
  },
  methods: {
    addNewList() {
      if (this.newList.trim() !== '') {
        this.list.push(
          {
            text: this.newList,   
          }
        );
      }
      this.newList = '';
    },

    deleteList(index) {
      this.selectedIndex = null;
      this.list.splice(index,1);
    },

    selectedList(index) {
      this.selectedIndex = index;
    },

    unSelected() {
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
    }
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
