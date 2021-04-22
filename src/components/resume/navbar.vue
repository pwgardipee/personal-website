<template>
  <div>
    <div class="float-left">
      <router-link tag="div" to="/">
        <div class="text-4xl font-extrabold">Peyton Gardipee</div>
        <div class="text-sm uppercase text-gray-400 mt-1">
          Full Stack Developer
        </div>
      </router-link>
      <div class="sm:hidden">
        <div class="text-xs text-gray-400 font-medium">
          <div>
            <a href="tel:(262) 685-7807" class="hover:underline"
              >(262) 685-7807</a
            >
            •
            <a href="mailto:peytongardipee@gmail.com" class="hover:underline"
              >peytongardipee@gmail.com</a
            >
          </div>
        </div>
      </div>
      <router-link :to="`/${linkTo}`" class="hover:underline text-xs"
        >{{ linkTo.charAt(0).toUpperCase() + linkTo.slice(1) }}
        <font-awesome-icon icon="external-link-alt" class="text-xs"
      /></router-link>
    </div>

    <div class="float-right sm:block hidden">
      <div class="text-right text-xs text-gray-400 font-medium">
        <div>
          <a href="tel:(262) 685-7807" class="hover:underline"
            >(262) 685-7807</a
          >
          •
          <a href="mailto:peytongardipee@gmail.com" class="hover:underline"
            >peytongardipee@gmail.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["linkTo"],
};
</script>

<style></style>
