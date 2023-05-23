<template>
    <!-- ======= Footer ======= -->

    <div>
        <div class="footer-content">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                            <h3>Bihar Samaj</h3>
                            <p>
                                Abu Dhabi <br>
                                UAE<br><br>
                                <strong>Phone:</strong> +1 1234 55488 55<br>
                                <strong>Email:</strong> info@example.com<br>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <router-link to="/" class="nav-link scrollto"  href="#hero-animated" v-scroll-to="'#hero-animated'">Home</router-link></li>
                            <li><i class="bi bi-chevron-right"></i> <router-link to="/" class="nav-link scrollto" href="#about" v-scroll-to="'#about'" >About us</router-link></li>
                            <li><i class="bi bi-chevron-right"></i> <router-link to="/" class="nav-link scrollto" href="#services" v-scroll-to="'#services'">Events</router-link></li>
                            <li><i class="bi bi-chevron-right"></i> <router-link to="/" class="nav-link scrollto" href="#portfolio" v-scroll-to="'#portfolio'">Gallery</router-link></li>
                            <li><i class="bi bi-chevron-right"></i> <router-link to="/" class="nav-link scrollto" href="#team" v-scroll-to="'#team'">Team</router-link></li>
                        </ul>
                    </div>



                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>

                    </div>

                </div>
            </div>
        </div>

        <div class="footer-legal text-center">
            <div
                class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                <div class="d-flex flex-column align-items-center align-items-lg-start">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Bihar Samaj-UAE</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ -->
                        Developed by <a href="https://arnikainfotech.com/" target="_blank">Arnika Technologies</a>
                    </div>
                </div>

                <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>

            </div>
        </div>

        <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>
        <!-- <div id="preloader"></div> -->
    </div>
</template>