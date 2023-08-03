<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <h3>1. masukkan angka 70, maka hasil input berubah</h3>
    <h3>2. masukkan angka 120, maka hasil input tidak berubah dan akan muncul alert</h3>
    <h3>3. coba muat ulang halaman, maka hasil input tidak akan ke kembali ke 0. karena sudah ter implementasi persisted state</h3>
    <input type="number" v-model.number="inputValue">
    <button @click="modifikasiStore">
      modifikasi store
    </button>
    <p>hasil input : {{ angkaDariStore }}</p>
    <p class="alert">{{ infoDariStore }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      inputValue: 0
    }
  },
  computed: {
    angkaDariStore() {
      return this.$store.state.about.angka;
    },
    infoDariStore() {
      return this.$store.state.about.info;
    },
  },
  methods: {
    modifikasiStore() {
      // mutation
      // this.$store.commit("setAngka", 50)

      // action
      this.$store.dispatch("about/changeAngkaValue", this.inputValue)
    }
  }
}

</script>

<style scoped>
.alert {
  color: red
}
</style>>
