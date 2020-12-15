<template>
  <div class="v-carousel-item">    
    <div
      :style="{
        background: 'url(' + require(`../assets/${item_data.img}`) + ')',
      }"
      class="item-wrapper"
    >
      <h2 v-html="item_data.title"></h2>      
    </div>
  </div>
</template>

<script>
export default {
  name: "v-carousel-item",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: 50%;
color: white;
}

.header__wrapper {
  width: 50%;
}

.item-wrapper {
  width: 600px;
  height: 300px;
  text-align: center;
  padding-top: 50px;
  box-sizing: border-box;
}
</style>
