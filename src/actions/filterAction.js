import { FILTER_MUSIC, FILTER_SPORT } from '../actions/types';

export const filterByMusic = payload => ({
  type: FILTER_MUSIC,
  payload
});

export const filterBySport = payload => ({
  type: FILTER_SPORT,
  payload
});