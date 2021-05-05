let mode = 'light'
function toggleDarkMode() {
    if (mode === 'dark') {
        document.body.style = 'background-color:white'
        mode = 'light'
        document.getElementById('switchable-modes').style = 'color:black'
    } else {
        document.body.style = 'background-color:black'
        mode = 'dark'
        document.getElementById('switchable-modes').style = 'color:white'
    }
}
