Page({
  data: {
    location: '苏州市',
    searchValue: '',
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
    active: 0
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
  }
}) 