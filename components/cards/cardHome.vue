<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ stats.symbol }}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile">
          <div class="column">
            <h3 class="title is-3"><span class="tag is-success is-medium">PRICE</span></br>{{ high }}</h3>
          </div>
          <div class="column">
            <h3 class="title is-4"><span class="tag is-primary">HIGH</span>&nbsp;{{ high }}</h3>
            <h3 class="title is-4"><span class="tag is-primary">OPEN</span>&nbsp;{{ open }}</h3>
            <h3 class="title is-4"><span class="tag is-primary">LOW</span>&nbsp;{{ low }}</h3>
          </div>
        </div>

      </div>
    </div>
    <footer class="card-footer">
      <a href="#" v-if="stats.volume" class="card-footer-item">{{ volume }}</a>
      <a href="#" v-if="stats.volume" class="card-footer-item">{{ stats.volume }}</a>
      <a href="#" v-if="stats.priceChangePercent" class="card-footer-item">{{ priceChangePercent }}%</a>
    </footer>
  </div>
</template>

<script>
export default {
  props:["stats"],
  computed: {
    // a computed getter
    volume: function () {
      return this.financial(this.stats.volume,2)
    },
    priceChangePercent: function () {
      return this.financial(this.stats.priceChangePercent,2)
    },
    open: function () {
      return this.financial(this.stats.open,2)
    },
    high:function () {
      return this.financial(this.stats.high,3)
    },
    low:function () {
      return this.financial(this.stats.low,3)
    },
    bestBid: function () {
      return this.financial(this.stats.bestBid,3)
    }
  },

  methods:{
    financial(x,y) {
      return Number.parseFloat(x).toFixed(y);
    }
  }

}
</script>

<style lang="css">
</style>
