<template>
  <div>
    <div class="text-center max-w-2xl m-auto">
      <div class="text-4xl uppercase font-bold">Experience</div>
      <div
        class="grid gap-4 text-left mt-14"
        style="grid-template-columns: 100px auto"
        v-for="experience in resume.experience"
        :key="experience.company"
      >
        <div>
          <img
            :src="`src/assets/images/resume/${experience.image}`"
            alt=""
            class="w-full"
          />
        </div>
        <div style="border-left: 1px solid white" class="pl-4">
          <div
            v-for="(position, index) in experience.positions"
            :key="position.title"
            :class="index && 'mt-10'"
          >
            <div class="grid" style="grid-template-columns: 2fr 1fr">
              <div>
                <div class="text-md font-extrabold">{{ position.title }}</div>
                <div class="text-sm font-bold text-gray-400">
                  {{ experience.company }}
                </div>
                <div class="text-sm font-bold text-gray-400">
                  {{ position.location }}
                </div>
              </div>
              <div class="text-sm font-bold text-right">
                {{ position.startDate }} - {{ position.endDate }}
              </div>
            </div>
            <div class="mt-4 text-sm font-medium">
              <ul class="list-disc pl-4">
                <li v-for="d in position.description" :key="d">
                  {{ d }}
                </li>
              </ul>
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
