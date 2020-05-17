import streams from '../../src/apis/streams';
import * as TYPES from './types';
import history from '../history';

export const signIn = (id) => {
  return { type: TYPES.SIGN_IN, payload: id };
};
export const signOut = () => {
  return { type: TYPES.SIGN_OUT };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: TYPES.CREATE_STREAM, payload: res.data });
  history.push('/');
};
export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get('/streams');
  dispatch({ type: TYPES.FETCH_STREAMS, payload: res.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: TYPES.FETCH_STREAM, payload: res.data });
};
export const editStream = (id, formValues) => async (dispatch) => {
  const res = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: TYPES.EDIT_STREAM, payload: res.data });
  history.push('/');
};
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: TYPES.DELETE_STREAM, payload: id });
  history.push('/');
};
