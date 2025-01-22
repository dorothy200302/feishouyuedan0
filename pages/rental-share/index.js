Page({
  data: {
    categories: [
      { id: 1, name: '行业机' },
      { id: 2, name: '航拍机' },
      { id: 3, name: '挂载' },
      { id: 4, name: '配件' }
    ],
    form: {
      name: '',
      category: '',
      images: [],
      price: '',
      deposit: '',
      minDays: '',
      specs: '',
      description: ''
    }
  },

  onCategoryChange(e) {
    const index = e.detail.value
    const category = this.data.categories[index].name
    this.setData({
      'form.category': category
    })
  },

  onChooseImage() {
    wx.chooseImage({
      count: 9 - this.data.form.images.length,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const images = this.data.form.images.concat(res.tempFilePaths)
        this.setData({
          'form.images': images
        })
      }
    })
  },

  onDeleteImage(e) {
    const { index } = e.currentTarget.dataset
    const images = this.data.form.images
    images.splice(index, 1)
    this.setData({
      'form.images': images
    })
  },

  onPreviewImage(e) {
    const { url } = e.currentTarget.dataset
    wx.previewImage({
      current: url,
      urls: this.data.form.images
    })
  },

  onSubmit(e) {
    const formData = e.detail.value
    const { images, category } = this.data.form

    if (!formData.name) {
      return wx.showToast({
        title: '请输入设备名称',
        icon: 'none'
      })
    }

    if (!category) {
      return wx.showToast({
        title: '请选择设备类型',
        icon: 'none'
      })
    }

    if (images.length === 0) {
      return wx.showToast({
        title: '请上传设备图片',
        icon: 'none'
      })
    }

    if (!formData.price) {
      return wx.showToast({
        title: '请输入日租金',
        icon: 'none'
      })
    }

    if (!formData.deposit) {
      return wx.showToast({
        title: '请输入押金金额',
        icon: 'none'
      })
    }

    if (!formData.minDays) {
      return wx.showToast({
        title: '请输入最少租期',
        icon: 'none'
      })
    }

    // TODO: 提交表单数据
    console.log('Form Data:', {
      ...formData,
      category,
      images
    })

    wx.showToast({
      title: '发布成功',
      icon: 'success',
      success: () => {
        setTimeout(() => {
          wx.navigateBack()
        }, 1500)
      }
    })
  }
}) 