<template>
  <div class="GalleryAlbum">
    <div class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Gallery Album</h2>
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li>Gallery Album</li>
          </ol>
        </div>

      </div>
    </div><!-- End Breadcrumbs -->
    <!-- ======= Services Section ======= -->
    <section class="inner-page">
      <div class="container" data-aos="fade-up">
        <div class="col-lg-12">
          <section id="" class="services">
            <div class="container" data-aos="fade-up">
              <!-- <img src="/img/under-construction.gif"  /> -->
              <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- End Inner Page  name: "GalleryAlbum",-->
  </div>
</template>
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    name:"GalleryAlbum",
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script> 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>