Page({
  data: {
    searchValue: '',
    history: [],
    hotKeywords: ['航拍', '电力巡检', '建筑测绘', '无人机培训', '设备租赁'],
    results: []
  },

  onLoad() {
    // 从本地存储加载搜索历史
    const history = wx.getStorageSync('searchHistory') || []
    this.setData({ history })
  },

  onSearch(e) {
    const searchValue = e.detail
    this.setData({ searchValue })
    
    if (!searchValue) {
      this.setData({ results: [] })
      return
    }

    // 保存搜索历史
    this.saveHistory(searchValue)
    
    // 模拟搜索结果
    this.setData({
      results: [
        {
          id: 1,
          type: '服务',
          title: '航拍服务',
          description: '专业航拍团队，提供各类航拍服务',
          price: 500,
          image: 'https://via.placeholder.com/160x160/1890ff/ffffff?text=航拍'
        },
        {
          id: 2,
          type: '课程',
          title: '无人机基础教程',
          description: '零基础入门无人机驾驶',
          price: 299,
          image: 'https://via.placeholder.com/160x160/52c41a/ffffff?text=课程'
        }
      ]
    })
  },

  onCancel() {
    wx.navigateBack()
  },

  onTagTap(e) {
    const { keyword } = e.currentTarget.dataset
    this.setData({ searchValue: keyword })
    this.onSearch({ detail: keyword })
  },

  clearHistory() {
    this.setData({ history: [] })
    wx.removeStorageSync('searchHistory')
  },

  saveHistory(keyword) {
    let history = this.data.history
    // 移除重复的关键词
    history = history.filter(item => item !== keyword)
    // 将新关键词添加到开头
    history.unshift(keyword)
    // 只保留最近10条记录
    history = history.slice(0, 10)
    
    this.setData({ history })
    wx.setStorageSync('searchHistory', history)
  },

  onResultTap(e) {
    const { item } = e.currentTarget.dataset
    // 根据类型跳转到不同页面
    switch(item.type) {
      case '服务':
        wx.navigateTo({
          url: `/pages/service-detail/index?id=${item.id}`
        })
        break
      case '课程':
        wx.navigateTo({
          url: `/pages/course-detail/index?id=${item.id}`
        })
        break
      default:
        console.log('未知类型:', item.type)
    }
  }
}) 