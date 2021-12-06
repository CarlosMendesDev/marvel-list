<template lang="pug">
q-layout(view="lHh Lpr lFf")
  HeaderDetails
  q-page-container
    router-view
</template>

<script>
import HeaderDetails from '../components/Header/HeaderDetails';

export default {
  name: 'HeroDetailsLayout',

  components: {
    HeaderDetails,
  },
};
</script>
