import React from 'react';
import './AddProduct.css';
import ModalWindow from '../ModalWindow/ModalWindow'

class AddProduct extends React.Component {

  constructor() {
    super()

    this.state = {
      active: false,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.back = this.back.bind(this)
    this.save = this.save.bind(this)

  }


  handleOnClick() {
    this.setState({
      active: true
    })
    this.props.isActive(true)
  }


  back() {
    this.setState({
      active: false
    })
  }

  save(newProduct) { 
    this.props.onAdd(newProduct)
      this.setState({
        active: false
      })
  }


  render() {
    if (this.state.active === false) {
      return (
        <div>
          <button type="button" className="btn btn-primary mt-3" onClick={this.handleOnClick}>Add Product</button>
        </div>
      )
    } else {

      return (
        <div>
          <div className="d-flex justify-content-center mt-3">
            <div className={this.state.active ? 'active' : 'modal'}>
              <ModalWindow  onAdd={this.props.onAdd} back={this.back} save={this.save} onActive={this.props.onActive} isActive={this.props.isActive}></ModalWindow>
            </div>
          </div>
        </div>
      )

    }
  }










}


AddProduct.propTypes = {};

AddProduct.defaultProps = {};

export default AddProduct;
