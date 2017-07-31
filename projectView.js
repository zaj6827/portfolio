'use strict';

var projectView = {};

projectView.handleMainNav = function() {

  $('.tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  })
};


$(document).ready(function() {
  projectView.handleMainNav();
});
