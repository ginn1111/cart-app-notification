import Button from 'components/common/Button';
import classes from './Camera.module.scss';
import useCamera from 'hooks/useCamera';
import { useRef } from 'react';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setIsUserMode } = useCamera(videoRef);

  return (
    <section>
      <video autoPlay className={classes.camera} ref={videoRef} />
      <Button
        className={classes['camera__switch-btn']}
        onClick={() => setIsUserMode((mode) => !mode)}
      >
        Toggle mode
      </Button>
    </section>
  );
};

export default Camera;
