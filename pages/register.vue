<template>
  <el-card class="box-card login">
    <div class="login-container">
      <span class="register-title">ユーザー登録</span>
      <el-form :model="form">
        <el-form-item label="メールアドレス">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
      <el-form-item label="パスワード">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
        <el-button type="primary" @click="login">ユーザー登録</el-button>
        <el-button type="danger" :span="6" @click="goBack">戻る</el-button>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/');
    }
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.form });
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    },
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.login-container {
  margin: 50px auto;
  width: 300px;
  text-align: center;
}

.register-title {
  color: #F56C6C;
}
</style>
