<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Halo hai 1" @update-counter="updateCounterValue"/>
    <HelloWorld msg="Halo hai 2" @update-counter="updateCounterDua"/>
    <HelloWorld msg="Halo hai 3"/>
    <p>
      {{ counter }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { penambahan } from "../utils/operasi-matematika";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    updateCounterValue() {
      this.counter = penambahan(this.counter , 1)
      // this.counter += 1;
    },
    updateCounterDua() {
      this.counter = penambahan(this.counter , 2)
      // this.counter += 2;
    }
  },
  mounted() {
    console.log('sebelum', this.counter)

    this.updateCounterValue()

    console.log('sesudah', this.counter)
  }
}
</script>
