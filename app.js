function handlePassClick() {
  const currentPhoto = document.querySelector('.photo--current')
  const nextPhoto = currentPhoto.nextElementSibling

  currentPhoto.classList.toggle('photo--pass')
  nextPhoto?.classList.toggle('photo--current')

  setTimeout(function() {
    currentPhoto.parentElement.removeChild(currentPhoto)
  }, 1000)
}

function handleLikeClick() {
  const currentPhoto = document.querySelector('.photo--current')
  const nextPhoto = currentPhoto.nextElementSibling

  currentPhoto.classList.toggle('photo--like')
  nextPhoto?.classList.toggle('photo--current')

  setTimeout(function() {
    currentPhoto.parentElement.removeChild(currentPhoto)
  }, 1000)
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('button--pass')) {
    handlePassClick()
  } else if (event.target.classList.contains('button--like')) {
    handleLikeClick()
  }
})