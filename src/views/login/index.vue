<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm">
            <h1>Hello</h1>
            <h2>欢迎来到DIY台式系统</h2>
            <el-form-item>
                <el-input v-model="loginForm.username" :prefix-icon="User" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="loginForm.password" :prefix-icon="Lock" show-password type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login_btn" type="primary" size="default" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
let loginForm = reactive({
    username: '',
    password: '',
});

const login = () => {
    console.log('loginForm', loginForm)
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/imgs/login_bg.jpg") no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 50%;
    border-radius: 20px;
    top: 35vh;
    background: linear-gradient(to bottom, rgb(69, 92, 126), #a1d3ec);
    opacity: 0.8;
    padding: 20px;
  }
  h1 {
    font-size: 40px;
    color: white;
  }
  h2 {
    font-size: 20px;
    color: white;
    margin: 20px 0px
  }
  .login_btn {
    width: 100%;
  }
}
</style>
