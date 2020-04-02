<template>
  <div class="partner-logo" style="margin: auto;" v-if="logo.length > 0">
    <div class="container">
      <p style="color:#8E8E8E">OFFICIAL PATNER :</p>
      <hr />
      <div class="row logos">
        <div class="logo" v-for="itemLogo in logo" v-bind:key="itemLogo.id">
          <img style="margin-right:20px" :src="itemLogo.foto" alt />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "LogoPatner",
  components: {},
  data() {
    return {
      logo: []
    };
  },
  mounted() {
    axios
      .get("https://test.rumahkopimukidi.online/api/logopatner")
      .then(res => (this.logo = res.data.data))
      .catch(err => console.log(err));
  }
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
.logos {
  margin-left: 40%;
}
.logo img:hover {
  transition-duration: 0.7s;
  filter: grayscale(2%);
  cursor: grab;
}
</style>