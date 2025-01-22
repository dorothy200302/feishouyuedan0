Page({
  data: {
    currentCity: '苏州市',
    searchValue: '',
    recommendCount: 22,
    categories: [
      {
        type: 'aerial',
        name: '航拍',
        count: 17,
        image: 'https://via.placeholder.com/300x160/1890ff/ffffff?text=航拍服务'
      },
      {
        type: 'power',
        name: '电力',
        count: 3,
        image: 'https://via.placeholder.com/300x160/52c41a/ffffff?text=电力巡检'
      },
      {
        type: 'construction',
        name: '建筑',
        count: 2,
        image: 'https://via.placeholder.com/300x160/722ed1/ffffff?text=建筑测绘'
      }
    ],
    bannerImage: '/static/images/banners/微信图片_20250122181204.png',
    
    // 筛选选项
    taskType: 0,
    taskOptions: [
      { text: 'CAAC', value: 'caac' },
      { text: 'UTC', value: 'utc' },
      { text: '其他', value: 'other' }
    ],
    licenseType: 0,
    licenseOptions: [
      { text: '运营商', value: 'operator' },
      { text: '海关', value: 'customs' },
      { text: '富牧', value: 'fumu' }
    ],
    pilotType: 0,
    pilotOptions: [
      { text: '普通飞手', value: 'normal' },
      { text: '推荐飞手', value: 'recommended' }
    ],
    selectedTask: '',
    selectedLicense: '',
    selectedPilot: '',

    // 飞手列表
    pilots: [
      {
        id: '109650',
        name: '云享飞用户_109650',
        avatar: 'https://via.placeholder.com/100/1890ff/ffffff?text=飞手',
        city: '苏州市',
        experience: '1年经验',
        tags: ['航拍'],
        device: '大疆御3pro'
      },
      {
        id: '2',
        name: '温良',
        avatar: 'https://via.placeholder.com/100/52c41a/ffffff?text=飞手',
        city: '苏州市',
        experience: '2年经验',
        tags: ['航拍'],
        description: '部队无人机飞手'
      },
      {
        id: '3',
        name: '可见~昆山',
        avatar: 'https://via.placeholder.com/100/722ed1/ffffff?text=飞手',
        city: '苏州市',
        experience: '1年经验',
        tags: ['航拍'],
        description: '新人无人机飞手，能吃苦，有责任心，能加班'
      }
    ]
  },

  onLoad() {
    // 获取当前位置
    this.getCurrentLocation()
  },

  getCurrentLocation() {
    // 这里可以调用定位API获取当前城市
    // 暂时使用默认值
  },

  onLocationTap() {
    wx.navigateTo({
      url: '/pages/city-select/index'
    })
  },

  onSearch(e) {
    const searchValue = e.detail
    this.setData({ searchValue })
    // 实现搜索逻辑
  },

  onMoreTap() {
    // 查看更多飞手
    wx.navigateTo({
      url: '/pages/pilot-list/more/index'
    })
  },

  onCategoryTap(e) {
    const { type } = e.currentTarget.dataset
    // 根据类型筛选飞手
    this.setData({
      taskType: this.data.taskOptions.findIndex(item => item.text === this.data.categories.find(cat => cat.type === type).name)
    })
  },

  showTaskFilter() {
    wx.showActionSheet({
      itemList: this.data.taskOptions.map(item => item.text),
      success: (res) => {
        this.setData({ taskType: res.tapIndex })
      }
    })
  },

  showLicenseFilter() {
    wx.showActionSheet({
      itemList: this.data.licenseOptions.map(item => item.text),
      success: (res) => {
        this.setData({ licenseType: res.tapIndex })
      }
    })
  },

  showPilotFilter() {
    wx.showActionSheet({
      itemList: this.data.pilotOptions.map(item => item.text),
      success: (res) => {
        this.setData({ pilotType: res.tapIndex })
      }
    })
  },

  // 点击飞手项
  onPilotTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/pilot-detail/index?id=${id}`,
      fail: (err) => {
        console.error('导航失败：', err)
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        })
      }
    })
  },

  // 点击筛选条件
  onFilterTap(e) {
    const { type } = e.currentTarget.dataset
    let itemList = []
    
    switch(type) {
      case 'task':
        itemList = this.data.taskOptions.map(item => item.text)
        wx.showActionSheet({
          itemList,
          success: (res) => {
            this.setData({
              selectedTask: this.data.taskOptions[res.tapIndex].value
            })
            this.filterPilots()
          }
        })
        break
      case 'license':
        itemList = this.data.licenseOptions.map(item => item.text)
        wx.showActionSheet({
          itemList,
          success: (res) => {
            this.setData({
              selectedLicense: this.data.licenseOptions[res.tapIndex].value
            })
            this.filterPilots()
          }
        })
        break
      case 'pilot':
        itemList = this.data.pilotOptions.map(item => item.text)
        wx.showActionSheet({
          itemList,
          success: (res) => {
            this.setData({
              selectedPilot: this.data.pilotOptions[res.tapIndex].value
            })
            this.filterPilots()
          }
        })
        break
    }
  },

  // 根据筛选条件过滤飞手列表
  filterPilots() {
    // TODO: 根据 selectedTask、selectedLicense、selectedPilot 筛选飞手列表
    console.log('Filtering with:', {
      task: this.data.selectedTask,
      license: this.data.selectedLicense,
      pilot: this.data.selectedPilot
    })
  }
}) 