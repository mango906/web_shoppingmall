import React, { Component } from 'react';
import './Login.scss';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      password: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    console.log(this.state);
    this.props.stores.UserStore.login(this.state);
  };

  render() {
    return (
      <div className="login">
        <input type="text" name="account" placeholder="아이디" onChange={this.handleChange} />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={this.handleChange}
        />
        <button onClick={this.login}>로그인</button>
      </div>
    );
  }
}

export default Login;
