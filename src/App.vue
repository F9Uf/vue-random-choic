<template>
  <div id="app" class="container">
    <!-- header box -->
    <div class="row sticky-top my-3" >
      <div class="col-auto mx-auto">
        <h1 class="display-5"><a href="/">สุ่มสิจ๊ะ</a></h1>
      </div>
    </div>
    <!-- random list box -->
    <div class="row">
      <ul>
        <li v-for="(item, i) in list" :key="i">
          <div v-if="i === selectedIndex">
            <input type="text"
              v-model="item.text" 
              v-focus
              @blur="unSelected()"
              @keypress.enter="unSelected()"
            >
          </div>
          <div  v-else>
            <div @click="selectedList(i)">
              {{ item.text }}
            </div>
            <button @click="deleteList(i)">X</button>
          </div>
        </li>
      </ul>
    </div>
    <!-- input box -->
    <div class="row">
      <div class="col-auto mx-auto">
        <form @submit.prevent="addNewList()">
          <input type="text" v-model="newList">
        </form>
        {{ selectedIndex }}
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
      list: [],
      newList: '',
      selectedIndex: null,
      randomResult: {},
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
