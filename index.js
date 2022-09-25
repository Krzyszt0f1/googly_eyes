let centerX
let centerY
let leftEye
let rightEye

addEventListener('load', () => {
    const center = document.getElementById('main')
    const rekt = center.getBoundingClientRect()
    centerX = rekt.left + rekt.right / 2
    centerY = rekt.top + rekt.height / 2

    leftEye = document.getElementById('left-eye')
    rightEye = document.getElementById('right-eye')
})

document.addEventListener('mousemove', event => {
    const mouseX = event.clientX
    const mouseY = event.clientY
    
    const angle = calculateAngle(mouseX, mouseY, centerX, centerY)
    
    
    leftEye.style.transform = `rotate(${270 + angle}deg)`
    rightEye.style.transform = `rotate(${270 + angle}deg)`
})

const calculateAngle = (corX, corY, centerX, centerY) => {
    const dx = corX - centerX
    const dy =  corY - centerY
    return Math.atan2(dy, dx) * 180 / Math.PI
}
