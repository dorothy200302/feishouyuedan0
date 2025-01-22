Page({
  data: {
    activeTab: 0,
    industries: [
      { id: 1, name: '航拍', count: 12 },
      { id: 2, name: '电力', count: 3 },
      { id: 3, name: '建筑', count: 2 },
      { id: 4, name: '农业植保', count: 5 },
      { id: 5, name: '公共安全', count: 4 },
      { id: 6, name: '水利', count: 3 }
    ],
    pilots: [
      {
        id: 1,
        name: '云享飞用户_109650',
        avatar: 'https://via.placeholder.com/100/1890ff/ffffff?text=飞手',
        experience: '1年经验',
        tags: ['航拍'],
        equipment: '大疆御3pro',
        location: '苏州市',
        skills: ['航拍', '影视航拍', '全景航拍'],
        certificates: ['CAAC驾驶证'],
        completedOrders: 156
      },
      {
        id: 2,
        name: '温良',
        avatar: 'https://via.placeholder.com/100/52c41a/ffffff?text=飞手',
        experience: '2年经验',
        tags: ['航拍', '公共安全'],
        description: '部队无人机飞手',
        location: '苏州市',
        skills: ['航拍', '安防巡查', '应急救援'],
        certificates: ['CAAC驾驶证', '安防资质'],
        completedOrders: 238
      }
    ]
  },

  onLoad() {
    this.loadPilots()
  },

  onTabChange(e) {
    const activeTab = e.detail.index
    this.setData({ activeTab })
    this.loadPilots(this.data.industries[activeTab].id)
  },

  loadPilots(industryId) {
    // TODO: 根据行业ID加载对应的飞手列表
    console.log('Loading pilots for industry:', industryId)
  },

  onPilotTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/pilot-detail/index?id=${id}`
    })
  }
}) 