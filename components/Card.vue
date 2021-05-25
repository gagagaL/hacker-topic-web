<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Card name</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'List item ' + o }}
    </div>
  </el-card>
</template>
