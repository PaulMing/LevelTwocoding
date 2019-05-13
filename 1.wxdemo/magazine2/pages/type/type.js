var request = require('../../utils/request.js');//导入必须使用相对路径
Page({
  data: {
    titleInfo: {},
    articleList: []
  },
  onLoad: function (options) {
    var typeId = options.typeId;//参数options便是接收到的数据 ->对象形式
    this.getData(typeId);//获取数据
  },
  // 跳转到"articleDetail"页面
  onTap: function(e){
    var id = e.currentTarget.dataset.articleid;
    wx.navigateTo({
      url: '/pages/articleDetail/articleDetail?id='+ id,
    })
  },
  // 获取数据函数
  getData: function(typeId){
    var _self = this;
    // 调用多次请求，后续可使用ES6中的promise进行请求次数的优化
    request({
      url: '/getArticleTypeTitleInfo/' + typeId,
      success: function (res) {
        _self.setData({
          titleInfo: res,
        })
      }
    });
    request({
      url: '/getArticleTypeList/' + typeId,
      success: function (res) {
        _self.setData({
          articleList: res,
        })
      }
    }) 
  },
  onMoreTap: function (e) {
    var type = e.currentTarget.dataset.articletype;
    wx.showActionSheet({
      itemList: ["内容过期了", "内容和" + type + "不相关", "不再显示来自" + type + "的内容"],
    })
  },
})