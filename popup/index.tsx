import ment_RE from "data-base64:~assets/ment_RE.jpg"
import { useState } from "react"

const lgtmImage = chrome.runtime.getURL("assets/ment_RE-LGTM.jpg")

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 500
      }}>
      <h2>
        Welcome to your
        <a href="https://www.plasmo.com" target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <p>
        <img
          src={ment_RE}
          alt="めんとり画像"
          style={{ width: 300, height: 300 }}
        />
      </p>
      <p>
        <img
          src={lgtmImage}
          alt="めんとり画像"
          style={{ width: 300, height: 300 }}
        />
      </p>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
