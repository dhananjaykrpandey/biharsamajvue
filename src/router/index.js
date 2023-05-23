import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/home.vue";
import GalleryAlbum from "@/components/GalleryAlbum.vue";
import VideoAlbum from "@/components/VideoAlbum.vue";
import AboutUs from "@/components/AboutUs.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/GalleryAlbum",
    name: "GalleryAlbum",
    component: GalleryAlbum,
  }
  ,
  {
    path: "/VideoAlbum",
    name: "VideoAlbum",
    component: VideoAlbum,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;