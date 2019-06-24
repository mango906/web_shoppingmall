import React, { Component } from 'react';
import './Main.scss';
import Card from '../Common/Card';
import { inject, observer } from 'mobx-react';

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

  render() {
    const { data } = this.state;

    const items =
      data &&
      data.map(data => {
        return <Card data={data} key={data.id} />;
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
