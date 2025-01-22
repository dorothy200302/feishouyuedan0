Page({
  data: {
    version: '1.0.0'
  },

  onLoad() {
    // 可以从配置中获取版本号
    const accountInfo = wx.getAccountInfoSync()
    if (accountInfo && accountInfo.miniProgram) {
      this.setData({
        version: accountInfo.miniProgram.version || '1.0.0'
      })
    }
  },

  onPrivacyTap() {
    // 跳转到隐私政策页面或显示隐私政策弹窗
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  onServiceTap() {
    // 跳转到服务协议页面或显示服务协议弹窗
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  onContactTap() {
    // 打开客服会话
    wx.openCustomerServiceChat({
      extInfo: { url: '' },
      corpId: '',
      success: () => {},
      fail: () => {
        wx.showToast({
          title: '打开客服会话失败',
          icon: 'none'
        })
      }
    })
  }
}) 