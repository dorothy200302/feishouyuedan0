const BASE_URL = 'http://localhost:8080/api';

const request = (url, method = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

// 飞手相关API
const pilotApi = {
  // 获取飞手列表
  getPilots: (params = {}) => {
    return request('/pilots/search', 'GET', params);
  },

  // 获取飞手详情
  getPilotDetail: (id) => {
    return request(`/pilots/${id}`);
  },

  // 按任务类型获取飞手
  getPilotsByTaskType: (type) => {
    return request(`/pilots/task-type/${type}`);
  },

  // 按地区获取飞手
  getPilotsByArea: (area) => {
    return request('/pilots/area', 'GET', { area });
  },

  // 按评分获取飞手
  getPilotsByRating: (rating) => {
    return request('/pilots/rating', 'GET', { rating });
  }
};

// 需求大厅相关API
const demandApi = {
  // 获取所有需求
  getAllDemands: () => {
    return request('/demands');
  },

  // 获取需求详情
  getDemandDetail: (id) => {
    return request(`/demands/${id}`);
  },

  // 按类型获取需求
  getDemandsByType: (type) => {
    return request(`/demands/type/${type}`);
  },

  // 按状态获取需求
  getDemandsByStatus: (status) => {
    return request(`/demands/status/${status}`);
  },

  // 按地区获取需求
  getDemandsByLocation: (location) => {
    return request('/demands/location', 'GET', { location });
  },

  // 创建需求
  createDemand: (data) => {
    return request('/demands', 'POST', data);
  },

  // 更新需求
  updateDemand: (id, data) => {
    return request(`/demands/${id}`, 'PUT', data);
  },

  // 删除需求
  deleteDemand: (id) => {
    return request(`/demands/${id}`, 'DELETE');
  }
};

module.exports = {
  pilotApi,
  demandApi
};