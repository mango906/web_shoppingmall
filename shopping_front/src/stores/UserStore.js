import { observable, action } from 'mobx';

import axios from 'axios';

class ProfileStore {
  static __instance = null;
  static getInstance() {
    if (ProfileStore.__instance === null) ProfileStore.__instance = new ProfileStore();
    return ProfileStore.__instance;
  }

  @observable info = [];

  @action register = async user => {
    try {
      let response = await axios({
        url: 'http://localhost:8080/api/user/add',
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        data: JSON.stringify(user),
        timeout: 3000
      });
      if (response.status === 200) {
        alert('회원가입 성공!');
      }
    } catch (e) {
      alert(e.toLocaleString());
    }
  };

  @action login = async user => {
    try {
      let response = await axios({
        url: 'http://localhost:8080/api/user/login',
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        data: JSON.stringify(user),
        timeout: 3000
      });
      if (response.status === 200) {
        if (response.data === '') {
          alert('아이디, 비밀번호를 다시 확인해주세요.');
        } else {
          alert('로그인 성공!');
          this.info = response.data;
        }
      }
      console.log(response);
    } catch (e) {
      alert(e.toLocaleString());
    }
  };

  @action idCheck = async account => {
    try {
      let response = await axios({
        url: `http://localhost:8080/api/user/idCheck/${account}`,
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        timeout: 3000
      });
      if (response.status === 200) {
        if (response.data === '') {
          alert('사용가능한 아이디에요');
          return true;
        } else {
          alert('이미 있어요.');
          return false;
        }
      }
    } catch (e) {
      alert('이미 있어요.');
      return false;
    }
  };
}

export default ProfileStore.getInstance();
