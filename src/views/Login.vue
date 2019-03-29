<template>
     <div id="loginWrapper">
        <form action="" v-if="isReg">
            <div class="title">注册</div>
            <p>用户名</p>
            <input type="text" v-model="name">
            <p>密码</p>
            <input type="password" v-model="password">
            <p>请再次输入密码</p>   
            <input type="password" v-model="repeat">
            <div class="selector">
                <div @click="addUser()">注册</div>
                <div @click="gotoLogin()">登录</div>
            </div>
        </form>
        <form action="" v-else>
           <div class="title">登录</div>
           <p>用户名</p>
           <input type="text" v-model="name">
           <p>密码</p>
           <input type="password"  v-model="password">
           <div class="selector">
               <div @click="gotoHome()">登录</div>
               <div @click="gotoReg()">注册</div>
           </div>
       </form>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            name:'',
            password:'',
            isReg: true,
            repeat:''
        }
    },
    methods:{
        addUser(){
            if(this.password !== this.repeat){
                alert('输入密码不一致，请重新输入')
                this.password = ''
                this.repeat = ''
            }else if(this.name === localStorage.getItem('name') && this.name !== ''){
                alert('用户名已存在，请直接登录')
            }else if(this.name !== '' && this.password !== ''){
                localStorage.setItem('name',this.name)
                localStorage.setItem('password',this.password)
                alert('注册成功，去登录吧')
                this.name = ''
                this.password = ''
                this.repeat = ''
                this.isReg = false
            }
        },
        gotoLogin(){
            this.isReg = false
        },
        gotoHome(){
            if(this.name === ''){
                alert('请输入用户名')
            }else if(!localStorage.getItem('name')){
                alert('用户名不存在，请先注册')
                this.name = ''
                this.password = ''
            }
            else if(this.name !== localStorage.getItem('name')){
                alert('用户名不正确')
                this.name = ''
                this.password = ''
            }else if(this.password !== localStorage.getItem('password')){
                alert('密码不正确')
                this.password = ''
            }else if(this.name === localStorage.getItem('name') && this.password === localStorage.getItem('password')){
                this.$router.push('/home/list')
            }
        },
        gotoReg(){
            this.isReg = true
        }
    }
}
</script>
<style lang="scss" scoped>
#loginWrapper{
    height:100vh;
    position: relative;
    form{
        width:380px;height:300px;
        position: absolute;
        top: 50%;left: 50%;
        transform: translate(-50%,-50%);
        border:1px solid #cac9c9;
        border-radius: 7px;
        box-shadow: 0px 0px 2px 2px rgb(230, 228, 228);
        padding:25px 0 30px 35px;
        .title{
            font-size:20px;
            margin-bottom:15px;
            font-weight: bold;
        }
        input{
            width:300px;height:25px;
            border:1px solid #a5a2a2;
            border-radius: 5px;
            margin:8px 0;
        }
        .selector{
            display:flex;
            margin-top:1px;
            div{
                width:140px;height:35px;
                line-height: 35px;
                font-size:14px;
                text-align: center;
                border:1px solid #cac9c9;
                border-radius:4px;
                margin-right:20px;
                cursor: pointer;
                background:#42b983;
                color:#fff;
            }
        }
    }
}
</style>
