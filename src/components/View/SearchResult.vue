<template>
  <div>
    SearchResult
    <button type="button" class="btn btn-primary" @click="fetch('AMD E2-6110 Radeon R2 4GB DDR3')">Fetch</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SearchResult",
  data () {
    return {
      queryObject: '',
      products: []
    }
  },  
  methods: {
    fetch: (query, err) => {
      axios.get('http://localhost:3000/'+'Crawlers'+'/search?limit=50&phrase=' + query)
      .then( (res, err) => {
        console.log(res)
        this.products = res
      })
    }
  }
}
</script>

<style>

</style>
