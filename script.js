const toggleContainer = document.querySelector('#toggleContainer')
const toggleBars = document.querySelector('#bars')
const toggleX = document.querySelector('#X-mark')
const dropDownMenu = document.querySelector('.dropDownMenu')
toggleContainer.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')
  toggleBars.classList = isOpen
    ? 'fa-solid fa-x toggle-bars'
    : 'fa-solid fa-bars toggle-bars'
}

const searchIcon = document.querySelector('#searchIcon')
const searchBar = document.querySelector('.searchBar')
searchIcon.onclick = function () {
  searchBar.classList.toggle('searchOpen')
  const isSearchOpen = searchBar.classList.contains('searchOpen')

  searchIcon.classList = isSearchOpen
    ? 'fa-solid fa-x'
    : 'fa-solid fs-beat fa-magnifying-glass'
}

const rightToggleSideBar = document.querySelector('.SideBarToggleOpen')
const sideMenu = document.querySelector('#sideMenu')
const Filter = document.querySelector('#Filter')
const grid = document.querySelector('#grid')
rightToggleSideBar.onclick = function () {
  Filter.classList.toggle('sideBarOpen')
  grid.classList.toggle('sideBarOpen')
  const isSideOpen = Filter.classList.contains('sideBarOpen')
  rightToggleSideBar.classList = isSideOpen
    ? 'fa-solid SideBarToggleClose  fa-angles-left'
    : 'fa-solid SideBarToggleOpen fa-angles-right'
}