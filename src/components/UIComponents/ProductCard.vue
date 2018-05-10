<template>
  <router-link :to="{ name: 'ProductDetail', params: {productID: product._id}}" >
    <div id="product-card">
      <img v-if="product.images.length > 0" class="card-img-top" :src="product.images[0]">
      <div>
        <h5 v-if="!product.name">{{product.brand}} {{product.model}}</h5>
        <h5 v-else>{{product.name}}</h5>
        <p>{{product.price}} {{product.currency}}</p>
        <a :href="product.url" class="btn btn-primary">Compare</a>
        <a :href="product.url" class="btn btn-primary" target="_blank">Store Page</a>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: ['product'],
  methods: {
    sendToStore (rul) {
      window.location.href
    }
  }
};
</script>

<style>
#product-card {
  margin: 10px;
  padding: 10px 5px 10px 5px;
  border: 2px solid salmon;
  text-align: center;
}
</style>
