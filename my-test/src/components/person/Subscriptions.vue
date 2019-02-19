<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="loginRules" label-width="100px" class="login-form">

      <div class="title-container">
        <h2 class="title">{{ $t('login.title') }}</h2>
          <!--   <lang-select class="set-language"/>   语言选择    -->
      </div>

      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="on">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button style="width: 100%;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
import {isvalidUsername} from '@/utils/validate'
export default {
  name: 'Subscriptions',
   data() {
      var validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('please enter the correct username'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'));
        }else {
          callback();
        }
      };
      return {
        loginForm: {
          username: 'admin',
          password: '1111111'
        },
        loginRules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped >
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container{
    position: fixed;
    width:100%;
    height: 100%;
    background-color: $bg;
    .login-form{
      position: absolute;
      left: 0;
      right: 0;
      width:520px;
      max-width: 100%;
      padding: 2px 35px 2px  35px;
      margin: 50px auto;
    }
    .title-container{
    position: relative;
    left: 50px;
      .title{
      color:#eee;
      font-size: 26px;
      font-weight: bold;
      margin: 0px auto 40px auto;
      text-align: center;
      }
    }

}

</style>
