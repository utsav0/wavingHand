
const hand = document.getElementById('upperHand')
function waveHand() {
    hand.style.display = 'block'
    setTimeout(() => {
        hand.style.display = 'none'
    }, 2000)
}
