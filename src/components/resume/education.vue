<template>
  <div>
    <div class="text-center max-w-2xl m-auto">
      <div class="text-4xl uppercase font-bold">Education</div>
      <div
        class="grid gap-4 text-left mt-14 grid-cols-1 sm:grid-cols-100-auto px-4 sm:px-0"
        v-for="education in resume.education"
        :key="education.title"
      >
        <div>
          <img
            :src="`/assets/images/resume/${education.image}`"
            alt=""
            class="hidden sm:block w-0 sm:w-24"
          />
        </div>
        <div style="border-left: 1px solid white" class="pl-4">
          <div class="grid" style="grid-template-columns: 2fr 1fr">
            <div>
              <div class="text-md font-extrabold">{{ education.title }}</div>
              <div
                class="text-sm font-bold text-gray-400"
                v-for="outcome in education.outcomes"
                :key="outcome"
              >
                {{ outcome }}
              </div>
              <div
                class="text-sm font-bold text-gray-400 mt-4"
                v-if="education.GPA"
              >
                GPA: {{ education.GPA }}
              </div>
            </div>
            <div class="text-sm font-bold text-right">
              {{ education.date }}
            </div>
          </div>
          <div class="mt-4 text-sm font-medium">
            <div class="text-sm font-bold text-gray-400">Coursework:</div>
            <div
              v-for="(course, index) in education.coursework"
              :key="index"
              class="inline"
            >
              {{ index ? " • " : "" }}{{ course }}
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
