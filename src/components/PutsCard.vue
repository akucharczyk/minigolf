<template>
  <div 
    class="w-48 h-48 text-white relative p-3 flex flex-shrink-0 flex-col shadow-md bg-[#E51540]"
    :class="isActive 
      ? 'border-r-8 border-l-8 border-[#25A942]' 
      : 'opacity-70 hover:opacity-100 transition-opacity'
    "
  >
    <div class="flex items-center justify-center h-full text-6xl relative select-none">
      <font-awesome-icon
        v-if="isActive"
        @click="puts++"
        class="absolute top-5 hover:text-[#53B5D7] cursor-pointer"
        size="xs"
        :icon="[ 'fa', 'sort-up' ]"
      />
      {{ puts }}
      <font-awesome-icon
        v-if="isActive"
        class="absolute bottom-5 hover:text-[#53B5D7] cursor-pointer"
        @click="puts > 0 && puts--"
        :class="puts < 1 && 'cursor-not-allowed'"
        size="xs"
        :icon="[ 'fa', 'sort-down' ]"
      />
    </div>
    <div class="flex items-center justify-center">
      Puts
    </div>
    <div v-if="isLastCard && isActive" class="absolute -bottom-3 bg-[#25A942] h-5 -left-2 -right-2"></div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  isActive: Boolean,
  isLastCard: Boolean
})

const puts = ref(0)
</script>
