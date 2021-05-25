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
      <el-row :gutter="36">
        <div v-for="data of qiita_result">
          <el-col class="card-zone">
            <Card :title="data.title" :tags="data.tags" :url="data.url"/>
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


export default Vue.extend({
  asyncData: async function () {

    const qiita_url = 'https://qiita.com/api/v2/items'

    let qiita_result = await axios.get(qiita_url);

    console.log(qiita_result);

    return {qiita_result:qiita_result.data};
  },
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
  margin: 30px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-zone {
  margin-bottom: 20px;
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
