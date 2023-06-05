<template>
  <label
    for="Toggle3"
    class="inline-flex items-center p-2 mt-2 rounded-md cursor-pointer"
  >
    <input id="Toggle3" type="checkbox" class="hidden peer" />
    <span
      class="p-2 rounded-l-md"
      :class="
        sortType === SORT_TYPE.ASC
          ? 'bg-red text-white pointer-events-none'
          : 'bg-gray'
      "
      @click="onChangeSort(SORT_TYPE.ASC)"
      >{{ SORT_TYPE.ASC }}</span
    >
    <span
      class="p-2 rounded-r-md"
      :class="
        sortType === SORT_TYPE.DESC
          ? 'bg-red text-white pointer-events-none'
          : 'bg-gray'
      "
      @click="onChangeSort(SORT_TYPE.DESC)"
      >{{ SORT_TYPE.DESC }}</span
    >
  </label>
</template>

<script lang="ts" setup>
import { SORT_TYPE } from "@/utils/constants";
export interface Props {
  sortType: string;
  onChangeSort: (type: string) => void;
}
const { sortType, onChangeSort } = defineProps<Props>();
</script>
