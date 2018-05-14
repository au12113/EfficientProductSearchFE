<template>
  <div id="body" class="row justify-content-md-center">
    <div class="col-md-3 col-xl-2">
      <Sidebar :filterQuery="filterQuery" @getFilter="getFilterQuery">
        {{filterQuery}}
      </Sidebar>
    </div>
    <div id="main" class="col-md-8 col-xl-10">
      <input id="search-box" type="text" placeholder="Phrase" v-model="queryObject.phrase" @keyup.13="fetch(queryObject)"/>
      <button type="button" class="btn btn-primary" @click="fetch(queryObject)">Fetch</button>

      <!-- <h4>Search Result: {{products.length}}</h4> -->
        <nav aria-label="Page navigation example" style="margin-top: 20px;">
          <ul class="pagination justify-content-center">
            <li class="page-item" v-if="queryObject.page != 1"><a class="page-link" @click="prevPage()">Previous</a></li>
            <li class="page-item disabled" v-else><a class="page-link">Previous</a></li>
            <li class="page-item disabled">
              <a class="page-link" >{{queryObject.page}}</a>
            </li>
            <li class="page-item" v-if="products.length >= queryObject.limit"><a class="page-link" @click="nextPage()">Next</a></li>
            <li class="page-item disabled" v-else><a class="page-link">Next</a></li>
          </ul>
        </nav>
      <div v-if="!ready">
        <h4>Wait...</h4>
      </div>
      <div class="row" v-else>
        <div class="col-md-5 col-xl-3" v-for="product in products" :key="product._id">
          <ProductCard v-bind:product="product">{{product}}</ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../UIComponents/ProductCard.vue'
import Sidebar from '../Layout/Sidebar.vue'
import config from '../../assets/config.json'
import axios from 'axios'

export default {
  name: "SearchResult",
  components: { ProductCard, Sidebar },
  // props: ['filterQuery'],
  data () {
    return {
      ready: true,
      filterQuery: '',
      queryObject: {
        phrase: 'Core i7',
        page: 1,
        limit: 10
      },
      products: []
    }
  },  
  methods: {
    fetch(query) {
      var queryString = '/search?'
      Object.keys(query).forEach(function(key) {
        var val = query[key];
        if(key !== "phrase")
        {
          queryString = queryString + key + '=' + val +'&'
        }
      });
      if(this.filterQuery !== '')
        queryString = queryString + 'phrase' + '=' + this.queryObject.phrase + ' ' + this.filterQuery
      else
        queryString = queryString + 'phrase' + '=' + this.queryObject.phrase
      console.log(queryString)
      this.ready = false
      axios
      .get(config.server[0] + config.collection[2] + queryString)
      .then((res) => {
        this.products = res.data
        this.ready = true
      })
    },
    getFilterQuery(v) {
      this.filterQuery = v;
    },
    nextPage() {
      this.queryObject.page += 1;
      this.fetch(this.queryObject)
    },
    prevPage() {
      this.queryObject.page -= 1;
      this.fetch(this.queryObject)
    }
  },
  mounted () {
    if(this.queryObject.phrase !== '')
      this.fetch(this.queryObject)
  }
}
</script>

<style>
#search-box {
  width: 80%;
  border-radius: 5px;
}
</style>
