<template>
  <div id="app" class="container">
    <!-- header box -->
    <div class="row sticky-top py-3 align-items-end" style="z-index: 9999;">
      <div class="col-auto mx-auto">
        <h1 class="display-5"><a href="/">สุ่มสิจ๊ะ</a></h1>
      </div>
    </div>
    <!-- nav bar -->
    <div class="row fixed-top py-4 ">
      <div class="col-auto py-2 ml-auto mr-5">
        <div class="custom-control custom-switch">
          <input type="checkbox"
            class="custom-control-input" 
            id="toggle" 
            v-model="isDarkMode"
            true-value="night"
            false-value="morning"
            @change="toggleTheme($event)"
          >
          <label for="toggle" class="custom-control-label"></label>
        </div>
      </div>
    </div>
    <!-- random list box -->
    <div class="row">
      <div class="col">
        <!-- list -->
        <!-- <div v-for="(item, i) in list" :key="i" class="list bg-danger">
          <div class="list-content" v-if="i === selectedIndex">
            <input type="text" class="form-control"
              v-model="item.text" 
              v-focus
              @blur="unSelected()"
              @keypress.enter="unSelected()"
            >
          </div>
          <div  class="list-content" v-else>
            <div @click="selectedList(i)">
              {{ item.text }}
            </div>
            <button @click="deleteList(i)" class="btn-close">&times;</button>
          </div>
        </div> -->

        <div v-for="(item, i) in list" :key="i" class="alert alert-dark alert-dismissible fade show list">
          <div v-if="i === selectedIndex">
            <input type="text"
              class="list-input"
              v-model="item.text"
              v-focus
              @blur="unSelectedx()"
              @keypress.enter="unSelected()"
            >
          </div>
          <div v-else>
            <div @click="selectedList(i)">
              {{ item.text }}
            </div>
            <button type="button" class="close" @click="deleteList(i)">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
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
        <button @click="random()">สุ่มโลดด</button>
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

export default {
  name: 'app',
  data () {
    return {
      list: [{text:'1'},{text:'2'},{text:'4'},{text: '6'}],
      newList: '',
      selectedIndex: null,
      randomResult: {},
      isDarkMode: document.body.className,
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
        this.randomResult = null;
      } else {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        this.randomResult = this.list[randomIndex];
      }
    },

    toggleTheme(e) {
      document.body.className = e.target.checked ? 'night': 'morning';
      this.isDarkMode = e.target.checked ? 'night': 'morning';
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
