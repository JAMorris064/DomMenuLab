
// menuLinks

let mainEl = document.querySelector('main')
console.log(mainEl)

mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.style.fontSize = '30px'

mainEl.innerHTML = 'SEI Rocks!'
mainEl.setAttribute('class', 'flex-ctr')

let topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')
console.log(topMenuEl)

let topMenuLinks = document.querySelectorAll('#top-menu > a')
console.log(topMenuLinks)

let showingSubMenu = "false"
console.log(showingSubMenu)

topMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault()
  console.log(evt.target)
  // return !== 'a'
  console.dir(evt.target)
})



// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

menuLinks.forEach(item => {
    console.log(item.text)
    const aTag = document.createElement('a')
    aTag.setAttribute('href', item.href)
    aTag.innerHTML = item.text
    topMenuEl.append(aTag)
})

let subMenu1 = document.getElementById("sub-menu")
subMenu1.style.height = "100%"
subMenu1.style.backgroundColor = 'var(--sub-menu-bg)'
subMenu1.classList.add('flex-around')
subMenu1.style.position = 'absolute'
subMenu1.style.top = 0
