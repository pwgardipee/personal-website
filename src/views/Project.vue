<template>
  <div>{{ project }}</div>
</template>

<script>
import projects from "./../assets/data/projects.json";
export default {
  data() {
    return {
      project: undefined,
    };
  },
  created() {
    console.log("Route: ", this.$route.params.id);
    const p = projects.filter((p) => {
      return p.name === this.$route.params.id;
    });
    this.project = p[0];
  },
};
</script>

<style></style>
