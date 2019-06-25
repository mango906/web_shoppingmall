import React, { Component } from 'react';
import Card from '../Common/Card';
import './Category.scss';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentWillReceiveProps(nextProps) {
    const { stores } = this.props;
    await stores.ProductStore.getCategory(nextProps.match.params.type);
    const data = stores.ProductStore.typeItems;
    this.setState({
      data
    });
  }

  async componentDidMount() {
    const { stores, match } = this.props;
    await stores.ProductStore.getCategory(match.params.type);
    const data = stores.ProductStore.typeItems;
    this.setState({
      data
    });
  }

  handleRedirect = idx => {
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
      <div className="category">
        <h1 className="category-header">가방</h1>
        <div className="items">{items}</div>
      </div>
    );
  }
}

export default Category;
