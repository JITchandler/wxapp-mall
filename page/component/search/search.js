Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearch: false,
    inputFocus: false,
    dataArray:[
      {
        "articleid": "3490400c-9988-4b57-8f8a-92124cb9bef3",
        "title": "巨峰葡萄 100g",
        "releasetime": "5.99",
        "image": "/image/巨峰葡萄.jpg",
    
      },
      {
        "articleid": "40b3e53f-d2c6-4f11-b1f7-965f6ce54800",
        "title": "春见耙耙柑 500g",
        "releasetime": "7.9",
        "image": "/image/春见耙耙柑.jpg",
        "text": "好难",
        "teacherid": null
      },
      {
        "articleid": "db100597-07b5-4470-9ed5-8e69b258dd48",
        "title": "水仙芒 300g",
        "releasetime": "4.5",
        "image": "/image/水仙芒.jpg",
        "text": null,
        "teacherid": null
      },
      {
        "articleid": "1b275828-aea7-46f9-9912-0668772d0cd5",
        "title": "人参果 500g",
        "releasetime": "9.9",
        "image": "/image/人参果.jpg",
        "text": null,
        "teacherid": null
      },
      {
        "articleid": "9f9edd79-92d0-4758-bdd0-c5a333c653fe",
        "title": "蓝莓 500g",
        "releasetime": "9.9",
        "image": "/image/蓝莓.jpg",
        "text": "",
        "teacherid": null
      },
      {
        "articleid": "1aac74b2-67a6-40e7-8967-b665f64df05c",
        "title": "陕西红富士 500g",
        "releasetime": "7.9",
        "image": "/image/陕西红富士.jpg",
        "text": "",
        "teacherid": null
      },
      {
        "articleid": "eda6872f-8154-47d4-98b4-38057e35d41c",
        "title": "2是去看烟花",
        "releasetime": "5.99",
        "image": "https://pic.imgdb.cn/item/65ceff799f345e8d03690a92.jpg",
        "text": "",
        "teacherid": null
      }
    ]
  },
  onFocus: function() {
    this.setData({
      inputFocus: true,
      showSearch: true,
      isshow:false
    });
  },
  
  onBlur: function(e) {
    this.setData({
      isshow:false,
      showSearch: true,
      searchResult:null,
      Searchtxt:e.detail.value
    })
    var txt=this.data.Searchtxt;
    var dataArray=this.data.dataArray
    console.log("开始搜索"+txt);
    const searchResult = this.fuzzySearch(dataArray, txt);
    console.log(searchResult);
    this.setData({
      searchResult:searchResult
    })
  },
  quxiao: function() {
    this.setData({
      showSearch: false,
    })
  },
  fuzzySearch(arr, searchText) {
      const filteredArray = arr.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchText.toLowerCase());
      const timeMatch = item.releasetime.toLowerCase().includes(searchText.toLowerCase());
      const textMatch = item.text && item.text.toLowerCase().includes(searchText.toLowerCase());
      return titleMatch || timeMatch || textMatch;
    });
    return filteredArray;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },
  onArticleTap: function() {  
    // 在这里编写处理tap事件的逻辑  
    console.log('文章被点击了');  
    // 你可以进行页面跳转、数据更新等操作  

  },  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
