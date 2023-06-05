<template>
  <v-select
    v-model="valueSelected"
    :options="data"
    :filterable="false"
    @open="onOpen"
    @close="onClose"
    @update:modelValue="updateData"
  >
    <template #list-footer>
      <li v-show="metadata.hasNext" ref="load" class="loader">
        Loading more options...
      </li>
    </template>
  </v-select>
</template>

<script>
import isEmpty from "lodash/isEmpty";

export default {
  name: "InfiniteScroll",
  data: () => ({
    observer: null,
    valueSelected: null,
  }),
  props: ["data", "metadata", "getData", "updateData", "selected"],
  mounted() {
    this.observer = new IntersectionObserver(this.infiniteScroll);
  },
  watch: {
    selected(newValue) {
      if (!isEmpty(newValue)) {
        this.updateData(newValue);
        this.valueSelected = newValue;
      }
    },
  },
  methods: {
    async onOpen() {
      if (this.metadata.hasNext) {
        await this.$nextTick();
        this.observer.observe(this.$refs.load);
      }
    },
    onClose() {
      this.observer.disconnect();
    },
    async infiniteScroll([{ isIntersecting, target }]) {
      if (isIntersecting) {
        const ul = target.offsetParent;
        const scrollTop = target.offsetParent.scrollTop;
        this.getData();
        await this.$nextTick();
        ul.scrollTop = scrollTop;
      }
    },
  },
};
</script>

<style scoped>
.loader {
  text-align: center;
  color: #bbbbbb;
}
</style>
