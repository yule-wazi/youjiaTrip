<template>
  <div class="login">
    <div class="title">登录友家</div>
    <div class="content">
      <form class="loginFrom">
        <input class="account" type="text" name="" id="account" placeholder="输入手机号/邮箱/用户名">
        <input class="password" type="password" name="" id="password" placeholder="输入密码">
        <!-- <input class="submit" type="submit" value="登录" @click="submit"> -->
        <div class="submit" @click="submit">登录</div>
      </form>
      <div class="other">
        <div class="phoneNumber">手机短信登录</div>
        <div class="forget">忘记密码?</div>
      </div>
      <div class="protocol">
        <input class="checkBox" type="checkbox" name="" id="">
        <div class="text">已阅读并同意<strong>《途家网服务协议》和《隐私政策》</strong></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const route = useRouter()
  const submit = () => {
    localStorage.setItem("token","114514")
    route.push("/Home")
  }
</script>

<style lang="less" scoped>
  .login {
    
    .title {
      font-size: 40px;
      margin-top: 50px;
      padding-left: 25px;
      border-left: 5px solid var(--primary-color);
    }
    .content {
      padding: 0 30px;
        .loginFrom {
        display: flex;
        flex-direction: column;
        margin: 50px 0 30px 0;
        font-size: 20px;
        .account {
          height: 50px;
          border: none;
          border-bottom: 2px solid var(--border-color);

        }
        .password {
          height: 50px;
          border: none;
          border-bottom: 2px solid var(--border-color);
        }
        .submit {
          margin-top: 20px;
          height: 50px;
          border-radius: 5px;
          // background-color: #DADADA;
          background-color: var(--primary-color);
          color: #fff;
          text-align: center;
          line-height: 50px;
        }
      }
      .other {
        display: flex;
        justify-content: space-between;
      }
      .protocol {
        margin-top: 150px;
        display: flex;
        font-size: 13px;
        .checkBox {
          margin-right: 5px;
        }
      }
    }
  }
</style>