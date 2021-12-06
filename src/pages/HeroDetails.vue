<template lang="pug">
q-page(class="column q-pa-md q-gutter-y-md")
  section(v-if="!loading" class="col-auto")
    q-img(
      :src="`${heroDetail.thumbnail.path}.${heroDetail.thumbnail.extension}`"
      width="100%"
      height="17rem"
      class="rounded-borders"
    )
  section(class="text-h3 text-bold text-white text-center")
    | {{ heroDetail.name }}
  q-card(class="col full-height")
    q-card-section(class="bg-white full-width")
      | {{ heroDetail.description }}
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },

  computed: {
    heroDetail: {
      get() { return this.$store.getters['app/getHeroDetail']; },
      set(value) { this.$store.commit('app/setHeroDetai', { heroDetail: value }); },
    },
  },

  async mounted() {
    this.loading = true;

    this.heroDetail = {};

    await this.$store.dispatch('app/getHeroDetail', { id: this.$route.params.id });

    this.loading = false;
  },
};
</script>
