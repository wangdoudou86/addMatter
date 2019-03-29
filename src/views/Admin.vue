<template>
     <div>
         <div class="adminWrapper">
            <img src="../assets/logo.png" alt="图标">
            <div class="addItem" @click="add()">请添加事项</div>
            <div class="quit" @click="quit()">退出账号</div>
         </div>
    </div>
</template>
<script>
export default {
    name: 'Admin',
    methods:{
        add(){
            this.$router.push('/add')
        },
        quit(){
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.adminWrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    div{
        width:300px;height:40px;
        line-height: 40px;
        text-align: center;
        border-radius: 7px;
        margin-top:20px;
        cursor: pointer;
        background: #42b983;
        color:#fff;
    }
}
</style>
