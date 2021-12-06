<template lang="pug">
q-header(class="q-pa-sm" elevated)
  q-toolbar(class="flex position-relative q-pa-sm")
    div(class="text-center full-width")
      q-input(
        rounded
        outlined
        v-model="search"
        label="Search..."
        color="black"
        bg-color="white"
        :loading="loading"
      )
        template(v-slot:prepend)
          q-icon(name="search" color="black")
        template(v-slot:append)
          q-icon(name="close" @click="cleanSearch" class="cursor-pointer" color="black")
</template>

<script>
export default {
  data() {
    return {
      search: '',
      loading: false,
    };
  },

  watch: {
    search() {
      if (this.search) {
        this.searchHero();
      } else {
        this.cleanSearch();
      }
    },
  },

  computed: {
    marvelList: {
      get() { return this.$store.getters['app/getMarvelList']; },
      set(value) { this.$store.commit('app/setMarvelListSearch', { marvelList: value }); },
    },
  },

  methods: {
    async searchHero() {
      this.loading = true;

      await this.$store.dispatch('app/getMarvelApiSearch', { nameStartsWith: this.search });

      this.loading = false;
    },
    async cleanSearch() {
      this.loading = true;

      this.search = '';
      this.marvelList = [];

      await this.$store.dispatch('app/getMarvelApi', { offset: 0 });

      this.loading = false;
    },
  },
};
</script>
