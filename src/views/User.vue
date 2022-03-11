<script setup lang="ts" name="User">
import { reactive, ref, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const newName = ref<string>('youyue')
const userStore = useUserStore()
const { setUserInfo } = userStore
const { userInfo, dobuleAge } = storeToRefs(userStore)
</script>

<template>
  <ul>
    <li>姓名：{{ userInfo?.name }}</li>
    <li>年龄：{{ userInfo?.age }}</li>
    <li>电话：{{ userInfo?.contactInfo?.phone }}</li>
    <li>地址：{{ userInfo?.contactInfo?.address }}</li>
    <li>双倍年龄：{{ dobuleAge }}</li>
  </ul>
  <div>
    <button @click="setUserInfo({ name: 'you' })">修改名称为：{{ newName }}</button>
    <button @click="userStore.$patch({ userInfo: { age: 66 } })">修改年龄为</button>
    <button @click="userStore.$reset()">重置</button>
  </div>
</template>

<style scoped></style>
