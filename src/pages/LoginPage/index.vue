<template>
  <div class="login-wrapper w-screen h-screen box-border relative">
    <img
      src="../../assets/images/bg-login-page.png"
      alt="background"
      class="w-full h-[50%] laptop:h-full laptop:absolute top-0 right-0 bottom-0 laptop:max-w-[60%]"
    />
    <div
      class="my-0 mx-auto w-10/12 text-xl tablet:mx-0 tablet:block tablet:pl-[100px] tablet:pt-[75px] laptop:h-[90%] laptop:text-2xl laptop:mx-0 laptop:block laptop:pl-[170px] laptop:pt-[75px] desktop:pl-[230px] desktop:pt-[100px] desktop:text-3xl"
    >
      <img src="@/assets/svgs/logo.svg" alt="logo" class="logo w-[200px]" />
      <div class="mt-[2rem] text-black tablet:mt-[5rem] laptop:mt-[9rem]">
        <h1 class="leading-[1] font-semibold">MAKE</h1>
        <h1 class="leading-[1] font-semibold">
          <span class="text-red">AWESOME</span> THINGS
        </h1>
        <h1 class="leading-[1] font-semibold">THAT MATTER</h1>
      </div>
    </div>
    <p
      class="my-4 mx-auto w-10/12 text-gray text-sm tablet:mx-0 tablet:pl-[100px] laptop:pl-[170px] desktop:pl-[230px]"
    >
      &copy; 2022 By Sun* - Creative Engineering Unit Vietnam 12
    </p>
  </div>
  <Loading v-if="isLoading"></Loading>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";

import Loading from "@/components/Loading/index.vue";
import { LoginStorage } from "@/utils/localstorage";
import { useAuthUseCaseStore } from "@/stores/useAuthUseCase";

const authStore = useAuthUseCaseStore();
const isLoading = computed(() => authStore.isLoading);

onMounted(() => {
  LoginStorage.clearData();
});
</script>

<style lang="css" scoped></style>
