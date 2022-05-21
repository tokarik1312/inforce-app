import React from 'react';
import './ProductList.css';
import Product from '../Product/Product'
import AddProduct from '../AddProduct/AddProduct'



class ProductList extends React.Component {

  constructor() {
    super()

    this.state = {
      active: false
    }

    this.isActive = this.isActive.bind(this)
  }

  isActive(condition) {
    this.setState({
      active: condition
    })
  }

  SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}


  render() {   
    if (this.state.active === false) {
      return (
        <div>
          <AddProduct onAdd={this.props.onAdd} isActive={this.isActive}></AddProduct>
            <div className="container d-flex mt-5">
              <div className="d-flex row">
                {
                  this.props.products.sort(this.SortArray).map((product) => {
                    return <Product key={product.id} product={product} onDelete={this.props.onDelete} onEdit={this.props.onEdit} isActive={this.isActive}/>
                  })
                }
              </div>
            </div>
          </div>
      )
    } else {
      return (
        <div>
          <AddProduct onAdd={this.props.onAdd} isActive={this.isActive}></AddProduct>
        </div>
      )
    }
  }
}

ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
