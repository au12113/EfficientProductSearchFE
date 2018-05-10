<template>
  <div id="sidebar">
      Sidebar(Filter)
      <div class="form-check" v-for="filter in filters" :key="filter.label">
        <br/>
        <label class="form-check-label" :for="filter.label">
          <input 
            class="form-check-input" 
            type="checkbox" 
            v-model="filter.active" 
            :id="filter.label"
            @change="onChange"
          >
          {{filter.label}}
        </label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      filterQuery: '',
      filters: [
        {
          label: 'Core i3',
          active: false
        },
        {
          label: 'Core i5',
          active: false
        },
        {
          label: 'Core i7',
          active: false
        },
      ]
    }
  },
  methods: {
    onChange () {
      this.filterQuery = ''
      for(var i = 0; i < this.filters.length; i++)
      {
        if(this.filters[i].active)
          this.filterQuery = this.filterQuery + this.filters[i].label + ' '
      }
      this.$emit('getFilter',this.filterQuery)
    }
  }
}
</script>

<style>
#sidebar {
  border-radius: 5px;
  border: 2px solid #6d89d5;
  height: 100%;
}
</style>
