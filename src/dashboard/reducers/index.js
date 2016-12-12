import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ImageUploader from './imageUploader';
import Downloading from './downloading';
import SavingSettings from './savingSettings';

export default () => combineReducers({
  reduxForm,
  ImageUploader,
  Downloading,
  SavingSettings,
});
