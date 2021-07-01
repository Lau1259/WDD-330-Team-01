import makeRequest from './authHelpers.js';
import Auth from './auth';

makeRequest('login', 'POST', {
  password: 'user1',
  email: 'user1@email.com'
  });