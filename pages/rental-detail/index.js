Page({
  data: {
    device: {
      id: 1,
      name: '大疆御 AIR 2S',
      price: 160,
      unit: '天',
      specs: '1英寸CMOS，5.4K视频，重量595g',
      minDays: 3,
      deposit: 2000,
      deliveryType: '同城配送',
      images: [
        '/static/images/rentals/air2s.jpg',
        'https://via.placeholder.com/750x500/FF6B00/ffffff?text=AIR2S图片2',
        'https://via.placeholder.com/750x500/FF6B00/ffffff?text=AIR2S图片3'
      ],
      details: [
        { title: '品牌', content: 'DJI 大疆' },
        { title: '型号', content: 'AIR 2S' },
        { title: '相机参数', content: '1英寸CMOS，5.4K视频' },
        { title: '续航时间', content: '约31分钟' },
        { title: '抗风等级', content: '5级' },
        { title: '遥控距离', content: '12公里' }
      ],
      notices: [
        '需提供身份证、驾驶证等证件',
        '设备使用前会进行检查',
        '超时按天收费',
        '损坏照价赔偿'
      ]
    }
  },

  onLoad(options) {
    const { id } = options
    // TODO: 根据ID加载设备详情
    console.log('Loading device details for ID:', id)
  },

  onContactTap() {
    wx.makePhoneCall({
      phoneNumber: '400-123-4567',
      fail: () => {
        wx.showToast({
          title: '拨打电话失败',
          icon: 'none'
        })
      }
    })
  },

  onRentTap() {
    wx.navigateTo({
      url: `/pages/rental-order/index?id=${this.data.device.id}`
    })
  }
}) 