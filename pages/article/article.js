
var list ;
var app = getApp();
var currentIndex=0;
var currentPage = 0;
var network_util = require('../../utils/network_util.js')

Page(
  {
   data:{
    
   },
    onTabsItemTap:function(options){
      var index = options.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      });
      console.log("list = "+list);
      console.log("index = "+index);
      console.log("currentIndex = "+currentIndex);
      var link = list[currentIndex].link;
      var title = list[currentIndex].title;
      wx.navigateTo({
        url: '../detail/detail?link='+link+"&title="+title,
      })
    },

    onLoad: function (options) {
      /**
       * 加载后设置数据
       */
      var that = this;
      var url =  app.url.article + currentPage + "/json";
      network_util._get(url,
        function (res) {
            console.log(res),
          that.setData({
            list : res.data.data.datas,
          });
        }, function (res) {
          console.log(res);
        });
    },

  /**
   * 下拉刷新
   */
    onPullDownRefresh: function (options) {
        wx.showNavigationBarLoading()
        this.setData({
          currentPage:0,
        })
        setTimeout(function(){
          wx.hideNavigationBarLoading()
          wx.stopPullDownRefresh()
        },2000)
    }

  })

