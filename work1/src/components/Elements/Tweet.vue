<script>
import { DeleteTweet } from '@/store'

export default {
  name: 'tweet',
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTweet(id) {
      this.$store.dispatch(DeleteTweet, id)
    }
  }
}
</script>

<template>
  <div class="c-tweet">
    <div class="c-tweet__header">
      <div class="c-tweet__author-name">
        {{ tweet.authorName }}
      </div>
      <div class="c-tweet__created-date-time">
        {{ tweet.createdDateTime }}
      </div>
    </div>
    <div class="c-tweet__content">
      {{ tweet.content }}
    </div>
    <div class="c-tweet__remove"
         @click="deleteTweet(tweet.id)"
     />
  </div>
</template>

<style lang="scss" scoped>
.c-tweet {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #E1F5FE;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
  }

  &__author-name {
    font-size: 14px;
    font-weight: bold;
  }

  &__created-date-time {
    color: rgba(0, 0, 0, .5);
    font-size: 12px;
  }

  &__content {
    padding: 0 15px 10px;
    font-size: 14px;
  }

  &__remove {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, .5);
    cursor: pointer;

    &:before {
      content: '×';
      display: block;
      margin-top: -.2em;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      line-height: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
