import Button from 'components/common/Button';
import classes from './Camera.module.scss';
import useCamera from 'hooks/useCamera';
import { useRef } from 'react';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setIsUserMode, isError } = useCamera(videoRef);

  return (
    <section>
      <video autoPlay className={classes.camera} ref={videoRef}>
        {!navigator.mediaDevices.getDisplayMedia && (
          <p>Your browser do not support!</p>
        )}
        {!!navigator.mediaDevices.getDisplayMedia && isError && (
          <p>Not found any devices!</p>
        )}
      </video>
      <Button
        className={classes['camera__switch-btn']}
        onClick={() => setIsUserMode((mode) => !mode)}
        disabled={isError}
      >
        Toggle mode
      </Button>
    </section>
  );
};

export default Camera;
