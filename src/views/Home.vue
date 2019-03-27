<template>
  <div>
    <router-view/>
    <ul>
        <li><router-link :to="{name:'list'}">事项列表</router-link></li>
        <li><router-link :to="{name:'admin'}">添加事项</router-link></li>
    </ul> 
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>

</style>
