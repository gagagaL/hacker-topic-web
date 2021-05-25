<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{title}} <a @click="goPage(url)">このページへ</a></span>
    </div>
    <div v-for="tag in tags">
      {{tag.name}}
    </div>
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
