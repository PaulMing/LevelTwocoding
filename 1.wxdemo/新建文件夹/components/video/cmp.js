// components/video/cmp.js
Component({
  properties: {
    videoSrc: String,
    posterSrc: String,
    duration: String,
    mainTitle: String,
    videoId: String,
  },
  data: {
    showPoster: true
  },
  // 组件生命周期
  // 其它页面引入组件的时候执行
  // 旧式定义
  // attached(){
  //   this._getVideoInfo();
  // },
  // 新式
  lifetimes:{
    attached(){
      this._getVideoInfo();
    }
  },

  methods: {
    onPosterTap(){
      this._toggleVideoPoster();
      this._playVideo();  
    },
    onMaskTap(){
      this._toggleVideoPoster();
      this._stopVideo();  
    },
    // 视频播放结束自动调用的事件:直接就出现封面
    onvideoEnd(){
      this._toggleVideoPoster();
      this._stopVideo();  
    },
    // 封装函数:video的私有函数(开发规范：私有函数前面加个下划线)
    _toggleVideoPoster(){
      this.setData({
        showPoster: !this.data.showPoster
      });   
    },
    _playVideo(){
      // this._getVideoInfo();
      this.video.play();
    },
    _stopVideo(){
      // this._getVideoInfo();
      this.video.seek(0);//从头播放
      this.video.stop();
    },
    // 封装提取video对象
    _getVideoInfo(){
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    }
  }
})
