<script>
import TweeterTimeLine from '@/components/The/TweeterTimeLine'
import Tweet from '@/components/Elements/Tweet.vue'
import TweeterConsole from '@/components/The/TweeterConsole'
import { LoadTweet } from '@/store'

export default {
  name: 'tweeter',
  components: {
    TweeterTimeLine,
    Tweet,
    TweeterConsole
  },
  created () {
    this.$store.dispatch(LoadTweet)
  }
}
</script>

<template>
  <div>
    <tweeter-time-line>
      <template slot-scope="{ tweet }">
        <tweet :tweet="tweet"/>
      </template>
    </tweeter-time-line>
    <tweeter-console/>
  </div>
</template>

<style lang="scss" scoped>
/deep/ .c-tweeter-time-line {
  overflow-y: scroll;
  height: calc(100vh - 55px);
}

/deep/ .c-tweeter-console {
  position: absolute;
  z-index: 1;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
}
</style>
