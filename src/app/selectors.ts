import { createSelector } from '@reduxjs/toolkit';
import { RootState, SliceName } from './store';

export const errorSelector = (sliceName: SliceName) =>
  createSelector(
    (state: RootState) => state[sliceName],
    (slice: any) => slice.error
  );
