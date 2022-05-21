import React from 'react';
import './ModalWindow.css';



class ModalWindow extends React.Component {

  constructor() {
    super()

    this.state = {
      active: false,
      editActive: false,
      image: '',
      name: '',
      count: 0,
      width1: 0,
      height1: 0,
      weight: 0,
      comment: ''
    }


    this.addBack = this.addBack.bind(this)
    this.addSave = this.addSave.bind(this)

    this.editBack = this.editBack.bind(this)
    this.editSave = this.editSave.bind(this)


    this.handleImage = this.handleImage.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleCount = this.handleCount.bind(this)
    this.handleWidth = this.handleWidth.bind(this)
    this.handleHeight = this.handleHeight.bind(this)
    this.handleWeight = this.handleWeight.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }


  handleImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleCount(e) {
    this.setState({
      count: e.target.value
    })
  }

  handleWidth(e) {
    this.setState({
      width1: e.target.value
    })
  }

  handleHeight(e) {
    this.setState({
      height1: e.target.value
    })
  }

  handleWeight(e) {
    this.setState({
      weight: e.target.value
    })
  }

  handleComment(e) {
    this.setState({
      comment: e.target.value
    })
  }


  addBack() {
    this.props.back()
    this.props.isActive(false)
  }

  addSave() {
    let newProduct = {
      image: this.state.image,
      name: this.state.name,
      count: this.state.count,
      width1: this.state.width1,
      height1: this.state.height1,
      weight: this.state.weight,
      comment: this.state.comment,
    }
    this.props.save(newProduct)
    this.props.isActive(false)
  }

  editBack() {
    this.props.makeFalse(false)
  }

  editSave() {
    let editedProduct = {
      image: this.state.image,
      name: this.state.name,
      count: this.state.count,
      width1: this.state.width1,
      height1: this.state.height1,
      weight: this.state.weight,
      comment: this.state.comment,
    }
    this.props.editSave(editedProduct)
    this.props.makeFalse(false)
  }


  render() {
    return (
      <div className="modalbody">
        Image url
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleImage} />
        Name
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleName} />
        Count
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleCount} />
        Width
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleWidth} />
        Height
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleHeight} />
        Weight
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleWeight} />
        Comment
        <input type="text" className="form-control" aria-describedby="basic-addon3" onChange={this.handleComment} />
        <div className="mt-3">
          <div className={this.props.active ? 'inActive' : 'isActive'}>
            <button type="button" className="btn btn-primary" onClick={this.addBack}>Back</button>
            <button type="button" className="btn btn-primary" onClick={this.addSave}>Save</button>
          </div>
          <div className={this.props.active ? 'isActive' : 'inActive'}>
            <button type="button" className="btn btn-danger" onClick={this.editBack}>Back</button>
            <button type="button" className="btn btn-danger" onClick={this.editSave}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

ModalWindow.propTypes = {};

ModalWindow.defaultProps = {};

export default ModalWindow;
