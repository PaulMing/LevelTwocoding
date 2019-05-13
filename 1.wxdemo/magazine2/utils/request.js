var baseUrl = "https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine";
// 请求数据函数 ->参数params为对象形式
function request(params) {
  wx.request({
    url: baseUrl + params.url,
    success: function (res) {
      if (res.data.code == 0) {
        params.success(res.data.data);
      } else {
        showError()
      }
    },
    fail: function () {
      showError();
    }
  })
}
// 错误信息函数
function showError() {
  wx.showToast({
    title: "该页面非测试页面",
    icon: 'none'
  })
}

module.exports = request;