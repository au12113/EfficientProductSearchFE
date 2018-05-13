<template>
  <!-- <div> -->
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in tableColumns">
            <span v-if="column.show">
              {{column.label}}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in sales">
          <td v-for="column in tableColumns">
            <span v-if="column.show">
              {{entry[column.label]}}
            </span>
          </td>
          <td>
            <a :href="entry.url">
              <button class="btn btn-primary">Goto</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  <!-- </div> -->
</template>

<script>
export default {
    name: 'SalesTable',
    props: ['sales'],
    data () {
      return {
        tableColumns:[
          {
            label: 'seller',
            show: true
          },
          {
            label: 'price',
            show: true
          },
          {
            label: 'warranty',
            show: false
          }
        ],
      }
    }
}
</script>

<style>

</style>
