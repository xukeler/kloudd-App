<template>
  <div class="play-box">
    <div class="head-box">
      {{name}}
    </div>
    <div class="musicPic">
      <img :src="bgurl" alt style="width:100%" />
    </div>
    <audio :src="musicUrl" controls></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicUrl: null,
      id: null,
      name: null,
      lrc: null,
      bgurl: null
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getMusicUrl();
    this.getMusicDetail();
  },
  methods: {
    getMusicUrl() {
      let _params = {
        id: this.id,
        quality: "192",
        isRedirect: "0"
      };
      this.$api.musicUrl(_params).then(res => {
        console.log(res);
        if (res.data) {
          this.musicUrl = res.data;
        }
      });
    },
    getMusicPic() {
      let _params = {
        id: this.id,
        isRedirect: "0",
        imgSize: "750 1334"
      };
      this.$api.musicPic(_params).then(res => {
        console.log(res);
      });
    },
    getMusicDetail() {
      let _params = {
        id: this.id,
        format: "1"
      };
      this.$api.musicDetail(_params).then(res => {
        console.log(res);
        if (res.data) {
          this.name = res.data[0].name;
          this.bgurl = res.data[0].pic;
        }
      });
    },
    toHome() {
        this.$router.push({name:'home'})
    }
  }
};
</script>

<style lang='scss' scoped>
.play-box {
  width: 100%;
  height: 100%;
  background: url(../assets/images/bg.jpg) no-repeat center;
  background-size: 750px 1334px;
  position: relative;
  .head-box {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    color: white;
  }
  .musicPic {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin: 360px auto 150px;
    animation: rotate 4s linear infinite;
    overflow: hidden;
  }
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  audio {
  }
}
</style>

