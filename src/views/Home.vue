<template>
  <div>
    <div class="text-right text-xs text-gray-400 font-medium p-4">
      <div>
        <a href="tel:(262) 685-7807" class="hover:underline">(262) 685-7807</a>
        •
        <a href="mailto:peytongardipee@gmail.com" class="hover:underline"
          >peytongardipee@gmail.com</a
        >
      </div>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-24 md:p-10 md:pt-28"
    >
      <div class="text-left px-12 pt-16">
        <div class="text-5xl md:text-6xl font-bold text-gray-50">
          <div>Hello,</div>
          <div>I'm Peyton.</div>
        </div>

        <div
          class="text-xs md:text-sm font-medium text-gray-400 mt-4 md:mt-12 inline-block max-w-md leading-5 md:leading-6"
          id="title"
        >
          Full-Stack Developer currently working on the web team at
          <a
            target="_blank"
            href="https://holos.io"
            class="text-white hover:underline"
            >Holos Inc.</a
          >
          . I am comfortable working anywhere on the stack, and I have recently
          been doing a deep dive on deployment technologies like Kubernetes and
          Terraform. My bread and butter is Vue and Express, but I plan on doing
          some projects that venture out of that bubble soon!
        </div>

        <div class="mt-4 md:mt-6 text-sm font-medium hidden lg:block">
          <router-link to="/resume" class="hover:underline"
            >Resume <font-awesome-icon icon="external-link-alt" class="text-xs"
          /></router-link>
        </div>
        <div class="mt-4 md:mt-6 text-lg md:text-2xl">
          <a
            target="_blank"
            href="https://github.com/pwgardipee"
            class="hover:text-gray-400"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/peyton-gardipee/"
            class="hover:text-gray-400"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" class="ml-4" />
          </a>
          <a
            target="_blank"
            href="https://angel.co/u/peyton-gardipee-1"
            class="hover:text-gray-400"
          >
            <font-awesome-icon :icon="['fab', 'angellist']" class="ml-4" />
          </a>
        </div>
        <div class="mt-4 md:mt-6 text-sm font-medium lg:hidden">
          <router-link to="/resume" class="hover:underline"
            >Resume <font-awesome-icon icon="external-link-alt" class="text-xs"
          /></router-link>
          <router-link to="/portfolio" class="hover:underline ml-4"
            >Portfolio
            <font-awesome-icon icon="external-link-alt" class="text-xs"
          /></router-link>
        </div>
      </div>
      <div class="md:px-12">
        <div
          class="w-full bg-white bg-opacity-5 mt-2 md:mt-5 p-4 transition duration-500 ease-in-out transform md:hover:scale-110"
          v-for="project in projects"
          :key="project.name"
        >
          <router-link :to="`/project/${project.name}`">
            <div class="uppercase text-xs">
              {{ formatTech(project.technology) }}
            </div>
            <div class="text-4xl mt-8">{{ project.name }}</div>
            <div class="text-xs text-gray-400 mt-1 mb-2">
              {{ project.description }}
            </div>
          </router-link>
        </div>
        <div class="mt-4 text-sm font-medium float-right hidden lg:block">
          <router-link to="/portfolio" class="hover:underline"
            >Portfolio
            <font-awesome-icon icon="external-link-alt" class="text-xs"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "./../assets/data/projects.json";
export default {
  data() {
    return {
      projects,
    };
  },
  methods: {
    formatTech(techArray) {
      return techArray.reduce((accumulator, currentValue, index) => {
        const char = index ? "•" : "";
        return `${accumulator} ${char} ${currentValue}`;
      }, "");
    },
  },
};
</script>
