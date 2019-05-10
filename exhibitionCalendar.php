<?PHP
/**
 * This file generates the event calendar for an institution.
 *
 * @author Joshua Ramon Enslin <joshua@museum-digital.de>
 */

$settings = json_decode(file_get_contents("config.json"), true);

echo '<!DOCTYPE HTML>
<html data-instnr="' . htmlspecialchars($settings['instnr']) . '" data-baseURL="' . htmlspecialchars($settings['baseURL']) . '">
<head>';
?>

    <script type="text/javascript" src="mdInMuseum.js" defer></script>
    <script type="text/javascript" src="mdCalendar.js" defer></script>
    <link href="static/css/mdInMuseum.css" rel="stylesheet" type="text/css" />
    <link href="static/css/mdCalendar.css" rel="stylesheet" type="text/css" />

    <link rel="manifest" href="./manifest.webmanifest">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <link rel="shortcut icon" sizes="16x16 32x32" href="./static/img/mdlogo-32px.png" />
    <link rel="shortcut icon" sizes="64x64" href="./static/img/mdlogo-64px.png" />
    <meta name="theme-color" content="#FFF" />
    <meta name="robots" content="noindex, follow" />

</head>
<body>

    <header>
        <h1>
            <a id="pageTitle" href="./">
                <span class="icons iconsHome">Im Museum</span>
                <span id="HeaderInstName"></span>
                <span id="HeaderMoreParts">Ausstellungskalender</span>
            </a>
        </h1>
    </header>

    <main id="main">

    <?PHP
    if (isset($_GET['y'])) $y = $_GET['y'];
    else $y = date("Y");
    if (isset($_GET['m'])) $m = $_GET['m'];
    else $m = date("m");

    $prevMonth = strtotime('-1 month', strtotime("$y-$m-01"));
    $nextMonth = strtotime('+1 month', strtotime("$y-$m-01"));

    echo '
        <section class="mdCalendar"
            data-year="' . $y . '" data-month="' . $m . '" data-colored="1"
            data-today="./exhibitionCalendar.php?y=' . date("Y") . '&m=' . date("m") . '"
            data-prev="./exhibitionCalendar.php?y=' . date("Y", $prevMonth) . '&m=' . date("m", $prevMonth) . '"
            data-next="./exhibitionCalendar.php?y=' . date("Y", $nextMonth) . '&m=' . date("m", $nextMonth) . '"
            data-src="' . htmlspecialchars($settings['baseURL']) . '/index.php?t=exhibitions_overview&calendar=1&y=' . $y . '&m=' . $m . "&instnr=" . $settings['instnr'] . '&output=json">
        </section>
    ';
    ?>

    </main>

</body>
</html>
