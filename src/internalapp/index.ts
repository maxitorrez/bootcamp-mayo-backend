import {spawn} from 'child_process';
import {createPathTemp} from '../service/controllers/utils.controller';

const [nodeParam, fileExecuteParam] = process.argv;


const econsola = (Video1:string, Video2:string) => {


  const principalCommand = 'echo';
  const args = [
    `${Video1}'\n'${Video2}`,
    '>',
    'texto.txt ',
    ];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

}

const sendDataToOS = (inputVideoSource: string, output:string) => {
  const inputVideoSrc = `${__dirname}/${inputVideoSource}`;
  const outputVideoSrc = `${__dirname}/${output}`;

  const principalCommand = 'ffmpeg';
  const args = [
    '-fflags',
    '+genpts',
    '-i',
    `${inputVideoSrc}`,
    '-r',
    '24',
    `${outputVideoSrc}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  
};


const UnionVideos = (Video1: string, Video2: string, salidaVideo:string) => {
  const VideoSrc1 = `file '${__dirname}/${Video1}'`;
  const VideoSrc2 = `file '${__dirname}/${Video2}'`;
  const salidaVideoSrc = `${__dirname}/${salidaVideo}`;

  econsola(VideoSrc1, VideoSrc2);
  const principalCommand = 'ffmpeg';
  const args = [
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    `texto.txt`,
    '-c',
    'copy',
    `${salidaVideoSrc}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

};

// Crea videos 

for(let i=1; i<=4; i++){
  sendDataToOS('inputvideo.webm', ('video'+`${i}`+'.mp4'));
  sendDataToOS('inputvideo.webm', ('video'+`${i}`+'.mp4'));
  sendDataToOS('inputvideo.webm', ('video'+`${i}`+'.mp4'));
  sendDataToOS('inputvideo.webm', ('video'+`${i}`+'.mp4'));
}


// Union de videos
UnionVideos('video1.mp4', 'video4.mp4', 'video5.mp4');
UnionVideos('video2.mp4', 'video3.mp4', 'video6.mp4');
UnionVideos('video5.mp4', 'video6.mp4', 'video7.mp4');

