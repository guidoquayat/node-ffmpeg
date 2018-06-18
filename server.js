const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
const ffmpeg = require('fluent-ffmpeg');
const fs = require ('fs');
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);
ffmpeg.setFlvtoolPath('./flvtool2.exe');


// var proc = new ffmpeg();
//
// proc.addInput('rtmp://127.0.0.1:1935/test')
// .inputOption('-listen 1')
// .on('start', function(data) {
//     console.log(data);
// })
// .on('progress', function(data) {
//   console.log(data);
// })
// .on('end', function(data) {
//     console.log(data);
// })
// .on('error', function(error) {
//     console.log(error);
// })
// .outputOption('-ab 128k')
// .outputOption('-vcodec libx264')
// .outputOption('-s 640x360')
// .outputOption('-f flv')
//
// .save('rtmp://live-api.facebook.com:80/rtmp/1619085664794470?s_ps=1&s_vt=api&a=ATgwsXbzGIEey3_r')
// .run();




// make sure you set the correct path to your video file
function test() { ffmpeg('rtmp://127.0.0.1:1935/mytv/test')
  // set video bitrate
  .videoBitrate(1024)

  .inputOption('-y')
  // set h264 preset
  // .addOption('preset','superfast')
  // set target codec
  .videoCodec('libx264')
  // set audio bitrate
  .audioBitrate('128k')
  // set audio codec
  //.inputOption('-i')
  // set number of audio channels
  .audioChannels(2)
  // set hls segments time
  .addOption('-f flv')




  .on('start', function(data) {
       console.log(data);

     })


  .on('error', function(error) {
      console.log(error);
  })

  .on('stderr', function(stderrLine) {
    console.log('Stderr output: ' + stderrLine);
  })

  // save to file
  .save('rtmp://a.rtmp.youtube.com/live2/au2a-7w7w-tub1-4kqr')

  .save('rtmp://live-api.facebook.com:80/rtmp/1619085664794470?s_ps=1&s_vt=api&a=ATgwsXbzGIEey3_r')
  .addOption('-f flv')
  .size('320x200')
  .audioBitrate('100k')


//me dice el formato de audio y el de video
  .on('codecData', function(data) {
      console.log('Input is ' + data.audio + ' audio ' +
        'with ' + data.video + ' video' + data.video_details);
    })

  .on('end', function() {
    console.log('finish');
    test();


})};

test();
