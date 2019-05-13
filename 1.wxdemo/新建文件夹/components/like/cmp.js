// components/like/cmp.js
Component({
  properties: {
    like: Boolean,
  },
  data: {

  },
  methods: {
    onLike(){
      // 经过测试发现：data中的数据和properties中的数据是相同的，只是优先级有区别，同时属性列表中的属性接口可直接操作
      const like = !this.data.like;
      this.setData({
        like
      });
      this.triggerEvent('like',{
        like
      })
    }
  }
})
