<template>
  <div id="header" class="row">
    <div class="col-2">
      Logo
    </div>
    <div class="col-8">
    </div>
    <div class="dropdown col-2">
      <button 
        class="btn btn-secondary dropdown-toggle" 
        type="button" 
        id="accountDropdown" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
      >
        Account
      </button>
      <div class="dropdown-menu" aria-labelledby="accountDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
#header {
  background-color: #35d2ab;
  text-align: center;
  align-items: center;
  min-height: 60px;
  height: 8vh;
  margin-bottom: 20px
}
#accountDropdown {
  background-color: #35d2ab;
}
#accountDropdown:active {
  background-color: #00ab6f;
}
</style>