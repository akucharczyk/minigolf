<script setup>
import CourseCard from './components/CourseCard.vue'
import PlayerCard from './components/PlayerCard.vue'
import PutsCard from './components/PutsCard.vue'
import Button from './components/Button.vue'
</script>

<template>
  <div>
    <div class="md:hidden fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-extrabold text-white text-center text-2xl">
      This application only work on Desktop devices
    </div>
    <div 
      class="hidden md:inline fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-h-screen p-10 max-w-7xl overflow-x-auto overflow-y-auto"
      :class="{
        'transform scale-150': players.length < 2 && courses.length < 2,
      }"
    >
      <div class="flex border-b-4 border-b-white relative w-fit">
        <div class="cursor-pointer w-48 h-48 flex flex-shrink-0 flex-col items-center justify-center text-white group hover:bg-white hover:bg-opacity-20 transition-colors">
          <font-awesome-icon class="text-[#E51540] mb-3 group-hover:text-[#53B5D7] transition-colors" size="4x" :icon="[ 'fa', 'question' ]" />
          How to play?
        </div>
        <CourseCard
          v-for="course, index in courses"
          :key="course._id"
          :course="course"
          :isActive="index === activeGameIndex"
        />
        <Button
          class="absolute top-1/2 -right-5 transform translate-x-1/2 -translate-y-1/2 -rotate-90"
          color="secondary"
          @click="addCourse()"
        >
          Add Course
          <font-awesome-icon class="ml-2" size="sm" :icon="[ 'fa', 'plus' ]" />
        </Button>
      </div>
      <div v-for="player, playerIndex in players" :key="player._id" class="flex relative border-b-4 border-b-white w-fit">
        <PlayerCard :player="player" :isWinning="winningPlayerId === player._id" />
        <PutsCard
          v-for="course, index in courses"
          :key="course._id" 
          :isActive="index === activeGameIndex"
          :isLastCard="playerIndex === players.length -1"
        />
      </div>
      <Button @click="addPlayer()" color="primary">
        Add Player
        <font-awesome-icon class="ml-2" size="sm" :icon="[ 'fa', 'plus' ]" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      courses: [
        { _id: 0, name: 'Course Name 1' }
      ],
      players: [
        { _id: 0, name: 'Player 1', puts: 15 }
      ],
      activeGameIndex: 0,
      winningPlayerId: 0,
    }
  },
  methods: {
    addCourse() {
      this.courses.push({ 
        _id: this.courses.length, 
        name: `Course Name ${this.courses.length + 1}`
      })
    },
    addPlayer() {
      this.players.push({ 
        _id: this.players.length,
        name: `Player ${this.players.length + 1}`,
        puts: Math.floor(Math.random() * 10)
      })
    },
  }
}
</script>
