<template>
  <div class="partner-logo" style="margin: auto;">
    <div class="container">
      <p style="color:#8E8E8E">OFFICIAL PATNER :</p>
      <hr />
      <div class="logo">
        <img style="margin-right:20px" src="img/logo-carousel/psjap.png" alt />
        <img src="img/logo-carousel/mfc.png" alt />
      </div>
      <div class="logo-carousel row"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "LogoPatner",
  components: {}
};
</script>

<style scoped>
.logo img {
  width: 100px;
  height: 100px;
  filter: grayscale(100%);
  margin-left: auto;
  margin-right: auto;
}
.logo img:hover {
  transition-duration: 0.7s;
  filter: grayscale(2%);
  cursor: grab;
}
</style>