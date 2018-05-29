// pages/detail/detail.js
var url;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options!=null){
      console.log("url = "+options.link);
      
      this.setData({
        url:options.link
      });
      wx.setNavigationBarTitle({
        title: options.title,
      })

    }
  
  },

})