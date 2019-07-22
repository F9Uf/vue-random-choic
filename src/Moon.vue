<template>
  <div class="overlay">
      <div class="moonshine"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay {
  /* display: inline-flex; */
  position: fixed;
  top: 60px;
  right: calc(50% - 150px);
  z-index: 9999;
  /* transform: translateY(-50%); */
}
.moonshine {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* position: fixed; */
  margin: 0 15px;
  cursor: pointer;
  transition: .3s all;
  animation: moon-rays 3s infinite;
}

@keyframes moon-rays
{
  0% {
    box-shadow: 4px 4px 0px 0px #fff,
                10px 10px 10px 1px rgba(0, 0, 0, 0.1);
  }

  50% {
    box-shadow: 5px 1px 0px 0px #fff,
                10px 10px 10px 1px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 4px 4px 0px 0px #fff,
                10px 10px 10px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
