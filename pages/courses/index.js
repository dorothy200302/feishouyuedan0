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
    searchValue: ''
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
      url: `/pages/course-detail/index?id=${id}`
    })
  }
}) 