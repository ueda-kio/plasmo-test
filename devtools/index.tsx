import myPanelHTML from "url:~/devtools/panel.html"

chrome.devtools.panels.create("My Panel", null, myPanelHTML, (panel) => {
  panel.onShown.addListener((panelWindow) => {
    let reqElem = ``

    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const { url, method, headers } = request.request
      const { status } = request.response
      if (!url.includes("https://recruit")) return
      const _url = new URL(url)
      const params = new URLSearchParams(_url.search)

      for (const [key, value] of params.entries()) {
        if (key !== "pageName" && key !== "pev2" && key !== "c26") continue
        reqElem += `
					<div>----------------------------------------------------------</div>
					<div class="request" style="margin-top: 20px;">
						<div class="request__url">${key}: ${value}</div>
					</div>
				`
      }

      panelWindow.document.getElementById("panel").innerHTML = `
        <div class="requests">
          ${reqElem}
        </div>
      `
    })
  })
})

function IndexDevtools() {
  return <></>
}

export default IndexDevtools
