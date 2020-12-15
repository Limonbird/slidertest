<template>
  <div id="app">
    <v-carousel :carousel_data="sliderItems"></v-carousel>
  </div>
</template>

<script>
import vCarousel from "./components/v-carousel";

export default {
  name: "App",
  data() {
    return {
      sliderItems: [
        
        {
          id: 1,
          name: "img2",
          img: "img2.jpg",
          title: "Приключения<br>без границ",
          color: "green",
        },
        {
          id: 2,
          name: "img1",
          img: "img1.jpg",
          title: "Открой свою Камчатку",
          color: "blue",
        },
        {
          id: 3,
          name: "img3",
          img: "img3.jpg",
          title: "Путешествуй безопасно",
          color: "red",
        },
        /*{id: 4, name: 'img4', img: 'img4.jpg', title: 'четыре четыре четыре четыре'}*/
      ],
    };
  },
  components: {
    vCarousel,
  },
};
</script>

<style></style>
