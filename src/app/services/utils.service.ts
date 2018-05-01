import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  /* The following utility function accepts a function as input and
  ** returns a new function. If the returned function is called
  ** before the timeout period (the default timeout is one second),
  ** it clears the timeout and calls the input function. If the
  ** returned function isn't called before the timeout period, the
  ** input function is called regardless.
 */
  createFunctionWithTimeout(callback, opt_timeout) {
    let called = false;
    function fn() {
      if (!called) {
        called = true;
        callback();
      }
    }
    setTimeout(fn, opt_timeout || 1000);
    return fn;
  }
}

/*
Now, you can wrap all event callback functions with a timeout to
 ensure your site works as expected, even in cases where your events
  fail to send or the gtag.js library never loads.

// Gets a reference to the form element, assuming
// it contains the ID attribute "signup-form".
var form = document.getElementById('signup-form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(event) {

  // Prevents the browser from submitting the form
  // and thus unloading the current page.
  event.preventDefault();

  // Sends the event to Google Analytics and
  // resubmits the form once the hit is done.
  gtag('event', 'signup_form', { 'event_callback': {
    createFunctionWithTimeout(function() {
      form.submit();
    })
  }});
});
*/
