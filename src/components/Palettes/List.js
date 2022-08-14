import React from 'react'
import "./List.css"
import Item from "./Item"

const getColor = (percent) => {
  if(percent > 85){
    return "#239B20"
  }

  if(percent > 60){
    return "#D6D275"
  }

  return "#D87979"
}

const List = ({palette}) => {
  var percent = parseInt(palette.strength*100)

  return (
    <div className='list-container'>
      <div className='item-column'>
        {palette.colors.map(color =>
          <Item color = {color}/>
        )}
      </div>
    </div>
  )
}

export default List