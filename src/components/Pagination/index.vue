<template>
  <div class="flex justify-end items-center text-light6 px-4 py-2">
    <p class="mr-5 font-medium whitespace-nowrap lg:mr-20">
      <span class="mr-1 lg:mr-20">{{ totalRecord }} Total</span>
      <span class="lg:mr-10">|</span>
      <span class="mr-15 md:mr-20 w-min">
        Page {{ totalPage === 0 ? 0 : currentPage }} / {{ totalPage }}
      </span>
    </p>
    <div class="flex rounded-md w-78 overflow-hidden lg:w-90">
      <button
        class="focus:outline-red border-dark py-2 px-4"
        :class="hasPrevious ? 'bg-red' : 'bg-dark cursor-not-allowed'"
        :disabled="!hasPrevious"
        @click="handleClickSwitchPage('previous')"
      >
        <PrevPageIcon fill="white" />
      </button>
      &nbsp; &nbsp;
      <button
        class="focus:outline-red border-dark py-2 px-4"
        :class="hasNext ? 'bg-red' : 'bg-dark cursor-not-allowed'"
        :disabled="!hasNext"
        @click="handleClickSwitchPage('next')"
      >
        <NextPageIcon fill="white" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NextPageIcon from "@/assets/svg/icons/Table/NextPage.vue";
import PrevPageIcon from "@/assets/svg/icons/Table/PrevPage.vue";
import { debounceFunction } from "@/utils/functionCommon";
export interface PaginationProps {
  defaultPage?: number;
  totalPage: number;
  totalRecord: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onPageChange?: (currentPage: number) => void;
}

const {
  defaultPage = 1,
  totalPage,
  totalRecord,
  onPageChange,
  hasNext,
  hasPrevious,
} = defineProps<PaginationProps>();
const currentPage = ref(defaultPage);
const handleClickSwitchPage = (type: string) => {
  let pageCurrent = currentPage.value;
  if (type === "next") {
    pageCurrent = currentPage.value + 1;
  }

  if (type === "previous" && currentPage.value > 1) {
    pageCurrent = currentPage.value - 1;
  }

  currentPage.value = pageCurrent;
  debounceFunction(() => {
    if (onPageChange) {
      onPageChange(pageCurrent);
    }
  });
};
</script>
