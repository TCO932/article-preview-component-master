const footer = document.getElementById('footer')
const shareBtn = document.getElementById('share-btn')
const shareDiv = document.getElementById('share')
const infoDiv = document.getElementById('info')


function shareToggle() {
    let show = true
    return function (e, toggleState) {
        if (typeof toggleState !== 'undefined') {
            show = toggleState
        }

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

function shareTooltipToggle() {
    let show = true
    return function (e, toggleState) {
        if (typeof toggleState !== 'undefined') {
            show = toggleState
        }
        const tooltip = document.getElementById('share-tooltip')

        shareBtn.classList.toggle('active', show); 
        if (show) {
            tooltip.style.visibility = 'visible'
        } else {
            tooltip.style.visibility = 'hidden'
        }
        show = !show
    }
}

const shareToggleClick = shareToggle()
const shareToggleTooltipClick = shareTooltipToggle()
shareBtn.addEventListener('click', shareToggleClick)


const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleMediaChange(e) {
    if (e.matches) {
        shareToggleClick(null, false)
        shareBtn.removeEventListener('click', shareToggleClick)
        shareBtn.addEventListener('click', shareToggleTooltipClick)

    } else {
        shareToggleTooltipClick(null, false)
        shareBtn.removeEventListener('click', shareToggleTooltipClick)
        shareBtn.addEventListener('click', shareToggleClick)
    }
}

mediaQuery.addListener(handleMediaChange);

handleMediaChange(mediaQuery);