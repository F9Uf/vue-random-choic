<template>
  <div class="overlay">
      <div class="sun"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay {
  display: inline-flex;
  position: fixed;
  top: 60px;
  right: calc(50% - 150px);
  z-index: 9999;
  /* transform: translateY(-50%); */
}

.sun {
  display: block;
  width: 20px;
  height: 20px;
  background: linear-gradient(to right, #ff8a5c 40%,#e74c3c 100%);
  border-radius: 50%;
  /* position: fixed; */
  margin: 0 15px;
  animation: sun-rays 3s infinite;
  cursor: pointer;
  /* transition: .3s all; */
}

@keyframes sun-rays
{
  0% {
    box-shadow: 0 0 0 0px rgba(255, 26, 0, 0.2),
                4px 4px 10px 2px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0),
                4px 4px 10px 2px rgba(0, 0, 0, 0.2);
  }
}

</style>
