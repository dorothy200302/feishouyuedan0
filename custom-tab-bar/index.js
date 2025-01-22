Component({
  data: {
    active: 0,
    list: [
      {
        icon: 'wap-home-o',
        text: '首页',
        url: '/pages/index/index'
      },
      {
        icon: 'shop-o',
        text: '行业服务',
        url: '/pages/industry-service/index'
      },
      {
        icon: 'orders-o',
        text: '需求大厅',
        url: '/pages/demand-hall/index'
      },
      {
        icon: 'user-o',
        text: '我的',
        url: '/pages/profile/index'
      }
    ]
  },

  methods: {
    onChange(event) {
      const index = event.detail;
      const url = this.data.list[index].url;
      wx.switchTab({ url });
      this.setData({ active: index });
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route : 'pages/index/index';
      const active = this.data.list.findIndex(item => item.url.includes(route));
      this.setData({ active });
    },

    onPublish() {
      wx.navigateTo({
        url: '/pages/demand-publish/index'
      });
    }
  }
}) 