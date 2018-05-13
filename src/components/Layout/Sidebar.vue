<template>
  <div id="sidebar">
      Sidebar(Filter)
      <div class="form-check" v-for="filter in filters" :key="filter.label">
        <br/>{{filter.name}}
        <div class="form-check" v-for="choice in filter.choices" :key="choice.label">
          
          <label class="form-check-label" :for="choice.label">
            <input 
              class="form-check-input" 
              type="checkbox" 
              v-model="choice.active" 
              :id="choice.label"
              @change="onChange"
            >
            {{choice.label}}
          </label>
        </div>
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
          name: 'CPU',
          choices: [
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
        },
        {
          name: 'RAM',
          choices: [
            {
              label: '8 GB',
              active: false
            },
            {
              label: '12 GB',
              active: false
            },
            {
              label: '16 GB',
              active: false
            },
          ]
        }
      ]
    }
  },
  methods: {
    onChange () {
      this.filterQuery = ''
      for(var i = 0; i < this.filters.length; i++)
      {
        for(var j = 0; j < this.filters[i]["choices"].length; j++)
        {
          if(this.filters[i]["choices"][j].active)
            this.filterQuery = this.filterQuery + this.filters[i]["choices"][j].label + ' '
        }
      }
      this.$emit('getFilter',this.filterQuery)
    }
  }
}
</script>

<style>
#sidebar {
  border-radius: 5px;
  padding-top: 20px;
  padding-left: 20px;
  border: 2px solid #6d89d5;
  height: 100%;
}
</style>
