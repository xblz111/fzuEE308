// pages/index/index.js
var app = getApp()
Page({

  
  data: {
    showModal: false,
    userName: app.globalData.userName,
    userImage:app.globalData.userImage
  },
 
  single: function(){
      console.log("abc");
      wx.navigateTo({
        url: '/pages/play/play'
      })
  },
  multiple: function(){
    wx.showToast({
        title: "暂未开放",
        icon:"none",
        duration: 2000
      })
},
  openRule: function(){
    this.setData({
      showModal: true
    })
  },
  closeRule: function() { 
    this.setData({
    showModal: false
    })
  },
  preventTouchMove: function(){

  },
 
  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {
    this.setData({
      userName: app.globalData.userName,
      userImage:app.globalData.userImage
    })
  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})