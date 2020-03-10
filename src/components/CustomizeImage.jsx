import React, { useState } from 'react'

export default function CustomizeImage() {

  const defaultUrl = "http://placekitten.com/500/500"

  const [size, setSize] = useState(100);
  const [url, setUrl] = useState(defaultUrl);

  const updateUrl = (e) => { setUrl(e.target.value); }
  const updateSize = (e) => { setSize(e.target.value); }

  return (
    <div className="c-custom-image">
      <h1>Customize Image</h1>
      <div><input type="text" onChange={updateUrl} value={defaultUrl} /></div>
      <div><input type="range" min="0" max="200" onChange={updateSize} /></div>
      <p>Image size : {`${size} x ${size} px`}</p>
      <img src={url} height={size} width={size} />
    </div>
  )
}
