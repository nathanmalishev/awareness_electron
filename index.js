
const { menubar } = require('menubar');
const player = require('play-sound')(opts = {})

const mb = menubar();

/*const stopAudio = () => {
  // global kill audio
  audio.kill(audio)
}*/

/*var audio*/

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
  //
  
  setTimeout( () => {
  const audio = player.play('Zymbel_tibetan.mp3', (err) => {
    if (err) throw err
  // sick of audio after 3 seconds
  setTimeout(() => audio.kill(), 5000)
  })
  }, 1800000)
})


