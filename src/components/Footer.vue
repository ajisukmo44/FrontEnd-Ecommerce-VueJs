<template>
  <footer class="footer-section text-left">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="footer-left">
            <div class="footer-logo">
              <a href="#">
                <img src="img/logo.png" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="footer-widget">
            <h5>Informasi</h5>
            <ul>
              <li>
                <router-link class="a" to="/carapemesanan" target="_blank">Cara Pemesanan</router-link>
              </li>
              <li>
                <router-link to="/referensi" target="_blank">Referensi Desain</router-link>
              </li>
              <li>
                <router-link to="/size" target="_blank">Size Chart</router-link>
              </li>
              <li>
                <router-link to="#">Kerjasama</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="footer-widget">
            <h5>Support</h5>
            <ul>
              <li>
                <img src="img/mnd.png" class="logoku" />
                <img src="img/bca.png" class="logoku" />
              </li>

              <li>
                <img src="img/jnee.png" class="logoku" />
                <img src="img/pos.png" class="logoku" />
              </li>
              <li>
                <img src="img/jt.png" class="logoku" />
                <img src="img/cepat.png" class="logoku" />
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="footer-left">
            <h5>Alamat Kami</h5>
            <ul>
              <li>
                <i class="fa fa-maps"></i> Alamat : Jl. Sunan Ampel, Kedung Malang, Kedungmalang, Kec. Sumbang, Kabupaten Banyumas, Jawa Tengah 53183
              </li>
              <li>
                CS
                : 085641518109 / 085641518108
              </li>
            </ul>
            <div class="footer-social">
              <a href="https://www.instagram.com/trops_apparel/?hl=id">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=lr_HGpLVMEQ">
                <i class="fa fa-youtube"></i>
              </a>
              <a href="https://web.facebook.com/tropsapparel/">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://web.facebook.com/tropsapparel/">
                <i class="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-text">
              2020 Copyright &copy;
              All rights reserved | Trops Apparel
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style  scoped>
.logoku {
  width: 35%;
  margin-right: 13px;
  margin-bottom: 13px;
}
</style>