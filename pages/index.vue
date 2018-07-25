<template>
  <section class="container is-fluid">
    <div class="container">
      <div class="column">
        <CardHome :stats="currentNeoStats"/>
      </div>
    </div>
  </section>
</template>

<script>
import CardHome from '~/components/cards/cardHome.vue'

export default {
  components: {
    CardHome
  },

  data(){
    return {
        currentNeoStats: {}
    }
  },

  created(){
    this.$store.commit('SET_CLIENT', {
       keys: {
         apiKey: '9iYXsX3ymtHoZIJf1fMXIsqzYOCDfOPBIL7dG1NjODBXNoJEIHNqQdTPfQ2pAaPF',
         apiSecret: 'ekc8AccYdDPZTv4O2kgh3qO5vcrNPXbDwJTXhc0lLV6IipBmU46vtALMexaI2JJW'
       }
    })
  },

  mounted(){
    this.$store.state.client.ws.ticker('NEOUSDT', ticker => {
      //console.log(ticker);
      this.currentNeoStats = ticker
    })

    // this.$store.state.client.ws.ticker('NEOUSDT', ticker => {
    //   console.log(ticker);
    //   this.currentNeoStats = ticker
    // })

    this.$store.state.client.prices().then( (result) => {
      //console.log(result.NEOUSDT);
    });

  }
}
</script>
