import React, { useState, useEffect } from 'react'

const Update = () => {

  const [width, setWidth] = useState("200px")
  const [bgcolor, setbgcolor] = useState("white")
  const [textSize, setTextSize] = useState("")
  const [color, setColor] = useState([])

  useEffect(() => {
    let bgcolor = "#"
    let color = "#"
    let x = "abcdef123456";
    let y = "abcdef12345"
    for (let i = 0; i < 6; i++) {
      let changebgColor = Math.floor(Math.random() * x.length)
      let changeColor = Math.floor(Math.random() * y.length)
      console.log(changebgColor);
      console.log(changeColor);
      bgcolor += x[changebgColor]
      color += y[changeColor]
    }
    setbgcolor(bgcolor)
    setColor(color)
    console.log(bgcolor);
    console.log(color);

  }, [width])
  return (
    <div>
      <div style={{ width: width, backgroundColor: bgcolor, fontSize: textSize, color: color }}>
        <p onClick={() => { setWidth("250px"); setbgcolor("yellow"); setTextSize("10rem") }}>Hello this is button used for 250px,450px,550,750px</p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => { setWidth("250px"); setbgcolor("yellow"); setTextSize("2rem"); setColor("") }}>250px
        </button>
        <button onClick={() => { setWidth("450px"); setbgcolor("purple"); setTextSize("2.5rem"); setColor("") }}>450px
        </button>
        <button onClick={() => { setWidth("4550px"); setbgcolor("brown"); setTextSize("3rem"); setColor("") }}>550px
        </button>
        <button onClick={() => { setWidth("750px"); setbgcolor("violet"); setTextSize("4rem"); setColor("") }}>750px
        </button>
      </div>
    </div>
  )
}
export default Update;