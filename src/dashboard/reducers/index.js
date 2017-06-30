import { combineReducers } from 'redux';
import imageUploader from './imageUploader';
import Downloading from './downloading';

export default () => combineReducers({
  imageUploader: imageUploader(),
  Downloading,
});
