<template>
  <div class="flex flex-col justify-center content-center h-screen">
    <div class="mb-12 px-4">
      <h1
        class="text-[10vw] md:text-[5rem] lg:text-[6rem] font-bold mb-8 sm:text-glow-[gray-700]"
      >
        r/cshighschoolers
      </h1>
      <p class="mb-12 text-xl sm:text-2xl underline rgb-deco">
        The greatest online community of highschool programmers
      </p>
      <div
        class="flex justify-center items-center flex-col md:flex-row gap-y-6"
      >
        <Button
          :icon="['fab', 'reddit']"
          text="Reddit"
          class="bg-orange-500 text-glow-[orange-500]"
          @click="redditClicked"
        />
        <p class="text-xl mx-12 order-first md:order-none">
          Join the community
        </p>
        <Button
          :icon="['fab', 'discord']"
          text="Discord"
          class="bg-blue-700 text-glow-[blue-500]"
          @click="discordClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "HomeView",
  components: {
    Button,
  },
  data() {
    return {
      links: ["Home", "Projects", "Join", "Filler"],
    };
  },
  methods: {
    redditClicked() {
      window.open("https://reddit.com/r/cshighschoolers", "_blank");
    },
    discordClicked() {
      window.open("https://discord.gg/DyNJ2dMQPr", "_blank");
    },
  },
};
</script>

<style lang="less">
@saturation: 70%;
@lightness: 60%;
@keyframes rgb-deco-anim {
  0% {
    text-decoration-color: hsl(0, @saturation, @lightness);
  }
  10% {
    text-decoration-color: hsl(36, @saturation, @lightness);
  }
  20% {
    text-decoration-color: hsl(72, @saturation, @lightness);
  }
  30% {
    text-decoration-color: hsl(108, @saturation, @lightness);
  }
  40% {
    text-decoration-color: hsl(144, @saturation, @lightness);
  }
  50% {
    text-decoration-color: hsl(180, @saturation, @lightness);
  }
  60% {
    text-decoration-color: hsl(216, @saturation, @lightness);
  }
  70% {
    text-decoration-color: hsl(252, @saturation, @lightness);
  }
  80% {
    text-decoration-color: hsl(288, @saturation, @lightness);
  }
  90% {
    text-decoration-color: hsl(324, @saturation, @lightness);
  }
  100% {
    text-decoration-color: hsl(360, @saturation, @lightness);
  }
}

.rgb-deco {
  animation-name: rgb-deco-anim;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
</style>
