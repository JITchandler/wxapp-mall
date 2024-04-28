// page/component/orders/orders.js
Page({
  data:{
    couponList:[
      {
        id: 1,
        totalMoney: 10,
        maxMoney: 50,
        isGet: false
      },
      {
        id: 2,
        totalMoney: 50,
        maxMoney: 328,
        isGet: false
      },
      {
        id: 3,
        totalMoney: 200,
        maxMoney: 648,
        isGet: false
      }
    ]
  },
  payOrders(e) {
    let value = e.currentTarget.dataset['args'];
    if (value.isGet) return;
    const self = this;
    wx.showModal({
      title: '提示',
      content: '是否领取该优惠券？',
      text:'center',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // 当前是否已经领取
          let data = self.data.couponList
          let index = data.findIndex(item => item.id == value.id)
          let key = `couponList[`+index+`].isGet`
          self.setData({
            // 修改领字段
            [key]: true
          })      
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})