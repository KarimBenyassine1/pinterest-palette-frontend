import React, {useState} from 'react'
import "./Item.css"

const Item = ({color}) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    return await navigator.clipboard.writeText(text);
  }

  // onClick handler function for the copy button
  const handleCopyClick = (text) => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(text)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
        <div className='color-container' style={{backgroundColor : color.hex}}>
            <div className = "color-text">
                {color.name}
            </div>
            <div className = "hex-text" onClick={() => {handleCopyClick(color.hex)}}>
            <span>
              {isCopied ? 
                "Copied" 
                : 
                <div>
                  {color.hex}
                  <img src="https://img.icons8.com/material-outlined/24/000000/copy.png" height={20} style={{position : "relative", top: "2px", left: "3px"}} />
                </div>
              } 
            </span>
            </div>
        </div>
    </div>
  )
}

export default Item
