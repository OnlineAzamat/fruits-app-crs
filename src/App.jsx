import { Component } from 'react';
import fruitsData from "./Fruits.json";
import './App.css';
import FruitModal from './components/FruitModal';

class App extends Component {
  state = ({
    fruits: [],
    modalVisibility: false,
  })

  componentDidMount() {    
    this.setState({
      fruits: fruitsData,
    })
  }

  remove = (index) => {
    const { fruits } = this.state;

    fruits.splice(index, 1);
    this.setState({
      fruits,
    })
  }

  openModal = () => {
    this.setState({
      modalVisibility: true,
    })
  }

  cancelModal = () => {
    this.setState({
      modalVisibility: false,
    })
  }

  addFruit = (img, name, weight, price) => {
    const { fruits } = this.state;

    fruits.push({ img, weight, name, price })
    this.setState({
      fruits,
    })
  }
  
  render() {
    const { fruits } = this.state;

    return(
      <div className="container">
        <div className="inner-container">
          <div className="title">
            Fruits App
            <button className="btn btn-secondary ms-3" onClick={this.openModal}>New</button>
          </div>
          {
            this.state.modalVisibility ? <FruitModal cancelModal={this.cancelModal} addFruit={this.addFruit} /> : ""
          }
          <div className="fruits-container">
            {
              fruits.length ? fruits.map((item, index) => (
                <div className="fruit-card" key={index}>
                  <div className="left">
                    <div className="card__img">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="title">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                  <div className="weight-price">
                    <div className="weight">
                      <span className="badge rounded-pill text-bg-info">{item.weight} kg</span>
                    </div>
                    <div className="price">
                      <span className="badge rounded-pill text-bg-danger">${item.price}</span>
                    </div>
                  </div>
                  <div className="remove" onClick={() => this.remove(index)}>
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>
              )) : <h5>No information found</h5>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App