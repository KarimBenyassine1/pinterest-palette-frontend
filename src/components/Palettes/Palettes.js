import React from 'react'
import "./Palettes.css"
import Loading from "../Loading/Loading"
import List from "./List"

const Palettes = ({palettes, loading}) => {
  return (
    <div>
        {(!loading && Object.keys(palettes).length!==0) ?
        <div>
            <div className='palette-list'>
              <div className="palette-title">
              Color Palettes
              </div>
              <div>
              {palettes.palettes.map((palette) =>
                  <List palette={palette}/>
              )}
              </div>
            </div>
        </div>
        :
        <div className='palette-title'>
            <Loading />
        </div>
        } 
    </div>
  )
}

export default Palettes