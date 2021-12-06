<template lang="pug">
q-card(
  @click="heroDetails"
  class="my-card cursor-pointer"
  flat bordered
)
  q-card-section(horizontal class="full-width")
    q-img(
      class="col-5 size-image"
      :src="image"
    )
    q-card-section(class="q-gutter-y-md")
      div(class="text-bold text-h6")
        | {{ name }}
      div(class="text-bold text-subtititle")
        | ID: {{ id }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Hero',
    },
    image: {
      type: String,
      default: 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/5317718f0a2e7.jpg',
    },
    id: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    heroDetails() {
      this.$router.push({ name: 'details', params: { id: this.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 450px;
}
.size-image {
  max-height: 150px;
  margin: 1%;
}
</style>
