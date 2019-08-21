<template>
  <div class="box">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.picUrl">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="newestMusic">
      <div class="title-box" v-if="newMusicList">
        <h3>最新音乐</h3>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="content-list">
        <ul>
          <li v-for="item in newMusicList" :key="item.id" @click="toPlay(item)">
            <img :src="item.song.album.picUrl" style="width:100%;border-radius:6px" />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="mvRank">
      <div class="title-box" v-if="newMusicList">
        <h3>mv排行榜</h3>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="content-list">
        <ul>
          <li v-for="item in mvList" :key="item.id" @click="toMvPlay(item)">
            <img :src="item.cover" style="width:100%;border-radius:6px" />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: null,
      newMusicList: null,
      mvList: null,
    };
  },
  created() {
    this.getBanner();
    this.newMusic();
    this.mvRank();
  },
  methods: {
    getBanner() {
      this.$api.getBanner().then(res => {
        if (res.data) {
          this.imgList = res.data;
        }
      });
    },
    newMusic() {
      this.$api.newMusic().then(res => {
        if (res.data) {
          this.newMusicList = res.data;
        }
      });
    },
    toPlay(item) {
      if (item.id) {
        this.$router.push({
          name: "musicPlay",
          query: {
            id: item.id
          }
        });
      }
    },
    mvRank() {
      let _params = {
        pageSize: "20",
        isRedirect: "0"
      };
      this.$api.mvRank(_params).then(res => {
        console.log(res);
        if (res.data) {
          this.mvList = res.data;
        }
      });
    },
    toMvPlay(item) {
      this.$router.push({
        name: "mvPlay",
        query: {
          id: item.id
        }
      });
    }
  }
};
</script>
<style lang="scss" >
.box {
  width: 100%;
  height: 100%;
  .van-swipe {
    .van-swipe__track {
      .van-swipe-item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
  .title-box {
    display: flex;
    margin: 20px 0;
    h3 {
      font-size: 34px;
      color: #666;
      width: 50%;
      text-align: left;
    }
    div {
      width: 50%;
      position: relative;
      .van-icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .content-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        width: 230px;
        margin-bottom: 16px;
        p {
          font-size: 28px;
          text-align: left;
          font-weight: normal;
          max-height: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      li:nth-child(3n) {
        margin: 0;
      }
    }
  }
  .mvRank {
    .content-list {
      li {
        margin-right: 10px;
        width: 350px;
        margin-bottom: 16px;
        p {
          font-size: 28px;
          text-align: left;
          font-weight: normal;
        }
      }
      li:nth-child(2n) {
        margin-right: 0 !important;
      }
      li:nth-child(3n) {
        margin-right: 10px;
      }
    }
  }
  .newestMusic,
  .mvRank {
    padding: 0 20px;
  }
}
</style>


