<!DOCTYPE html>
<html>
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Football Widget</title>
    <?php include ('css/widgetMatchResults.php');?>
	<script src="js/jquery.js"></script>
	<script src="js/jqueryGlobals.php"></script>
    <script src="js/jquery.widgetMatchResults.js?ver=1.2" type="text/javascript"></script>
</head>
<body>
	<header>
		<div class="menuBar">
			<p class="backButton">back</p>
		</div>
	</header>
	<div class="loading">Loading&#8230;</div>
	<section id="widgetMatchResults"></section>
</body>

<script type="text/javascript">

	$(document).ready(function() {
        var url = window.location.href;
        var getMatchIdFromLink = url.substring(url.lastIndexOf("/") + 1);

        if($.isNumeric(getMatchIdFromLink)){
            $('#widgetMatchResults').widgetMatchResults({
                match_id: getMatchIdFromLink
            });
        } else {
            $('#widgetMatchResults').widgetMatchResults();
        }
	});

</script>
</html>