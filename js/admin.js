// Save settings for Global.

function ms_click_api_key() {

    var state = jQuery('#ms_api_key').val();
    var dataLink = {
        action: 'ms_set_api_key',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Api Key changed successfully!');
    });

}

function ms_click_color_one() {

    var state = jQuery('#ms_color_one').val();
    var dataLink = {
        action: 'ms_set_color_one',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Color changed successfully!');
    });

}

function ms_click_color_two() {

    var state = jQuery('#ms_color_two').val();
    var dataLink = {
        action: 'ms_set_color_two',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Color changed successfully!');
    });

}

function ms_click_color_three() {

    var state = jQuery('#ms_color_three').val();
    var dataLink = {
        action: 'ms_set_color_three',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Color changed successfully!');
    });

}

function ms_click_widget_width() {

    var state = jQuery('#ms_widget_width').val();
    var dataLink = {
        action: 'ms_set_widget_width',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Width changed successfully!');
    });

}

function ms_click_preferential_leagues() {

    var state = jQuery('#ms_preferential_leagues').val();
    var dataLink = {
        action: 'ms_set_preferential_leagues',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Width changed successfully!');
    });

}

function ms_click_up_to_top_button() {

    var state = jQuery('#ms_up_to_top_button').val();
    var dataLink = {
        action: 'ms_set_up_to_top_button',
        state: state
    };

    jQuery.post(ajax_object.ajax_url, dataLink, function (respond) {
        alert('Button display changed successfully!');
    });

}

jQuery(document).ready(function ($) {
    $('.my-color-field').show().wpColorPicker();
    $('.buttonToggleDash').show();
});