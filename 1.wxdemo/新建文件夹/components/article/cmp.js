import {LikeModel} from "../../modules/like.js";
const likeModel = new LikeModel();
Component({
  properties: {
    articleDetail: Object,
  },
  data: {
    likeStatus: false
  },
  methods: {
    onLike(e){
      const like = e.detail.like;
      const articleDetail = this.data.articleDetail;
      const artId = aricleDetail.artId;

      if(like){
        // 缓存文章
        likeModel.addLikeList(articleDetail)
      }else{
        // 从缓存中移出文章
        likeModel.removeLikeList(artId);
      }
    }
  }
})
