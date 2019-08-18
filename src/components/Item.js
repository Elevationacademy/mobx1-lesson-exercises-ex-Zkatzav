import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let newLocation = prompt("enter new location", "m")
    this.props.store.editItem(this.props.item.name, newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onClick = {this.checkItem}  />
        {item.name} {item.location} 
        <button className="editButton" onClick={this.editItem}>edit</button>
        <button className="deletebutton" onClick={this.deleteItem}>delete</button>
      </div>)
  }
}

export default Item