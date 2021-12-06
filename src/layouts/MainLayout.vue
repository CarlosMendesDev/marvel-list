<template lang="pug">
q-layout(view="lHh Lpr lFf")
  Header
  q-page-container
    router-view
</template>

<script>
import Header from '../components/Header/Header';

export default {
  name: 'MainLayout',

  components: {
    Header,
  },
};
</script>
