Page({
  data: {
    activeTab: 0,
    categories: [
      { id: 1, name: 'CAAC题库', icon: 'records' },
      { id: 2, name: '产品课程', icon: 'video-o' },
      { id: 3, name: '基础知识库', icon: 'description' },
      { id: 4, name: '应用课程', icon: 'apps-o' }
    ],
    courses: [
      {
        id: 1,
        title: '小旋风2系列教学视频',
        image: 'https://via.placeholder.com/600x300/1890ff/ffffff?text=小旋风2教学',
        provider: '科比特航空',
        students: 978,
        category: '产品课程',
        tags: ['免费'],
        lessons: [
          '1、整机组装及注意事项',
          '2、挂载安装及拆卸',
          '3、小旋王2地面站组装'
        ]
      },
      {
        id: 2,
        title: '无人机概述及系统组成',
        image: 'https://via.placeholder.com/600x300/52c41a/ffffff?text=无人机基础',
        provider: '科比特航空',
        students: 258,
        category: '基础知识库',
        tags: ['免费'],
        lessons: [
          '1、无人机系统组成',
          '2、飞行原理',
          '3、常见机型介绍'
        ]
      }
    ],
    searchValue: '',
    navItems: [
      { type: 'caac', name: 'CAAC题库', icon: '/static/images/icons/caac.png' },
      { type: 'product', name: '产品课程', icon: '/static/images/icons/product.png' },
      { type: 'basic', name: '基础知识库', icon: '/static/images/icons/basic.png' },
      { type: 'application', name: '无人机应用课程', icon: '/static/images/icons/application.png' }
    ],
    courses: [
      {
        id: 1,
        title: '小旋风2系列教学视频',
        subtitle: '小旋风2系列教学视频',
        image: '/static/images/courses/course1.jpg',
        provider: '科比特航空',
        studentCount: 978,
        type: 'points' // 积分兑换
      },
      {
        id: 2,
        title: '塞天雷P3喊话器操作视频',
        subtitle: '塞天雷P3喊话器操作视频',
        image: '/static/images/courses/course2.jpg',
        provider: '科比特航空',
        studentCount: 258,
        type: 'free' // 免费
      }
    ]
  },

  onLoad() {
    this.loadCourses()
  },

  onTabChange(e) {
    const activeTab = e.detail.index
    this.setData({ activeTab })
    this.loadCourses(this.data.categories[activeTab].id)
  },

  onSearch(e) {
    const searchValue = e.detail
    this.setData({ searchValue })
    this.loadCourses()
  },

  loadCourses(categoryId) {
    // TODO: 根据分类ID加载课程列表
    console.log('Loading courses for category:', categoryId)
  },

  onCourseTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/courses/detail/index?id=${id}`
    })
  },

  onNavTap(e) {
    const { type } = e.currentTarget.dataset
    switch(type) {
      case 'caac':
        wx.navigateTo({ url: '/pages/courses/caac/index' })
        break
      case 'product':
        wx.navigateTo({ url: '/pages/courses/product/index' })
        break
      case 'basic':
        wx.navigateTo({ url: '/pages/courses/basic/index' })
        break
      case 'application':
        wx.navigateTo({ url: '/pages/courses/application/index' })
        break
    }
  },

  onMoreTap() {
    wx.navigateTo({
      url: '/pages/courses/list/index'
    })
  }
}) 