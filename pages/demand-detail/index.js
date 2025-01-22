Page({
  data: {
    isCollected: false,
    demand: {
      id: 1,
      type: '定制服务',
      status: '进行中',
      title: '组装调试',
      price: '2000',
      taskCount: 2,
      location: '兰州市',
      workTime: '2024-01-20 至 2024-02-20',
      publishTime: '2024-01-13 17:50:01',
      description: '需要专业的无人机组装和调试人员，要求有相关经验，能够独立完成工作。主要负责无人机的组装、调试、维修等工作。',
      requirements: [
        '3年以上无人机组装调试经验',
        '熟悉各类无人机的结构和工作原理',
        '具备独立解决问题的能力',
        '有相关资质证书优先',
        '能够适应出差工作'
      ],
      companyLogo: 'https://via.placeholder.com/80',
      companyName: '北京锐智云科技有限公司',
      completedOrders: 128
    }
  },

  onLoad: function(options) {
    const { id } = options
    this.getDemandDetail(id)
    this.checkCollectionStatus(id)
  },

  // 获取需求详情
  getDemandDetail: function(id) {
    // 这里可以调用接口获取需求详情
    // wx.request({
    //   url: `api/demands/${id}`,
    //   success: (res) => {
    //     this.setData({
    //       demand: res.data
    //     })
    //   }
    // })
  },

  // 检查收藏状态
  checkCollectionStatus: function(id) {
    const collections = wx.getStorageSync('collections') || []
    this.setData({
      isCollected: collections.includes(id)
    })
  },

  // 收藏/取消收藏
  toggleCollect: function() {
    const { id } = this.data.demand
    const collections = wx.getStorageSync('collections') || []
    const isCollected = collections.includes(id)

    if (isCollected) {
      // 取消收藏
      const newCollections = collections.filter(item => item !== id)
      wx.setStorageSync('collections', newCollections)
      wx.showToast({
        title: '已取消收藏',
        icon: 'none'
      })
    } else {
      // 添加收藏
      collections.push(id)
      wx.setStorageSync('collections', collections)
      wx.showToast({
        title: '收藏成功',
        icon: 'success'
      })
    }

    this.setData({
      isCollected: !isCollected
    })
  },

  // 联系企业
  contactCompany: function() {
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再联系企业',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/index'
            })
          }
        }
      })
      return
    }

    // 这里可以调用接口获取企业联系方式
    wx.showActionSheet({
      itemList: ['拨打电话', '发送消息'],
      success: (res) => {
        if (res.tapIndex === 0) {
          // 拨打电话
          wx.makePhoneCall({
            phoneNumber: '1234567890'
          })
        } else {
          // 发送消息
          wx.navigateTo({
            url: `/pages/chat/index?targetId=${this.data.demand.companyId}`
          })
        }
      }
    })
  },

  // 申请需求
  applyDemand: function() {
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再申请',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/index'
            })
          }
        }
      })
      return
    }

    wx.navigateTo({
      url: `/pages/demand-apply/index?id=${this.data.demand.id}`
    })
  },

  // 分享
  onShareAppMessage: function() {
    const { title, id } = this.data.demand
    return {
      title: title,
      path: `/pages/demand-detail/index?id=${id}`
    }
  },

  // 分享到朋友圈
  onShareTimeline: function() {
    const { title, id } = this.data.demand
    return {
      title: title,
      query: `id=${id}`
    }
  }
}) 