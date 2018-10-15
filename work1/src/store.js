import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment/moment'
import 'moment-timezone'

import uuid from 'uuid/v1'

Vue.use(Vuex)

const SetTweetsList = 'SET_TWEETS_LIST'
export const tweetsList = 'TWEETS_LIST'
export const LoadTweet = 'LOAD_TWEET'
export const SaveTweet = 'SAVE_TWEET'
export const DeleteTweet = 'DELETE_TWEET'

const validTweetData = (tweetData) => {
  if (tweetData.content === '') throw 'ツイートなし'
  if (tweetData.authorName === '') throw '名前なし'

  return true
}

const convertTweetData = (tweetData) => {
  return {
    id: uuid(),
    content: tweetData.content,
    authorName: tweetData.authorName,
    createdDateTime: tweetData.createdDateTime
  }
}

const dummuyGetTweetsList = () => new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 3,
        content: '既に入力されたツイート３',
        authorName: 'ホゲ田 フガ男',
        createdDateTime: '2018/10/04 10:15'
      },
      {
        id: 2,
        content: '既に入力されたツイート２',
        authorName: 'ホゲ田 フガ男',
        createdDateTime: '2018/10/04 10:10'
      },
      {
        id: 1,
        content: '既に入力されたツイート１',
        authorName: 'ホゲ田 フガ男',
        createdDateTime: '2018/10/04 09:10'
      },
    ])
  }, 500)
})

export default new Vuex.Store({
  state: {
    tweetsList: [
      {
        content: 'Now Loading...'
      }
    ]
  },
  mutations: {
    [SetTweetsList] (store, payload) {
      store.tweetsList = payload
    }
  },
  getters: {
    [tweetsList]: ({ tweetsList }) => {
      // 並び順や絞り込みをする場合はここであれこれする
      const refineConditions = ''

      tweetsList.map(
        tweet =>
          tweet.createdDateTime = moment(tweet.createdDateTime).tz("Asia/Tokyo").format('YYYY/MM/DD HH:mm')
      )

      return tweetsList
    }
  },
  actions: {
    async [LoadTweet]({ commit }) {
      // API 経由でデータを取得
      const tweetsList = await dummuyGetTweetsList()

      commit(SetTweetsList, tweetsList)
    },
    [SaveTweet]({ state, commit }, tweetData) {
      try {
        validTweetData(tweetData)
      }
      catch (error) {
        console.log(error)
        return
      }

      const tweetsList = state.tweetsList
      const tweet = convertTweetData(tweetData)

      // 本来ならここで DB 保存
      // 保存が成功したら最新のリストを取得
      tweetsList.unshift(tweet)

      commit(SetTweetsList, tweetsList)
    },
    [DeleteTweet]({ state, commit }, id) {
      const tweetsList = state.tweetsList
      const filteredTweetList = tweetsList.filter(
        tweet =>
          tweet.id !== id
        )

      commit(SetTweetsList, filteredTweetList)
    }
  }
})
