<template>
  <div>
    <div class="d-flex success-checkout align-items-center justify-content-center">
      <div class="col col-lg-6 text-center">
        <img src="img/success-buy.png" alt width="294" />
        <h3 class="mt-4">Pemesanan Berhasil!</h3>
        <p
          class="mt-2"
        >Silakan melakukan konfirmasi pembayaran dan tunggu update terbaru dari kami via whatshapp atau email yang sudah Anda Isikan sebelumnya.</p>
        <router-link to="/">
          <a href class="primary-btn pd-cart mt-3 mr-2">Back to Home</a>
          <a href class="primary-btn pd-cart mt-3">Kirim Bukti Pembayaran</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "Success",
  components: {}
};
</script>