'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  // TODO: Add an event handler to .main-nav elements that will power the Tabs feature.
  //       Clicking any .tab element should hide all the .tab-content sections, and then reveal the
  //       single .tab-content section that is associated with the clicked .tab element.
  //       So: You need to dynamically build a selector string with the correct ID, based on the
  //       data available to you on the .tab element that was clicked.
  $('.tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
 // Let's now trigger a click on the first .tab element, to set up the page.
  })
};


$(document).ready(function() {
  projectView.handleMainNav();
});
