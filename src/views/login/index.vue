<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="rules">
          <h1>Hello</h1>
          <h2>欢迎来到DIY台式系统</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" :prefix-icon="Lock" show-password type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="loginLoading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import useUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";

import { getTime } from "@/utils/time";

let router = useRouter();
let useStore = useUserStore();

let loginFormRef = ref();
let loginForm = reactive({
  username: "admin",
  password: "123456"
});

const rules = {
  username: [
    {
      required: true,
      message: "用户名不能为空！",
      trigger: "blur"
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空！",
      trigger: "blur"
    }
  ]
};

let loginLoading = ref(false);
const login = async () => {
  let validateStatus = await loginFormRef.value.validate()
  if(!validateStatus) return  // 验证不通过直接返回
  loginLoading.value = true;
  console.log('useStore',useStore)
  useStore
    .userLogin(loginForm)
    .then((res) => {
      if (res.code === 200) {
        //跳到首页
        router.push("/");
        ElNotification({
          type: "success",
          title: `Hi,${getTime()}`,
          message: "登录成功！"
        });
        loginLoading.value = false;
      }
    })
    .catch((err) => {
      // ElNotification({
      //     type: 'error',
      //     title: err.message,
      //     message: '登录失败！'
      // })
      loginLoading.value = false;
    });
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
    top: 38vh;
    left: 25vh;
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
    margin: 20px 0px;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
