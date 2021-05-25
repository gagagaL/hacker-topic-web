<template>
  <div class="container">
    <div>
      <el-row :gutter="20">
        <el-button type="primary" :span="6" @click="goLogin">
          ログイン画面
        </el-button>
        <el-button type="success" :span="6" @click="goRegister">
          登録画面
        </el-button>
      </el-row>
      <h2>Qiita</h2>
      <el-row :gutter="10">
        <div v-for="o in 16" :key="o">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <Card />
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import QiitaNewModule from 'modules/qiita_new.js';

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

// var axiosObject = axios.create({
//   baseURL: 'https://qiita.com/api/v2/items', // バックエンドB のURL:port を指定する
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest'
//   },
//   responseType: 'json'
// });
//
// var option = null;
//
// axiosObject.get(url, option)
//   .then(function(response) {
//
//     console.log(response);
//     // 返ってきたレスポンスはそのまま加工せずに callback で呼び出し元へ渡す
//     // callback(response);
//   })
//   .catch(function(error) {
//     console.log('ERROR!! occurred in Backend.')
//   });

export default Vue.extend({
  methods: {
    goLogin() {
      this.$router.push('/login');
    },
    goRegister() {
      this.$router.push('/register');
    }
}});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
