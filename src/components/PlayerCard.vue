<template>
  <div 
    class="w-48 h-48 text-white relative p-3 flex flex-shrink-0 flex-col cursor-pointer bg-[#53B5D7] shadow-md"
  >
    <div 
      v-if="isWinning"
      class="bg-[#25A942] text-white absolute w-full h-8 -left-4 top-1/2 z-index flex justify-center items-center transform -rotate-90 -translate-x-1/2 -translate-y-1/2"
    >
      Winning!
    </div>
    <div class="mx-auto text-center overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
      {{ player.puts }} Puts
    </div>
    <div class="flex flex-1 justify-center items-center h-full">
      <font-awesome-icon size="5x" :icon="[ 'fa', 'golf-ball' ]" />
    </div>
    <div class="text-center">
      {{ player.name }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  isWinning: Boolean
})
</script>
