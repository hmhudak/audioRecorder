document.getElementById('recordButton').addEventListener('click', function () {
    let button = this;
    if (button.textContent === 'Start') {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                window.recorder = new RecordRTC(stream, { type: 'audio', mimeType: 'audio/wav' });
                window.recorder.startRecording();
                button.textContent = 'Stop';
            }).catch(console.error);
    } else {
        window.recorder.stopRecording(function () {
            let blob = window.recorder.getBlob();
            invokeSaveAsDialog(blob);
            button.textContent = 'Start';
        });
    }
});
