const myBehavior = require('../behaviors/my-behavior.js');
// import {Beh} from "../behaviors/my-behavior.js" //ES6语法，Beh名字有关联性，一致性
Component({
  behaviors: [myBehavior],
  // behaviors: [Beh],//ES6
  properties: {
    // mainTitle: String,
    // subHead: String,
    // imgSrc: String,
  },
  data: {

  },
  methods: {

  }
})
