 <template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <h2>Related Products</h2>
      <hr />
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="products.length > 0">
          <carousel class="product-slider" :items="4" :nav="false" :dots="false" :autoplay="false">
            <div class="product-item" v-for="itemProduct in products" v-bind:key="itemProduct.id">
              <div class="pi-pic">
                <img :src="itemProduct.galleries[0].photo" />
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="fa fa-plus"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link v-bind:to="/product/+itemProduct.id" target="_blank">Detail Produk</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">{{itemProduct.type}}</div>
                <router-link v-bind:to="product/+itemProduct.id">
                  <h5>{{itemProduct.name}}</h5>
                </router-link>
                <div class="product-price">{{itemProduct.price}}</div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="col-lg-12" v-else>
          <p>
            <i class="fa fa-spinner"></i>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


// import carousel from "vue-owl-carousel";
// import axios from "axios";

// export default {
//   name: "ItemsCarousel",
//   components: {
//     carousel
//   },

//   data() {
//     return {
//       products: [],
//       keranjangUser: []
//     };
//   },
//   mounted() {
//     axios
//       .get("https://bl.ajisukmo.tech/api/products")
//       .then(res => (this.products = res.data.data.data))
//       .catch(err => console.log(err));
//   },
//   methods: {
//     saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
//       var productStored = {
//         id: idProduct,
//         name: nameProduct,
//         price: priceProduct,
//         photo: photoProduct
//       };

//       this.keranjangUser.push(productStored);
//       const parsed = JSON.stringify(this.keranjangUser);
//       localStorage.setItem("keranjangUser", parsed);
//     }
//   }
// };


<style scoped>
.product-item {
  margin-right: 20px;
}
</style>