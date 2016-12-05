import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ImageUploader from './imageUploader';

export default () => combineReducers({
  reduxForm,
  ImageUploader,
});
