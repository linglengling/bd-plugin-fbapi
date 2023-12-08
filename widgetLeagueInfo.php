<!DOCTYPE html>
<html>
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Football Widget</title>
    <?php include ('css/widgetLeague.php');?>
    <?php include ('css/widgetLeagueInfo.php');?>
	<script src="js/jquery.js"></script>
	<script src="js/jqueryGlobals.php"></script>
    <script src="js/jquery.widgetLeague.js?ver=1.2" type="text/javascript"></script>
</head>
<body>
	<header>
		<div class="menuBar">
			<p class="backButton">back</p>
		</div>
	</header>
	<section id="widgetLeague"></section>
</body>

<script type="text/javascript">

	$(document).ready(function() {
	 	$('#widgetLeague').unbind().removeData().html('').widgetLeague({
            'Widgetkey': getCookie('Widgetkey'),
            'league_id': sessionStorage.getItem('leagueInfoKey'),
            'league_name': sessionStorage.getItem('leagueInfoName'),
            'leagueLogo': sessionStorage.getItem('leagueInfoLogo'),
            'widgetWidth': '100%'
        });
	});

	// Added click function to header close window
	$('.backButton').click(function() {
	    window.close();
	}); 

</script>
</html>