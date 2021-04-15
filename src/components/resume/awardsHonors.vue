<template>
  <div>
    <div class="text-center max-w-2xl m-auto">
      <div class="text-4xl uppercase font-bold">Awards + Honors</div>
      <div class="text-left mt-14">
        <div
          style="border-left: 1px solid white"
          class="pl-4 mb-4"
          v-for="award in resume.awardsHonors"
          :key="award.title"
        >
          <div>
            <div class="font-semibold">{{ award.title }}</div>
            <div class="text-sm font-bold text-gray-400">
              {{ award.snippet }}
            </div>
            <div class="mt-4 text-sm">
              {{ award.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resume"],
};
</script>

<style></style>
