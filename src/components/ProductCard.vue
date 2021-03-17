<template>
  <router-link class="product-link" :to="{ name: 'product', params: { id: product.id } }">
    <div class="product-card -shadow">
      <h4 class="title">{{ product.title }}</h4>
      <span>{{ product.price }}</span><br>
      <span>{{ product.shortdesc }}</span>
    </div>
  </router-link>
</template>

<script>
// export default {
//   data() {
//     return {
//       product: {
//         id: 1,
//         title: "Bread - Italian Corn Meal Poly",
//         price: 20.15,
//         shortdesc: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
//       }
//     }
//   }
// }

export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.product-card > .title {
  margin: 0;
}
.product-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>