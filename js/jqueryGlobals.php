<?php
if ( class_exists( 'ms_Main' ) ) {
    $ms_api_key = ms_Main::$settings['ms_api_key'];
} else {
    $ms_api_key =  $_COOKIE['ms_api_key'];
}

header ('Content-Type: application / javascript');

?>

function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

// Store Widgetkey in cookies
setCookie('Widgetkey',getCookie('ms_api_key'),'365');

// WidgetKey can be obtained from your account
var Widgetkey = getCookie('Widgetkey');

// Function that prevent click to acces link href
function windowPreventOpening() {
    jQuery(this).click(function(event) {
        event.preventDefault();
    });
}

// Function that open new window for Match Details
function windowOpenMatch(match_id, leagueLogo, fixturesDate, countryName, leagueName, homeTeam, awayTeam) {

    sessionStorage.setItem('matchDetailsKey', match_id);

    if (leagueLogo != '') {
        sessionStorage.setItem('leagueLogo', leagueLogo);
    }

    var generatedLink = countryName+'/'+leagueName+'/'+homeTeam+'-vs-'+awayTeam+'/'+fixturesDate+'/'+match_id;
    var newGeneratedLink = generatedLink.replace(/\s/g,'-');

    sessionStorage.setItem('fixturesDate', fixturesDate);

    var WindowNW = window.open(
        ((typeof widgetMatchResultsLocation !== "undefined") ? widgetMatchResultsLocation.pluginHtmlUrl : 'widgetMatchResults.php')+'?'+newGeneratedLink+'',
        "_blank",
        "width=870, height=650");

}

// Function that open new window for League Info
function windowOpenLeagueInfo(league_id, league_name, leagueLogo) {

    sessionStorage.setItem('leagueInfoKey', league_id);
    sessionStorage.setItem('leagueInfoName', league_name);

    if (leagueLogo != '') {
        sessionStorage.setItem('leagueInfoLogo', leagueLogo);
    }

    var WindowNW = window.open(
        widgetLeagueLocation.pluginHtmlUrl,
        "_blank",
        "width=700, height=650");

}

// Function that comapare times
function naturalCompare(a, b) {
    var ax = [],
        bx = [];

    a['time'].replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
        ax.push([$1 || Infinity, $2 || ""])
    });
    b['time'].replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
        bx.push([$1 || Infinity, $2 || ""])
    });

    while (ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if (nn) return nn;
    }

    return ax.length - bx.length;
}

// Function that sort ascendent by league round
function groupSortingAsc(a, b) {
    var ax = [],
        bx = [];

    a['league_round'].replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
        ax.push([$1 || Infinity, $2 || ""])
    });
    b['league_round'].replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
        bx.push([$1 || Infinity, $2 || ""])
    });

    while (ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if (nn) return nn;
    }

    return ax.length - bx.length;
}

// Function that group by
var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

// Function that sort by key descendent
function sortByKeyDesc(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

// Function that sort by key ascendent
function sortByKeyAsc(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// Function that sort by key
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// Function for Match Details css, js and widget activation
var isWidgetMatchResults = 0;

function initiateWidgetMatchResultsScript(widgetMatchResultsLocation, Widgetkey) {
    if (isWidgetMatchResults == 0) {

        isWidgetMatchResults = 1;
        setTimeout(function() {
            jQuery(widgetMatchResultsLocation).unbind().removeData().html('').widgetMatchResults({
                'Widgetkey': Widgetkey,
                'match_id': (sessionStorage.getItem('matchDetailsKey') ? sessionStorage.getItem('matchDetailsKey') : ''),
                'action': 'get_events',
				'withoutDetails' : true
            });
        }, 1000);
    }
}

// Function for League css, js and widget activation
var isWidgetLeague = 0;

function initiateWidgetLeagueScript(widgetLeagueLocation, Widgetkey) {
    if (isWidgetLeague == 0) {
        isWidgetLeague = 1;
    }
}

function initiateWidgetLeague(widgetLeagueLocation, Widgetkey, league_id, league_name, leagueLogo) {
    if (isWidgetLeague == 1) {
        jQuery(widgetLeagueLocation).unbind().removeData().html('').widgetLeague({
            'Widgetkey': Widgetkey,
            'league_id': league_id,
            'league_name': league_name,
            'leagueLogo': leagueLogo
        });
    }
}

// Function that get server time
var timeForFixtures = '';

var fiTFF = setInterval(function() {

    if (typeof getTimeZone() != 'undefined') {
        jQuery.ajax({
            url: 'https://apiv3.apifootball.com/?',
            cache: false,
            data: {
                action: 'get_data',
                Widgetkey: Widgetkey,
                timezone: getTimeZone()
            },
            dataType: 'json'
        }).done(function(res) {

            var formattedDate = new Date(res.datetime + "T00:00");
            var d = formattedDate.getDate();
            var m = formattedDate.getMonth() + 1;
            var y = formattedDate.getFullYear();
            timeForFixtures = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);

        }).fail(function(error) {

        });
        clearInterval(fiTFF);
    }
}, 10);

// Function that get local time
function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

// Function for Live Score css, js and widget activation
var isWidgetLiveScore = 0;

function initiateWidgetLiveScoreScript(widgetLiveScoreLocation, Widgetkey) {

    if (isWidgetLiveScore == 0) {

        isWidgetLiveScore = 1;

        var fi = setInterval(function() {
			if (jQuery('#widgetLiveScore-js').length > 0) {
                jQuery(widgetLiveScoreLocation).unbind().removeData().html('').widgetLiveScore({
                    'Widgetkey': Widgetkey,
                    'action': 'get_events',
                    'match_live ': '1',
                    'from': timeForFixtures,
                    'to': timeForFixtures,
                    'timezone': getTimeZone()
                });
                clearInterval(fi);
            }
        }, 10);
    }
}

// Function that get calendar days for desktop
function getDateCalendar(liveScoreCalendarContainer, currentDate, getDateCalendar, dayNb, addSubstractSign) {

    var ttCalendar = currentDate;

    var dateCalendar = new Date(ttCalendar);
    var newdateCalendar = new Date(dateCalendar);

    if (addSubstractSign == 'addDateCalendar') {
        newdateCalendar.setDate(newdateCalendar.getDate() + dayNb);
    } else if (addSubstractSign == 'substractDateCalendar') {
        newdateCalendar.setDate(newdateCalendar.getDate() - dayNb);
    }

    var ddCalendar = newdateCalendar.getDate();
    var mmCalendar = newdateCalendar.getMonth() + 1;
    var yCalendar = newdateCalendar.getFullYear();

    var finalDay = (ddCalendar < 10 ? '0' + ddCalendar : ddCalendar) + '.' + (mmCalendar < 10 ? '0' + mmCalendar : mmCalendar) + '.' + yCalendar;
    var finalDayClick = yCalendar + '-' + (mmCalendar < 10 ? '0' + mmCalendar : mmCalendar) + '-' + (ddCalendar < 10 ? '0' + ddCalendar : ddCalendar);

    return jQuery('<a href="#" onclick="windowPreventOpening()" id="' + getDateCalendar + '" class="callendarDays thisDateForSelect" data-dateclicked="' + finalDayClick + '">' + finalDay + '</a>').prependTo(jQuery('#' + liveScoreCalendarContainer));
}

// Function that get calendar days for mobile
function getDateCalendarMobile(liveScoreCalendarContainer, currentDate, getDateCalendar, dayNb, addSubstractSign) {

    var ttCalendar = currentDate;

    var dateCalendar = new Date(ttCalendar);
    var newdateCalendar = new Date(dateCalendar);

    if (addSubstractSign == 'addDateCalendar') {
        newdateCalendar.setDate(newdateCalendar.getDate() + dayNb);
    } else if (addSubstractSign == 'substractDateCalendar') {
        newdateCalendar.setDate(newdateCalendar.getDate() - dayNb);
    }

    var ddCalendar = newdateCalendar.getDate();
    var mmCalendar = newdateCalendar.getMonth() + 1;
    var yCalendar = newdateCalendar.getFullYear();

    var finalDay = (ddCalendar < 10 ? '0' + ddCalendar : ddCalendar) + '.' + (mmCalendar < 10 ? '0' + mmCalendar : mmCalendar) + '.' + yCalendar;
    var finalDayClick = yCalendar + '-' + (mmCalendar < 10 ? '0' + mmCalendar : mmCalendar) + '-' + (ddCalendar < 10 ? '0' + ddCalendar : ddCalendar);

    return jQuery('<option class="thisDateForSelect" value="' + finalDayClick + '" data-dateclicked="' + timeForFixtures + '">' + finalDay + '</option>').prependTo(jQuery('#' + liveScoreCalendarContainer));
}

function whatToPush(where, bookmaker, one, two) {
    return where.push({
        bookmaker: bookmaker,
        one: ((typeof one != 'undefined') ? one : '' ),
        two: ((typeof two != 'undefined') ? two : '' )
    });
}