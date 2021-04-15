<template>
  <div>
    <div class="text-center max-w-2xl m-auto">
      <div class="text-4xl uppercase font-bold">Skills</div>
      <div
        class="grid gap-4 text-left mt-14"
        style="grid-template-columns: max-content auto"
      >
        <div class="text-4xl font-extrabold">
          <div>Programming</div>
          <div>Languages</div>
        </div>
        <div style="border-left: 1px solid white" class="pl-4">
          <div class="grid gap-4 sm:grid-cols-3">
            <div>
              <div class="font-semibold">Proficient</div>
              <div
                class="text-sm font-bold text-gray-400"
                v-for="p in resume.skills.programmingLanguages.proficient"
                :key="p"
              >
                {{ p }}
              </div>
            </div>
            <div>
              <div class="font-semibold">Intermediate</div>
              <div
                class="text-sm font-bold text-gray-400"
                v-for="p in resume.skills.programmingLanguages.intermediate"
                :key="p"
              >
                {{ p }}
              </div>
            </div>
            <div>
              <div class="font-semibold">Basic</div>
              <div
                class="text-sm font-bold text-gray-400"
                v-for="p in resume.skills.programmingLanguages.basic"
                :key="p"
              >
                {{ p }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-4xl font-extrabold">
          <div>Technologies</div>
        </div>
        <div style="border-left: 1px solid white" class="pl-4">
          <div class="grid grid-cols-1">
            <div
              class="text-sm font-bold text-gray-400"
              v-for="p in resume.skills.technologies"
              :key="p"
            >
              {{ p }}
            </div>
          </div>
        </div>
        <div class="text-4xl font-extrabold">
          <div>Spoken</div>
          <div>Languages</div>
        </div>
        <div style="border-left: 1px solid white" class="pl-4">
          <div class="grid grid-cols-1">
            <div
              class="text-sm font-bold text-gray-400"
              v-for="p in resume.skills.spokenLanguages"
              :key="p"
            >
              {{ p }}
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
