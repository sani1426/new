export const BaseUrl = 'https://aghaye-tashrifat-backend.onrender.com'

const BackendApi = {
  uploadImage: {
    url: '/api/images/upload-image',
    method: 'post',
  },
  newComment: {
    url: '/api/comment/new',
    method: 'post',
  },
  create_Service: {
    url: '/api/services/create/service',
    method: 'post',
  },
  create_Ceremony: {
    url: '/api/ceremony/create',
    method: 'post',
  },
  getAll_Services: {
    url: `${BaseUrl}/api/services/get-all`,
    method: 'get',
  },
  getAll_Ceremonies: {
    url: `${BaseUrl}/api/ceremony/get-all`,
    method: 'get',
  },
  get_Service_Details: {
    url: '/api/services/get-details',
    method: 'get',
  },
  get_Ceremony_Details: {
    url: '/api/ceremony/get-details',
    method: 'get',
  },
  create_Menu: {
    url: '/api/menu/create-new',
    method: 'post',
  },
  getAll_Menu: {
    url: `${BaseUrl}/api/menu/get-all`,
    method: 'get',
  },
  get_Menu_Details: {
    url: `${BaseUrl}/api/menu/get-details`,
    method: 'get',
  },
}

export default BackendApi