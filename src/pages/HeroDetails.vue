<template lang="pug">
q-page(v-if="!loading" class="column q-pa-md q-gutter-y-md")
  section(class="col-auto")
    q-img(
      :src="`${heroDetail.thumbnail.path}.${heroDetail.thumbnail.extension}`"
      width="100%"
      height="17rem"
      class="rounded-borders"
    )
  section(class="text-h3 text-bold text-white text-center")
    | {{ heroDetail.name }}
  q-card(class="col full-height")
    q-card-section(v-if="heroDetail.description" class="bg-white full-width")
      | {{ heroDetail.description }}
    q-card-section(v-else class="bg-white text-center full-width text-h6")
      | This hero has no description...
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
    console.log(this.heroDetail);
    if (!this.heroDetail) {
      this.$q.dialog({
        title: 'Not found',
        message: 'Try again in a few seconds',
      }).onOk(() => {
        this.$router.push({ name: 'index' });
      });
    } else {
      this.loading = false;
    }
  },
};
</script>
