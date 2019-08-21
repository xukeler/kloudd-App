<template>
  <div class="mvPLay-box">
    <video :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mvId: null,
      mvUrl: null
    };
  },
  created() {
    this.mvId = this.$route.query.id;
    this.getMvMessage();
    this.getMvUrl();
  },
  mounted() {},
  methods: {
    getMvMessage() {
      let _params = {
        id: this.mvId
      };
      this.$api.getMvMessage(_params).then(res => {
        console.log(res);
      });
    },
    getMvUrl() {
      let _params = {
        id: this.mvId,
        isRedirect: "0"
      };
      this.$api.mvUrl(_params).then(res => {
        if (res.data) {
          this.mvUrl = res.data;
        }
        console.log(res);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.mvPLay-box{
    video{
        width: 100%;
    }
}
</style>