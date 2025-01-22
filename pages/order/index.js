Page({
  data: {
    activeTab: 0,
    orders: [
      {
        id: 1,
        type: '航拍服务',
        status: '待付款',
        title: '工业园区航拍',
        description: '3天航拍服务，含后期剪辑',
        price: 2800,
        image: 'https://via.placeholder.com/160x160/FF6B00/ffffff?text=航拍'
      },
      {
        id: 2,
        type: '设备租赁',
        status: '进行中',
        title: 'DJI Air 2S',
        description: '租期：2023.12.1-12.3',
        price: 480,
        image: 'https://via.placeholder.com/160x160/1890ff/ffffff?text=AIR2S'
      },
      {
        id: 3,
        type: '技能课程',
        status: '已完成',
        title: '无人机驾驶基础课程',
        description: '线上课程，共12课时',
        price: 299,
        image: 'https://via.placeholder.com/160x160/52c41a/ffffff?text=课程'
      }
    ]
  },

  onLoad() {
    this.loadOrders()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().init()
    }
  },

  onTabChange(event) {
    const activeTab = event.detail.index
    this.setData({ activeTab })
    this.loadOrders(activeTab)
  },

  loadOrders(tabIndex = 0) {
    // TODO: 根据标签页索引加载不同状态的订单
    console.log('Loading orders for tab:', tabIndex)
  },

  onOrderTap(event) {
    const { id } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/order-detail/index?id=${id}`
    })
  }
}) 