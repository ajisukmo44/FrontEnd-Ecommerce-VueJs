<template>
  <section class="hero-section">
    <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">
      <div class="single-hero-items set-bg" style="background-image: url('./img/hero-10.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>JERSEY</span>
              <h1>HOME 2020</h1>
              <p>
                Suatu kebanggan bisa ikut andil perjuangan Persijap Jepara dalam mengarungi liga 2 2020 persijap jepara X trops apparel
                official sponsor liga 2 2020
              </p>
              <a href="#" class="primary-btn">Order Now</a>
            </div>
          </div>
        </div>
      </div>

      <div class="single-hero-items set-bg" style="background-image: url('./img/hero-11.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>JERSEY</span>
              <h1>PRE-MATCH</h1>
              <p>
                Suatu kebanggan bisa ikut andil perjuangan Persijap Jepara dalam mengarungi liga 2 2020 persijap jepara X trops apparel
                official sponsor liga 2 2020
              </p>
              <a href="#" class="primary-btn">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "OwlCarousel",
  components: {
    carousel
  }
};
</script>