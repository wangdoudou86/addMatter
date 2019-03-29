<template>
    <div>
        <div class="addWrapper">
            <p>标题</p>
            <input class="title" type="text" v-model="title">
            <p>内容</p>
            <textarea class="content" v-model="content" ></textarea>
            <div class="selector">
                <div class="add" @click="add()">添加</div>
                <div class="back" @click="back()">返回</div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store.js'
export default {
    name: 'add',
    store,
    data(){
        return {
            title:'',
            content:''
        }
    },
    methods:{
        add(){
            store.commit('addItem',{
                title: this.title,
                content: this.content
            })
            this.title = ''
            this.content = ''
            this.$router.push('/home/list')
        },
        back(){
           this.$router.push('/home/admin') 
        }
    }

}
</script>
<style lang="scss" scoped>
.addWrapper{
    width:414px;height:100vh;
    margin:10px 0 0 20px;
    // padding:10px;
    // border:1px solid #cac9c9;
    // border-radius: 7px;
    // box-shadow: 0px 0px 2px 2px rgb(230, 228, 228);
    // margin-left:auto;margin-right:auto;
    p{
        margin-bottom:6px;
    }
    .title{
        width:200px;height:25px;
        font-size:14px;
        border:1px solid #cac9c9;
        border-radius: 7px;
        margin-bottom:15px;
    }
    .content{
        width:450px;height:280px;
        resize: none;
        font-size:14px;
        border:1px solid #cac9c9;
        border-radius: 7px;
        margin-bottom:10px;
    }
    .selector{
        display:flex;
            div{
                width:192px;height:35px;
                line-height: 35px;
                font-size:14px;
                text-align: center;
                border:1px solid #cac9c9;
                border-radius:4px;
                margin-right:10px;
                padding: 0 2px;
                cursor: pointer;
                background:#42b983;
                color:#fff;
            }
    }
}
</style>
