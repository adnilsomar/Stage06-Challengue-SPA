const routes = {

  "/":"/pages/home.html",
  "/universe":"/pages/universe.html",
  "/exploration":"/pages/exploration.html",
}

function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({},"", event.target.href)

  handle()

}

function handle(){
  const { pathname } = window.location
  const route = routes[pathname]

  if(route == "/pages/universe.html") {
    document.body.style.backgroundImage = "url(Image/mountains-universe02.png)";
  }
  else if(route == "/pages/exploration.html") {
    document.body.style.backgroundImage = "url(Image/mountains-universe-3.png)";
  }
  else {
    document.body.style.backgroundImage = "url(Image/mountains-universe-1.png)";
  }

fetch(route)
.then(data => data.text())
.then(html => {
  document.querySelector('#app').innerHTML = html
  
})
 
}

handle()

window.onpopstate = () => handle()
