
document.querySelector('#enter').addEventListener('click', showLastPage)
document.querySelector('#back').addEventListener('click', showHomePage)

function showLastPage() {
    document.querySelector('#lastpage').className = 'slide-in'

    // document.querySelector('#lastpage').classList.add('slide-in')
    // document.querySelector('#lastpage').classList.remove('slide-out')
}

function showHomePage() {
    document.querySelector('#lastpage').className = 'slide-out'

    // document.querySelector('#lastpage').classList.add('slide-out')
    // document.querySelector('#lastpage').classList.remove('slide-in')
}