const footer = document.getElementById('footer')
const shareBtn = document.getElementById('share-btn')
const shareDiv = document.getElementById('share')
const infoDiv = document.getElementById('info')


function shareToggle() {
    let show = true
    return function () {
        if (show) {
            infoDiv.style.display = 'none'
            shareDiv.className = 'shown'
        
            const styles = getComputedStyle(footer);
            const shareColor = styles.getPropertyValue('--color-very-dark-grayish-blue');
        
            footer.style.backgroundColor = shareColor

        } else {
            infoDiv.style.display = 'flex'
            shareDiv.className = 'hidden'
            footer.style.backgroundColor = 'inherit'

        }
        show = !show
    }
}

const shareToggleClick = shareToggle()
shareBtn.addEventListener('click', shareToggleClick)
