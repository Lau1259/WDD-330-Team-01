//import { getJSON, getLocation } from 'utilities.js';
import QuakesController from './quakescontroller.js';

 const myQuakesController = new QuakesController('#quakeList');
 myQuakesController.getQuakesByRadius();