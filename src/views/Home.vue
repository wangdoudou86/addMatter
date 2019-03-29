<template>
  <div>
    <router-view/>
      <ul class="footer">
          <li><router-link :to="{name:'list'}">事项列表</router-link></li>
          <li><router-link :to="{name:'admin'}">管理中心</router-link></li>
      </ul> 
    </div>
</template>
<script>
export default {
    name:'Home'
}
</script>
<style lang="scss" scoped>
  .footer{
    position: fixed;
    bottom:0;left:0;
    height:60px;
    width:100vw;
    line-height:60px;
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-around;
      li{
        text-align: center;
        flex:1;
        border-top:1px solid #42b983;
        font-size:18px;
        a{
          color:#42b983;
          display:block;
          &.active{
            color: #fff;
            background: #42b983;
          }
        }
      }
  }

</style>
