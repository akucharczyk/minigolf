<template>
  <div 
    class="w-48 h-48 text-white relative p-3 flex flex-shrink-0 flex-col cursor-pointer shadow-md"
    :class="isActive ? 'bg-[#53B5D7] border-r-8 border-l-8 border-[#25A942]' : 'bg-[#E51540] opacity-70 hover:opacity-100 transition-opacity'"
  >
    <div
      v-if="isActive"
      class="absolute bg-[#25A942] h-10 -left-2 -right-2 -top-9 flex justify-center items-center"
    >
      Playing
    </div>
    <div class="mx-auto text-center overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
      {{ course.name }}
    </div>
    <div class="flex flex-1 justify-center items-center h-full">
      <font-awesome-icon size="6x" :icon="[ 'fas', 'map' ]" />
    </div>
    <div class="text-center">
      Puts: 3.5
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  course: Object,
  isActive: Boolean
})
</script>
