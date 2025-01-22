Page({
  data: {
    isLoggedIn: false,
    cacheSize: '0KB',
    version: '1.0.0'
  },

  onLoad() {
    this.checkLoginStatus()
    this.getCacheSize()
  },

  checkLoginStatus() {
    const userInfo = wx.getStorageSync('userInfo')
    this.setData({
      isLoggedIn: !!userInfo
    })
  },

  getCacheSize() {
    // 获取缓存大小
    wx.getStorageInfo({
      success: (res) => {
        const sizeKB = (res.currentSize).toFixed(2)
        this.setData({
          cacheSize: `${sizeKB}KB`
        })
      }
    })
  },

  onAccountSetting() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  onNotificationSetting() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  onPrivacySetting() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除登录信息
          wx.removeStorageSync('userInfo')
          // 返回上一页
          wx.navigateBack()
        }
      }
    })
  }
}) 