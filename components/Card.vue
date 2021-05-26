<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix card-title">
      <span>{{title}} <a class="link-text" @click="goPage(url)">このページへ</a></span>
    </div>
    <span v-for="tag in tags">
      {{tag.name}},
    </span>
  </el-card>
</template>
<script>
export default {
  props: {
    title: String,
    id: Number,
    tags: Array,
    url: String,
  },
  methods: {
    goPage(url) {
      location.href = url;
    }
  }
}
</script>
<style>
.el-card__header {
  background-color: #bdd7b1;
}

.link-text {
  color: #880000;
  cursor:pointer;
}
</style>
