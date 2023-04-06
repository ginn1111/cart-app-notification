import Button from 'components/common/Button';
import useCamera from 'pages/Camera/hooks/useCamera';
import { useRef } from 'react';

import './camera.scss';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setIsUserMode, isError } = useCamera(videoRef);

  return (
    <>
      {!isError && (
        <section>
          <video autoPlay className="camera" ref={videoRef}>
            {!navigator.mediaDevices.getDisplayMedia && (
              <p>Your browser do not support!</p>
            )}
            {!!navigator.mediaDevices.getDisplayMedia && isError && (
              <p>Not found any devices!</p>
            )}
          </video>
          <Button
            className="camera__switch-btn"
            onClick={() => setIsUserMode((mode: boolean) => !mode)}
            disabled={isError}
          >
            Toggle mode
          </Button>
        </section>
      )}
    </>
  );
};

export default Camera;
