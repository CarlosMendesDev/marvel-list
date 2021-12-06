<template lang="pug">
q-header(class="q-pa-sm" elevated)
  q-toolbar(class="flex position-relative q-pa-sm")
    q-btn(
      icon="arrow_back"
      no-caps
      rounded
      flat
      label="Back to home page"
      @click="$router.go(-1)"
    )
</template>
