<div class="wrap">
	<?php echo "<h2>" . __( 'Football Widget - Settings', 'oscimp_trdom' ) . "</h2>"; ?>
    <hr>
    <h3>To add football widget insert shortcode <strong>[footballwidget]</strong> into page or post. Copy/paste. Easy setup.
    </h3>
    <p style="margin-top: 0;">If you get error <strong>"Updating failed. The response is not a valid JSON response."</strong> when you save page/post its because of the "Gutenberg Editor" (default editor for WordPress 5+) but shortcode will be saved on page/post. For fix try using any other editors or the official plugin "Classic Editor".</p>
    <style>
        .buttonToggleDash {
            min-height: 29px;
        }
    </style>
    <div class="form-group">
        <hr>
        <h3>Set Widget Key*</h3>
        <div>
            <input style="width: 50%;" id="ms_api_key" type="text" class=""
                   value="<?php echo ms_Main::$settings['ms_api_key']; ?>">

            <button class="buttonToggleDash" style="display: none;" type="button" onclick="ms_click_api_key();">Change
            </button>
        </div>
        <p style="margin-top: 0;">*Get your widget key from your account <a target="_blank" href="https://apifootball.com/wpwidgets/full/download/">click here</a>
        </p>
        <hr>
        <h3>Set primary color</h3>

        <div class="display: inline-block;">
            <div style="display: inline-block; vertical-align: middle;">
                <input id="ms_color_one" type="text" class="my-color-field" style="display: none;"
                       value="<?php echo ms_Main::$settings['ms_color_one']; ?>">
            </div>
            <div style="display: inline-block; vertical-align: middle;">
                <button class="buttonToggleDash" style="display: none; margin: 0 6px 6px 0;" type="button"
                        onclick="ms_click_color_one();">Change
                </button>
            </div>
        </div>
        <p style="margin-top: 0;">Default color is #0088cc</p>
        <hr>
        <h3>Set secondary color</h3>

        <div class="display: inline-block;">
            <div style="display: inline-block; vertical-align: middle;">
                <input id="ms_color_two" type="text" class="my-color-field" style="display: none;"
                       value="<?php echo ms_Main::$settings['ms_color_two']; ?>">
            </div>
            <div style="display: inline-block; vertical-align: middle;">
                <button class="buttonToggleDash" style="display: none; margin: 0 6px 6px 0;" type="button"
                        onclick="ms_click_color_two();">Change
                </button>
            </div>
        </div>
        <p style="margin-top: 0;">Default color is #004467</p>
        <hr>
        <h3>Set tertiary color</h3>
        <div class="display: inline-block;">
            <div style="display: inline-block; vertical-align: middle;">
                <input id="ms_color_three" type="text" class="my-color-field" style="display: none;"
                       value="<?php echo ms_Main::$settings['ms_color_three']; ?>">
            </div>
            <div style="display: inline-block; vertical-align: middle;">
                <button class="buttonToggleDash" style="display: none; margin: 0 6px 6px 0;" type="button"
                        onclick="ms_click_color_three();">Change
                </button>
            </div>
        </div>
        <p style="margin-top: 0;">Default color is #f1f1f1</p>
        <hr>
        <h3>Set widget width (value will be %)</h3>
        <input id="ms_widget_width" type="text" class="" value="<?php echo ms_Main::$settings['ms_widget_width']; ?>">
        <button class="buttonToggleDash" style="display: none;" type="button" onclick="ms_click_widget_width();">
            Change
        </button>
        <p style="margin-top: 0;">Optimal width is 19</p>
        <hr>
        <h3>Set preferential leagues*</h3>
        <input style="width: 50%;" id="ms_preferential_leagues" type="text" class=""
               value="<?php echo ms_Main::$settings['ms_preferential_leagues']; ?>">
        <button class="buttonToggleDash" style="display: none;" type="button"
                onclick="ms_click_preferential_leagues();">Change
        </button>
        <p style="margin-top: 0;">*To see complete list of leagues please <a target="_blank"
                                                      href="https://apifootball.com/soccer-football-api-coverage">click
                here</a></p>
        <hr>
        <h3>Display up to top widget button</h3>
        <select id="ms_up_to_top_button" style="margin-top: -5px;">
            <option value="yes" <?php echo ms_Main::$settings['ms_up_to_top_button'] == 'yes' ? 'selected' : ''; ?>>Yes</option>
            <option value="no" <?php echo ms_Main::$settings['ms_up_to_top_button'] == 'no' ? 'selected' : ''; ?>>No</option>
        </select>
        <button class="buttonToggleDash" style="display: none;" type="button"
                onclick="ms_click_up_to_top_button();">Change
        </button>
    </div>
</div>