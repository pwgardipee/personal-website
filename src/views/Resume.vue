<template>
  <div class="">
    <navbar class="fixed top-0 w-full p-4" />
    <experience :resume="resume" class="mt-40" />
    <education :resume="resume" class="mt-40" />
    <skills :resume="resume" class="mt-40" />
    <awards-honors :resume="resume" class="mt-40" />
  </div>
</template>

<script>
import resume from "./../assets/data/resume.json";
import navbar from "./../components/resume/navbar.vue";
import experience from "./../components/resume/experience.vue";
import education from "./../components/resume/education.vue";
import skills from "./../components/resume/skills.vue";
import awardsHonors from "./../components/resume/awardsHonors.vue";
export default {
  components: {
    navbar,
    experience,
    education,
    skills,
    awardsHonors,
  },
  data() {
    return {
      resume,
    };
  },
};
</script>

<style></style>
