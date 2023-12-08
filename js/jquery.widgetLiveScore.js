// ---------------------------------
// ---------- widgetLiveScore ----------
// ---------------------------------
// Widget for LiveScore Display
// ------------------------
translate = [
    {
      name: 'english'
    }
];
;
(function ($, window, document, undefined) {

    var widgetLiveScore = 'widgetLiveScore';

    var lang = $('html').attr('lang');

    function translateText(string){

        if(lang == "en-US"){
            return string;
        }

        const vn = {
          "Åland Islands": "Quần đảo Åland",
          Albania: "Albania",
          Algeria: "Algeria",
          "American Samoa": "Samoa thuộc Mỹ",
          Andorra: "Andorra",
          Angola: "Angola",
          Anguilla: "Anguilla",
          Antarctica: "Châu Nam Cực",
          "Antigua and Barbuda": "Antigua và Barbuda",
          Argentina: "Argentina",
          Armenia: "Armenia",
          Aruba: "Aruba",
          Australia: "Úc",
          Austria: "Áo",
          Azerbaijan: "Azerbaijan",
          Bahamas: "Bahamas",
          Bahrain: "Bahrain",
          Bangladesh: "Bangladesh",
          Barbados: "Barbados",
          Belarus: "Belarus",
          Belgium: "Bỉ",
          Belize: "Belize",
          Benin: "Bénin",
          Bermuda: "Bermuda",
          Bhutan: "Bhutan",
          Bolivia: "Bolivia",
          "Bonaire, Sint Eustatius and Saba": "Bonaire, Sint Eustatius và Saba",
          Bosnia: "Bosnia",
          Botswana: "Botswana",
          "Bouvet Island": "Đảo Bouvet",
          Brazil: "Brazil",
          "British Indian Ocean Territory": "Lãnh thổ Ấn Độ Dương thuộc Anh",
          "British Virgin Islands": "Quần đảo Virgin thuộc Anh",
          Brunei: "Brunei",
          Bulgaria: "Bulgaria",
          "Burkina Faso": "Burkina Faso",
          Burundi: "Burundi",
          Cambodia: "Campuchia",
          Cameroon: "Cameroon",
          Canada: "Canada",
          "Cape Verde": "Cabo Verde",
          "Cayman Islands": "Quần đảo Cayman",
          "Central African Republic": "Cộng hòa Trung Phi",
          Chad: "Chad",
          Chile: "Chile",
          China: "Trung Quốc",
          "Christmas Island": "Đảo Giáng Sinh",
          "Cocos (Keeling) Islands": "Quần đảo Cocos (Keeling)",
          Colombia: "Colombia",
          Comoros: "Comoros",
          Congo: "Congo",
          "Cook Islands": "Quần đảo Cook",
          "Costa Rica": "Costa Rica",
          Croatia: "Croatia",
          Cuba: "Cuba",
          Curaçao: "Curaçao",
          Cyprus: "Síp",
          "Czech Republic": "Cộng hòa Séc",
          Denmark: "Đan Mạch",
          Djibouti: "Djibouti",
          Dominica: "Dominica",
          "Dominican Republic": "Cộng hòa Dominica",
          Ecuador: "Ecuador",
          Egypt: "Ai Cập",
          "El Salvador": "El Salvador",
          "Equatorial Guinea": "Guinea Xích Đạo",
          Eritrea: "Eritrea",
          Estonia: "Estonia",
          Eswatini: "Eswatini",
          Ethiopia: "Ethiopia",
          "Falkland Islands": "Quần đảo Falkland",
          "Faroe Islands": "Quần đảo Faroe",
          Fiji: "Fiji",
          Finland: "Phần Lan",
          France: "Pháp",
          "French Guiana": "Guiana thuộc Pháp",
          "French Polynesia": "Polynesia thuộc Pháp",
          "French Southern Territories": "Lãnh thổ miền Nam thuộc Pháp",
          Gabon: "Gabon",
          Gambia: "Gambia",
          Georgia: "Georgia",
          Germany: "Đức",
          Ghana: "Ghana",
          Gibraltar: "Gibraltar",
          Greece: "Hy Lạp",
          Greenland: "Greenland",
          Grenada: "Grenada",
          Guadeloupe: "Guadeloupe",
          Guam: "Guam",
          Guatemala: "Guatemala",
          Guernsey: "Guernsey",
          Guinea: "Guinea",
          "Guinea-Bissau": "Guinea-Bissau",
          Guyana: "Guyana",
          Haiti: "Haiti",
          "Heard Island and McDonald Islands": "Đảo Heard và Quần đảo McDonald",
          Honduras: "Honduras",
          "Hong Kong": "Hồng Kông",
          Hungary: "Hungary",
          Iceland: "Iceland",
          India: "Ấn Độ",
          Indonesia: "Indonesia",
          Iran: "Iran",
          Iraq: "Iraq",
          Ireland: "Ireland",
          "Isle of Man": "Đảo Man",
          Israel: "Israel",
          Italy: "Ý",
          Jamaica: "Jamaica",
          Japan: "Nhật Bản",
          Jersey: "Jersey",
          Jordan: "Jordan",
          Kazakhstan: "Kazakhstan",
          Kenya: "Kenya",
          Kiribati: "Kiribati",
          Kosovo: "Kosovo",
          Kuwait: "Kuwait",
          Kyrgyzstan: "Kyrgyzstan",
          Laos: "Lào",
          Latvia: "Latvia",
          Lebanon: "Lebanon",
          Lesotho: "Lesotho",
          Liberia: "Liberia",
          Libya: "Libya",
          Liechtenstein: "Liechtenstein",
          Lithuania: "Lithuania",
          Luxembourg: "Luxembourg",
          Macao: "Macao",
          Madagascar: "Madagascar",
          Malawi: "Malawi",
          Malaysia: "Malaysia",
          Maldives: "Maldives",
          Mali: "Mali",
          Malta: "Malta",
          "Marshall Islands": "Quần đảo Marshall",
          Martinique: "Martinique",
          Mauritania: "Mauritania",
          Mauritius: "Mauritius",
          Mayotte: "Mayotte",
          Mexico: "Mexico",
          "Micronesia (Federated States of)": "Micronesia (Các Tiểu bang Liên hiệp)",
          Moldova: "Moldova",
          Monaco: "Monaco",
          Mongolia: "Mông Cổ",
          Montenegro: "Montenegro",
          Montserrat: "Montserrat",
          Morocco: "Maroc",
          Mozambique: "Mozambique",
          Myanmar: "Myanmar",
          Namibia: "Namibia",
          Nauru: "Nauru",
          Nepal: "Nepal",
          Netherlands: "Hà Lan",
          "New Caledonia": "New Caledonia",
          "New Zealand": "New Zealand",
          Nicaragua: "Nicaragua",
          Niger: "Niger",
          Nigeria: "Nigeria",
          Niue: "Niue",
          "Norfolk Island": "Đảo Norfolk",
          "North Korea": "Bắc Triều Tiên",
          "North Macedonia": "Bắc Macedonia",
          "Northern Mariana Islands": "Quần đảo Bắc Mariana",
          Norway: "Na Uy",
          Oman: "Oman",
          Pakistan: "Pakistan",
          Palau: "Palau",
          Palestine: "Palestine",
          Panama: "Panama",
          "Papua New Guinea": "Papua New Guinea",
          Paraguay: "Paraguay",
          Peru: "Peru",
          Philippines: "Philippines",
          Pitcairn: "Quần đảo Pitcairn",
          Poland: "Ba Lan",
          Portugal: "Bồ Đào Nha",
          "Puerto Rico": "Puerto Rico",
          Qatar: "Qatar",
          Réunion: "Réunion",
          Romania: "Romania",
          Russia: "Nga",
          Rwanda: "Rwanda",
          "Saint Barthélemy": "Saint Barthélemy",
          "Saint Helena, Ascension and Tristan da Cunha": "Saint Helena, Ascension và Tristan da Cunha",
          "Saint Kitts and Nevis": "Saint Kitts và Nevis",
          "Saint Lucia": "Saint Lucia",
          "Saint Martin (French part)": "Saint Martin (Phần thuộc Pháp)",
          "Saint Pierre and Miquelon": "Saint Pierre và Miquelon",
          "Saint Vincent and the Grenadines": "Saint Vincent và Grenadines",
          Samoa: "Samoa",
          "San Marino": "San Marino",
          "Sao Tome and Principe": "Sao Tome và Principe",
          "Saudi Arabia": "Ả Rập Xê Út",
          Senegal: "Senegal",
          Serbia: "Serbia",
          Seychelles: "Seychelles",
          "Sierra Leone": "Sierra Leone",
          Singapore: "Singapore",
          "Sint Maarten (Dutch part)": "Sint Maarten (Phần thuộc Hà Lan)",
          Slovakia: "Slovakia",
          Slovenia: "Slovenia",
          "Solomon Islands": "Quần đảo Solomon",
          Somalia: "Somalia",
          "South Africa": "Nam Phi",
          "South Georgia and the South Sandwich Islands": "Nam Georgia và Quần đảo South Sandwich",
          "South Korea": "Hàn Quốc",
          "South Sudan": "Nam Sudan",
          Spain: "Tây Ban Nha",
          "Sri Lanka": "Sri Lanka",
          Sudan: "Sudan",
          Suriname: "Suriname",
          "Svalbard and Jan Mayen": "Svalbard và Jan Mayen",
          Swaziland: "Swaziland",
          Sweden: "Thụy Điển",
          Switzerland: "Thụy Sĩ",
          Syria: "Syria",
          "Taiwan, Province of China": "Đài Loan, Trung Quốc",
          Tajikistan: "Tajikistan",
          Tanzania: "Tanzania",
          Thailand: "Thái Lan",
          "Timor-Leste": "Timor-Leste",
          Togo: "Togo",
          Tokelau: "Tokelau",
          Tonga: "Tonga",
          "Trinidad and Tobago": "Trinidad và Tobago",
          Tunisia: "Tunisia",
          Turkey: "Thổ Nhĩ Kỳ",
          Turkmenistan: "Turkmenistan",
          "Turks and Caicos Islands": "Quần đảo Turks và Caicos",
          Tuvalu: "Tuvalu",
          Uganda: "Uganda",
          Ukraine: "Ukraine",
          "United Arab Emirates": "Các Tiểu Vương quốc Ả Rập Thống nhất",
          "United Kingdom": "Vương quốc Anh",
          "United States": "Hoa Kỳ",
          "United States Minor Outlying Islands": "Các đảo nhỏ xa trung tâm của Hoa Kỳ",
          Uruguay: "Uruguay",
          Uzbekistan: "Uzbekistan",
          Vanuatu: "Vanuatu",
          "Vatican City": "Thành Vatican",
          Venezuela: "Venezuela",
          Vietnam: "Việt Nam",
          "Virgin Islands (British)": "Quần đảo Virgin (Anh)",
          "Virgin Islands (U.S.)": "Quần đảo Virgin (Hoa Kỳ)",
          "Wallis and Futuna": "Wallis và Futuna",
          "Western Sahara": "Tây Sahara",
          Yemen: "Yemen",
          Zambia: "Zambia",
          Zimbabwe: "Zimbabwe"
        };

        const brazil = {
  "Afghanistan": "Afeganistão",
  "Albania": "Albânia",
  "Algeria": "Argélia",
  "Andorra": "Andorra",
  "Angola": "Angola",
  "Antigua and Barbuda": "Antígua e Barbuda",
  "Argentina": "Argentina",
  "Armenia": "Armênia",
  "Australia": "Austrália",
  "Austria": "Áustria",
  "Azerbaijan": "Azerbaijão",
  "Bahamas": "Bahamas",
  "Bahrain": "Bahrein",
  "Bangladesh": "Bangladesh",
  "Barbados": "Barbados",
  "Belarus": "Bielorrússia",
  "Belgium": "Bélgica",
  "Belize": "Belize",
  "Benin": "Benin",
  "Bhutan": "Butão",
  "Bolivia": "Bolívia",
  "Bosnia and Herzegovina": "Bósnia e Herzegovina",
  "Botswana": "Botsuana",
  "Brazil": "Brasil",
  "Brunei": "Brunei",
  "Bulgaria": "Bulgária",
  "Burkina Faso": "Burkina Faso",
  "Burundi": "Burundi",
  "Cabo Verde": "Cabo Verde",
  "Cambodia": "Camboja",
  "Cameroon": "Camarões",
  "Canada": "Canadá",
  "Central African Republic": "República Centro-Africana",
  "Chad": "Chade",
  "Chile": "Chile",
  "China": "China",
  "Colombia": "Colômbia",
  "Comoros": "Comores",
  "Congo (Brazzaville)": "Congo (Brazzaville)",
  "Congo (Kinshasa)": "Congo (Kinshasa)",
  "Costa Rica": "Costa Rica",
  "Croatia": "Croácia",
  "Cuba": "Cuba",
  "Cyprus": "Chipre",
  "Czech Republic": "República Tcheca",
  "Denmark": "Dinamarca",
  "Djibouti": "Djibuti",
  "Dominica": "Dominica",
  "Dominican Republic": "República Dominicana",
  "East Timor": "Timor-Leste",
  "Ecuador": "Equador",
  "Egypt": "Egito",
  "El Salvador": "El Salvador",
  "Equatorial Guinea": "Guiné Equatorial",
  "Eritrea": "Eritreia",
  "Estonia": "Estônia",
  "Eswatini": "Eswatini",
  "Ethiopia": "Etiópia",
  "Fiji": "Fiji",
  "Finland": "Finlândia",
  "France": "França",
  "Gabon": "Gabão",
  "Gambia": "Gâmbia",
  "Georgia": "Geórgia",
  "Germany": "Alemanha",
  "Ghana": "Gana",
  "Greece": "Grécia",
  "Grenada": "Granada",
  "Guatemala": "Guatemala",
  "Guinea": "Guiné",
  "Guinea-Bissau": "Guiné-Bissau",
  "Guyana": "Guiana",
  "Haiti": "Haiti",
  "Honduras": "Honduras",
  "Hungary": "Hungria",
  "Iceland": "Islândia",
  "India": "Índia",
  "Indonesia": "Indonésia",
  "Iran": "Irã",
  "Iraq": "Iraque",
  "Ireland": "Irlanda",
  "Israel": "Israel",
  "Italy": "Itália",
  "Jamaica": "Jamaica",
  "Japan": "Japão",
  "Jordan": "Jordânia",
  "Kazakhstan": "Cazaquistão",
  "Kenya": "Quênia",
  "Kiribati": "Kiribati",
  "Korea, North": "Coreia do Norte",
  "Korea, South": "Coreia do Sul",
  "Kosovo": "Kosovo",
  "Kuwait": "Kuwait",
  "Kyrgyzstan": "Quirguistão",
  "Laos": "Laos",
  "Latvia": "Letônia",
  "Lebanon": "Líbano",
  "Lesotho": "Lesoto",
  "Liberia": "Libéria",
  "Libya": "Líbia",
  "Liechtenstein": "Liechtenstein",
  "Lithuania": "Lituânia",
  "Luxembourg": "Luxemburgo",
  "Madagascar": "Madagascar",
  "Malawi": "Malawi",
  "Malaysia": "Malásia",
  "Maldives": "Maldivas",
  "Mali": "Mali",
  "Malta": "Malta",
  "Marshall Islands": "Ilhas Marshall",
  "Mauritania": "Mauritânia",
  "Mauritius": "Maurício",
  "Mexico": "México",
  "Micronesia": "Micronésia",
  "Moldova": "Moldávia",
  "Monaco": "Mônaco",
  "Mongolia": "Mongólia",
  "Montenegro": "Montenegro",
  "Morocco": "Marrocos",
  "Mozambique": "Moçambique",
  "Myanmar": "Mianmar",
  "Namibia": "Namíbia",
  "Nauru": "Nauru",
  "Nepal": "Nepal",
  "Netherlands": "Países Baixos",
  "New Zealand": "Nova Zelândia",
  "Nicaragua": "Nicarágua",
  "Niger": "Níger",
  "Nigeria": "Nigéria",
  "North Macedonia": "Macedônia do Norte",
  "Norway": "Noruega",
  "Oman": "Omã",
  "Pakistan": "Paquistão",
  "Palau": "Palau",
  "Panama": "Panamá",
  "Papua New Guinea": "Papua-Nova Guiné",
  "Paraguay": "Paraguai",
  "Peru": "Peru",
  "Philippines": "Filipinas",
  "Poland": "Polônia",
  "Portugal": "Portugal",
  "Qatar": "Catar",
  "Romania": "Romênia",
  "Russia": "Rússia",
  "Rwanda": "Ruanda",
  "Saint Kitts and Nevis": "Saint Kitts e Nevis",
  "Saint Lucia": "Santa Lúcia",
  "Saint Vincent and the Grenadines": "São Vicente e Granadinas",
  "Samoa": "Samoa",
  "San Marino": "San Marino",
  "Sao Tome and Principe": "São Tomé e Príncipe",
  "Saudi Arabia": "Arábia Saudita",
  "Senegal": "Senegal",
  "Serbia": "Sérvia",
  "Seychelles": "Seychelles",
  "Sierra Leone": "Serra Leoa",
  "Singapore": "Cingapura",
  "Slovakia": "Eslováquia",
  "Slovenia": "Eslovênia",
  "Solomon Islands": "Ilhas Salomão",
  "Somalia": "Somália",
  "South Africa": "África do Sul",
  "South Sudan": "Sudão do Sul",
  "Spain": "Espanha",
  "Sri Lanka": "Sri Lanka",
  "Sudan": "Sudão",
  "Suriname": "Suriname",
  "Sweden": "Suécia",
  "Switzerland": "Suíça",
  "Syria": "Síria",
  "Taiwan": "Taiwan",
  "Tajikistan": "Tajiquistão",
  "Tanzania": "Tanzânia",
  "Thailand": "Tailândia",
  "Togo": "Togo",
  "Tonga": "Tonga",
  "Trinidad and Tobago": "Trinidad e Tobago",
  "Tunisia": "Tunísia",
  "Turkey": "Turquia",
  "Turkmenistan": "Turcomenistão",
  "Tuvalu": "Tuvalu",
  "Uganda": "Uganda",
  "Ukraine": "Ucrânia",
  "United Arab Emirates": "Emirados Árabes Unidos",
  "United Kingdom": "Reino Unido",
  "United States": "Estados Unidos",
  "Uruguay": "Uruguai",
  "Uzbekistan": "Uzbequistão",
  "Vanuatu": "Vanuatu",
  "Vatican City": "Cidade do Vaticano",
  "Venezuela": "Venezuela",
  "Vietnam": "Vietnã",
  "Yemen": "Iêmen",
  "Zambia": "Zâmbia",
  "Zimbabwe": "Zimbábue"
};




        
        
        if(lang.toLowerCase() == 'vi'){
            if(vn.hasOwnProperty(string)){
                return vn[string];
            }
        }else if(lang.toLowerCase() == 'pt-br'){
            if(brazil.hasOwnProperty(string)){
                console.log(string);
                return brazil[string];
            }
        }

        return string;
    }

    function Plugin(element, options) {
        this.element = element;
        this._name = widgetLiveScore;
        this._defaults = $.fn.widgetLiveScore.defaults;
        this.options = $.extend({}, this._defaults, options);

        this.init();
    }

    $.extend(Plugin.prototype, {

        // Initialization logic
        init: function () {
            this.buildCache();
            this.bindEvents();
            this.initialContent(this.options.liveScoreDetailsAjaxURL, this.options.action, this.options.Widgetkey, this.options.timezone);
        },

        // Remove plugin instance completely
        destroy: function () {
            this.unbindEvents();
            this.$element.removeData();
        },

        // Cache DOM nodes for performance
        buildCache: function () {
            this.$element = $(this.element);
        },

        // Bind events that trigger actions
        bindEvents: function () {
            var plugin = this;
        },

        // Unbind events that trigger actions
        unbindEvents: function () {
            this.$element.off('.' + this._name);
        },

        initialContent: function (liveScoreDetailsAjaxURL, action, Widgetkey, timezone) {

            // Get widget location
            var liveScoreLocation = $(this.element);

            // Construct the Live Games Tab click
            $('<a href="#liveGame" class="titleWidget nav-tab">Live Games</a>').prependTo($(liveScoreLocation));
            // Construct the All Games Tab click
            $('<a href="#allGame" class="titleWidget nav-tab nav-tab-active">All Games</a>').prependTo($(liveScoreLocation));
            // Construct the Calendar Tab click
            $('<div id="liveScoreCalendarContainer"></div>').prependTo($(liveScoreLocation));

            // If window size is less then 769px we add loading screen
            var windowWidthSize = $(window).width();
            if (windowWidthSize < 769) {
                $('<div class="loading">Loading&#8230;</div>').prependTo($(liveScoreLocation));
            }

            // Add hook in HTML for All Games Tab content infos and make it active
            $(liveScoreLocation).append('<div id="allGame" class="allGame-nav-tab-wrapper tab-content active"></div>');

            // Adding the "widgetLiveScore" class for styling and easyer targeting
            liveScoreLocation.addClass('widgetLiveScore');

            // If backgroundColor setting is set, here we activate the color
            if (this.options.backgroundColor) {
                liveScoreLocation.css('background-color', this.options.backgroundColor);
            }

            // If widgetWidth setting is set, here we set the width of the list 
            if (this.options.widgetWidth) {
                liveScoreLocation.css('width', this.options.widgetWidth);
            }

            // Adding callendar with All Games for 3 days before and after current day
            var getTimeZoneForSlowConn = setInterval(function () {
                if (timeForFixtures.length > 0) {
                    getDateCalendar('liveScoreCalendarContainer', timeForFixtures, 'threeDayAfter', 3, 'addDateCalendar');
                    getDateCalendar('liveScoreCalendarContainer', timeForFixtures, 'twoDayAfter', 2, 'addDateCalendar');
                    getDateCalendar('liveScoreCalendarContainer', timeForFixtures, 'oneDayAfter', 1, 'addDateCalendar');
                    $('<a href="#" onclick="windowPreventOpening()" id="currentDayCalendar" class="thisDateForSelect callendarDays callendarDaysActive" data-dateclicked="' + timeForFixtures + '">Current Day</a>').prependTo($('#liveScoreCalendarContainer'));
                    getDateCalendar('liveScoreCalendarContainer', timeForFixtures, 'oneDayBefore', 1, 'substractDateCalendar');
                    getDateCalendar('liveScoreCalendarContainer', timeForFixtures, 'twoDayBefore', 2, 'substractDateCalendar');
                    getDateCalendar('liveScoreCalendarContainer', timeForFixtures, 'threeDayBefore', 3, 'substractDateCalendar');

                    // When a day is clicked we make it active and populate All Games tab
                    $('#liveScoreCalendarContainer').find('.thisDateForSelect').unbind('click').on('click', function () {
                        $(this).addClass('callendarDaysActive');
                        $(this).siblings().removeClass('callendarDaysActive');
                        $('#allGame').html('<div class="loading">Loading&#8230;</div>').addClass('active').siblings().removeClass('active');
                        $('.widgetLiveScore .titleWidget').removeClass('nav-tab-active').first().addClass('nav-tab-active');
                        // Aditionally we send a request to server for infos
                        $.ajax({
                            url: liveScoreDetailsAjaxURL,
                            cache: false,
                            data: {
                                action: 'get_events',
                                Widgetkey: Widgetkey,
                                from: $(this).attr("data-dateclicked"),
                                to: $(this).attr("data-dateclicked"),
                                timezone: getTimeZone(),
                                withOutDetails: true
                            },
                            dataType: 'json'
                        }).done(function (res) {
                            // Hide loading screen
                            $('.loading').hide();
                            // Construct the section for All Games in that specific day
                            $('#allGame').append('<section id="allGameContentTable"></section>');
                            // If server send results we populate HTML with sended information
                            if (!res.error) {
                                // Order information by Event Time and then group them by Country Name
                                var windowWidthSize = $(window).width();
                                var sorted = sortByKey(res, 'key');
                                var sorted_array = sortByKeyAsc(sorted, "match_time");
                                var groubedByTeam = groupBy(sorted_array, 'country_name');
                                const orderedLeagues = {};
                                Object.keys(groubedByTeam).sort().forEach(function (key) {
                                    orderedLeagues[key] = groubedByTeam[key];
                                });
                                var htmlConstructor = '<div class="tablele-container">';
                                $.each(orderedLeagues, function (keyes, valuees) {
                                    var sortedValuess = groupBy(valuees, 'league_name');
                                    $.each(sortedValuess, function (key, value) {
                                        htmlConstructor += '<div class="flex-table header" role="rowgroup">';
                                        htmlConstructor += '<div class="countryListDisplays"><div class="countryLogo" style="background-image: url(\'' + ((value[0].country_logo == '' || value[0].country_logo == null) ? noImgLocation.noImgUrl : value[0].country_logo) + '\');"></div>';
                                        htmlConstructor += '<div title="' + ((key) ? key : 'Team') + '" class="flex-row keyOfTeam" onclick="windowOpenLeagueInfo(\'' + value[0].league_id + '\',\'' + value[0].league_name + '\', \'' + value[0].league_logo + '\')" role="columnheader">' + ((value[0].country_name) ? '<span class="countryOfTeams">' + value[0].country_name + ':</span>' : '') + ' ' + ((key) ? key : 'Team') + '</div>';
                                        htmlConstructor += '</div>';
                                        htmlConstructor += '</div>';
                                        htmlConstructor += '<div class="table__body_fixtures">';
                                        $.each(value, function (keys, values) {
                                            if (values.match_hometeam_score == null || values.match_awayteam_score == null) {
                                                var event_final_result_class_away = '';
                                                var event_final_result_class_home = '';
                                            } else {
                                                var event_final_result_class_away = values.match_awayteam_score;
                                                var event_final_result_class_home = values.match_hometeam_score;
                                            }
                                            if (values.match_status) {
                                                var removeNumericAdd = values.match_status.replace('+', '');
                                            } else {
                                                var removeNumericAdd = values.match_status;
                                            }
                                            var generatedLink = values.country_name + '/' + values.league_name + '/' + values.match_hometeam_name + '-vs-' + values.match_awayteam_name + '/' + values.match_date + '/' + values.match_id;
                                            var newGeneratedLink = generatedLink.replace(/\s/g, '-');
                                            htmlConstructor += '<a href="widgetMatchResults.html?' + newGeneratedLink + '" class="' + ((windowWidthSize < 769) ? 'container-mobile-grid' : '') + ' flex-table row ' + values.match_id + '" role="rowgroup" onclick="event.preventDefault(); windowOpenMatch(' + values.match_id + ', false, \'' + values.match_date + '\', \'' + values.country_name + '\', \'' + values.league_name + '\', \'' + values.match_hometeam_name + '\', \'' + values.match_awayteam_name + '\')" title="Click for match detail!" style="transition: none;">';
                                            htmlConstructor += '<div class="' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell"> ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? values.match_status + ((removeNumericAdd == 'Half Time') ? '' : '\'') : values.match_time) + '</div>';
                                            htmlConstructor += '<div class="' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? 'd-none-mobile-div' : (((values.match_status == null) || values.match_status == '') ? 'd-none-mobile-div' : '')) + ' ' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails secondMatchDetails" role="cell">' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? '' : ((values.match_status == null) ? '' : values.match_status)) + '</div>';
                                            htmlConstructor += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                                            if (event_final_result_class_home > event_final_result_class_away) {
                                                htmlConstructor += '<div class="flex-row matchHomeTeam winningMatchStyle" role="cell">' + values.match_hometeam_name + '</div>';
                                                htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                                htmlConstructor += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                                            } else if (event_final_result_class_home < event_final_result_class_away) {
                                                htmlConstructor += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                                                htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                                htmlConstructor += '<div class="flex-row matchAwayTeam winningMatchStyle" role="cell">' + values.match_awayteam_name + '</div>';
                                            } else if (event_final_result_class_home == event_final_result_class_away) {
                                                htmlConstructor += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                                                htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                                htmlConstructor += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                                            }
                                            htmlConstructor += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                                            htmlConstructor += '<div class="' + ((((windowWidthSize < 769) && (values.match_hometeam_score == '') && (values.match_awayteam_score == '')) || ((windowWidthSize < 769) && (values.match_hometeam_score == null) && (values.match_awayteam_score == null))) ? 'd-none-mobile-div' : '') + ' flex-row matchAwayTeam firstHalfStyle ' + ((windowWidthSize < 769) ? 'mobile-firstHalfStyle d-none-mobile-div' : '') + '" role="cell">' + (((values.match_hometeam_score) && (values.match_awayteam_score)) ? '(' + (values.match_hometeam_score + ' - ' + values.match_awayteam_score) + ')' : '') + '</div>';
                                            htmlConstructor += '</a>';
                                        });
                                        htmlConstructor += '</div>';
                                    });
                                });
                                htmlConstructor += '</div>';
                                $('#allGameContentTable').append(htmlConstructor);

                            } else {

                                // If server dont send results we populate HTML with "Sorry, no data!"
                                var htmlConstructor = '<div class="tablele-container">';
                                htmlConstructor += '<p class="" style="border-left: solid 0px transparent; margin-left:auto; margin-right:auto; margin-top: 5px;">Sorry, no data!</p>';
                                htmlConstructor += '</div>';
                                $('#allGameContentTable').append(htmlConstructor);
                            }

                        }).fail(function (error) {

                        });

                    });

                    // We send a request to server for All Games infos
                    $.ajax({
                        url: liveScoreDetailsAjaxURL,
                        cache: false,
                        data: {
                            action: 'get_events',
                            Widgetkey: Widgetkey,
                            from: timeForFixtures,
                            to: timeForFixtures,
                            timezone: getTimeZone(),
                            withOutDetails: true
                        },
                        dataType: 'json'
                    }).done(function (res) {

                        // Hide loading screen
                        $('.loading').hide();
                        // Construct the section for today Games
                        $('#allGame').append('<section id="allGameContentTable"></section>');
                        // If server send results we populate HTML with sended information
                        if (!res.error) {

//                            console.log('Response: ', res);
                            // Order information by Event Time and then group them by Country Name
                            var windowWidthSize = $(window).width();
                            var sorted = sortByKey(res, 'key');

//                            console.log('sorted: ', sorted);

                            var sorted_array = sortByKeyAsc(sorted, "match_time");
                            var groubedByTeam = groupBy(sorted_array, 'country_name');

                            // console.log('groubedByTeam: ', groubedByTeam);

                            // NTNtxt();

                            var orderWithCountry = ['eurocups', 'England', 'France', 'Germany', 'Italy', 'Spain'];

                            var result = {};
                            var another = {};
//                            orderWithCountry.forEach(function (key) {
//                                Object.keys(groubedByTeam).forEach(function (item) {
//                                    if (item == key) {
//                                        result[key] = groubedByTeam[key];
//                                    } else {
//                                        another[key] = groubedByTeam[key];
//
//                                    }
//                                });
//                            });

                            Object.keys(groubedByTeam).forEach(function (key) {
                                if (orderWithCountry.indexOf(key) != -1) {
                                    result[key] = groubedByTeam[key];
                                } else {
                                    another[key] = groubedByTeam[key];
                                }
                            });

                            // console.log('another: ', another);
                            // console.log('result: ', result);

//                            const orderedLeagues = {};
//                            Object.keys(groubedByTeam).sort().forEach(function (key) {
//                                orderedLeagues[key] = groubedByTeam[key];
//                            });
                            const orderedLeagues = {...result, ...another};

                            var htmlConstructor = '<div class="tablele-container">';
                            $.each(orderedLeagues, function (keyes, valuees) {

                                var active = '';
                                if (orderWithCountry.indexOf(keyes) != -1) {
                                    active = 'active';
                                }
                                // console.log('keyes: ', keyes);
                                // console.log('valuees: ', valuees);
                                var sortedValuess = groupBy(valuees, 'league_name');
                                $.each(sortedValuess, function (key, value) {



                                    htmlConstructor += `<div class="wp-league_name ${active}">`;
                                    htmlConstructor += '<div class="flex-table header" role="rowgroup">';
                                    htmlConstructor += '<div class="countryListDisplays"><div class="countryLogo" style="background-image: url(\'' + ((value[0].country_logo == '' || value[0].country_logo == null) ? noImgLocation.noImgUrl : value[0].country_logo) + '\');"></div>';
                                    htmlConstructor += '<div title="' + ((key) ? key : 'Team') + '" class="flex-row keyOfTeam" onclick="windowOpenLeagueInfo(\'' + value[0].league_id + '\',\'' + value[0].league_name + '\', \'' + value[0].league_logo + '\')" role="columnheader">' + ((value[0].country_name) ? '<span class="countryOfTeams">' + translateText(value[0].country_name) + ':</span>' : '') + ' ' + ((key) ? key : 'Team') + '</div>';
                                    htmlConstructor += '</div>';
                                    htmlConstructor += '</div>';
                                    htmlConstructor += '<div class="table__body_fixtures asd123">';
                                    $.each(value, function (keys, values) {
                                        if (values.match_hometeam_score == null || values.match_awayteam_score == null) {
                                            var event_final_result_class_away = '';
                                            var event_final_result_class_home = '';
                                        } else {
                                            var event_final_result_class_away = values.match_awayteam_score;
                                            var event_final_result_class_home = values.match_hometeam_score;
                                        }
                                        if (values.match_status) {
                                            var removeNumericAdd = values.match_status.replace('+', '');
                                        } else {
                                            var removeNumericAdd = values.match_status;
                                        }
                                        var generatedLink = values.country_name + '/' + values.league_name + '/' + values.match_hometeam_name + '-vs-' + values.match_awayteam_name + '/' + values.match_date + '/' + values.match_id;
                                        var newGeneratedLink = generatedLink.replace(/\s/g, '-');
                                        htmlConstructor += '<a href="widgetMatchResults.php?' + newGeneratedLink + '" class="' + ((windowWidthSize < 769) ? 'container-mobile-grid' : '') + ' flex-table row ' + values.match_id + '" role="rowgroup" onclick="event.preventDefault(); windowOpenMatch(' + values.match_id + ', false, \'' + values.match_date + '\', \'' + values.country_name + '\', \'' + values.league_name + '\', \'' + values.match_hometeam_name + '\', \'' + values.match_awayteam_name + '\')" title="Click for match detail!" style="transition: none;">';
                                        htmlConstructor += '<div class="' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell"> ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? values.match_status + ((removeNumericAdd == 'Half Time') ? '' : '\'') : values.match_time) + '</div>';
                                        htmlConstructor += '<div class="' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? 'd-none-mobile-div' : (((values.match_status == null) || values.match_status == '') ? 'd-none-mobile-div' : '')) + ' ' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails secondMatchDetails" role="cell">' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? '' : ((values.match_status == null) ? '' : values.match_status)) + '</div>';
                                        htmlConstructor += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                                        if (event_final_result_class_home > event_final_result_class_away) {
                                            htmlConstructor += '<div class="flex-row matchHomeTeam winningMatchStyle" role="cell">' + values.match_hometeam_name + '</div>';
                                            htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                            htmlConstructor += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                                        } else if (event_final_result_class_home < event_final_result_class_away) {
                                            htmlConstructor += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                                            htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                            htmlConstructor += '<div class="flex-row matchAwayTeam winningMatchStyle" role="cell">' + values.match_awayteam_name + '</div>';
                                        } else if (event_final_result_class_home == event_final_result_class_away) {
                                            htmlConstructor += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                                            htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                            htmlConstructor += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                                        }
                                        htmlConstructor += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                                        htmlConstructor += '<div class="' + ((((windowWidthSize < 769) && (values.match_hometeam_score == '') && (values.match_awayteam_score == '')) || ((windowWidthSize < 769) && (values.match_hometeam_score == null) && (values.match_awayteam_score == null))) ? 'd-none-mobile-div' : '') + ' flex-row matchAwayTeam firstHalfStyle ' + ((windowWidthSize < 769) ? 'mobile-firstHalfStyle d-none-mobile-div' : '') + '" role="cell">' + (((values.match_hometeam_score) && (values.match_awayteam_score)) ? '(' + (values.match_hometeam_score + ' - ' + values.match_awayteam_score) + ')' : '') + '</div>';
                                        htmlConstructor += '</a>';
                                    });
                                    htmlConstructor += '</div>';
                                    htmlConstructor += '</div>';
                                });
                            });
                            htmlConstructor += '</div>';
                            $('#allGameContentTable').append(htmlConstructor);

                        } else {

                            // If server dont send results we populate HTML with "Sorry, no data!"
                            var htmlConstructor = '<div class="tablele-container">';
                            htmlConstructor += '<p class="" style="border-left: solid 0px transparent; margin-left:auto; margin-right:auto; margin-top: 5px;">Sorry, no data!</p>';
                            htmlConstructor += '</div>';
                            $('#allGameContentTable').append(htmlConstructor);
                        }
                    }).fail(function (error) {

                    });


                    // Add hook in HTML for Live Games Tab content infos
                    var htmlConstructorResults = '<div id="liveGame" class="liveGame-nav-tab-wrapper tab-content">';
                    function loadLivescore() {
                        // Get previous day for live score
                        var getPreviousDay = new Date(timeForFixtures + "T00:00");
                        getPreviousDay.setDate(getPreviousDay.getDate() - 1);
                        var d = getPreviousDay.getDate();
                        var m = getPreviousDay.getMonth() + 1;
                        var y = getPreviousDay.getFullYear();
                        var previousDay = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);

                        // Call Livescore Data from server
                        $.ajax({
                            url: liveScoreDetailsAjaxURL,
                            cache: false,
                            data: {
                                action: 'get_events',
                                match_live: '1',
                                from: previousDay,
                                to: timeForFixtures,
                                Widgetkey: Widgetkey,
                                timezone: getTimeZone(),
                                withOutDetails: true
                            },
                            dataType: 'json'
                        }).done(function (res) {
                            // Clear the Live Games HTML
                            $('#liveGame').html('');
                            // Construct the section for Live Games
                            $('#liveGame').append('<section id="liveGameContentTable"></section>');
                            // If server send results we populate HTML with sended information
                            if (!res.error) {
                                // Order information by Event Time and then group them by Country Name
                                var windowWidthSize = $(window).width();
                                var sorted = sortByKey(res, 'key');
                                var sorted_array = sortByKeyAsc(sorted, "match_time");
                                var groubedByTeam = groupBy(sorted_array, 'country_name');
                                const orderedLeagues = {};
                                Object.keys(groubedByTeam).sort().forEach(function (key) {
                                    orderedLeagues[key] = groubedByTeam[key];
                                });
                                var htmlConstructor = '<div class="tablele-container">';
                                $.each(orderedLeagues, function (keyes, valuees) {
                                    var sortedValuess = groupBy(valuees, 'league_name');
                                    $.each(sortedValuess, function (key, value) {
                                        htmlConstructor += '<div class="flex-table header" role="rowgroup">';
                                        htmlConstructor += '<div class="countryListDisplays"><div class="countryLogo" style="background-image: url(\'' + ((value[0].country_logo == '' || value[0].country_logo == null) ? noImgLocation.noImgUrl : value[0].country_logo) + '\');"></div>';
                                        htmlConstructor += '<div title="' + ((key) ? key : 'Team') + '" class="flex-row keyOfTeam" onclick="windowOpenLeagueInfo(\'' + value[0].league_id + '\',\'' + value[0].league_name + '\', \'' + value[0].league_logo + '\')" role="columnheader">' + ((value[0].country_name) ? '<span class="countryOfTeams">' + value[0].country_name + ':</span>' : '') + ' ' + ((key) ? key : 'Team') + '</div>';
                                        htmlConstructor += '</div>';
                                        htmlConstructor += '</div>';
                                        htmlConstructor += '<div class="table__body_fixtures ">';
                                        $.each(value, function (keys, values) {
                                            if (values.match_hometeam_score == null || values.match_awayteam_score == null) {
                                                var event_final_result_class_away = '';
                                                var event_final_result_class_home = '';
                                            } else {
                                                var event_final_result_class_away = values.match_awayteam_score;
                                                var event_final_result_class_home = values.match_hometeam_score;
                                            }
                                            if (values.match_status) {
                                                var removeNumericAdd = values.match_status.replace('+', '');
                                            } else {
                                                var removeNumericAdd = values.match_status;
                                            }
                                            var generatedLink = values.country_name + '/' + values.league_name + '/' + values.match_hometeam_name + '-vs-' + values.match_awayteam_name + '/' + values.match_date + '/' + values.match_id;
                                            var newGeneratedLink = generatedLink.replace(/\s/g, '-');
                                            htmlConstructor += '<a href="widgetMatchResults.php?' + newGeneratedLink + '" class="' + ((windowWidthSize < 769) ? 'container-mobile-grid' : '') + ' flex-table row ' + values.match_id + '" role="rowgroup" onclick="event.preventDefault(); windowOpenMatch(' + values.match_id + ', false, \'' + values.match_date + '\', \'' + values.country_name + '\', \'' + values.league_name + '\', \'' + values.match_hometeam_name + '\', \'' + values.match_awayteam_name + '\')" title="Click for match detail!" style="transition: none;">';
                                            htmlConstructor += '<div class="' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell"> ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? values.match_status + ((removeNumericAdd == 'Half Time') ? '' : '\'') : values.match_time) + '</div>';
                                            htmlConstructor += '<div class="' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? 'd-none-mobile-div' : ((values.match_status == null) ? 'd-none-mobile-div' : '')) + ' ' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails secondMatchDetails" role="cell">' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? '' : ((values.match_status == null) ? '' : values.match_status)) + '</div>';
                                            htmlConstructor += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                                            if (event_final_result_class_home > event_final_result_class_away) {
                                                htmlConstructor += '<div class="flex-row matchHomeTeam winningMatchStyle" role="cell">' + values.match_hometeam_name + '</div>';
                                                htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                                htmlConstructor += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                                            } else if (event_final_result_class_home < event_final_result_class_away) {
                                                htmlConstructor += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                                                htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                                htmlConstructor += '<div class="flex-row matchAwayTeam winningMatchStyle" role="cell">' + values.match_awayteam_name + '</div>';
                                            } else if (event_final_result_class_home == event_final_result_class_away) {
                                                htmlConstructor += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                                                htmlConstructor += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                                                htmlConstructor += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                                            }
                                            htmlConstructor += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                                            htmlConstructor += '<div class="' + ((((windowWidthSize < 769) && (values.match_hometeam_score == '') && (values.match_awayteam_score == '')) || ((windowWidthSize < 769) && (values.match_hometeam_score == null) && (values.match_awayteam_score == null))) ? 'd-none-mobile-div' : '') + ' flex-row matchAwayTeam firstHalfStyle ' + ((windowWidthSize < 769) ? 'mobile-firstHalfStyle d-none-mobile-div' : '') + '" role="cell">' + (((values.match_hometeam_score) && (values.match_awayteam_score)) ? '(' + (values.match_hometeam_score + ' - ' + values.match_awayteam_score) + ')' : '') + '</div>';
                                            htmlConstructor += '</a>';
                                        });
                                        htmlConstructor += '</div>';
                                    });
                                });
                                htmlConstructor += '</div>';
                                $('#liveGameContentTable').append(htmlConstructor);

                            } else {

                                // If server dont send results we populate HTML with "Sorry, no data!"
                                var htmlConstructor = '<div class="tablele-container">';
                                htmlConstructor += '<p class="" style="border-left: solid 0px transparent; margin-left:auto; margin-right:auto; margin-top: 5px;">Sorry, no data!</p>';
                                htmlConstructor += '</div>';
                                $('#liveGameContentTable').append(htmlConstructor);
                            }
                        }).fail(function (error) {

                        });
                        setTimeout(function () {
                            loadLivescore();
                        }, 300000);
                    }

                    loadLivescore();

                    htmlConstructorResults += '</div>';
                    $(liveScoreLocation).append(htmlConstructorResults);
                    // Switching tabs on click
                    $('.widgetLiveScore .nav-tab').unbind('click').on('click', function (e) {
                        e.preventDefault();
                        //Toggle tab link
                        $(this).addClass('nav-tab-active').siblings().removeClass('nav-tab-active');
                        //Toggle target tab
                        $($(this).attr('href')).addClass('active').siblings().removeClass('active');
                    });

                    clearInterval(getTimeZoneForSlowConn);
                }
            }, 10);
        },

        callback: function () {

        }

    });

    $.fn.widgetLiveScore = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + widgetLiveScore)) {
                $.data(this, "plugin_" + widgetLiveScore, new Plugin(this, options));
            }
        });
        return this;
    };

    $.fn.widgetLiveScore.defaults = {
        // Widgetkey will be set in jqueryGlobals.js and can be obtained from your account
        Widgetkey: Widgetkey,
        // Action for this widget
        action: 'get_events',
        // Link to server data
        liveScoreDetailsAjaxURL: 'https://apiv3.apifootball.com/?',
        // Background color for your Leagues Widget
        backgroundColor: null,
        // Width for your widget
        widgetWidth: '81%',
        // Get the time zone of your location
        timezone: getTimeZone()
    };

    socketsLive();

    function socketsLive() {
        var socket = new WebSocket('wss://wss.apifootball.com/livescore?Widgetkey=' + Widgetkey + '&timezone=' + getTimeZone());
        // Define the
        socket.onmessage = function (e) {

            if (e.data) {
                var data = JSON.parse(e.data);

                var windowWidthSize = $(window).width();
                $.each(data, function (keys, values) {
                    if (values.match_hometeam_score == null || values.match_awayteam_score == null) {
                        var event_final_result_class_away = '';
                        var event_final_result_class_home = '';
                    } else {
                        var event_final_result_class_away = values.match_awayteam_score;
                        var event_final_result_class_home = values.match_hometeam_score;
                    }
                    if (values.match_status) {
                        var removeNumericAdd = values.match_status.replace('+', '');
                    } else {
                        var removeNumericAdd = values.match_status;
                    }
                    var newDataForMatch = '<div class="' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell"> ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? values.match_status + ((removeNumericAdd == 'Half Time') ? '' : '\'') : values.match_time) + '</div>';
                    newDataForMatch += '<div class="' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? 'd-none-mobile-div' : ((values.match_status == null) ? 'd-none-mobile-div' : '')) + ' ' + ((windowWidthSize < 769) ? 'item-mobile-grid' : '') + ' flex-row matchDetails secondMatchDetails" role="cell">' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? '' : ((values.match_status == null) ? '' : values.match_status)) + '</div>';
                    newDataForMatch += ((windowWidthSize < 769) ? '<div class="break-mobile-grid"></div>' : '');
                    if (event_final_result_class_home > event_final_result_class_away) {
                        newDataForMatch += '<div class="flex-row matchHomeTeam winningMatchStyle" role="cell">' + values.match_hometeam_name + '</div>';
                        newDataForMatch += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                        newDataForMatch += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                    } else if (event_final_result_class_home < event_final_result_class_away) {
                        newDataForMatch += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                        newDataForMatch += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                        newDataForMatch += '<div class="flex-row matchAwayTeam winningMatchStyle" role="cell">' + values.match_awayteam_name + '</div>';
                    } else if (event_final_result_class_home == event_final_result_class_away) {
                        newDataForMatch += '<div class="flex-row matchHomeTeam" role="cell">' + values.match_hometeam_name + '</div>';
                        newDataForMatch += '<div class="flex-row matchDelimiter ' + (($.isNumeric(removeNumericAdd) || (removeNumericAdd == 'Half Time')) ? ' matchIsLive' : '') + '" role="cell">' + ((values.match_hometeam_score && values.match_awayteam_score) ? (values.match_hometeam_score + ' - ' + values.match_awayteam_score) : '-') + '</div>';
                        newDataForMatch += '<div class="flex-row matchAwayTeam" role="cell">' + values.match_awayteam_name + '</div>';
                    }
                    newDataForMatch += '<div class="' + ((((windowWidthSize < 769) && (values.match_hometeam_score == '') && (values.match_awayteam_score == '')) || ((windowWidthSize < 769) && (values.match_hometeam_score == null) && (values.match_awayteam_score == null))) ? 'd-none-mobile-div' : '') + ' flex-row matchAwayTeam firstHalfStyle ' + ((windowWidthSize < 769) ? 'mobile-firstHalfStyle d-none-mobile-div' : '') + '" role="cell">' + (((values.match_hometeam_score) && (values.match_awayteam_score)) ? '(' + (values.match_hometeam_score + ' - ' + values.match_awayteam_score) + ')' : '') + '</div>';
                    $('.' + values.match_id).html('').html(newDataForMatch);
                });
            } else {
                // If server dont send new data we populate console.log with "No new data!"
                console.log('No new data!');
            }
        }
        socket.onclose = function () {
            // connection closed, discard old websocket and create a new one in 5s
            socket = null;
            setTimeout(socketsLive, 5000);
        }

    }

})(jQuery, window, document);


(function($){
    $(document).ready(function() {
        $(document).on('click','.wp-league_name .flex-table.header',function (e) {
            if($(this).parent().hasClass('active')){
                $(this).parent().removeClass('active');
            }else{
                $(this).parent().addClass('active');
            }
        });
    });    
})(jQuery)