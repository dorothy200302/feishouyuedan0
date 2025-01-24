Page({
  data: {
    location: '苏州市',
    searchValue: '',
    demands: [],

    navItems: [
      {
        id: 1,
        icon: 'shop-o',
        text: '行业服务',
        url: '/pages/industry-service/index',
        color: '#FF6B00'
      },
      {
        id: 2,
        icon: 'friends-o',
        text: '飞手约单',
        url: '/pages/pilot-list/index',
        color: '#1890FF'
      },
      {
        id: 3,
        icon: 'award-o',
        text: '技能课堂',
        url: '/pages/courses/index',
        color: '#52C41A'
      },
      {
        id: 4,
        icon: 'gift-o',
        text: '出口产品',
        url: '/pages/export/index',
        color: '#722ED1'
      },
      {
        id: 5,
        icon: 'cart-o',
        text: '设备租赁',
        url: '/pages/rental/index',
        color: '#13C2C2'
      },
      {
        id: 6,
        icon: 'phone-o',
        text: '应急救援',
        url: '/pages/emergency/index',
        color: '#FA8C16'
      }
    ],
    categories: [
      { id: 1, name: '航拍', count: '12人', image: '/static/images/categories/aerial.jpg' },
      { id: 2, name: '电力', count: '3人', image: '/static/images/categories/power.jpg' },
      { id: 3, name: '建筑', count: '2人', image: '/static/images/categories/construction.jpg' }
    ],
    banners: [
      { 
        id: 1, 
        title: '团建拓展',
        description: '专业团建服务',
        image: '/static/images/banners/banner1.jpg'
      },
      { 
        id: 2, 
        title: '运动会',
        description: '校园活动航拍',
        image: '/static/images/banners/banner2.jpg'
      },
      { 
        id: 3, 
        title: '开学典礼',
        description: '校园活动记录',
        image: '/static/images/banners/banner3.jpg'
      }
    ],
    pilots: [
      {
        id: 1,
        name: '云享飞用户_109650',
        avatar: '/static/images/avatars/default.png',
        experience: '1年经验',
        tags: ['航拍'],
        equipment: '大疆御3pro',
        location: '苏州市'
      },
      {
        id: 2,
        name: '温良',
        avatar: '/static/images/avatars/default.png',
        experience: '2年经验',
        tags: ['航拍'],
        description: '部队无人机飞手',
        location: '苏州市'
      }
    ],
    rentals: [
      {
        id: 1,
        name: '大疆御AIR2S',
        image: '/static/images/rentals/air2s.jpg',
        price: 160,
        unit: '天'
      },
      {
        id: 2,
        name: '大疆精灵4Pro',
        image: '/static/images/rentals/p4p.jpg',
        price: 199,
        unit: '天'
      }
    ],
    courses: [
      {
        id: 1,
        title: '小旋风2系列教学视频',
        image: '/static/images/courses/course1.jpg',
        students: 978,
        provider: '科比特航空'
      },
      {
        id: 2,
        title: '无人机概述及系统组成',
        image: '/static/images/courses/course2.jpg',
        students: 258,
        provider: '科比特航空'
      }
    ],
    active: 0,
    news: {
      id: 1,
      title: '重磅｜3亿无人机产业基金来袭！',
      source: '科比特｜科比特市场部',
      time: '2024-04-18 19:47:18',
      views: 853,
      image: '/static/images/news/fund.jpg'
    },
    serviceCategories: [
      {
        type: 'celebration',
        name: '庆典',
        image: '/static/images/categories/celebration.jpg'
      },
      {
        type: 'self-driving',
        name: '自驾游',
        image: '/static/images/categories/self-driving.jpg'
      },
      {
        type: 'wedding',
        name: '婚庆航拍',
        image: '/static/images/categories/wedding.jpg'
      }
    ],
    companyNews: {
      id: 1,
      company: '天光航空航天科技-天光航天',
      logo: '/static/images/logos/mmc.png',
      time: '01-20 22:11',
      tags: ['天光航空航天科技', '负载', '模块'],
      content: '天光航空航天大厂 SLT-L01警示灯预告，大学生自主设计研发的...',
      images: [
        '/static/images/products/slt-l01-1.jpg',
        '/static/images/products/slt-l01-2.jpg',
        '/static/images/products/slt-l01-3.jpg'
      ]
    },
    companyCase: {
      id: 1,
      company: '中测航空-调峰',
      logo: '/static/images/logos/mmc.png',
      time: '01-16 08:58',
      content: '承接吊运飞防业务 欢迎新老朋友考察合作。',
      images: Array.from({length: 9}, (_, i) => `/static/images/cases/power-inspection-${i + 1}.jpg`),
      tag: '电力巡检',
      rating: 4.5,
      likes: 7
    }
  },

  onLoad() {
    this.getLocation()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  getLocation() {
    // 获取定位
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('当前位置：', res)
      },
      fail: () => {
        wx.showToast({
          title: '获取位置失败',
          icon: 'none'
        })
      }
    })
  },

  onLocationTap() {
    wx.navigateTo({
      url: '/pages/city-select/index'
    })
  },

  onSearchTap() {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },

  onNavTap(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({
      url,
      fail: (err) => {
        console.error('导航失败：', err)
        // 如果navigateTo失败，尝试switchTab
        wx.switchTab({
          url,
          fail: (switchErr) => {
            console.error('switchTab也失败：', switchErr)
            wx.showToast({
              title: '页面跳转失败',
              icon: 'none'
            })
          }
        })
      }
    })
  },

  onCategoryTap: function(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/pilots/index?categoryId=${id}`
    })
  },

  onPilotTap: function(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/pilot-detail/index?id=${id}`
    })
  },

  onRentalTap: function(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/rental-detail/index?id=${id}`
    })
  },

  onCourseTap: function(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/course-detail/index?id=${id}`
    })
  },
 // 加载需求数据
 async loadDemands() {
  try {
    wx.showLoading({ title: '加载中...' });
    const demands = await demandApi.getAllDemands();
    this.setData({ demands });
  } catch (error) {
    console.error('加载需求数据失败:', error);
    wx.showToast({
      title: '加载需求失败',
      icon: 'none'
    });
  } finally {
    wx.hideLoading();
  }
},
  onChange(event) {
    const index = event.detail
    const routes = [
      '/pages/index/index',
      '/pages/industry-service/index',
      '/pages/demand-hall/index',
      '/pages/profile/index'
    ]
    
    wx.switchTab({
      url: routes[index]
    })
  },

  // 点击服务项
  onServiceTap(e) {
    const type = e.currentTarget.dataset.type;
    let url = '';
    
    switch(type) {
      case 'export':
        url = '/pages/export/index';
        break;
      // ... other cases ...
      default:
        return;
    }

    wx.navigateTo({
      url,
      fail: (err) => {
        console.error('导航失败：', err);
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    });
  },

  // 点击新闻
  onNewsTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/news-detail/index?id=${id}`,
      fail: (err) => {
        console.error('导航失败：', err);
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    });
  },

  // 点击服务分类
  onCategoryTap(e) {
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/service-list/index?type=${type}`,
      fail: (err) => {
        console.error('导航失败：', err);
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    });
  },

  // 点击私信按钮
  onContactTap(e) {
    const { company } = e.currentTarget.dataset;
    wx.showToast({
      title: `联系${company}`,
      icon: 'none'
    });
  },

  // 点击点赞
  onLikeTap(e) {
    const { id } = e.currentTarget.dataset;
    // TODO: 实现点赞逻辑
    wx.showToast({
      title: '点赞成功',
      icon: 'success'
    });
  },

  // 点击评论
  onCommentTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/comments/index?id=${id}`,
      fail: (err) => {
        console.error('导航失败：', err);
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    });
  },
   // 点击需求
   onDemandTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/demand-detail/index?id=${id}`
    });
  },
  onLocationTap() {
    wx.navigateTo({
      url: '/pages/city-select/index'
    });
  },

  onSearchTap() {
    wx.navigateTo({
      url: '/pages/search/index'
    });
  },
  // 点击分享
  onShareTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  }
}) 