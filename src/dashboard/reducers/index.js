import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ImageUploader from './imageUploader';
import Downloading from './downloading';

export default () => combineReducers({
  reduxForm,
  ImageUploader,
  Downloading,
});
