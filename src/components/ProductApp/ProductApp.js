import React from 'react';
import './ProductApp.css';
import ProductList from '../ProductList/ProductList';
import axios from 'axios';
import { connect } from 'react-redux';

const URL = 'http://localhost:3000/products/'

class ProductApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    this.handleOnAdd = this.handleOnAdd.bind(this)
    this.handleOnDelete = this.handleOnDelete.bind(this)
    this.handleOnEdit = this.handleOnEdit.bind(this)


  }

  getProducts() {
    axios.get(URL)
      .then((response) => {
        this.props.reduxSet(response.data)
        let productsStr = JSON.stringify(this.props.products)
        localStorage.setItem('products', productsStr)
        let localProducts = JSON.parse(localStorage.getItem('products'))
        this.setState({ products: localProducts })
      })
      .catch((error) => {
        console.log(error);
      })

  }

  componentDidMount() {
    this.getProducts()
  }


  handleOnAdd(newProduct) {
    axios.post(URL, newProduct)
      .then((response) => {
        this.props.reduxAdd(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload()
  }


  handleOnDelete(id) {
    axios.delete(`${URL}/${id}`)
      .then((response) => {
        this.props.reduxRemove(id)
      }).catch(function (error) {
        console.log(error);
      });
    window.location.reload()
  }

  handleOnEdit(editedProduct, id) {
    axios.put(`${URL}/${id}`, {
      image: editedProduct.image,
      name: editedProduct.name,
      count: editedProduct.count,
      width1: editedProduct.width1,
      height1: editedProduct.height1,
      weight: editedProduct.weight,
      comment: editedProduct.comment,
    })
      .then((response) => {
        this.props.reduxEdit(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload()
  }


  render() {
    return (
      <div className="ProductApp">
        <ProductList products={this.state.products} onAdd={this.handleOnAdd} onDelete={this.handleOnDelete} onEdit={this.handleOnEdit}></ProductList>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    products: state.data
  }
}


function mapDispatchToProps(dispatch) {
  return {
    reduxSet: function (getProducts) {
      dispatch({ type: 'SET', getProducts })
    },
    reduxAdd: function (newProduct) {
      dispatch({ type: 'ADD', newProduct })
    },
    reduxRemove: function (id) {
      dispatch({ type: 'REMOVE', id })
    },
    reduxEdit: function (edited) {
      dispatch({ type: 'EDIT', edited })
    }
  }
}


ProductApp.propTypes = {};

ProductApp.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductApp);
