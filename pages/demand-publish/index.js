Page({
  data: {
    demandType: 'flexible',
    region: [],
    workTime: '',
    startDate: '',
    endDate: '',
    descriptionLength: 0,
    requirements: [''],
    formData: {}
  },

  onLoad: function() {
    // 设置日期范围
    const today = new Date()
    const startDate = today.toISOString().split('T')[0]
    const endDate = new Date(today.setFullYear(today.getFullYear() + 1)).toISOString().split('T')[0]
    
    this.setData({
      startDate,
      endDate
    })
  },

  // 选择需求类型
  selectType: function(e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      demandType: type
    })
  },

  // 选择地区
  onRegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },

  // 选择日期
  onDateChange: function(e) {
    this.setData({
      workTime: e.detail.value
    })
  },

  // 监听描述文字长度
  onDescriptionInput: function(e) {
    this.setData({
      descriptionLength: e.detail.value.length
    })
  },

  // 添加任职要求
  addRequirement: function() {
    const requirements = this.data.requirements
    if (requirements.length >= 10) {
      wx.showToast({
        title: '最多添加10条要求',
        icon: 'none'
      })
      return
    }
    requirements.push('')
    this.setData({
      requirements
    })
  },

  // 更新任职要求
  updateRequirement: function(e) {
    const { index } = e.currentTarget.dataset
    const { value } = e.detail
    const requirements = this.data.requirements
    requirements[index] = value
    this.setData({
      requirements
    })
  },

  // 删除任职要求
  deleteRequirement: function(e) {
    const { index } = e.currentTarget.dataset
    const requirements = this.data.requirements
    requirements.splice(index, 1)
    this.setData({
      requirements
    })
  },

  // 预览需求
  previewDemand: function() {
    // 获取表单数据
    const formData = this.collectFormData()
    if (!this.validateForm(formData)) return

    // 保存到本地缓存，用于预览页面获取数据
    wx.setStorageSync('previewDemand', {
      ...formData,
      demandType: this.data.demandType,
      requirements: this.data.requirements.filter(item => item)
    })

    wx.navigateTo({
      url: '/pages/demand-preview/index'
    })
  },

  // 提交表单
  submitForm: function(e) {
    const formData = e.detail.value
    if (!this.validateForm(formData)) return

    // 构建提交数据
    const submitData = {
      ...formData,
      demandType: this.data.demandType,
      region: this.data.region,
      workTime: this.data.workTime,
      requirements: this.data.requirements.filter(item => item)
    }

    // 调用接口提交数据
    wx.showLoading({
      title: '正在提交...'
    })

    // 模拟接口调用
    setTimeout(() => {
      wx.hideLoading()
      wx.showModal({
        title: '提交成功',
        content: '您的需求已发布成功',
        showCancel: false,
        success: (res) => {
          if (res.confirm) {
            wx.navigateBack()
          }
        }
      })
    }, 1500)

    // 实际接口调用
    // wx.request({
    //   url: 'api/demands',
    //   method: 'POST',
    //   data: submitData,
    //   success: (res) => {
    //     wx.hideLoading()
    //     if (res.data.success) {
    //       wx.showModal({
    //         title: '提交成功',
    //         content: '您的需求已发布成功',
    //         showCancel: false,
    //         success: (res) => {
    //           if (res.confirm) {
    //             wx.navigateBack()
    //           }
    //         }
    //       })
    //     } else {
    //       wx.showToast({
    //         title: res.data.message,
    //         icon: 'none'
    //       })
    //     }
    //   },
    //   fail: () => {
    //     wx.hideLoading()
    //     wx.showToast({
    //       title: '提交失败，请重试',
    //       icon: 'none'
    //     })
    //   }
    // })
  },

  // 收集表单数据
  collectFormData: function() {
    return {
      title: '',
      price: '',
      taskCount: '',
      description: '',
      contact: '',
      phone: '',
      ...this.data.formData
    }
  },

  // 表单验证
  validateForm: function(formData) {
    if (!formData.title) {
      wx.showToast({
        title: '请输入需求标题',
        icon: 'none'
      })
      return false
    }

    if (!formData.price) {
      wx.showToast({
        title: '请输入预算金额',
        icon: 'none'
      })
      return false
    }

    if (!this.data.region.length) {
      wx.showToast({
        title: '请选择工作地点',
        icon: 'none'
      })
      return false
    }

    if (!formData.taskCount) {
      wx.showToast({
        title: '请输入需求人数',
        icon: 'none'
      })
      return false
    }

    if (!this.data.workTime) {
      wx.showToast({
        title: '请选择工作时间',
        icon: 'none'
      })
      return false
    }

    if (!formData.description) {
      wx.showToast({
        title: '请输入工作内容',
        icon: 'none'
      })
      return false
    }

    if (!this.data.requirements.filter(item => item).length) {
      wx.showToast({
        title: '请至少添加一条任职要求',
        icon: 'none'
      })
      return false
    }

    if (!formData.contact) {
      wx.showToast({
        title: '请输入联系人',
        icon: 'none'
      })
      return false
    }

    if (!formData.phone) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      })
      return false
    }

    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none'
      })
      return false
    }

    return true
  }
}) 