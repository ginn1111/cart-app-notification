import { RefObject, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useCamera = (videoRef: RefObject<HTMLMediaElement>) => {
  const [isUserMode, setIsUserMode] = useState(true); // 'user' mode is default
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let _stream: MediaStream;
    let isCancel = false;

    const constraints = {
      video: { facingMode: isUserMode ? 'user' : 'environment' },
    };

    if (navigator.mediaDevices.getUserMedia && !isCancel) {
      (async () => {
        try {
          _stream = await navigator.mediaDevices.getUserMedia(constraints);
          if (videoRef.current) {
            videoRef.current.srcObject = _stream;
          }
        } catch (error) {
          setIsError(true);
          toast('Not found any devices!', {
            type: 'error',
          });
        }
      })();
    }

    return () => {
      if (_stream) {
        _stream.getVideoTracks().forEach((track) => track.stop());
        _stream.getAudioTracks().forEach((track) => track.stop());
      }
    };
  }, [isUserMode, videoRef]);

  return { setIsUserMode, isError };
};
export default useCamera;
