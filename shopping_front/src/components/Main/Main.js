import React, { Component } from 'react';
import './Main.scss';
import Card from '../Common/Card';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('stores')
@observer
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const { stores } = this.props;
    await stores.ProductStore.getAll();
    const data = stores.ProductStore.items;
    this.setState({
      data
    });
  }

  handleRedirect = idx => {
    console.log('idx', idx);
    const { history } = this.props;
    history.push(`/detail/${idx}`);
  };

  render() {
    const { data } = this.state;

    const items =
      data &&
      data.map(data => {
        return <Card data={data} key={data.id} handleRedirect={this.handleRedirect} />;
      });

    return (
      <div className="main">
        <div className="main-banner">배너</div>
        <div className="items">{items}</div>
      </div>
    );
  }
}

export default Main;
