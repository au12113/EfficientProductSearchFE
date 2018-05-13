<template>
  <div>
    <div v-if="!ready">
      loading...
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-xl-4" >
          <img v-if="product.images !== undefined" id="product-img" :src="product.images[0]">
        </div>
        <div class="col-xl-1"></div>
        <div id="product-detail" class="col-xs-12 col-md-6 col-xl-7">
          <h5>{{product.brand}} {{product.model}}</h5>
          <li v-if="product.features[key]!=undefined" v-for="key in keys">
            {{key}} : 
            <span v-for="feature in product.features[key]">
              {{feature.toUpperCase()}}
            </span>
          </li>
        </div>
      </div>
      <div class="row">
        <sales-table class="col-10" :sales="sales" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SalesTable from '../UIComponents/SalesTable.vue'
import config from '../../assets/config.json'
export default {
  name: 'ProductDetail',
  components: { SalesTable },
  data () {
    return {
      keys: ['Chipset','CPU','Display','Graphics','RAM','OS'],
      ready: false,
      product: '',
      sales: []
    }
  },
  methods: {
    fetch(productID) {
      axios
      .get(config.server[0] + config.collection[0] + "/id/"+ this.$route.params.productID)
      .then((res) => {
        Object.keys(res.data[0]["features"]).forEach(function(key) {
          console.log(res.data[0]["features"][key].sort())
          if(Array.isArray(res.data[0]["features"][key]))
            res.data[0]["features"][key] = res.data[0]["features"][key].sort()
        })
        this.product = res.data[0]
        return axios.get(config.server[0] + config.collection[0] + "/sales/?model="+ res.data[0].model)
      })
      .then((res) => {
        this.sales = res.data
        this.ready = true
      })
    }
  },
  mounted () {
    this.fetch(this.$route.productID)
  }
}
</script>

<style>
#product-img {
  width:100%;
  height: auto;
}
#product-detail {
  padding: 20px 50px
}
</style>
