<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-1 overflow-hidden">
      <main class="flex flex-1 bg-light9 overflow-y-auto paragraph px-4 py-8">
        <slot />
      </main>
      <slot name="modal" />
    </div>
  </div>
</template>
