
Component({
  properties: {
    imgArr: Array,
    mainTitle: String,
  },
  data: {
    // imgArr: [],

  },
  methods: {
    onTap(e){
      const index = e.currentTarget.dataset.index;
      const array = this.data.imgArr;
      // console.log(index);
      // console.log(array);
      // 全屏预览图片
      wx.previewImage({
        urls: array,
        current: array[index],
      })
    }
  }
})
