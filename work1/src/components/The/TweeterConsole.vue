<script>
import { SaveTweet } from '@/store'

import moment from 'moment/moment'

export default {
  name: 'tweeter-console',
  data() {
    return {
      tweetContent: '',
      tweetAuthorName: ''
    }
  },
  methods: {
    init () {
      this.tweetContent = ''
    },
    tweet () {
      this.$store.dispatch(SaveTweet, {
        content: this.tweetContent,
        authorName: this.tweetAuthorName,
        createdDateTime: moment().utc().format()
      })

      this.init()
    }
  }
}
</script>

<template>
  <form @submit.prevent="tweet">
    <div class="c-tweeter-console">
      <vs-input vs-label-placeholder="Tweet"
                v-model="tweetContent"
                class="u-input-tweet-content"
      />
      <vs-input vs-label-placeholder="Author Name"
                v-model="tweetAuthorName"
                class="u-input-tweet-author-name"
      />
      <vs-button vs-color="primary"
                vs-type="filled"
      >
        Tweet
      </vs-button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.c-tweeter-console {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  box-sizing: content-box;
  padding: 0 10px 10px;
  background: #B3E5FC;

  .vs-input {
    line-height: 1;

    /deep/ .vs-inputx {
      border-color: rgba(#0D47A1, .4) !important;
    }

    &:not(.isFocus) /deep/ .vs-placeholder-label {
      color: rgba(#0D47A1, .5) !important;
    }
  }

  .vs-button {
    padding: calc(.4rem + 1px);
  }

  .u-input-tweet-content {
    flex: .9;
  }
}
</style>