//index.js
//获取应用实例
Page({
  data: {
    src: '../../image/peiliao2.jpeg',
    array: [{
      mode: 'aspectFit',
      text1: '陪聊：2块/h',
      text2: '加wx：m_12bc'
    }]
  },
  imageError: function (e) {
    console.log('image发生error事件，携带值为', e.detail.errMsg)
  }
})