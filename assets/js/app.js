// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import topbar from "../vendor/topbar"


let Hooks = {};
Hooks.JavascriptHooks = {
  mounted() {
    this.handleEvent("show_csv_errors", (payload) => {
        UpdateErrs(payload.lineinfo, payload.msgs);
    })
    this.handleEvent("future stuff", (payload) => {
        console.log(payload)
    })
  }
}


let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}, hooks: Hooks})

// Show progress bar on live navigation and form submits
topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
window.addEventListener("phx:page-loading-start", _info => topbar.show(300))
window.addEventListener("phx:page-loading-stop", _info => topbar.hide())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket


// My routines:




//let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

//let liveSocket = new LiveSocket("/live") //, Socket, {params: {_csrf_token: csrfToken}, hooks: Hooks})

//liveSocket.connect()


var lastMsg;

if (0)
    setTimeout( () => {

  return;

        window.liveSocket.socket.conn.addEventListener('message', (event) => {

            D = JSON.parse(event.data)
            if (D[3]=='phx_close') {

                setTimeout( () => {
                newBg = document.getElementById("background")
                if (newBg) {
                    var BGFileName = newBg.innerHTML

                    var bgObj = document.getElementById("bgElement")

                    if (bgObj)  
                        bgObj.style.backgroundImage = 'url(assets/i/' + BGFileName + ')'       
                }
                }, 50);

            setTimeout( () => {
                newBg = document.getElementById("background")
                if (newBg) {
                    var BGFileName = newBg.innerHTML

                    var bgObj = document.getElementById("bgElement")

                    if (bgObj)  
                        bgObj.style.backgroundImage = 'url(assets/i/' + BGFileName + ')'       
                }
                }, 100);
            }
        });

    }, 200)


