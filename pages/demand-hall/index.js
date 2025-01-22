Page({
  data: {
    currentType: 'flexible', // flexible, service, solution
    pageNum: 1,
    pageSize: 10,
    hasMore: true,
    demands: [
      {
        id: 1,
        type: '定制服务',
        status: '进行中',
        title: '组装调试',
        description: '需要专业的无人机组装和调试人员，要求有相关经验，能够独立完成工作。',
        taskCount: 2,
        location: '兰州市',
        price: '2000',
        companyLogo: 'https://via.placeholder.com/48',
        companyName: '北京锐智云科技有限公司'
      },
      {
        id: 2,
        type: '航拍服务',
        status: '进行中',
        title: '青海甘肃大环线航拍',
        description: '需要专业航拍团队，跟随旅行团进行风景航拍，为期5天。',
        taskCount: 2,
        location: '兰州市',
        price: '600',
        companyLogo: 'https://via.placeholder.com/48',
        companyName: '甘肃旅游文化传媒有限公司'
      }
    ]
  },

  onLoad: function() {
    this.getDemandList()
  },

  // 获取需求列表
  getDemandList: function(isLoadMore = false) {
    const { currentType, pageNum, pageSize } = this.data
    // 这里可以调用接口获取需求列表数据
    // wx.request({
    //   url: 'api/demands',
    //   data: {
    //     type: currentType,
    //     pageNum,
    //     pageSize
    //   },
    //   success: (res) => {
    //     const { list, hasMore } = res.data
    //     this.setData({
    //       demands: isLoadMore ? [...this.data.demands, ...list] : list,
    //       hasMore
    //     })
    //   }
    // })
  },

  // 切换需求类型
  onTypeSelect: function(e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      currentType: type,
      pageNum: 1,
      demands: [],
      hasMore: true
    })
    this.getDemandList()
  },

  // 搜索需求
  onSearch: function(e) {
    const keyword = e.detail.value
    this.searchDemands(keyword)
  },

  // 搜索需求
  searchDemands: function(keyword) {
    // 这里可以调用接口搜索需求
    // wx.request({
    //   url: 'api/demands/search',
    //   data: { keyword },
    //   success: (res) => {
    //     this.setData({
    //       demands: res.data.list,
    //       hasMore: false
    //     })
    //   }
    // })
  },

  // 查看需求详情
  viewDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/demand-detail/index?id=${id}`
    })
  },

  // 申请需求
  applyDemand: function(e) {
    const id = e.currentTarget.dataset.id
    // 检查用户是否登录
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
    
    // 跳转到申请页面
    wx.navigateTo({
      url: `/pages/demand-apply/index?id=${id}`
    })
  },

  // 发布需求
  publishDemand: function() {
    // 检查用户是否登录
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再发布',
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

    // 跳转到发布页面
    wx.navigateTo({
      url: '/pages/demand-publish/index'
    })
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    this.setData({
      pageNum: 1,
      demands: [],
      hasMore: true
    })
    this.getDemandList()
    wx.stopPullDownRefresh()
  },

  // 上拉加载更多
  onReachBottom: function() {
    if (!this.data.hasMore) return
    this.setData({
      pageNum: this.data.pageNum + 1
    })
    this.getDemandList(true)
  }
}) 