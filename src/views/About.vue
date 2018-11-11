<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{now()}}
  </div>
</template>


<script>
export default {
  name: 'about',
  methods: {
    now() {
      return new Date();
    },
  },
};
</script>
