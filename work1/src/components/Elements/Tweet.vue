<script>
export default {
  name: 'tweet',
  props: {
    tweet: {
      type: Object,
      required: true
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
  </div>
</template>

<style lang="scss" scoped>
.c-tweet {
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
}
</style>
