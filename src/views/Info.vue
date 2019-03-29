<template>
    <div>
        <div class="infoWrapper">
            <p>{{title}}</p>
            <hr>
            <div class="title">{{content}}</div>
            <div class="back" @click="backList()">返回</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Info',
    data(){
        return {
           id:this.$route.params.id,
           title:null,
           content:null
        }
    },
    methods:{
        backList(){
            this.$router.push('/home/list')
        }
    },
    created(){
        let item = JSON.parse(localStorage.getItem('lists'))[this.id]
        this.title = item.title
        this.content = item.content
    }
}
</script>
<style lang="scss" scoped>
.infoWrapper{
    width:414px;height:100vh;
    border:1px solid #cac9c9;
    border-radius: 7px;
    box-shadow: 0px 0px 2px 2px rgb(230, 228, 228);
    margin-left:auto;margin-right:auto;
    padding:10px;
    position:relative;
    hr{
        border: none;
        border-top:1px solid rgb(202, 201, 201);
        margin: 8px 0;
    }
    .title{
        width:390px;height:400px;
        white-space:normal;
        word-break:break-all;
        word-wrap:break-word; 
    }
    .back{
        width:380px;height:40px;
        line-height: 40px;
        text-align: center;
        border-radius: 7px;
        cursor: pointer;
        background: #42b983;
        color:#fff;
        position:absolute;
        left:16px;bottom:15px;
    }
}
</style>
