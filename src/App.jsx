import { Component } from 'react';
import fruitsData from "./Fruits.json";
import './App.css';
import Fruits from './components/Fruits';

class App extends Component {
  state = ({
    fruits: [],
  })

  componentDidMount() {
    const { fruits } = this.state;
    
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
  
  render() {
    const { fruits } = this.state;

    return(
      <div className="container">
        <div className="inner-container">
          <div className="title">
            Fruits App
          </div>
          {
            fruits.map((item, index) => (
              <Fruits index={index} imgUrl={item.img} title={item.name} weight={item.weight} price={item.price} remove={this.remove(index)} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App