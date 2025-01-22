Page({
  data: {
    pilot: {
      id: '102444',
      name: '云享飞用户_102444',
      avatar: '/static/images/logos/mmc.png',
      city: '赣州市',
      age: 25,
      experience: '2年经验',
      isVerified: true,
      isPilot: true,
      intro: '本人持有 CAAC 超视距执照，熟练操作各种型号无人机及航拍，吊运',
      skills: ['应急救援', '电力'],
      cases: [
        '/static/images/cases/case1.jpg',
        '/static/images/cases/case2.jpg',
        '/static/images/cases/case3.jpg'
      ]
    }
  },

  onLoad(options) {
    const { id } = options
    // TODO: 根据ID获取飞手详情
    this.loadPilotDetail(id)
  },

  loadPilotDetail(id) {
    // TODO: 调用接口获取飞手详情
    console.log('Loading pilot detail for ID:', id)
  },

  onShareAppMessage() {
    const { pilot } = this.data
    return {
      title: `${pilot.name}的飞手简历`,
      path: `/pages/pilot-detail/index?id=${pilot.id}`
    }
  },

  onChatTap() {
    // TODO: 实现私信功能
    wx.showToast({
      title: '私信功能开发中',
      icon: 'none'
    })
  },

  onCallTap() {
    wx.showActionSheet({
      itemList: ['拨打电话', '复制微信号'],
      success: (res) => {
        if (res.tapIndex === 0) {
          wx.makePhoneCall({
            phoneNumber: '10086', // TODO: 替换为实际电话号码
            fail: () => {
              wx.showToast({
                title: '拨打电话失败',
                icon: 'none'
              })
            }
          })
        } else {
          wx.setClipboardData({
            data: 'wx123456', // TODO: 替换为实际微信号
            success: () => {
              wx.showToast({
                title: '微信号已复制',
                icon: 'success'
              })
            }
          })
        }
      }
    })
  },

  onAssignTap() {
    // TODO: 实现派单功能
    wx.showToast({
      title: '派单功能开发中',
      icon: 'none'
    })
  }
}) 