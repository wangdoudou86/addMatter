<template>
  <div>
    <ul>
        <li class="itemLi" v-for="(item,index) in pageLists" :key="index">
          <p>标题</p>
          <hr/>
          <div>{{item.title}}</div>
          <div class="selector">
            <div class="delete" @click="deleteItem(index)">删除</div>
            <div class="detail" @click="openItem(index)">详情</div>
          </div>
        </li>
    </ul>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "List",
  store,
  computed: {
    pageLists() {
      return JSON.parse(localStorage.getItem("lists"))
    }
  },
  methods:{
      deleteItem(index){
          let listArr = JSON.parse(localStorage.getItem("lists"))
          listArr.splice(index,1)
          localStorage.setItem('lists',JSON.stringify(listArr))
          window.location.reload()

      },
      openItem(id){
          this.$router.push({path:`/info/${id}`})
      }
  }
};
</script>
<style lang="scss" scoped>
ul{
  margin:15px 20px;
}
.itemLi{
  height:75px;
  border:1px solid #cac9c9;
  border-radius:5px;
  margin-bottom:10px;
  padding:8px;
  position:relative;
  hr{
   border: none;
   border-top:1px solid rgb(202, 201, 201);
   margin: 5px 0;
  }
  .selector{
    display:flex;
    position: absolute;
    right:15px;bottom:5px;
     div{
       width:35px;height:25px;
       line-height: 25px;
       font-size:14px;
       text-align: center;
       border:1px solid #cac9c9;
       border-radius:4px;
       margin-left:10px;
       padding: 0 2px;
       cursor: pointer;
       display:none;
     }
  }
}
.itemLi:hover{
  background: #42b983;
  box-shadow: 1px 2px 2px 2px rgb(230, 228, 228);
  color: #fff;
  .selector{
      div{
        display: block;
      }
  }
}
</style>
