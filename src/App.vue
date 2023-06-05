<template>
  <notifications position="top center" />
  <component :is="$route.meta.layout || 'default'">
    <router-view />
  </component>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>
