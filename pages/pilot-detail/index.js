const { pilotApi } = require('../../utils/api');

Page({
  data: {
    pilotId: '',
    pilot: null,
    activeTab: 0,
    tabs: ['简介', '服务', '评价']
  },

  onLoad(options) {
    if (options.id) {
      this.setData({ pilotId: options.id });
      this.loadPilotDetail();
    }
  },

  // 加载飞手详情
  async loadPilotDetail() {
    try {
      wx.showLoading({ title: '加载中...' });
      const pilot = await pilotApi.getPilotDetail(this.data.pilotId);
      this.setData({ pilot });
    } catch (error) {
      console.error('加载飞手详情失败:', error);
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
    } finally {
      wx.hideLoading();
    }
  },

  // 切换标签页
  onTabChange(e) {
    const index = e.detail.index;
    this.setData({ activeTab: index });
  },

  // 拨打电话
  makePhoneCall() {
    if (this.data.pilot && this.data.pilot.phone) {
      wx.makePhoneCall({
        phoneNumber: this.data.pilot.phone,
        fail: (err) => {
          wx.showToast({
            title: '拨号失败',
            icon: 'none'
          });
        }
      });
    }
  },

  // 复制微信号
  copyWechat() {
    if (this.data.pilot && this.data.pilot.wechat) {
      wx.setClipboardData({
        data: this.data.pilot.wechat,
        success: () => {
          wx.showToast({
            title: '已复制微信号',
            icon: 'success'
          });
        }
      });
    }
  },

  // 预约飞手
  bookPilot() {
    if (!this.data.pilot) return;
    
    wx.navigateTo({
      url: `/pages/booking/index?pilotId=${this.data.pilotId}`,
      fail: () => {
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    });
  },

  onShareAppMessage() {
    const { pilot } = this.data
    return {
      title: `${pilot.name}的飞手简历`,
      path: `/pages/pilot-detail/index?id=${pilot.id}`
    }
  },

  onChatTap() {
    // TODO: 实现私信功能
    wx.showToast({
      title: '私信功能开发中',
      icon: 'none'
    })
  },

  onAssignTap() {
    // TODO: 实现派单功能
    wx.showToast({
      title: '派单功能开发中',
      icon: 'none'
    })
  }
}) 