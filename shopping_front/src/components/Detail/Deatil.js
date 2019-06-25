import React, { Component } from 'react';
import './Detail.scss';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
class Deatil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      count: 1
    };
  }

  async componentDidMount() {
    const { stores, match } = this.props;
    await stores.ProductStore.getByIdx(match.params.idx);
    const data = stores.ProductStore.item;
    this.setState({
      data
    });
  }

  handleChange = e => {
    this.setState({
      count: e.target.value
    });
  };

  handleKeyPress = e => {
    e.preventDefault();
  };

  render() {
    const { data, count } = this.state;
    return (
      <div className="detail">
        <h1 className="detail-name">{data && data.name}</h1>
        <div className="detail-contents">
          <img
            src={data && `http://localhost:8080/api/attachment/${data.image}`}
            alt="img"
            width={'500px'}
            height={'500px'}
          />

          <div className="detail-contents-info">
            <div>제조사: 웅진코웨이</div>
            <div>마일리지: {data && data.cost * 0.03}</div>
            <div>
              주문 수량{' '}
              <input
                type="number"
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                value={count}
                min="1"
              />
            </div>
            <div>가격: {data && data.cost}</div>
            <div>결제 금액: {data && data.cost * count}</div>
            <button>장바구니에 담기</button>
          </div>
        </div>
        <div className="detail-footer">
          <div className="detail-footer-border">제품 상세 정보</div>
          <div className="detail-footer-contents">{data && data.content}</div>
          <div className="detail-footer-border">구매 정보</div>
          <div className="detail-footer-contents">
            000님의 쇼핑 도우미 000 입니다. <br /> 000님의 상품에 대한 문의나 배송문의는 저에게 바로
            연락을 주세요. <br /> 고객 한 분 한 분을 소중히 여기며 최고의 서비스를 약속 드립니다.{' '}
            <br />
            직통전화번호:080-000-0000 이나 MD전용게시판을 이용해주세요
          </div>
          <div className="detail-footer-border">고객의 상품 평</div>
        </div>
      </div>
    );
  }
}

export default Deatil;
