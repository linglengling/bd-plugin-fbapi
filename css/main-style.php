<style>
.container-football-widget {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    padding-left: 0px;
    padding-right: 0px;
}
@import 'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap';
header {
    font-family: open sans;
}
@media (min-width: 1201px) {
    .container-football-widget {
        max-width: 1140px;
    }
}
@media (min-width: 993px) and (max-width: 1200px) {
    .container-football-widget {
        max-width: 960px;
    }
}
@media (min-width: 769px) and (max-width: 992px) {
    .container-football-widget {
        max-width: 100%;
    }
}
@media (min-width: 577px) and (max-width: 768px) {
    .container-football-widget {
        max-width: 100%;
    }
}
@media (max-width: 576px) {
    .container-football-widget {
        max-width: 100%;
    }
}
.mainPageHeader {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
}
.logo-img-size-index {
    max-width: 100%;
    height: 45px;
}
.mainPageHeader .switchButton {
    margin: 0;
    text-decoration: underline;
}
.mainPageHeader .switchButton:hover {
    cursor: pointer;
}
@media (max-width: 768px) {
    .mainPageHeader {
        display: inline-block;
        text-align: right;
    }
    .callendar-select-for-mobile {
        color: white;
        background-color: <?php echo ms_Main::$settings['ms_color_one']; ?>;
        float: left;
        border-color: <?php echo ms_Main::$settings['ms_color_one']; ?>;
        box-sizing: border-box;
        margin: 0 1.25rem 0 0;
        padding: .5rem 1.25rem;
        font-weight: bold;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }
    option:checked {
        color: <?php echo ms_Main::$settings['ms_color_one']; ?>;
        background-color: black;
    }
    .mainPageHeader .switchButton {
        padding: 0.3em 0em 1em 1em;
    }
}
</style>