import axios from 'axios';
import qs from 'qs';

const instance = axios.create();

export default {
	// 登录
  localLogin(data){
    return axios.post('/user/login',qs.stringify({
      "username":data.username, 
      "password":data.password
    }))
  },
  getArticleList(data){
    return instance.get('/article/list',data)
  }
}

