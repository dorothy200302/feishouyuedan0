Page({
  data: {
    searchValue: '',
    activeTab: 0,
    categories: [
      { id: 1, name: '航拍' },
      { id: 2, name: '电力' },
      { id: 3, name: '建筑' },
      { id: 4, name: '其他' }
    ],
    providers: [
      { id: 1, name: '科比特航空', logo: 'https://via.placeholder.com/100/ffffff/333333?text=MMC' },
      { id: 2, name: 'CEOAIR', logo: 'https://via.placeholder.com/100/ffffff/333333?text=CEOAIR' },
      { id: 3, name: 'UAV', logo: 'https://via.placeholder.com/100/ffffff/333333?text=UAV' },
      { id: 4, name: '优扬', logo: 'https://via.placeholder.com/100/ffffff/333333?text=YOUYANG' }
    ],
    services: [
      {
        id: 1,
        title: '执法辅助',
        image: 'https://via.placeholder.com/600x400/1890ff/ffffff?text=执法辅助',
        price: 500,
        unit: '起/次',
        provider: '广州玄鹏科技有限公司',
        orders: 7292,
        rating: 4.8,
        tags: ['专业团队', '经验丰富']
      },
      {
        id: 2,
        title: '运动会',
        image: 'https://via.placeholder.com/600x400/52c41a/ffffff?text=运动会',
        price: 600,
        unit: '起/次',
        provider: '广州玄鹏科技有限公司',
        orders: 5905,
        rating: 4.9,
        tags: ['专业设备', '快速响应']
      },
      {
        id: 3,
        title: '地块勘察',
        image: 'https://via.placeholder.com/600x400/722ed1/ffffff?text=地块勘察',
        price: 800,
        unit: '起/次',
        provider: '广州玄鹏科技有限公司',
        orders: 8604,
        rating: 4.7,
        tags: ['高精度', '专业分析']
      },
      {
        id: 4,
        title: '其他',
        image: 'https://via.placeholder.com/600x400/f5222d/ffffff?text=其他服务',
        price: 800,
        unit: '起/次',
        provider: '广州玄鹏科技有限公司',
        orders: 2021,
        rating: 4.6,
        tags: ['定制服务']
      }
    ]
  },

  onLoad() {
    this.loadServices()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  loadServices() {
    // TODO: 从服务器加载服务数据
    console.log('加载服务数据')
  },

  onSearch(e) {
    this.setData({
      searchValue: e.detail
    })
    // TODO: 搜索服务
  },

  onTabChange(e) {
    this.setData({
      activeTab: e.detail.index
    })
    this.loadServices()
  },

  onServiceTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/service-detail/index?id=${id}`
    })
  }
}) 