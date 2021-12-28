<template>
  <button
    class="antialiased whitespace-nowrap inline-flex items-center justify-center px-8 py-3 shadow-md rounded-lg text-xl text-gray-200 font-semibold cursor-pointer select-none focus:border-transparent focus:outline-none bg-red-500 hover:text-white transition transform-gpu ease-in-out duration-200 hover:-translate-y-2 hover:shadow-lg"
    :class="classes"
  >
    <fa-icon :icon="icon" v-if="icon" class="mr-4 text-2xl" />
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledClasses: {
      type: String,
      default: "bg-gray-500 bg-opacity-40",
    },
    icon: {
      type: Array,
      default: null,
    },
  },
  computed: {
    classes() {
      var res = "";
      if (this.disabled) {
        res = this.disabledClasses;
      } else {
        res = "";
      }

      return res;
    },
  },
};
</script>
