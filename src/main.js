import './plant.js';
import $ from 'jquery';

$(document).ready(function() {

  $('#feed').click(function() {
    const newState = stateControl(bluefood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});

