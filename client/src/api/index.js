import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'http://blog.ruixinglong.net';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const client = {
    client_id: 'blog',
    client_secret: 'jzjnbs711n48kkcws0wsks4wg4o4ggc',
    grant_type: 'password',
    scope: 'blog'
}

const instance = axios.create();
const front_instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'
if(localStorage.getItem('token')){
  /* localStorage.getItem('token')是带引号的字符串
    Bearer token(通过Authorization头部字段发送到服务端便于验证)的格式：Bearer XXXXXXXXXX
  */
  console.log(localStorage.getItem('token'));
  instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token').replace(/(^\")|(\"$)/g,'')
}
// axios拦截请求
axios.interceptors.request.use = instance.interceptors.request.use = front_instance.interceptors.request.use
front_instance.interceptors.request.use(config=>{
  // store.dispatch('showProgress',20)
  return config
},err=>{
  // store.dispatch('showProgress',100)
  return Promise.reject(err)
})
// axios拦截响应
front_instance.interceptors.response.use(response=>{
  // store.dispatch('showProgress',100)
  return response
},err=>{
  // store.dispatch('showProgress',100)
  return Promise.reject(err)
})

export default {
	// 登录
  localLogin(data){
    return axios.post('/api/v1/auth/token',qs.stringify({
    	"grant_type":client.grant_type, 
      "username":data.username, 
      "password":data.password, 
      "client_id":client.client_id, 
      "scope":client.scope
    }))
  },
  getArticleList(){
    return instance.get('/api/v1/article/list')
  }
}

