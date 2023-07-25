import { Component } from "react";

class Fruits extends Component {
  render() {
    const { index, imgUrl, title, weight, price, remove } = this.props;

    return(
      <div className="card" key={index}>
        <div className="card-img">
          <img src={imgUrl} alt="img" />
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="weight-price">
          <div className="weight">
            <span>{weight}</span>
          </div>
          <div className="price">
            <span>{price}</span>
          </div>
        </div>
        <div className="remove" onClick={() => remove(index)}>
          <i className="bi bi-trash3"></i>
        </div>
      </div>
    )
  }
}

export default Fruits