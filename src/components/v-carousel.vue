<template>
  <div class="wrapper">
    <div
      class="v-carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <v-carousel-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      >
      </v-carousel-item>
    </div>
    <div class="buttons">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
import vCarouselItem from "./v-carousel-item";

export default {
  name: "v-carousel",
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { currentSlideIndex: 1 };
  },
  components: {
    vCarouselItem,
  },
  methods: {
    prevSlide() {
      /*this.currentSlideIndex--;*/
      let last = this.carousel_data.pop();
      this.carousel_data.unshift(last);
    },
    nextSlide() {
      /*this.currentSlideIndex++;*/
      let first = this.carousel_data.shift();
      this.carousel_data.push(first);
    },
  },
  /* computed: {
    buttonText() {
      return this.carousel_data;
    },
  }, */
};
</script>

<style scoped>
.wrapper {
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
}

.v-carousel {
  display: flex;
}

.buttons {
  position: relative;
  top: -200px;
  display: flex;
  justify-content: space-between;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
