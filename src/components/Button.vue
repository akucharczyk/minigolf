<template>
  <div 
    class="w-48 h-10 text-center flex justify-center items-center text-white hover:opacity-80 cursor-pointer"
    :class="color !== 'primary' ? 'bg-[#53B5D7]' : 'bg-[#E51540]'"
  >
    <slot/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String,
    validator: function (value) {
      return ['primary', 'secondary'].indexOf(value) !== -1
    }
  }  
})
</script>
