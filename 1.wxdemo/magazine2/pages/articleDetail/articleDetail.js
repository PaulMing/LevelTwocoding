var request = require("../../utils/request.js");
var audio = wx.getBackgroundAudioManager();//定义全局变量
Page({
  data: {
    articleDetail: {},
    // 弹幕列表
    danmuList: [
      {
        text: '中北大学PaulMing毕业设计作品',
        color: "blue",
        time: 20
      },
      {
        text: '毕业快乐',
        color: 'pink',
        time: 55
      }
    ],
    videoCoverHidden: true,
    playing: false,
    audioCurTime: 0,
    progressPercent: 0,
    progressCircleLeft: 0,
    progressWidth: 520,
    getAudioOrigionFlag: false
  },
  onLoad: function (options) {
    this.getData(options.id);//获取数据
  },
  // 获取接口数据函数
  getData: function(id){
    var _self = this;
    request({
      url: '/getArticleDetail/'+ id,
      success: function(res){
        _self.setData({
          articleDetail: res
        })
      }
    })
  },
  // 视频播放事件
  onMoveTap: function(){
    this.setData({
      videoCoverHidden: false
    })
    // 视频播放
    var myvideo = wx.createVideoContext('myvideo')
    myvideo.play();
  },
  // 音频播放事件
  onAudioPlayTap: function(){
    audio.title= "此时此刻";//调用背景音频接口，title为必填项，否则报错
    var playing = this.data.playing;
    if(playing){
      audio.pause();
    }else{
      audio.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    }
    this.setData({
      playing: !playing,
    })
    this.listenAudioPlay();
    this.updateAudioData();
  },
  // 背景音频播放函数
  listenAudioPlay: function(){
    var _self = this;
    // 调用背景音频系列接口
    audio.onPause(function () {
      _self.setData({
        playing: false
      })
    });
    audio.onStop(function () {
      _self.setData({
        playing: false
      })
    });
    audio.onEnded(function () {
      _self.setData({
        playing: false
      })
    });
    audio.onPlay(function () {
      _self.setData({
        playing: false,
      })
    });
  },
  // 进度条函数 ->思路：利用系统接口audio.currentTime得到音频播放的时间，除以总时间，得到比例；利用此比例、进度条总长度，计算出进度条移动距离，将其赋值给样式left值即可 -> 后续小球移动也是同样的思路
  updateAudioData: function(){
    var _self = this;
    var audioDuration = this.data.articleDetail.audio.duration;
    audio.onTimeUpdate(function(){
      var audioCurTime = audio.currentTime.toFixed();
      var percent = audioCurTime/audioDuration;
      var progressPercent = percent*100;
      var progressCircleLeft = percent * _self.data.progressWidth
      _self.setData({
        audioCurTime: audioCurTime,
        progressPercent: progressPercent,
        progressCircleLeft: progressCircleLeft
      })
    })
  },
  // 小球开始移动事件 
  onAudioCircleStart: function (e) {
    var audioCircleOrigionX = e.touches[0].pageX*this.getPhoneRadio();
    if (!this.data.getAudioOrigionFlag){
      this.setData({
        audioCircleOrigionX: audioCircleOrigionX,
        getAudioOrigionFlag: true
      })
    }
  },
  // 小球移动事件
  onAudioCircleMove: function(e){
    var audioCircleOrigionX = this.data.audioCircleOrigionX;
    var audioCircleMoveX = e.touches[0].pageX * this.getPhoneRadio();
    var progressCircleLeft = audioCircleMoveX - audioCircleOrigionX;

    if(progressCircleLeft <= 0){
      progresCircleLeft = 0
    }else if(progressCircleLeft >= this.data.progressWidth){
      progressCircleLeft = this.data.progressWidth
    }
    var progressPercent = progressCircleLeft / this.data.progressWidth *100
    var audioCurTime = (progressCircleLeft / this.data.progressWidth * this.data.articleDetail.audio.duration)
    audio.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
    audio.title = "此时此刻";
    audio.seek(Number(audioCurTime));
    this.listenAudioPlay();
    this.updateAudioData();

    this.setData({
      progressCircleLeft: progressCircleLeft,
      progressPercent: progressPercent,
      audioCurTime: audioCurTime
    })
  },
  // 不同机型px转换为rpx的"数学关系"函数
  getPhoneRadio: function(){
    var radio = 0;
    wx.getSystemInfo({
      success: function(res) {
        var width = res.screenWidth;
        radio = 750 / width
      },
    })
    return radio
  }

})

// 音频接口 -> 创建实例，调用autoplay属性 -> 音频播放
// var audio = wx.createInnerAudioContext();
// audio.src = '';
// audio.autoplay = true;

// 背景音频接口 -> 创建实例，src引入资源其会自动播放 -> title属性必填，否则报错
// var audio = wx.getBackgroundAudioManager();
// audio.src = '';
// audio.title = '';