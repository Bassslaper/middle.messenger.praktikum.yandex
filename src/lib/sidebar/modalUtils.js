
const toggleModal = (trigger, overlay, modalClass) => {
  trigger.addEventListener('click', () => {
    overlay.classList.add('open')
  })

  overlay.addEventListener('click', (e) => {
    let target = e.target
    target = target.closest(modalClass)

    if (!target) {
      overlay.classList.remove('open')
    }
  
  })
}

export { toggleModal }
