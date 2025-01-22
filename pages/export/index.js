Page({
  data: {
    searchValue: '',
    activeCategory: '我的关注',
    categories: [
      { id: 'follow', name: '我的关注', icon: '/static/images/logos/mmc.png' },
      { id: 'recommend', name: '推荐', highlight: true },
      { id: 'drone', name: '无人机' },
      { id: 'mount', name: '挂载' },
      { id: 'platform', name: '任务平台' },
      { id: 'software', name: '软件' },
      { id: 'accessories', name: '配件耗材' },
      { id: 'components', name: '核心组件' },
      { id: 'service', name: '增值服务' },
      { id: 'ground', name: '地面站' },
      { id: 'algorithm', name: '算法' },
      { id: 'counter', name: '反制设备' }
    ],
    brands: [
      { id: 'mmc', name: '科比特航空', logo: '/static/images/logos/mmc.png' },
      { id: 'century', name: '世纪南方', logo: '/static/images/logos/mmc.png' },
      { id: 'wol', name: 'WOL', logo: '/static/images/logos/mmc.png' },
      { id: 'sprint', name: 'SprintLink', logo: '/static/images/logos/mmc.png' }
    ],
    drones: [
      { id: 1, name: '入云龙II', image: '/static/images/rentals/rental1.jpg' },
      { id: 2, name: '小旋风II', image: '/static/images/rentals/rental2.jpg' },
      { id: 3, name: '志翔Z1 Gen2-X4', image: '/static/images/rentals/rental3.jpg' },
      { id: 4, name: '志翔Z1 Gen2-X8', image: '/static/images/rentals/rental4.jpg' },
      { id: 5, name: '重载系留无人机系统', image: '/static/images/rentals/rental5.jpg' },
      { id: 6, name: '轻型系留无人机系统', image: '/static/images/rentals/rental6.jpg' }
    ],
    mounts: [
      { id: 1, name: '金眼魔Z60R', image: '/static/images/rentals/rental1.jpg' },
      { id: 2, name: '白日鼠G6', image: '/static/images/rentals/rental2.jpg' },
      { id: 3, name: '无人机基站', image: '/static/images/rentals/rental3.jpg' },
      { id: 4, name: 'INYYO 26P', image: '/static/images/rentals/rental4.jpg' },
      { id: 5, name: '品灵30倍AI识别跟踪', image: '/static/images/rentals/rental5.jpg' },
      { id: 6, name: '品灵30倍光学变焦', image: '/static/images/rentals/rental6.jpg' }
    ],
    platforms: [
      { id: 1, name: '任务管理平台', image: '/static/images/rentals/rental1.jpg' }
    ]
  },

  onLoad() {
    // 页面加载时的初始化逻辑
  },

  // 搜索输入变化
  onSearchChange(e) {
    this.setData({
      searchValue: e.detail
    });
  },

  // 点击搜索
  onSearch() {
    // 实现搜索功能
    wx.showToast({
      title: '搜索: ' + this.data.searchValue,
      icon: 'none'
    });
  },

  // 切换类目
  onCategoryTap(e) {
    const category = e.currentTarget.dataset.name;
    this.setData({
      activeCategory: category
    });
  },

  // 查看更多
  onMoreTap(e) {
    const section = e.currentTarget.dataset.section;
    wx.showToast({
      title: '查看更多: ' + section,
      icon: 'none'
    });
  },

  // 点击品牌
  onBrandTap(e) {
    const brand = e.currentTarget.dataset.id;
    wx.showToast({
      title: '选择品牌: ' + brand,
      icon: 'none'
    });
  },

  // 点击产品
  onProductTap(e) {
    const { section, id } = e.currentTarget.dataset;
    wx.showToast({
      title: `查看${section}产品: ${id}`,
      icon: 'none'
    });
  }
}); 