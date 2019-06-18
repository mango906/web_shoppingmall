import React, { Component } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      password: null,
      passwordchk: null,
      username: null,
      number: null,
      phone: null,
      numberAddress: null,
      address: null,
      email: null,
      isChecked: false
    };
  }

  register = () => {
    const {
      account,
      password,
      passwordchk,
      username,
      number,
      phone,
      numberAddress,
      address,
      email,
      isChecked
    } = this.state;

    if (isChecked === false) {
      alert('아이디 중복체크를 해주세요.');
      return;
    }

    if (password !== passwordchk) {
      alert('비밀번호를 확인해주세요.');
      return;
    }

    let user = {
      account,
      password,
      username,
      number,
      phone,
      number_address: numberAddress,
      address,
      email
    };

    this.props.stores.UserStore.register(user);
  };

  idCheck = () => {
    const { account } = this.state;
    let res = this.props.stores.UserStore.idCheck(account);
    this.setState({
      isChecked: res
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="register">
        <div className="register-desc">
          00 가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을
          최우선으로합니다. <br /> 쇼핑몰에 회원으로 가입하시면 보다 편리합니다.
        </div>
        <div className="register-form">
          <div>
            희망아이디: <input type="text" name="account" onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.idCheck}>중복 체크</button>
          </div>
          <div>
            희망패스워드: <input type="password" name="password" onChange={this.handleChange} />
          </div>
          <div>
            패스워드확인: <input type="password" name="passwordchk" onChange={this.handleChange} />
          </div>
          <div>
            성명: <input type="text" name="username" onChange={this.handleChange} />
          </div>
          <div>
            전화번호: <input type="text" name="number" onChange={this.handleChange} />
          </div>
          <div>
            핸드폰: <input type="text" name="phone" onChange={this.handleChange} />
          </div>
          <div>
            우편번호: <input type="text" name="numberAddress" onChange={this.handleChange} />
          </div>
          <div>
            주소: <input type="text" name="address" onChange={this.handleChange} />
          </div>
          <div>
            이메일 주소: <input type="text" name="email" onChange={this.handleChange} />
          </div>
        </div>
        <button onClick={this.register}>회원가입</button>
        <button>
          <Link to="/login">로그인하러 가기</Link>
        </button>
      </div>
    );
  }
}

export default Register;
