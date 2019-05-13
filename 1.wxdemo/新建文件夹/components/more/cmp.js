Component({
  properties: {
     tag: String,
  },
  data: {

  },
  methods: {
    onTap(){
      const tag = this.properties.tag;
      wx.showActionSheet({
        itemList: ["内容过期了",`内容和${tag}不相关`,`不再显示来自${tag}的内容`],
        success: res => {
          const index = res.tapIndex;
          if(index ==0 || index == 1){
            wx.showToast({
              title: '已提交',
            })
          }
        }
      })
    }
  }
})
