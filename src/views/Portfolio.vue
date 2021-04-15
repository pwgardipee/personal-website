<template>
  <div>
    <navbar class="w-full p-4 mb-48" />

    <div
      v-for="(item, index) in portfolio"
      :key="index"
      class="mb-16 grid"
      :style="
        index % 2
          ? 'grid-template-columns: 1fr 2fr'
          : 'grid-template-columns: 2fr 1fr'
      "
    >
      <div :class="index % 2 ? 'order-1' : 'order-2'"></div>
      <div
        class="border-2 p-6"
        :class="
          index % 2
            ? 'text-right border-r-0 order-2'
            : 'text-left border-l-0 order-1'
        "
      >
        <div
          :class="index % 2 && 'float-right text-right'"
          class="sm:w-10/12 md:w-8/12 lg:w-8/12"
        >
          <div class="text-6xl font-extrabold uppercase">
            {{ item.title }}
          </div>
          <div class="text-gray-400 text-xs font-bold">
            {{ item.snippet }}
          </div>
          <div>
            <div
              v-for="tech in item.technologies"
              :key="tech.label"
              class="inline-block mt-6 text-center"
              :class="index % 2 ? 'ml-6' : 'mr-6'"
            >
              <font-awesome-icon :icon="tech.icon" class="text-2xl" />
              <div class="text-sm">{{ tech.label }}</div>
            </div>
          </div>
          <div class="mt-6 underline text-sm font-bold">
            <a :href="item.projectLink.link" target="_blank">{{
              item.projectLink.label
            }}</a>
          </div>
          <div class="text-xs text-gray-400 mt-1">
            {{ item.description }}
          </div>
          <div class="mt-6">
            <font-awesome-icon
              class="inline-block mr-1"
              :icon="['fab', 'github']"
            />
            <div class="inline-block text-sm hover:underline">
              <a :href="item.githubLink" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portfolio from "./../assets/data/portfolio.json";
import navbar from "./../components/resume/navbar.vue";

export default {
  components: {
    navbar,
  },
  data() {
    return {
      portfolio,
    };
  },
};
</script>

<style></style>
