import React from 'react';
import './Product.css';
import ModalWindow from '../ModalWindow/ModalWindow';



class Product extends React.Component {


  constructor() {
    super()

    this.state = {
      active: false
    }

    this.myHandleOnClick = this.myHandleOnClick.bind(this)
    this.makeFalse = this.makeFalse.bind(this)
    this.editBack = this.editBack.bind(this)
    this.editSave = this.editSave.bind(this)

  }

  myHandleOnClick() {
    this.setState({
      active: true
    })
  }

  makeFalse(condition) {
    this.setState({
      active: condition
    })
  }


  editBack() {
    this.setState({
      active: false
    })

  }

  editSave(editedProduct) {
    this.props.onEdit(editedProduct, this.props.product.id)
    this.setState({
      active: false
    })
  }

  render() {
    if (this.state.active === false) {
      return (
        <div className="Product mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={this.props.product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name: {this.props.product.name}</h5>
              <p>Count: {this.props.product.name}</p>
              {/* <p>Size: Width: {this.props.product.width1}, Height: {this.props.product.height1}</p> */}
              <div>
                <div>Size:</div>
                <div>Width: {this.props.product.width1}</div>
                <div>Height: {this.props.product.height1}</div>
              </div>
              <p>Weight: {this.props.product.weight}</p>
              <p className="card-text">Comment: {this.props.product.comment}</p>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={this.myHandleOnClick}>Edit</button>
                <button type="button" className="btn btn-primary" onClick={() => { this.props.onDelete(this.props.product.id) }}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={this.state.active ? 'isActive' : 'inActive'}>
          <div className="d-flex justify-content-center mt-3">
            <ModalWindow editSave={this.editSave} makeFalse={this.makeFalse} active={this.state.active}></ModalWindow>
          </div>
        </div>
      )
    }
  }
}


Product.propTypes = {};

Product.defaultProps = {};

export default Product;


