<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <!-- <div class="col-lg-12 mt-0" v-if="sliders.length > 0"> -->
    <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">
      <!-- <div class="product-item" v-for="itemSlider in sliders" v-bind:key="itemSlider.id">
          <div
            class="single-hero-items set-bg"
            :style="{ backgroundImage: `url(${itemSlider.foto})` }"
      >-->
      <div class="single-hero-items set-bg" style="background-image: url('/img/hero-10.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ml-5">
              <span>JERSEY</span>
              <h1>HOME 2020</h1>
              <p>Suatu Kebanggan Bisa Ikut Andil Perjuangan Persijap Jepara Dalam Mengarungi Liga 2 2020, Persijap Jepara X Trops Apparel Official Sponsor Liga 2 2020</p>

              <!-- <h1>{{itemSlider.judul}}</h1>
              <p>{{itemSlider.deskripsi}}</p>-->
              <a
                href="https://wa.me/6285641518109?text=Halo%20Admin%20Saya%20mau%20Beli%20Jersey%20Persijap"
                class="primary-btn"
              >Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('/img/hero-11.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ml-5">
              <span>JERSEY</span>
              <h1>PRE-MATCH</h1>
              <p>Suatu Kebanggan Bisa Ikut Andil Perjuangan Persijap Jepara Dalam Mengarungi Liga 2 2020, Persijap Jepara X Trops Apparel Official Sponsor Liga 2 2020</p>

              <!-- <h1>{{itemSlider.judul}}</h1>
              <p>{{itemSlider.deskripsi}}</p>-->
              <a
                href="https://wa.me/6285641518109?text=Halo%20Admin%20Saya%20mau%20Beli%20Jersey%20Persijap"
                class="primary-btn"
              >Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('/img/hero-13.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ml-5">
              <span>JERSEY</span>
              <h1>MARTAPURA</h1>
              <p>Suatu Kebanggan Bisa Ikut Andil Perjuangan Martapura FC Dalam Mengarungi Liga 2 2020, Martapura FC X Trops Apparel Official Sponsor Liga 2 2020</p>

              <!-- <h1>{{itemSlider.judul}}</h1>
              <p>{{itemSlider.deskripsi}}</p>-->
              <a
                href="https://wa.me/6285641518109?text=Halo%20Admin%20Saya%20mau%20Beli%20Jersey%20Martapura"
                class="primary-btn"
              >Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('/img/hero-14.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ml-5">
              <span>JERSEY CUSTOM</span>
              <h1>CUSTOM</h1>
              <p>Order jerseymu di sini dengan desain dan model sesuai keinginanmu, free design, free ongkir, bahan berkualitas, dan harga terjangkau.</p>

              <!-- <h1>{{itemSlider.judul}}</h1>
              <p>{{itemSlider.deskripsi}}</p>-->
              <a
                href="https://wa.me/6285641518109?text=Halo%20Admin%20Saya%20mau%20Beli%20Jersey%20Martapura"
                class="primary-btn"
              >Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </carousel>
    <!-- </div> -->
  </section>
  <!-- Hero Section End -->
</template>

<script>
import carousel from "vue-owl-carousel";
import axios from "axios";

export default {
  name: "owlCarousel",
  components: {
    carousel
  },
  data() {
    return {
      sliders: []
    };
  },
  mounted() {
    axios
      .get("https://bl.ajisukmo.tech/api/slider")
      .then(res => (this.sliders = res.data.data))
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.primary-btn:hover {
  background-color: #3b8686;
  transition-duration: 0.7s;
}
</style>