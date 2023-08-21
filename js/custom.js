function changeMusicList(num) {
  document.querySelector('.music-box').style.transform = `translate(-${((document.querySelector('.panel-content-2').offsetWidth + 10) * num)}px)`
}