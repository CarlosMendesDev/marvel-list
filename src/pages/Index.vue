<template lang="pug">
q-page()
  q-infinite-scroll(
    @load="onLoadHeros"
    :offset="10"
    v-if="loadingMore"
  )
    div(class="q-pt-md q-gutter-y-md flex flex-center")
      Card(
        v-for="hero in marvelList"
        :name="hero.name"
        :id="hero.id"
        :image="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
      )
    template(v-slot:loading)
      div(class="row justify-center q-my-md")
        q-spinner-dots(color="primary" size="40px")
</template>

<script>
import Card from '../components/Card/Card';

export default {
  name: 'PageIndex',

  components: {
    Card,
  },

  data() {
    return {
      loadingMore: false,
    };
  },

  computed: {
    marvelList: {
      get() { return this.$store.getters['app/getMarvelList']; },
      set(value) { this.$store.commit('app/setMarvelListSearch', { marvelList: value }); },
    },
  },

  methods: {
    async onLoadHeros(index, done) {
      const offset = index * 10;

      await this.$store.dispatch('app/getMarvelApi', { offset });
      done();
    },
  },

  async mounted() {
    this.marvelList = [];

    await this.$store.dispatch('app/getMarvelApi', { offset: 0 });

    this.loadingMore = true;
  },
};
</script>
