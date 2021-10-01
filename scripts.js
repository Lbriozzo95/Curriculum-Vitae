

//-> SHOW MENU
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    //VALIDATE VARIABLES
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu ('nav-toggle', 'nav-menu')

//-> REMOVE MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

//-> SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offSetHeight
        const sectionTop = current.offSetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

// SHOW SCROLL TOP
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);

// DARK LIGHT THEME 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// PREVIOUSLY SELECT TOPIC IF USER SELECTED
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//WE OBTAIN THE CURRENT THEME THAT THE INTERFACE HAS BY VALIDATING THE DARK THEME CLASS
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//REDUCE SIZE AND PRINT IN A4 SHEET
function scaleCv(){
    document.body.classList.add('scale-cv')
}

// REMOVE THE SIZE WHEN CV IS DOWNLOADED
function removeScale(){
    document.body.classList.remove('scale-cv')
}

let areaCV = document.getElementById('area-cv')

let opt = {
    margin: 0,
    filename: 'CURRICULUM-VITAE-BRIOZZO-LORENZO.pdf',
    image: {type:'jpeg', quality:0.98},
    html2canvas: {scale : 4},
    jsPdf: { format:'a4', orientation:'portrait'}
}




function generateResume(){
    html2pdf(areaCV,opt)
}

// PDF GENERATOR



const resumeButton = document.getElementById('resume-button')
resumeButton.addEventListener('click', () =>{
    scaleCv()
    generateResume()
    setTimeout(removeScale,3000)
})

const resumeButton2 = document.getElementById('resume-button2')
resumeButton2.addEventListener('click', () =>{
    scaleCv()
    generateResume()
    setTimeout(removeScale,3000)
})

