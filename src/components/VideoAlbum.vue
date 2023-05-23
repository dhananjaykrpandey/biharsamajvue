<template>
    <div class="VideoAlbum">
      <div class="breadcrumbs">
        <div class="container">
  
          <div class="d-flex justify-content-between align-items-center">
            <h2>Video Album</h2>
            <ol>
              <li><router-link to="/">Home</router-link></li>
              <li>Video Album</li>
            </ol>
          </div>
  
        </div>
      </div><!-- End Breadcrumbs -->
      <!-- ======= Services Section ======= -->
      <section class="inner-page">
        <div class="container" data-aos="fade-up">
          <div class="col-lg-12 align-center">
            <section id="" class="services center">
              <div class="container align-center" data-aos="fade-up">
                <img src="/img/under-construction.gif"  />
              </div>
            </section>
          </div>
        </div>
      </section>
  
      <!-- End Inner Page -->
    </div>
  </template>
  <script>
  export default {
    name: "VideoAlbum",
    data() {
      return {
        msg: "Welcome to Video Album"
      }
    }
  }
  </script>