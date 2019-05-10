<?PHP
/**
 * Main app shell for md:inmuseum.
 *
 * @author Joshua Ramon Enslin.
 */

$settings = json_decode(file_get_contents("config.json"), true);

echo '<!DOCTYPE HTML>
<html data-instnr="' . htmlspecialchars($settings['instnr']) . '" data-baseURL="' . htmlspecialchars($settings['baseURL']) . '">
<head>';
?>

    <script type="text/javascript" src="mdInMuseum.js" defer></script>
    <link href="static/css/mdInMuseum.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="static/js-aruco/samples/getusermedia/libs/polyfill.js"></script>

    <script type="text/javascript" src="static/js-aruco/samples/getusermedia/cv.js" async></script>
    <script type="text/javascript" src="static/js-aruco/samples/getusermedia/aruco.js" async></script>

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
                <span id="HeaderMoreParts"></span>
            </a>
        </h1>
    </header>

    <section id="tourBackground"></section>

    <main id="main">
    </main>

</body>
</html>
