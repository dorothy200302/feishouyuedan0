Page({
  data: {},

  onPublishDemand() {
    wx.navigateTo({
      url: '/pages/demand-publish/index'
    })
  },

  onPublishService() {
    wx.navigateTo({
      url: '/pages/service-publish/index'
    })
  },

  onPublishRental() {
    wx.navigateTo({
      url: '/pages/rental-publish/index'
    })
  }
}) 