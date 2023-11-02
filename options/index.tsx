import { useState } from "react"

const lgtmImage = chrome.runtime.getURL("assets/ment_RE-LGTM.jpg")

function OptionsIndex() {
  const [data, setData] = useState("")

  return (
    <div>
      <h1>どうも!めんトリです！</h1>
      <div>
        <img src={lgtmImage} alt="" />
      </div>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default OptionsIndex
