import { combineReducers } from 'redux';
import imageUploader from './imageUploader';
import Downloading from './downloading';
import SavingSettings from './savingSettings';

export default () => combineReducers({
  ImageUploader: imageUploader(),
  Downloading,
  SavingSettings,
});
