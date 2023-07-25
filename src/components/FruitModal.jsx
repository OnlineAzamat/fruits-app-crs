import { Component, createRef } from 'react'

export default class FruitModal extends Component {
  constructor(props) {
    super(props);
    this.nameRef = createRef();
    this.imgUrlRef = createRef();
    this.weightRef = createRef();
    this.priceRef = createRef();
  }


  cancelModal = () => {
    this.props.cancelModal()
  }

  addFruit = () => {
    const nameRef = this.nameRef.current.value
    const imgUrlRef = this.imgUrlRef.current.value
    const weightRef = this.weightRef.current.value
    const priceRef = this.priceRef.current.value
    
    this.props.addFruit(imgUrlRef, nameRef, weightRef, priceRef)

    this.props.cancelModal()
  }

  render() {
    return (
      <div className='add-fruit-container'>
        <div className="inner-container">
          <div className="title">
            <h3>Add fruit</h3>
          </div>
          <div className="input-group has-validation">
            <span className="input-group-text"><i className="bi bi-link-45deg"></i></span>
            <div className="form-floating is-invalid">
              <input type="text" className="form-control is-invalid" id="floatingInputGroup2" placeholder="Fruit" ref={this.imgUrlRef} required />
              <label htmlFor="floatingInputGroup2">Image url</label>
            </div>
          </div>
          <div className="input-group has-validation">
            <div className="form-floating is-invalid">
              <input type="text" className="form-control is-invalid" id="floatingInputGroup2" placeholder="Fruit name" ref={this.nameRef} required />
              <label htmlFor="floatingInputGroup2">Fruit name</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Weight (kg)" ref={this.weightRef} />
            <input type="number" className="form-control" placeholder="Price ($)" ref={this.priceRef} />
          </div>
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button type="button" className="btn btn-danger" onClick={this.cancelModal}>Cancel</button>
            <button type="button" className="btn btn-warning" onClick={this.addFruit}>Save changes</button>
          </div>
        </div>
      </div>
    )
  }
}
