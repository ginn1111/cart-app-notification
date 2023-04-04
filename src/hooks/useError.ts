import { useAppSelector } from 'app/hooks';
import { errorSelector } from 'app/selectors';
import { SliceName } from 'app/store';

const useError = (sliceName: SliceName) => {
  const error = useAppSelector(errorSelector(sliceName));
  let message = 'Some thing went wrong';

  switch (error?.response?.status) {
    default:
      return message;
  }
};

export default useError;
