const { pilotApi } = require('../../utils/api');

Page({
  data: {
    pilots: [],
    currentArea: '苏州市',
    currentTaskType: '',
    taskTypes: [
      { id: 'all', name: '全部' },
      { id: '航拍', name: '航拍' },
      { id: '电力', name: '电力' },
      { id: '农业植保', name: '农业植保' },
      { id: '建筑', name: '建筑' },
      { id: '公共安全', name: '公共安全' },
      { id: '交通安全', name: '交通安全' },
      { id: '应急救援', name: '应急救援' },
      { id: '消防巡查', name: '消防巡查' },
      { id: '城市管理', name: '城市管理' },
      { id: '环境保护', name: '环境保护' },
      { id: '水利', name: '水利' }
    ]
  },

  onLoad() {
    this.loadPilots();
  },

  // 加载飞手数据
  async loadPilots() {
    try {
      const params = {
        area: this.data.currentArea,
        taskType: this.data.currentTaskType === 'all' ? '' : this.data.currentTaskType
      };
      const pilots = await pilotApi.getPilots(params);
      this.setData({ pilots });
    } catch (error) {
      console.error('加载飞手数据失败:', error);
      wx.showToast({
        title: '加载数据失败',
        icon: 'none'
      });
    }
  },

  // 切换任务类型
  onTaskTypeChange(e) {
    const taskType = e.currentTarget.dataset.type;
    this.setData({
      currentTaskType: taskType
    }, () => {
      this.loadPilots();
    });
  },

  // 切换地区
  onAreaChange(e) {
    const area = e.detail.value;
    this.setData({
      currentArea: area
    }, () => {
      this.loadPilots();
    });
  },

  // 跳转到飞手详情页
  navigateToPilotDetail(e) {
    const pilotId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/pilot-detail/index?id=${pilotId}`
    });
  }
}); 