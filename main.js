let menubar=document.querySelector('#menu-bar')

menubar.onclick = ()=>{
    menubar.classList.toggle('fa-times')
    menubar.classList.toggle('active')
}