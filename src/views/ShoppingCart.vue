
<template>
  <div class="shopping">
    <Header />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-left">
            <div class="breadcrumb-text product-more">
              <router-link to="/">
                <i class="fa fa-home"></i> Home
              </router-link>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <div class="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th class="p-name text-center">Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="keranjang in keranjangUser" :key="keranjang.id">
                        <td class="cart-pic first-row">
                          <img class="img-cart" :src="keranjang.photo" />
                        </td>
                        <td class="cart-title first-row text-center">
                          <h5>{{ keranjang.name }}</h5>
                        </td>
                        <td class="p-price first-row">{{ keranjang.price }}</td>

                        <td @click="removeItem(keranjang.id)" class="delete-item">
                          <a href="#">
                            <i class="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-12">
                <hr />
                <h4 class="mb-4 text-left">INFORMASI PEMBELI / PENERIMA :</h4>
                <hr />
                <div class="user-checkout text-left">
                  <form>
                    <div class="form-group">
                      <label for="namaLengkap">Nama lengkap</label>
                      <input
                        type="text"
                        class="form-control"
                        id="namaLengkap"
                        aria-describedby="namaHelp"
                        placeholder="Masukan Nama"
                        v-model="customerInfo.name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailAddress"
                        aria-describedby="emailHelp"
                        placeholder="Masukan Email"
                        v-model="customerInfo.email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">Nomer HP</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nohp"
                        aria-describedby="nohp"
                        placeholder="Masukan No Hp"
                        v-model="customerInfo.number"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="hidden"
                        class="form-control"
                        id="berat"
                        aria-describedby="emailHelp"
                        placeholder="Masukan Email"
                        v-model="ongkirInfo.weight"
                      />
                    </div>
                    <div class="form-group" v-if="kota.length > 0">
                      <label for="kota">Kabupaten/Kota</label>
                      <select
                        name="kota"
                        id="kota"
                        class="custom-select"
                        tabindex="12"
                        v-model="ongkirInfo.destination"
                      >
                        <optgroup v-for="kotaku in kota" :key="kotaku.id" :label="kotaku.title">
                          <option
                            v-for="kab in kotaku.city"
                            :key="kab.id"
                            :value="kab.id"
                          >{{ kab.title }}</option>
                        </optgroup>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="kurir">Kurir Pengiriman</label>
                      <br />
                      <div class="customradio">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="jne"
                          v-model="ongkirInfo.courier"
                        />
                        <label class="form-check-label" for="inlineRadio1">JNE</label>

                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="pos"
                          v-model="ongkirInfo.courier"
                        />
                        <label class="form-check-label" for="inlineRadio2">POS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="tiki"
                          v-model="ongkirInfo.courier"
                        />
                        <label class="form-check-label" for="inlineRadio3">TIKI</label>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="alamatLengkap">Alamat Lengkap</label>
                      <textarea
                        class="form-control"
                        id="alamatLengkap"
                        rows="3"
                        v-model="customerInfo.address"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <div class="proceed-checkout text-left">
                  <ul>
                    <li class="subtotal mt-3">
                      Subtotal
                      <span>{{ totalHarga }}</span>
                    </li>
                    <li class="subtotal mt-3">
                      Ongkir Reguler
                      <span>{{CostOngkir}}</span>
                    </li>
                    <li class="subtotal mt-3">
                      Total Transfer
                      <span>{{ totalBiaya }}</span>
                    </li>
                    <li class="subtotal mt-3">
                      Bank Transfer
                      <span>Mandiri</span>
                    </li>
                    <li class="subtotal mt-3">
                      No. Rekening
                      <span>XXXX XXXX XXXX</span>
                    </li>
                    <li class="subtotal mt-3">
                      Nama Penerima
                      <span>Tropss</span>
                    </li>
                  </ul>
                  <!-- <router-link to="/success"> -->
                  <a
                    @click="cekongkir()"
                    href="#"
                    class="primary-btn"
                    style="width:100%; text-align:center"
                  >CEK ONGKIR</a>

                  <button
                    :disabled="!flagCheckOut"
                    @click="checkout()"
                    href="#"
                    class="primary-btn"
                    style="width:100%; background-color:#3b8686; text-align:center"
                  >SELESAIKAN DAN BAYAR</button>
                  <!-- </router-link> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section End -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "cart",
  components: {
    Header
  },
  data() {
    return {
      keranjangUser: [],
      kota: [],
      CostOngkir: 0,
      flagCheckOut: false,
      customerInfo: {
        name: "",
        email: "",
        number: "",
        address: ""
      },
      ongkirInfo: {
        destination: "",
        weight: "100",
        courier: ""
      }
    };
  },
  methods: {
    removeItem(xx) {
      // this.keranjangUser.splice(index, 1);
      // const parsed = JSON.stringify(this.keranjangUser);
      // localStorage.setItem("keranjangUser", parsed);
      // window.location.reload();
      let faveGifs = JSON.parse(localStorage.getItem("keranjangUser"));
      let faveGif = faveGifs.map(faveGif => faveGif.id);
      let index = faveGif.findIndex(id => id == xx);
      this.keranjangUser.splice(index, 1);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
      window.location.reload();
      // eslint-disable-next-line no-console
      console.log(index);
    },
    // fungsi mengirim data ke API
    checkout() {
      let productIds = this.keranjangUser.map(function(product) {
        return product.id;
      });

      let checkoutData = {
        name: this.customerInfo.name,
        email: this.customerInfo.email,
        number: this.customerInfo.number,
        address: this.customerInfo.address,
        transaction_total: this.totalBiaya,
        transaction_status: "PENDING",
        transaction_details: productIds
      };

      if (!this.customerInfo.name) {
        Swal.fire({
          icon: "error",
          title: "Nama tidak boleh kosong"
        });
      } else if (!this.customerInfo.email) {
        Swal.fire({
          icon: "error",
          title: "Email tidak boleh kosong"
        });
      } else if (!this.customerInfo.number) {
        Swal.fire({
          icon: "error",
          title: "Nomor hp tidak boleh kosong"
        });
      } else if (!this.customerInfo.address) {
        Swal.fire({
          icon: "error",
          title: "Alamat tidak boleh kosong"
        });
      } else {
        axios
          .post(
            "https://test.rumahkopimukidi.online/api/checkout",
            checkoutData
          )
          .then(() => this.$router.push("success"))
          // eslint-disable-next-line no-console
          .catch(err => console.log(err));
        localStorage.clear();
      }
    },
    cekongkir() {
      let kota = this.ongkirInfo.destination;
      let courier = this.ongkirInfo.courier;
      let ongkirData = {
        destination: this.ongkirInfo.destination,
        weight: this.ongkirInfo.weight,
        courier: this.ongkirInfo.courier
      };

      if (kota == 0) {
        Swal.fire({
          icon: "error",
          title: "Kota tujuan tidak boleh kosong"
        });
      } else if (courier == 0) {
        Swal.fire({
          icon: "error",
          title: "Kurir tidak boleh kosong"
        });
      } else if (kota && courier) {
        this.flagCheckOut = true;
        axios
          .post("https://test.rumahkopimukidi.online/api/cekongkir", ongkirData)
          .then(res => {
            this.CostOngkir = res.data.data[0].costs[0].cost[0].value;
          })
          // .then(res => {
          // //   console.log(res);
          // // })
          // eslint-disable-next-line no-console
          .catch(err => console.log(err));
        Swal.fire({
          icon: "success",
          title: "Ongkir Berhasil Diambil"
        });
      }
    }
  },

  mounted() {
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }
    axios
      .get("https://test.rumahkopimukidi.online/api/getkota")
      .then(res => (this.kota = res.data.data))
      .catch(err => console.log(err));
  },

  computed: {
    totalHarga() {
      return this.keranjangUser.reduce(function(items, data) {
        var a = items;
        var b = data.price;
        var c = parseInt(a) + parseInt(b);
        return c;
      }, 0);
    },
    totalBiaya() {
      return this.totalHarga + this.CostOngkir;
    }
  }
};
</script>

<style scoped>
.img-cart {
  width: 80px;
  height: 70px;
}
.customradio input[type="radio"] {
  display: none;
}
.customradio label {
  position: relative;
  display: inline-block;
  padding: 3px 3px 3px 20px;
  margin-right: 5%;
  cursor: pointer;
}
.customradio label::before,
.customradio label::after {
  position: absolute;
  content: "";
  top: 60%;
  border-radius: 100%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.customradio label::before {
  left: 0;
  width: 14px;
  height: 14px;
  margin-top: -10px;
  background: #f3f3f3;
  border: 1px solid #ccc;
}
.customradio label:hover::before {
  background: #fff;
}
.customradio label::after {
  opacity: 0;
  left: 3px;
  width: 8px;
  height: 8px;
  margin-top: -7px;
  background: #41b883;
  -webkit-transform: scale(2);
  transform: scale(2);
}
.customradio input[type="radio"]:checked + label::before {
  background: #fff;
  border: 1px solid #41b883;
}
.customradio input[type="radio"]:checked + label::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>