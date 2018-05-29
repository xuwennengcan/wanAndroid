
var list;
var app = getApp();
var currentIndex;

Page(
  {
    data:{
      currentIndex:0,

    },
    onTabsItemTap:function(options){
      var index = options.currentTarget.dataset['index'];
      var link = list[index].link;
      var title = list[index].title;
      this.setData({
        currentIndex: index
      }),
      wx.navigateTo({
        url: '../detail/detail?link='+link+"&title="+title,
      })
    },
    onLoad: function (options) {
      /**
       * 加载后设置数据
       */
      this.setData({
        list: list,
      })
    },

  }
)

/**
 * 获取文章列表数据
 */
wx.request({
  url: app.url.article,
  method: 'GET',
  success: function (res) {
    list = res.data.data.datas;
    console.log(list);
  },
})