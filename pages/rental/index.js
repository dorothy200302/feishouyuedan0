Page({
  data: {
    activeTab: 0,
    categories: [
      { id: 1, name: '行业机', icon: 'drone' },
      { id: 2, name: '航拍机', icon: 'camera-o' },
      { id: 3, name: '挂载', icon: 'video-o' },
      { id: 4, name: '配件', icon: 'setting-o' }
    ],
    rentals: [
      {
        id: 1,
        name: '大疆御AIR2S',
        image: '/static/images/rentals/air2s.jpg',
        price: 160,
        unit: '天',
        minDays: 3,
        deposit: 2000,
        category: '航拍机',
        specs: '1英寸CMOS，5.4K视频'
      },
      {
        id: 2,
        name: '大疆精灵4Pro',
        image: 'https://via.placeholder.com/400x400/52c41a/ffffff?text=P4P',
        price: 199,
        unit: '天',
        minDays: 3,
        deposit: 3000,
        category: '航拍机',
        specs: '1英寸CMOS，4K视频'
      },
      {
        id: 3,
        name: '小旋风S（双光版）',
        image: '/static/images/rentals/xiaoxuanfeng.jpg',
        price: 98,
        unit: '天',
        minDays: 3,
        deposit: 1000,
        category: '行业机',
        specs: '工业级四旋翼无人机'
      }
    ],
    searchValue: '',
    location: '苏州'
  },

  onLoad() {
    this.loadRentals()
  },

  onTabChange(e) {
    const { index } = e.currentTarget.dataset
    this.setData({ activeTab: index })
    this.loadRentals(this.data.categories[index].id)
  },

  onSearch(e) {
    const searchValue = e.detail
    this.setData({ searchValue })
    this.loadRentals()
  },

  onLocationChange() {
    wx.navigateTo({
      url: '/pages/city-select/index'
    })
  },

  loadRentals(categoryId) {
    // TODO: 根据分类ID加载设备列表
    console.log('Loading rentals for category:', categoryId)
  },

  onRentalTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/rental-detail/index?id=${id}`
    })
  }
}) 