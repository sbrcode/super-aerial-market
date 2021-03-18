<template>
  <div>
    <h3>Welcome to your Supermarket, here are your {{ products.length }} products !</h3>
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ProductService from '@/services/ProductService'

export default {
  // listing the whole mock DB (see HTML v-for)
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  // using axios request in ProductService.js
  created() {
    ProductService.getProducts()
      .then(response => this.products = response.data)
      .catch(error => console.log(error.response))
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
