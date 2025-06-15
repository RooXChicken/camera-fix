const video = document.getElementById('video');

async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
          facingMode: 'environment',
          height: {ideal:1920},
          width: {ideal: 1920},
        },
      });
    
    video.srcObject = stream;

}

async function main() {
    await setupCamera();
    video.play();
}