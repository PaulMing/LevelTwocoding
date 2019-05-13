Component({
  options: {
    multipleSlots: true
  },
  properties: {
    openType: String
  },
  data: {

  },
  methods: {
    // 自定义事件
    onGetUserInfo(e){
      this.triggerEvent('getuserinfo',e.detail,{})
    }
  }
})
