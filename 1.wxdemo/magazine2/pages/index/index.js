Page({
  data: {
  },
  onLoad: function (options) { 
    this.getHomeData();//获取数据
    this.getLikeData();//获取缓存
  },
  // "获取缓存"函数
  getLikeData:function(){
    var listLikeStorage = wx.getStorageSync('listLike');
    if (!listLikeStorage) {
      listLikeStorage = {}
    }
    this.setData({
      listLike: listLikeStorage
    })
  },
  // "用户点击喜欢"事件处理函数
  onLikeTap:function(e){
    var index = e.currentTarget.dataset.articleindex;
    var listLike = this.data.listLike;
    var isLike = listLike[index];
    listLike[index] = !isLike;
    this.setData({
      listLike: listLike
    })
    wx.setStorageSync('listLike',listLike);
  },
  // "显示底部操作菜单"事件处理函数
  onMoreTap: function(e){
    // console.log(e);
    // console.log(e.currentTarget.dataset.articletype);//articletype是小写，即使传递数据是小驼峰形式，系统进行更改了
    var type = e.currentTarget.dataset.articletype;
    wx.showActionSheet({
      itemList: ["内容过期了", "内容和"+type+"不相关", "不再显示来自"+type+"的内容"],
      // itemColor: '#f40',
      // success: function (res) {
      //   console.log(res.tapIndex);
      // }
    })
  },
  // 获取接口数据
  getHomeData: function () {
    var _self = this;
    wx.request({
      // 首次通常会报错 -> 详情页中进行修改 -> "勾选"不校验合法域名
      url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home',
      success: function (res) {
        // console.log(res.data),
        _self.setData({
          recommend: res.data.recommend,
          markType: res.data.markType,
          articleList: res.data.articleList,
        })
      }
    });
  },
  // "type类型跳转"事件处理函数
  onArticleTypeTap: function(e){
    var typeId = e.currentTarget.dataset.articletypeid;
    // 页面之间传递数据, url: "/pages/type/type?a=3",其将?后的参数进行传递，新页面中的onLoad()使用参数接收
    wx.navigateTo({
      url: '/pages/type/type?typeId=' + typeId,
    })
  },
})


// 交互操作接口：
// wx.showModal({
//   title: '提示',
//   content: '请进行选择',
//   showCancal: false,
//   cancelText: "下次再见",
//   confirmText: '再次确认',
//   success: function (res) {
//     console.log(res);
//   }
// })
// wx.showToast({
//   title: '你好',
//   icon: 'success',//success成功图标，loading加载图标，none不显示图标
//   image: "/image/list",//自定义图标，优先级高于icon
//   mask: true,//是否显示透明蒙层，防止触摸穿透
//   duration: 5000,//提示的延迟时间(保持时间)
//   success: function (res) {
//     console.log(res);
//   }
// })
// setTimeout(function () {
//   wx.hideToast();
// }, 1000)

// wx.showLoading({
//   title: 'nihao',
//   mask: false,//是否显示透明蒙层，防止触摸穿透
//   success: function (a) {
//     console.log(a);
//   }
// })
// setTimeout(function () {
//   wx.hideLoading();
// }, 1000)
// wx.showActionSheet({
//   // itemList属性值为数组，数组元素必须是字符串类型，即使是数字也是如此,目前也没那么严格了
//   itemList: [1, 2, 3, 4, 5],
//   itemColor: "red",
//   success: function (res) {
//     // tapIndex: 用户点击的按钮序号，从上到下的
//     console.log(res.tapIndex);
//   }
// })

// 数据缓存
// wx.setStorage({
//   key: '',
//   data: '',
// })
// wx.getStorage({
//   key: '',
//   success: function(res) {
//     console.log(res.data);
//   },
// })
// wx.removeStorage({
//   key: '',
//   success: function(res) {},
// })
// wx.clearStorage();

// // 同步版本
// wx.setStorageSync(key, data);
// wx.getStorageSync(key);
// wx.removeStorageSync(key);
// wx.clearStorageSync()