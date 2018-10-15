<script>
import { tweetsList } from '@/store'

export default {
  name: 'tweeter-time-line',
  computed: {
    tweetsList () {
      return this.$store.getters[tweetsList]
    }
  }
}
</script>

<template>
  <transition-group name="list"
                    tag="ul"
                    class="c-tweeter-time-line"
  >
    <li v-for="tweet in tweetsList"
        :key="tweet.id"
        class="c-tweeter-time-line__item"
    >
      <slot :tweet="tweet"/>
    </li>
  </transition-group>
</template>

<style lang="scss" scoped>
.c-tweeter-time-line {
  position: relative;
  margin: 0;
  padding: 0 15px 15px 0;

  &__item {
    margin: 15px 0 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
}

.list {
  &-enter-active,
  &-leave-active {
    transition: transform .5s, opacity .5s;
  }

  &-move:not(.list-leave-active) {
    transition: transform .5s;
  }

  &-enter {
    opacity: 0;
    transform: translateY(-20px) scale(.7);
  }

  &-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }

  &-leave-active {
    position: absolute;
    width: calc(100% - 20px);
  }
}
</style>
