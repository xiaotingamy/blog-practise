import axios from 'axios';
import qs from 'qs';

const instance = axios.create();
const client = {
    client_id: 'blog',
    client_secret: 'jzjnbs711n48kkcws0wsks4wg4o4ggc',
    grant_type: 'password',
    scope: 'blog'
}
axios.defaults.baseURL = 'http://blog.ruixinglong.net/api/v1';

if(localStorage.getItem('token')){
  /* localStorage.getItem('jwt')是带引号的字符串
    Bearer token(通过Authorization头部字段发送到服务端便于验证)的格式：Bearer XXXXXXXXXX
  */
  console.log(localStorage.getItem('token'));
  // instance.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('token').replace(/(^\")|(\"$)/g,'')
}

export default {
	// 登录
  localLogin(data){
    return axios.post('/auth/token',qs.stringify({
        "grant_type":client.grant_type, 
        "username":data.username, 
        "password":data.password, 
        "client_id":client.client_id, 
        "scope":client.scope
    }))
  },
  // 文章列表
  getArticleList(){
    return axios.get('/article/list',{
      params:{
        access_token: localStorage.getItem('token')
      }
    })
  },
  getOneArticle(id){
    return axios.get('/article/info',{
      params:{
        access_token: localStorage.getItem('token'),
        id: id
      }
    })
  },
  // 创建文章
  createArticle(params){
    return axios.post('/article/add?access_token='+localStorage.getItem('token'),qs.stringify({
      'user_id': 1,
      'title':params.title,
      'content':params.content 
    }))
  },
  // 编辑一篇文章
  editArticle(params){
    return axios.post('/article/edit?access_token='+localStorage.getItem('token'),params)
  }
}

