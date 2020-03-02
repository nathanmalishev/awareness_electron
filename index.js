
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
  
  setInterval( () => {
    const audio = player.play('Zymbel_tibetan.m4a', (err, audio) => {
    if (err) throw err
    })
  }, 1800000)
})


