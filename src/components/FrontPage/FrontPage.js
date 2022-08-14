import React, {useState} from 'react'
import "./FrontPage.css"
import Palettes from "../Palettes/Palettes"

const FrontPage = () => {

    const [palettes, setPalettes] = useState({
           "palettes": [{
              "base":"Puce",
              "colors":[
                 {
                    "hex":"#bee2ae",
                    "name":"Sprout",
                    "url":"https://www.colorhexa.com/bee2ae"
                 },
                 {
                    "hex":"#f2ced5",
                    "name":"Azalea",
                    "url":"https://www.colorhexa.com/f2ced5"
                 },
                 {
                    "hex":"#c98996",
                    "name":"Puce",
                    "url":"https://www.colorhexa.com/c98996"
                 },
                 {
                    "hex":"#fbe9f5",
                    "name":"Amour",
                    "url":"https://www.colorhexa.com/fbe9f5"
                 },
                 {
                    "hex":"#c989b6",
                    "name":"Viola",
                    "url":"https://www.colorhexa.com/c989b6"
                 }
              ],
              "strength":0.7001202675713475,
              "type":"Analagous"
           },
           {
              "base":"Old Rose",
              "colors":[
                 {
                    "hex":"#9bc07d",
                    "name":"Olivine",
                    "url":"https://www.colorhexa.com/9bc07d"
                 },
                 {
                    "hex":"#ebf8e0",
                    "name":"Frost",
                    "url":"https://www.colorhexa.com/ebf8e0"
                 },
                 {
                    "hex":"#edc6c3",
                    "name":"Beauty Bush",
                    "url":"https://www.colorhexa.com/edc6c3"
                 },
                 {
                    "hex":"#a2c2db",
                    "name":"Pigeon Post",
                    "url":"https://www.colorhexa.com/a2c2db"
                 },
                 {
                    "hex":"#d6edc3",
                    "name":"Tea Green",
                    "url":"https://www.colorhexa.com/d6edc3"
                 }
              ],
              "strength":0.24132455637529124,
              "type":"Square"
           },
           {
              "base":"Old Rose",
              "colors":[
                 {
                    "hex":"#7d81c0",
                    "name":"Wild Blue Yonder",
                    "url":"https://www.colorhexa.com/7d81c0"
                 },
                 {
                    "hex":"#c3c6ed",
                    "name":"Periwinkle Gray",
                    "url":"https://www.colorhexa.com/c3c6ed"
                 },
                 {
                    "hex":"#dba2a5",
                    "name":"Careys Pink",
                    "url":"https://www.colorhexa.com/dba2a5"
                 },
                 {
                    "hex":"#e0e1f8",
                    "name":"Link Water",
                    "url":"https://www.colorhexa.com/e0e1f8"
                 },
                 {
                    "hex":"#f8e1e0",
                    "name":"Cinderella",
                    "url":"https://www.colorhexa.com/f8e1e0"
                 }
              ],
              "strength":0.2398622532107525,
              "type":"Triadic"
           },
           {
              "base":"Tumbleweed",
              "colors":[
                 {
                    "hex":"#e3eda2",
                    "name":"Primrose",
                    "url":"https://www.colorhexa.com/e3eda2"
                 },
                 {
                    "hex":"#de8591",
                    "name":"Shimmering Blush",
                    "url":"https://www.colorhexa.com/de8591"
                 },
                 {
                    "hex":"#eda2ad",
                    "name":"Wewak",
                    "url":"https://www.colorhexa.com/eda2ad"
                 },
                 {
                    "hex":"#e8fddd",
                    "name":"Rice Flower",
                    "url":"https://www.colorhexa.com/e8fddd"
                 },
                 {
                    "hex":"#d4f7c0",
                    "name":"Tea Green",
                    "url":"https://www.colorhexa.com/d4f7c0"
                 }
              ],
              "strength":0.2039237815325097,
              "type":"Analagous"
           },
           {
              "base":"Puce",
              "colors":[
                 {
                    "hex":"#bee2ae",
                    "name":"Sprout",
                    "url":"https://www.colorhexa.com/bee2ae"
                 },
                 {
                    "hex":"#f2ced5",
                    "name":"Azalea",
                    "url":"https://www.colorhexa.com/f2ced5"
                 },
                 {
                    "hex":"#c98996",
                    "name":"Puce",
                    "url":"https://www.colorhexa.com/c98996"
                 },
                 {
                    "hex":"#fbe9f5",
                    "name":"Amour",
                    "url":"https://www.colorhexa.com/fbe9f5"
                 },
                 {
                    "hex":"#c989b6",
                    "name":"Viola",
                    "url":"https://www.colorhexa.com/c989b6"
                 }
              ],
              "strength":0.15767544867543226,
              "type":"Tetradic"
           },
        ]}) 
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState("")

    return (
        <div>
            <div className = "wrapper-title">
                <h1>
                    Color Palete Generator
                </h1>
                <p className = "for-pinterest">
                    for Pinterest
                </p>
            </div>
            <div className = "search">
                <div className = "input">
                    <label className='label'>Enter a url for your Pinterest Board</label>
                    <div className ="everythingOnOneLine">
                        <input className = "search-input" 
                            placeholder = "pinterest.com/beep/boop" 
                            onChange = {(event) => setUrl(event.target.value)} 
                            type="text"
                            name = "url"/>
                        <button className = "submit">
                                Submit 
                        </button>
                    </div>
                </div>   
            </div>
            <div>
               <Palettes palettes = {palettes} loading = {loading}/>
            </div>
        </div>
    )
}

export default FrontPage