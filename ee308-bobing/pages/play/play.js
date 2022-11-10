// pages/play/play.js
Page({
    data: {
      diceImage: "/image/dice.gif",
      flag: true,
      msg: "开始",
      dice: [1,4,4,6,3,5],
      diceRecord: [],
      result: ""
    },
    play: function(){
      let obj = this;
      if(obj.data.flag == true){
        obj.setData({
          flag: false,
          msg: "停止",
        })
      }
      else{
        var a=0;
        for(var i=1,dice_=[],count=[0,0,0,0,0,0];i<=6;i++){
          a=Math.floor(Math.random() * 6) + 1;
          dice_.push(a);
          count[a]++;
        }
        if(count[3]==4&&count[0]==2){
          obj.setData({
            result: "状元插金花",
          })
        }
        else if(count[3]==6){
          obj.setData({
            result: "满堂红",
          })
        }
        else if(count[0]==6){
          obj.setData({
            result: "遍地锦",
          })
        }
        else if(Math.max.apply(null,count)==6){
          obj.setData({
            result: "六勃黑",
          })
        }
        else if(count[3]==5){
          obj.setData({
            result: "五王",
          })
        }
        else if(count[3]==4&&count[0]!=2){
          obj.setData({
            result: "状元",
          })
        }
        else if(Math.max.apply(null,count)==1){
          obj.setData({
            result: "对堂",
          })
        }
        else if(count[3]==3){
          obj.setData({
            result: "三红",
          })
        }
        else if(Math.max.apply(null,count)==4){
          obj.setData({
            result: "四进",
          })
        }
        else if(count[3]==2){
          obj.setData({
            result: "二举",
          })
        }
        else if(count[3]==1){
          obj.setData({
            result: "一秀",
          })
        }
        else {
          obj.setData({
            result: "未中奖",
          })
        }
        var record=wx.getStorageSync('record');
        var dice_String=dice_.map(String);
        dice_String.push(obj.data.result);
        if(record){
          record.push(dice_String);
          wx.setStorageSync('record', record);
        }
        else{
          wx.setStorageSync('record', [dice_String]);
        }
        obj.setData({
          dice: dice_,
          flag: true,
          msg: "开始",
          diceRecord:wx.getStorageSync('record')
        })
        wx.showToast({
          title: obj.data.result,
          icon:"none",
          duration: 2000
        })
      }
    },
   
    onLoad: function (options) {
  
    },
  
 
    onReady: function () {
  
    },
  
    onShow: function () {
  
    },
  
    onHide: function () {
  
    },
  
    onUnload: function () {
      wx.removeStorageSync('record');
    },
  
    onPullDownRefresh: function () {
  
    },
  
    onReachBottom: function () {
  
    },
  
    onShareAppMessage: function () {
  
    }
  })