import url from './url.js';
import {
    get,
    post,

  } from '../axios';
  export default{
    getBanner(params){
        return get(url.getBanner,params)
    },
    newMusic(params){
        return get(url.newMusic,params);
    },
    musicUrl(params){
        return get(url.musicPlay,params)
    },
    musicPic(params){
        return get(url.musicPic,params)
    },
    musicDetail(params){
        return get(url.musicDetail,params)
    },
    mvRank(params){
        return get (url.mvRank,params)
    },
    getMvMessage(params){
        return get(url.mvMessage,params)
    },
    mvUrl(params){
        return get (url.mvUrl,params)
    }

  }