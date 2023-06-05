<template>
  <aside
    :class="[
      isActiveSidebar ? 'w-100' : 'w-27',
      'bg-light7 h-screen relative py-8 duration-300 overflow-y-auto',
    ]"
  >
    <ul>
      <router-link v-for="item in listMenu" :key="item?.title" :to="item.route">
        <li
          class="rounded-r px-2 py-3.5 cursor-pointer hover:bg-red hover:text-white text-gray-300 items-center text-base font-normal text-light8"
        >
          <div class="flex items-center px-5">
            <component :is="item.srcIcon"></component>
            <span class="ml-3.5" v-if="isActiveSidebar">
              {{ item.title }}
            </span>
          </div>
        </li>
      </router-link>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

import exam from "@/assets/svg/icons/exam.vue";
import roles from "@/assets/svg/icons/roles.vue";
import bot from "@/assets/svg/icons/bot.vue";
import game from "@/assets/svg/icons/game.vue";
import bell from "@/assets/svg/icons/bell.vue";
import { ROUTES } from "@/router/constants";

const MENUS = [
  {
    title: "Series Question",
    srcIcon: exam,
    route: ROUTES.SERIES_QUESTIONS.PATH,
  },
  {
    title: "Roles Management",
    srcIcon: roles,
    route: ROUTES.ROLES.PATH,
  },
  {
    title: "Bot Messages",
    srcIcon: bot,
    route: ROUTES.BOT_MESSAGES.PATH,
  },
  {
    title: "Lucky Draw Game",
    srcIcon: game,
    route: ROUTES.LUCKY_DRAW_GAME.PATH,
  },
  {
    title: "Notifications",
    srcIcon: bell,
    route: ROUTES.NOTIFICATIONS.PATH,
  },
];

type props = {
  isActiveSidebar: Boolean;
};

const { isActiveSidebar } = defineProps<props>();
const listMenu = reactive(MENUS);
</script>

<style scoped>
.router-link-active li {
  @apply bg-red text-white;
}
</style>
