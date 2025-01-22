Page({
  data: {
    searchValue: '',
    currentCity: '苏州市',
    hotCities: ['北京市', '上海市', '广州市', '深圳市', '杭州市', '南京市'],
    cityList: [
      {
        initial: 'A',
        cities: ['安庆市', '安阳市', '鞍山市']
      },
      {
        initial: 'B',
        cities: ['北京市', '保定市', '包头市']
      },
      {
        initial: 'C',
        cities: ['长沙市', '成都市', '重庆市']
      },
      {
        initial: 'D',
        cities: ['大连市', '东莞市', '大庆市']
      },
      {
        initial: 'F',
        cities: ['福州市', '佛山市', '抚顺市']
      },
      {
        initial: 'G',
        cities: ['广州市', '贵阳市', '桂林市']
      },
      {
        initial: 'H',
        cities: ['杭州市', '合肥市', '哈尔滨市']
      },
      {
        initial: 'J',
        cities: ['济南市', '嘉兴市', '金华市']
      },
      {
        initial: 'K',
        cities: ['昆明市', '开封市', '喀什市']
      },
      {
        initial: 'L',
        cities: ['兰州市', '廊坊市', '临沂市']
      },
      {
        initial: 'M',
        cities: ['绵阳市', '梅州市', '马鞍山市']
      },
      {
        initial: 'N',
        cities: ['南京市', '宁波市', '南通市']
      },
      {
        initial: 'Q',
        cities: ['青岛市', '泉州市', '秦皇岛市']
      },
      {
        initial: 'S',
        cities: ['上海市', '深圳市', '苏州市']
      },
      {
        initial: 'T',
        cities: ['天津市', '太原市', '唐山市']
      },
      {
        initial: 'W',
        cities: ['武汉市', '无锡市', '温州市']
      },
      {
        initial: 'X',
        cities: ['西安市', '厦门市', '徐州市']
      },
      {
        initial: 'Y',
        cities: ['烟台市', '扬州市', '宜昌市']
      },
      {
        initial: 'Z',
        cities: ['郑州市', '珠海市', '中山市']
      }
    ]
  },

  onLoad() {
    this.getLocation()
  },

  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        // TODO: 根据经纬度获取城市名称
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

  onSearch(e) {
    this.setData({
      searchValue: e.detail
    })
    // TODO: 搜索城市
  },

  onCityTap(e) {
    const { city } = e.currentTarget.dataset
    const pages = getCurrentPages()
    const prevPage = pages[pages.length - 2]
    
    // 更新上一页数据
    prevPage.setData({
      location: city
    })

    wx.navigateBack()
  },

  onIndexTap(e) {
    const { index } = e.currentTarget.dataset
    // TODO: 滚动到对应城市列表位置
    console.log('Scroll to index:', index)
  }
}) 