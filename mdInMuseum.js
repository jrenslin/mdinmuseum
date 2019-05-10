(function() {

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }

    var debugging = false;


    let translations = {
        "en" : {
            "object_inventory_number"   : "Inventory Number",
            "object_type"               : "Object Type",
            "object_name"               : "Object Name",
            "object_description"        : "Description",
            "object_material_technique" : "Material / Technique",
            "object_dimensions"         : "Dimensions",
            "object_last_updated"       : "Last updated",
            "event"                     : "Event",
            "events"                    : "Events",
            "persinst/institution"      : "Person / Institution",
            "persinst"                  : "Person / Institution",
            "place"                     : "Place",
            "time"                      : "Time",
            "tag"                       : "Tag",
            "tags"                      : "Tags",
            "Inst"                      : "Inst",
            "Coll"                      : "Coll",
            "Obj"                       : "Obj",
            "Ser"                       : "Ser",
            "Exh"                       : "Exh",
            "Event"                     : "Event",
            "Tag"                       : "Tag",
            "Time"                      : "Time",
            "Place"                     : "Place",
            "Pers"                      : "Pers",
            "Actor"                     : "Actor",
            "Tour"                      : "Tour",
            "tagsHelp"                  : "Ein Klick auf ein Schlagwort führt zur Suche im Bestand des Museums.",
            "closedSince"               : "Closed since",
            "ExhibitionCalendar"        : "Exhibition calendar",
            "EventsCalendar"            : "Event calendar",
            "inOngoingExhibition"       : "In ongoing exhibition: ",
            "Search"                    : "Search",
            "SearchInCollections"       : "Search in collection",
            "SearchInExhibition"        : "Search in exhibition",
            "Options"                   : "Options",
            "Holdings"                  : "Collections",
            "Objects"                   : "Objects",
            "Collections"               : "Collections",
            "Supercollections"          : "Supercollections",
            "Subcollections"            : "Subcollections",
            "ongoingExhibitions"        : "Ongoing exhibitions",
            "StartingAt"                : "Starting at: ",
            "ObjectsOfCollection"       : "Objects from the collection",
            "ObjectsOfExhibition"       : "Objects from the exhibition",
            "eventType_1" : 'Created',
            "eventType_2" : 'Found',
            "eventType_3" : 'Published',
            "eventType_4" : 'Creation of reference',
            "eventType_5" : 'Was imaged',
            "eventType_6" : 'Was used',
            "eventType_7" : 'Written',
            "eventType_8" : 'Collected',
            "eventType_9" : 'Painted',
            "eventType_10" : 'Taken',
            "eventType_11" : 'Received',
            "eventType_12" : 'Printing plate produced',
            "eventType_13" : 'Sent',
            "eventType_14" : 'Issued',
            "eventType_15" : 'Signed',
            "eventType_16" : 'Type description',
            "eventType_19" : 'Drawn',
            "eventType_20" : 'Copied (by hand)',
            "eventType_21" : 'Has lived',
            "eventType_22" : '[Relationship to location]',
            "eventType_23" : '[Relation to person or institution]',
            "eventType_24" : '[Relation to time]',
            "eventType_25" : 'Commissioned',
            "eventType_26" : 'Printed',
            "eventType_27" : 'Recorded',
            "eventType_28" : 'Sung',
            "eventType_29" : 'Decor designed',
            "eventType_30" : 'Form designed',
            "eventType_31" : 'Modelled',
            "eventType_32" : 'Autographed',
            "eventType_33" : 'Mentioned',
            "eventType_34" : 'Buried',
            "eventType_35" : 'Intellectual creation',
        },
        "de" : {
            "object_inventory_number"   : "Inventarnummer",
            "object_type"               : "Objektart",
            "object_name"               : "Objekttitel",
            "object_description"        : "Beschreibung",
            "object_material_technique" : "Material / Technik",
            "object_dimensions"         : "Maße",
            "object_last_updated"       : "Zuletzt geupdated",
            "event"                     : "Ereignis",
            "events"                    : "Ereignisse",
            "persinst/institution"      : "Person / Institution",
            "persinst"                  : "Person / Institution",
            "place"                     : "Ort",
            "time"                      : "Zeit",
            "tag"                       : "Schlagwort",
            "tags"                      : "Schlagworte",
            "Inst"                      : "Inst",
            "Coll"                      : "Samm",
            "Obj"                       : "Obj",
            "Ser"                       : "Ser",
            "Exh"                       : "Auss",
            "Event"                     : "Veran",
            "Tag"                       : "Tag",
            "Time"                      : "Zeit",
            "Place"                     : "Ort",
            "Pers"                      : "Pers",
            "Actor"                     : "Akteur",
            "Tour"                      : "Tour",
            "tagsHelp"                  : "Ein Klick auf ein Schlagwort führt zur Suche im Bestand des Museums.",
            "closedSince"               : "Geschlossen seit",
            "ExhibitionCalendar"        : "Ausstellungskalendar",
            "EventsCalendar"            : "Veranstalungskalendar",
            "inOngoingExhibition"       : "In laufender Ausstellung: ",
            "Search"                    : "Suche",
            "SearchInCollections"       : "Suche in Bestand",
            "SearchInExhibition"        : "Suche in Ausstellung",
            "Options"                   : "Optionen",
            "Holdings"                  : "Bestände",
            "Objects"                   : "Objekte",
            "Collections"               : "Sammlungen",
            "Supercollections"          : "Übergeordnete Sammlungen",
            "Subcollections"            : "Untergeordnete Sammlungen",
            "ongoingExhibitions"        : "Laufende Ausstellungen",
            "StartingAt"                : "Beginnt ab: ",
            "ObjectsOfCollection"       : "Objekte der Sammlung",
            "ObjectsOfExhibition"       : "Objekte der Ausstellung",
			"eventType_1" : 'Hergestellt',
			"eventType_2" : 'Gefunden',
			"eventType_3" : 'Veröffentlicht',
			"eventType_4" : 'Vorlagenerstellung',
			"eventType_5" : 'Wurde abgebildet',
			"eventType_6" : 'Wurde genutzt',
			"eventType_7" : 'Verfasst',
			"eventType_8" : 'Gesammelt',
			"eventType_9" : 'Gemalt',
			"eventType_10" : 'Aufgenommen',
			"eventType_11" : 'Empfangen',
			"eventType_12" : 'Druckplatte hergestellt',
			"eventType_13" : 'Abgeschickt',
			"eventType_14" : 'Ausgefertigt',
			"eventType_15" : 'Unterzeichnet',
			"eventType_16" : 'Erstbeschreibung',
			"eventType_19" : 'Gezeichnet',
			"eventType_20" : 'Abgeschrieben',
			"eventType_21" : 'Hat gelebt',
			"eventType_22" : '[Geographischer Bezug]',
			"eventType_23" : '[Person-Körperschaft-Bezug]',
			"eventType_24" : '[Zeitbezug]',
			"eventType_25" : 'Beauftragt',
			"eventType_26" : 'Gedruckt',
			"eventType_27" : 'Gesprochen',
			"eventType_28" : 'Gesungen',
			"eventType_29" : 'Dekor entworfen',
			"eventType_30" : 'Form entworfen',
			"eventType_31" : 'Modelliert',
			"eventType_32" : 'Signiert',
			"eventType_33" : 'Wurde erwähnt',
			"eventType_34" : 'Vergraben',
			"eventType_35" : 'Geistige Schöpfung',
        },
    }

    /**
     * Function queryPage queries a web page and runs the specified function over the output.
     *
     * @param string   url      URL to query.
     * @param function func     Callback function to run on the request after loading.
     * @param boolean  debug    Enable / disable debug mode. Optional.
     * @param string   respType Response type. Optional. Defaults to "htm".
     *
     * @return boolean
     */
    function queryPage(url, func, debug = false, respType = "htm") {

        let request     = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader("Cache-Control", "no-cache");
        request.responseType = respType;
        request.send();
        request.onload = function() {

            func(request, debug);
        };

    }

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Returns a requested translation from an array in the currently used language.
     *
     * @param mixed[] list      Translation variable.
     * @param string  specifier Specifies which translation to get.
     *
     * @return string
     */
    function getTranslation(list, specifier) {

        let preferedLang = navigator.language.substr(0, 2);

        if (list[preferedLang] !== undefined && list[preferedLang][specifier] !== null) return list[preferedLang][specifier];
        return list["en"][specifier];

    }

    /**
     * Function to get all GET variables passed by user
     * Based on gion_13's answer at https://stackoverflow.com/questions/12049620/how-to-get-get-variables-value-in-javascript
     *
     * @return string[]
     */
    function getGETvars() {

        var output = {};
        if(document.location.toString().indexOf('?') !== -1) {
            var query = document.location
                           .toString()
                           // get the query string
                           .replace(/^.*?\?/, '')
                           // and remove any existing hash string (thanks, @vrijdenker)
                           .replace(/#.*$/, '')
                           .split('&');

            for(var i = 0, l = query.length; i < l; i++) {
                var aux = decodeURIComponent(query[i]).split('=');
                output[aux[0]] = aux[1];
            }
        }
        return (output);

    }

    /**
     * Removes all children of an element.
     *
     * @param {string} id ID of the element to tear down.
     *
     * @return {void}
     */
    function emptyElement(node) {
        while (node.firstChild) {
            emptyElement(node.firstChild);
        }
        node.parentElement.removeChild(node);
    }

    function parseJSON(request) {
        if (typeof request.response === "string" || request.response instanceof String) return JSON.parse(request.response);
        else return request.response;
    }


    function fetchInstitutionDataInit(instanceBaseURL, institutionID, displayInstPage) {

        let curURL = instanceBaseURL + "index.php?t=institution&instnr=" + institutionID + "&suinin=" + institutionID + "&output=json";

        console.log(curURL);
        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            // Enter institution name to page title
            document.getElementById("HeaderInstName").textContent = elements.institution_name;

            if (displayInstPage === true) handleInstitution(elements);

            return elements;

            }, debugging, "json");

    }


    /*
     * Initialize
     *
     */
    let getVars = getGETvars();

    let institutionID   = document.documentElement.getAttribute("data-instnr");
    let instanceBaseURL = document.documentElement.getAttribute("data-baseURL");

    let instData;
    // Check if start page is requested
    if (location.href.indexOf("htm") === -1 && location.href.indexOf("php") === -1)
        instData = fetchInstitutionDataInit(instanceBaseURL, institutionID, true);
    else
        instData = fetchInstitutionDataInit(instanceBaseURL, institutionID, false);

    let pageTitle = document.getElementById("HeaderMoreParts");
    let main = document.getElementById("main");
    let tourBackground = document.getElementById("tourBackground");

    let markersMap;

	queryPage(
		encodeURI("markers.json"),
		function (request) {

		let elements = parseJSON(request);
		markersMap = elements;

		}, debugging, "json");

    function navigatePage(windowTitle, curURL) {
        document.title = windowTitle;
        pageTitle.textContent = windowTitle;
        window.history.pushState('', windowTitle, 'index.php?' + curURL.replace(instanceBaseURL + "index.php?", "").replace("&output=json", ""));
    }

    /*
     * Functions that make use of global variables.
     */
    function handleInstitution(instData) {

        function drawStartPageTile(imgSrc, name, number, link = "") {

            let tileOuter = document.createElement("li");
            let tile = document.createElement("div");

            let img = document.createElement("img");
            img.src = imgSrc;
            tile.appendChild(img);

            let nameSpan = document.createElement("span");
            nameSpan.textContent = number + " " + name;
            tile.appendChild(nameSpan);

            if (link !== "") {

                tile.addEventListener('click', function() {
                    handleObjectSearch(link);
                });

            }

            tileOuter.appendChild(tile);

            return tileOuter;

        }

        function drawExhibitionTile(parentElement, exhibition) {

            let tile = document.createElement("li");

            let tileImage = document.createElement("img");
            tileImage.src = instanceBaseURL + exhibition.image.substr(3);
            tile.appendChild(tileImage);

            let tileTitle = document.createElement("span");
            tileTitle.textContent = exhibition.name;
            tile.appendChild(tileTitle);

            parentElement.appendChild(tile);

            tile.addEventListener("click", function() {
                exhibitonLink = instanceBaseURL + "index.php?t=exhibition&id=" + exhibition.exhibition_id + "&suinin=" + institutionID + "&output=json";
                handleExhibition(exhibitonLink)});

            return tile;

        }

        while (main.firstChild) {
            emptyElement(main.firstChild);
        }

        // Print about information
        let aboutArea = document.createElement("section");
        aboutArea.id = "aboutArea";
        aboutArea.textContent = instData.institution_description;
        main.appendChild(aboutArea);

        // Check when the museum opens again or closes
        let date = new Date(); // Remove contents later
        let today = date.getDay();

        let openingHoursToday = instData.opening_hours.days[today];
        console.log(openingHoursToday);
        if (openingHoursToday !== undefined && openingHoursToday !== null) {

            let openingHoursSection = document.createElement("section");
            main.appendChild(openingHoursSection);

            let alreadyFoundHours = false;
            for (let i = 0, max = openingHoursSection.length; i < max; i++) {

            }

            if (alreadyFoundHours === false) {

                let lastOpenedData = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "T" + openingHoursToday[openingHoursToday.length - 1].end + ":00Z";
                let lastOpenedDate = new Date(lastOpenedData);

                let closedSince = document.createElement("span");
                closedSince.textContent = getTranslation(translations, "closedSince") + ": " + openingHoursToday[openingHoursToday.length - 1].end;
                closedSince.classList.add("buttonLike");
                closedSince.classList.add("warningButton");
                closedSince.classList.add("icons");
                closedSince.classList.add("iconsClockOutline");
                openingHoursSection.appendChild(closedSince);

            }

        }

        // Print ongoing exhibitions
        let ongoingExhibitions  = document.createElement("section");

        let ongoingExhibitionsTitle = document.createElement("h2");
        ongoingExhibitionsTitle.textContent = getTranslation(translations, "ongoingExhibitions");
        ongoingExhibitions.appendChild(ongoingExhibitionsTitle);

        let ongoingExhibitionsList = document.createElement("ul");
        ongoingExhibitionsList.classList.add("gridList");
        ongoingExhibitions.appendChild(ongoingExhibitionsList);

        for (let i = 0, max = instData.exhibitions.ongoing.length; i < max; i++) {

            let exhibition = instData.exhibitions.ongoing[i];
            drawExhibitionTile(ongoingExhibitionsList, exhibition);

        }

        main.appendChild(ongoingExhibitions);

        let extrasArea = document.createElement("section");

        let extrasTitle = document.createElement("h2");
        extrasTitle.textContent = "Extras";
        extrasArea.appendChild(extrasTitle);

        let extrasList = document.createElement("ul");
        extrasList.classList.add("gridList");
        extrasArea.appendChild(extrasList);

        let tourTile = document.createElement("li");

        let tourTileImg = document.createElement("img");
        tourTileImg.src = "static/img/ryoji-iwata-walking-street-500px.jpg";
        tourTile.appendChild(tourTileImg);

        let tourTileTitle = document.createElement("span");
        tourTileTitle.textContent = getTranslation(translations, "Tour");
        tourTile.appendChild(tourTileTitle);

        tourTile.addEventListener("click", function() { toggleTourMode(); });

        extrasList.appendChild(tourTile);

        let exhiCalTile = document.createElement("li");

        let exhiCalTileImg = document.createElement("img");
        exhiCalTileImg.src = "static/img/julian-mora-769310-unsplash-500px.jpg";
        exhiCalTile.appendChild(exhiCalTileImg);

        let exhiCalTileTitle = document.createElement("span");
        exhiCalTileTitle.textContent = getTranslation(translations, "ExhibitionCalendar");
        exhiCalTile.appendChild(exhiCalTileTitle);

        exhiCalTile.addEventListener("click", function() { location.href = "exhibitionCalendar.php"; });

        extrasList.appendChild(exhiCalTile);

        let eventsTile = document.createElement("li");

        let eventsTileImg = document.createElement("img");
        eventsTileImg.src = "static/img/rey-seven-479590-unsplash-500px.jpg";
        eventsTile.appendChild(eventsTileImg);

        let eventsTileTitle = document.createElement("span");
        eventsTileTitle.textContent = getTranslation(translations, "EventsCalendar");
        eventsTile.appendChild(eventsTileTitle);

        eventsTile.addEventListener("click", function() { location.href = "eventsCalendar.php"; });

        extrasList.appendChild(eventsTile);

        main.appendChild(extrasArea);

        let typeTileHeader = document.createElement("h2");
        typeTileHeader.textContent = getTranslation(translations, "Holdings");
        main.appendChild(typeTileHeader);

        // Print counters
        let typeTileArea = document.createElement("section");
        main.appendChild(typeTileArea);

        let typeTileList = document.createElement("ul");
        typeTileList.classList.add("gridList");
        typeTileArea.appendChild(typeTileList);
        // typeTileArea.id  = "countersSection";

        collectionsCounter = drawStartPageTile("static/img/erol-ahmed-460277-unsplash-500px.jpg", getTranslation(translations, "Collections"), Object.keys(instData.collections).length);
        collectionsCounter.addEventListener('click', function() {
            location.hash = "collectionsList";
        });
        typeTileList.appendChild(collectionsCounter);
        typeTileList.appendChild(drawStartPageTile("static/img/steven-garcia-260350-unsplash-500px.jpg", getTranslation(translations, "Objects"), instData.institution_number_of_objects, instanceBaseURL + "index.php?t=listen&instnr=" + institutionID + "&output=json&mod=complete"));

        // List collections

        let collectionsSection = document.createElement("section");
        collectionsSection.classList.add("overviewList");
        collectionsSection.id = "collectionsList";
        main.appendChild(collectionsSection);

        let collectionsTitle = document.createElement("h2");
        collectionsTitle.textContent = getTranslation(translations, "Collections");
        collectionsSection.appendChild(collectionsTitle);

        let collectionsList = document.createElement("ul");
        collectionsSection.appendChild(collectionsList);

        let collectionIDs = Object.keys(instData.collections);
        for (let i = 0, max = collectionIDs.length; i < max; i++) {

            let collection = document.createElement("li");
            collectionsList.appendChild(collection);

            let collectionTitle = document.createElement("span");
            collectionTitle.textContent = instData.collections[collectionIDs[i]].collection_name;
            collection.appendChild(collectionTitle);

            collectionTitle.addEventListener('click', function() {
                curURL = instanceBaseURL + "index.php?t=sammlung&gesusa=" + collectionIDs[i] + "&suinin=" + institutionID + "&output=json";
                handleCollection(curURL);
            });

            let subcollectionList = document.createElement("ul");
            collection.appendChild(subcollectionList);

            let subcollectionIDs = Object.keys(instData.collections[collectionIDs[i]].collection_subcollections);
            for (let j = 0, maxj = subcollectionIDs.length; j < maxj; j++) {

                let subcollectionData = instData.collections[collectionIDs[i]].collection_subcollections[subcollectionIDs[j]];

                let subcollection = document.createElement("li");
                subcollectionList.appendChild(subcollection);

                let subcollectionTitle = document.createElement("span");
                subcollectionTitle.textContent = subcollectionData.collection_name;
                subcollection.appendChild(subcollectionTitle);

                subcollection.addEventListener('click', function() {
                    curURL = instanceBaseURL + "index.php?t=sammlung&gesusa=" + subcollectionIDs[j] + "&suinin=" + institutionID + "&output=json";
                    handleCollection(curURL);
                });

            }


        }

    }

    function toggleTourMode() {

        if (document.documentElement.classList.contains("tourMode")) {

            document.documentElement.classList.remove("tourMode");
            while (tourBackground.firstChild) {
                emptyElement(tourBackground.firstChild);
            }

        }
        else { // If tour mode is not enabled

            document.documentElement.classList.add("tourMode");

            // Clear main to only let it pop up later.
            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            function runArucoJS() {

                var video, canvas, context, imageData, detector;


                function tick(){
                    requestAnimationFrame(tick);

                    if (video.readyState === video.HAVE_ENOUGH_DATA){
                    snapshot();

                    var markers = detector.detect(imageData);
                    drawCorners(markers);
                    drawId(markers);
                    }
                }

                function snapshot(){
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                }

                function drawCorners(markers){
                    var corners, corner, i, j;

                    context.lineWidth = 3;

                    for (i = 0; i !== markers.length; ++ i){
                    corners = markers[i].corners;

                    context.strokeStyle = "red";
                    context.beginPath();

                    for (j = 0; j !== corners.length; ++ j){
                      corner = corners[j];
                      context.moveTo(corner.x, corner.y);
                      corner = corners[(j + 1) % corners.length];
                      context.lineTo(corner.x, corner.y);
                    }

                    context.stroke();
                    context.closePath();

                    context.strokeStyle = "green";
                    context.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
                    }
                }

                function drawId(markers){
                    var corners, corner, x, y, i, j;

                    context.strokeStyle = "blue";
                    context.lineWidth = 1;

                    for (i = 0; i !== markers.length; ++ i){
                    corners = markers[i].corners;

                    x = Infinity;
                    y = Infinity;

                    for (j = 0; j !== corners.length; ++ j){
                      corner = corners[j];

                      x = Math.min(x, corner.x);
                      y = Math.min(y, corner.y);
                    }

                    context.strokeText(markers[i].id, x, y)

                    if (markersMap[markers[i].id] !== undefined && markersMap[markers[i].id] !== null) {

                        curURL = instanceBaseURL + "index.php?t=objekt&oges=" + markersMap[markers[i].id] + "&suinin=" + institutionID + "&output=json";
                        handleObject(curURL);
                        break;

                    }

                    }
                }

                (function() {
                    video = document.getElementById("video");
                    canvas = document.getElementById("canvas");
                    context = canvas.getContext("2d");

                    canvas.width = parseInt(canvas.style.width);
                    canvas.height = parseInt(canvas.style.height);

                    if (navigator.mediaDevices === undefined) {
                    navigator.mediaDevices = {};
                    }

                    if (navigator.mediaDevices.getUserMedia === undefined) {
                    navigator.mediaDevices.getUserMedia = function(constraints) {
                      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                      if (!getUserMedia) {
                        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                      }

                      return new Promise(function(resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                      });
                    }
                    }

                    navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then(function(stream) {
                      if ("srcObject" in video) {
                        video.srcObject = stream;
                      } else {
                        video.src = window.URL.createObjectURL(stream);
                      }
                    })
                    .catch(function(err) {
                      console.log(err.name + ": " + err.message);
                    }
                    );

                    detector = new AR.Detector();

                    requestAnimationFrame(tick);

                })();

            }

            let tourVideo = document.createElement("video");
            tourVideo.id = "video";
            tourVideo.autoplay = "true";
            tourVideo.style.display = "none";
            tourBackground.appendChild(tourVideo);

            let tourCanvas = document.createElement("canvas");
            tourCanvas.id = "canvas";
            tourCanvas.style.width = "100%";
            tourCanvas.style.height = "400px";
            tourBackground.appendChild(tourCanvas);

            runArucoJS();

        }

    }

    function handleObject(curURL) {

        function objImageNegImgResourceForSrc(md_subset, img) {

            console.log(img);
            return instanceBaseURL + "/data/" + md_subset + "/" + img.folder + "/" + img.filename_loc;

        }

        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            let windowTitle = elements.object_name;
            navigatePage(windowTitle, curURL);

            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            let infoHeadline = document.createElement("h2");
            infoHeadline.textContent = elements.object_name;
            main.appendChild(infoHeadline);

            let imageContainer = document.createElement("div");
            imageContainer.id  = "mainImage";
            main.appendChild(imageContainer);

            let mainFigure = document.createElement("figure");
            imageContainer.appendChild(mainFigure);

            let image = document.createElement("img");
            image.src = objImageNegImgResourceForSrc(elements.md_subset, elements.object_images[0]);
            mainFigure.appendChild(image);

            let imagePreviews = document.createElement("ul");
            imagePreviews.id  = "imagePreviews";
            imageContainer.appendChild(imagePreviews);

            if (elements.object_images.length > 1) {

                for (let i = 0, max = elements.object_images.length; i < max; i++) {

                    let imgPreview = document.createElement("li");

                    let imgPreviewImg = document.createElement("img");
                    imgPreviewImg.src = instanceBaseURL + "/data/" + elements.md_subset + "/" + elements.object_images[i].folder + "/" + elements.object_images[i].preview;
                    imgPreview.appendChild(imgPreviewImg);

                    imgPreviewImg.addEventListener('click', function() {
                        image.src = objImageNegImgResourceForSrc(elements.md_subset, elements.object_images[i]);
                    });

                    imagePreviews.appendChild(imgPreview);

                }

            }

            let aboutArea = document.createElement("section");
            aboutArea.id = "aboutArea"
            aboutArea.textContent = elements.object_description;
            main.appendChild(aboutArea);

            // Display events

            let eventsArea = document.createElement("section");
            eventsArea.classList.add("eventsArea");
            main.appendChild(eventsArea);

            eventsHeadline = document.createElement("h3");
            eventsHeadline.textContent = getTranslation(translations, "events");
            eventsArea.appendChild(eventsHeadline);

            for (let i = 0, max = elements.object_events.length; i < max; i++) {

                let tEvent = elements.object_events[i];

                let eventTile = document.createElement("div");
                eventsArea.appendChild(eventTile);

                let eventType = document.createElement("h4");
                eventType.textContent = getTranslation(translations, "eventType_" + tEvent.event_type);
                eventTile.appendChild(eventType);

                let eventTable = document.createElement("table");
                eventTile.appendChild(eventTable);

                if (tEvent.people_id !== "0" && tEvent.people !== undefined) {
                    let eventActor = document.createElement("tr");

                    let eventActorLabel = document.createElement("th");
                    eventActorLabel.classList.add("icons");
                    eventActorLabel.classList.add("iconsHumanFemale");
                    // eventActorLabel.textContent = getTranslation(translations, "Actor");
                    eventActor.appendChild(eventActorLabel);

                    let eventActorName = document.createElement("td");
                    eventActorName.textContent = tEvent.people.people_name;
                    eventActor.appendChild(eventActorName);

                    eventActorName.addEventListener('click', function() {
                        curURL = instanceBaseURL + "index.php?t=listen&persinst_id=" + tEvent.people.people_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                        handleObjectSearch(curURL);
                    });

                    eventTable.appendChild(eventActor);
                }

                if (tEvent.place_id !== "0" && tEvent.place !== undefined) {
                    let eventPlace = document.createElement("tr");

                    let eventPlaceLabel = document.createElement("th");
                    eventPlaceLabel.classList.add("icons");
                    eventPlaceLabel.classList.add("iconsMapMarker");
                    // eventPlaceLabel.textContent = getTranslation(translations, "place");
                    eventPlace.appendChild(eventPlaceLabel);

                    let eventPlaceName = document.createElement("td");
                    eventPlaceName.textContent = tEvent.place.place_name;
                    eventPlace.appendChild(eventPlaceName);

                    eventPlaceName.addEventListener('click', function() {
                        curURL = instanceBaseURL + "index.php?t=listen&ort_id=" + tEvent.place.place_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                        handleObjectSearch(curURL);
                    });

                    eventTable.appendChild(eventPlace);
                }

                if (tEvent.time_id !== "0" && tEvent.time !== undefined) {
                    let eventTime = document.createElement("tr");

                    let eventTimeLabel = document.createElement("th");
                    eventTimeLabel.classList.add("icons");
                    eventTimeLabel.classList.add("iconsClockOutline");
                    // eventTimeLabel.textContent = getTranslation(translations, "Time");
                    eventTime.appendChild(eventTimeLabel);

                    let eventTimeName = document.createElement("td");
                    eventTimeName.textContent = tEvent.time.time_name;
                    eventTime.appendChild(eventTimeName);

                    eventTimeName.addEventListener('click', function() {
                        curURL = instanceBaseURL + "index.php?t=listen&zeit_id=" + tEvent.time_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                        handleObjectSearch(curURL);
                    });

                    eventTable.appendChild(eventTime);
                }

            }

            /* Display more data */

            let descBody = document.createElement("div");
            descBody.classList.add("leftRightArea");
            main.appendChild(descBody);

            // Add required info to description

            let varsToAdd = ["object_material_technique", "object_dimensions", "object_inventory_number"];

            for (let i = 0, max = varsToAdd.length; i < max; i++) {

                let tTile = document.createElement("div");

                let areaHeadline = document.createElement("h3");
                areaHeadline.textContent = getTranslation(translations, varsToAdd[i]);
                tTile.appendChild(areaHeadline);

                let areaContent = document.createElement("p");
                areaContent.textContent = elements[varsToAdd[i]];
                tTile.appendChild(areaContent);

                descBody.appendChild(tTile);

            }

            /*
             * Display ongoing exhibition link
             */

            if (elements.exhibitions.ongoing.length > 0) {
                let exhibitionsSection = document.createElement("section");

                let inOngoingExhiButton = document.createElement("a");
                inOngoingExhiButton.classList.add("buttonLike");
                inOngoingExhiButton.classList.add("highLightedButton");
                inOngoingExhiButton.textContent = getTranslation(translations, "inOngoingExhibition") + elements.exhibitions.ongoing[0].name;
                inOngoingExhiButton.addEventListener('click', function() {
                    curURL = instanceBaseURL + "index.php?t=exhibition&id=" + elements.exhibitions.ongoing[0].exhibition_id + "&suinin=" + institutionID + "&output=json";
                    handleExhibition(curURL);
                });
                exhibitionsSection.appendChild(inOngoingExhiButton);

                main.appendChild(exhibitionsSection);
            }

            let tagsArea = document.createElement("section");
            main.appendChild(tagsArea);

            let tagsHeadline = document.createElement("h3");
            tagsHeadline.textContent = getTranslation(translations, "tags");
            tagsArea.appendChild(tagsHeadline);

            let tagsHelp = document.createElement("p");
            tagsHelp.classList.add("helpP");
            tagsHelp.textContent = getTranslation(translations, "tagsHelp");
            tagsArea.appendChild(tagsHelp);

            for (let i = 0, max = elements.object_tags.length; i < max; i++) {

                let tag = elements.object_tags[i];

                let tButton = document.createElement("a");
                tButton.classList.add("buttonLike");
                tButton.classList.add("icons");
                tButton.classList.add("iconsTag");
                tButton.textContent = tag.tag_name;
                tButton.addEventListener('click', function() {
                    curURL = instanceBaseURL + "index.php?t=listen&tag_id=" + tag.tag_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                    handleObjectSearch(curURL);
                });
                tagsArea.appendChild(tButton);

            }

            for (let i = 0, max = elements.object_relation_people.length; i < max; i++) {

                let tag = elements.object_relation_people[i];

                let tButton = document.createElement("a");
                tButton.classList.add("buttonLike");
                tButton.classList.add("icons");
                tButton.classList.add("iconsHumanFemale");
                tButton.textContent = tag.people.people_display_name;
                tButton.addEventListener('click', function() {
                    curURL = instanceBaseURL + "index.php?t=listen&persinst_id=" + tag.people_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                    handleObjectSearch(curURL);
                });
                tagsArea.appendChild(tButton);

            }

            for (let i = 0, max = elements.object_relation_places.length; i < max; i++) {

                let tag = elements.object_relation_places[i];

                let tButton = document.createElement("a");
                tButton.classList.add("buttonLike");
                tButton.classList.add("icons");
                tButton.classList.add("iconsMapMarker");
                tButton.textContent = tag.place.place_name;
                tButton.addEventListener('click', function() {
                    curURL = instanceBaseURL + "index.php?t=listen&ort_id=" + tag.place_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                    handleObjectSearch(curURL);
                });
                tagsArea.appendChild(tButton);

            }

            }, debugging, "json");

    }

    function handleObjectSearch(curURL) {

		function regenerateNavigation(object, currentPos) {

			currentPos = parseInt(currentPos);

			function generatePaginationLink(pageNo, startAt) {

                let link = document.createElement("a");
				// link.href = location.href.replace("&startwert=" + currentPos, "") + "&startwert=" + startAt;
				link.textContent = pageNo;
				link.title = getTranslation(translations, "StartingAt") + startAt;

                link.addEventListener('click', function() {

                    allowedVars = [
                        'suinsa', 'ftext',
                        'objektart', 'obz',
                        'ereignistyp', 'ereignistyp_id', 'per', 'persinst_id', 'ort', 'ort_id',
                        'zei', 'zeit_id', 'oort_id', 'gbreitenat',
                        'sv', 'done', 'alpha', 'omega', 'sort', 'order', 'invno', 'title',
                        'metadata_rights', 'metadata_rights_images', 'mattech', 'desc', 'size',
                        'gesusa', 'exhibition_id', 'tag', 'tag_id', 'updated_since', 'placeExclusive',
                        'oort_id', 'oort', 'tagInclusive', 'placeSecondInclusive', 'timeExclusive'
                    ];

                    let searchVars = "";
                    for (let i = 0, max = allowedVars.length; i < max; i++) {

                        if (getVars[allowedVars[i]] !== undefined && getVars[allowedVars[i]] !== null && isNumeric(getVars[allowedVars[i]])) {
                            searchVars += "&" + allowedVars[i] + "=" + getVars[allowedVars[i]];
                        }

                    }

                    curURL = instanceBaseURL + "index.php?t=listen" + searchVars + "&instnr=" + institutionID + "&output=json&mod=complete" + "&startwert=" + startAt;
                    handleObjectSearch(curURL);

                });

				return link;
			}

			let bar = document.getElementById("pagination");

			if (bar === undefined || bar === null) {
				bar = document.createElement("div");
				bar.id = "pagination";
				main.appendChild(bar);
			}
            else {
				while (bar.firstChild) {
					emptyElement(bar.firstChild);
				}
			}

			let perPage     = 24; // images["results"].length;
			let currentPage = currentPos / perPage + 1;

            let total = parseInt(object['total']);

			bar.appendChild(generatePaginationLink("<<", 0));
			if (currentPage - 3 > 0)
				bar.appendChild(generatePaginationLink(currentPage - 3, currentPos - perPage * 3));
			if (currentPage - 2 > 0)
				bar.appendChild(generatePaginationLink(currentPage - 2, currentPos - perPage * 2));
			if (currentPage - 1 > 0)
				bar.appendChild(generatePaginationLink(currentPage - 1, currentPos - perPage * 1));
            let currentPageLink = generatePaginationLink(currentPage, currentPos);
            currentPageLink.id = "paginationSelected";
			bar.appendChild(currentPageLink);
			if (currentPos + perPage * 1 < total)
				bar.appendChild(generatePaginationLink(currentPage + 1, currentPos + perPage * 1));
			if (currentPos + perPage * 2 < total)
				bar.appendChild(generatePaginationLink(currentPage + 2, currentPos + perPage * 2));
			if (currentPos + perPage * 3 < total)
				bar.appendChild(generatePaginationLink(currentPage + 3, currentPos + perPage * 3));
			bar.appendChild(generatePaginationLink(">>", total - (total % perPage)));

		}


        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            let title = "Search";
            if (getGETvars().exhibition_id !== undefined && getGETvars().exhibition_id !== null) {
                title = "SearchInExhibition";
            }
            else title = "SearchInCollections";

            let windowTitle = getTranslation(translations, title);
            navigatePage(windowTitle, curURL);

            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            function drawObjectTile(parentElement, object) {

                let tile = document.createElement("li");

                let tileImage = document.createElement("img");
                tileImage.src = instanceBaseURL + object.image;
                tile.appendChild(tileImage);

                let tileTitle = document.createElement("span");
                tileTitle.textContent = object.objekt_name;
                tile.appendChild(tileTitle);

                parentElement.appendChild(tile);

                tile.addEventListener("click", function() {
                    objectLink = instanceBaseURL + "index.php?t=objekt&oges=" + object.objekt_id + "&suinin=" + institutionID + "&output=json";
                    handleObject(objectLink)});

                return tile;

            }

            let currentPos = 0;
            getVars = getGETvars();
            if (getVars.startwert !== undefined && getVars.startwert !== null) currentPos = getVars.startwert;
			regenerateNavigation(elements[0], currentPos);

            let results = document.createElement("ul");
            results.classList.add("gridList");
            main.appendChild(results);

            for (let i = 0, max = elements.length; i < max; i++) {

                let tObject = elements[i];
                drawObjectTile(results, tObject);

            }

            }, debugging, "json");

    }



    function handleCollection(curURL) {

        function printSubSuperCollections(listTitle, collectionsData) {

			if (collectionsData.length > 0) {
                // List collections

                let collectionsSection = document.createElement("section");
                collectionsSection.classList.add("overviewList");
                main.appendChild(collectionsSection);

                let collectionsTitle = document.createElement("h2");
                collectionsTitle.textContent = getTranslation(translations, listTitle);
                collectionsSection.appendChild(collectionsTitle);

                let collectionsList = document.createElement("ul");
                collectionsSection.appendChild(collectionsList);

                for (let i = 0, max = collectionsData.length; i < max; i++) {

                    let collectionData = collectionsData[i];

                    let collection = document.createElement("li");
                    collectionsList.appendChild(collection);

                    let collectionTitle = document.createElement("span");
                    collectionTitle.textContent = collectionData.collection_name;

                    collectionTitle.addEventListener('click', function() {
                        curURL = instanceBaseURL + "index.php?t=sammlung&gesusa=" + collectionData.collection_id + "&suinin=" + institutionID + "&output=json";
                        handleCollection(curURL);
                    });

                    collection.appendChild(collectionTitle);

                    collectionTitle.addEventListener('click', function() {
                        curURL = instanceBaseURL + "index.php?t=sammlung&gesusa=" + collectionData.collection_id + "&suinin=" + institutionID + "&output=json";
                        handleCollection(curURL);
                    });

                }
            }

        }

        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            let windowTitle = elements.collection_name;
            navigatePage(windowTitle, curURL);

            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            if (debugging) console.log(elements);

            let infoHeadline = document.createElement("h2");
            infoHeadline.textContent = elements.collection_name;
            main.appendChild(infoHeadline);

			/*
                let collectionImg = document.createElement("img");
                collectionImg.src = imageDir + "/" + elements.collection_image;
                infobox.appendChild(collectionImg);
			*/

            let descBody = document.createElement("div");
            main.appendChild(descBody);

            // Add required info to description

            let descriptionContent = document.createElement("div");
            descriptionContent.textContent = elements.collection_description;
            main.appendChild(descriptionContent);

            printSubSuperCollections("Supercollections", elements.collection_supercollections);
            printSubSuperCollections("Subcollections", elements.collection_subcollections);

            // Print options section
            let optionsArea = document.createElement("section");
            main.appendChild(optionsArea);

            let optionsAreaTitle = document.createElement("h3");
            optionsAreaTitle.textContent = getTranslation(translations, "Options");
            optionsArea.appendChild(optionsAreaTitle);

            let colObjectsButton = document.createElement("a");
            colObjectsButton.textContent = getTranslation(translations, "ObjectsOfCollection");
            colObjectsButton.classList.add("buttonLike");
            colObjectsButton.classList.add("icons");
            colObjectsButton.classList.add("iconsListAlt");
            colObjectsButton.addEventListener('click', function() {
                curURL = instanceBaseURL + "index.php?t=listen&gesusa=" + elements.collection_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                handleObjectSearch(curURL);
            });
            optionsArea.appendChild(colObjectsButton);

            }, debugging, "json");

    }

    function handleSeries(curURL) {

        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            let windowTitle = elements.series_name;
            navigatePage(windowTitle, curURL);

            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            if (debugging) console.log(elements);

            let infoHeadline = document.createElement("h2");
            infoHeadline.textContent = elements.series_name;
            main.appendChild(infoHeadline);

            let descBody = document.createElement("div");
            main.appendChild(descBody);

            // Add required info to description

            let descriptionContent = document.createElement("div");
            descriptionContent.textContent = elements.series_description;
            main.appendChild(descriptionContent);

            }, debugging, "json");

    }

    function handleExhibition(curURL) {

        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            let windowTitle = elements.name;
            navigatePage(windowTitle, curURL);

            // Empty main elem
            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            let baseDataSection = document.createElement("section");
            main.appendChild(baseDataSection);

            let infoHeadline = document.createElement("h2");
            infoHeadline.textContent = elements.name;
            baseDataSection.appendChild(infoHeadline);

            let imageContainer = document.createElement("div");
            imageContainer.id  = "mainImage";
            baseDataSection.appendChild(imageContainer);

            let mainFigure = document.createElement("figure");
            imageContainer.appendChild(mainFigure);

            let image = document.createElement("img");
            image.src = elements.image;
            mainFigure.appendChild(image);

            let descBody = document.createElement("div");
            baseDataSection.appendChild(descBody);

            // Add required info to description

            let timeStr = document.createElement("p");
            let timeStart = document.createElement("time");
            timeStart.classList.add("timeStart");
            timeStart.classList.add("icons");
            timeStart.classList.add("iconsCalendarClock");
            timeStart.textContent = elements.start;
            timeStr.appendChild(timeStart);
            let timeEnd = document.createElement("time");
            timeEnd.textContent = elements.end;
            timeStr.appendChild(timeEnd);
            descBody.appendChild(timeStr);

            let descriptionContent = document.createElement("div");
            descriptionContent.textContent = elements.description;
            baseDataSection.appendChild(descriptionContent);

            if (elements.objects.length > 0) {

                // Print options section
                let optionsArea = document.createElement("section");
                main.appendChild(optionsArea);

                let optionsAreaTitle = document.createElement("h3");
                optionsAreaTitle.textContent = getTranslation(translations, "Options");
                optionsArea.appendChild(optionsAreaTitle);

                let colObjectsButton = document.createElement("a");
                colObjectsButton.textContent = getTranslation(translations, "ObjectsOfExhibition");
                colObjectsButton.classList.add("buttonLike");
                colObjectsButton.classList.add("icons");
                colObjectsButton.classList.add("iconsListAlt");
                colObjectsButton.addEventListener('click', function() {
                    curURL = instanceBaseURL + "index.php?t=listen&exhibition_id=" + elements.exhibition_id + "&instnr=" + institutionID + "&output=json&mod=complete";
                    handleObjectSearch(curURL);
                });
                optionsArea.appendChild(colObjectsButton);

            }

            /*
            if (elements.objects !== undefined && elements.objects !== null) {
                for (let i = 0, max = elements.objects.length; i < max; i++) {
                }
            }
            */

            }, debugging, "json");

    }


    function handleEvent(curURL) {

        queryPage(
            encodeURI(curURL),
            function (request) {

            let elements = parseJSON(request);

            if (debugging) console.log(elements);

            let windowTitle = elements.name;
            navigatePage(windowTitle, curURL);

            // Empty main elem
            while (main.firstChild) {
                emptyElement(main.firstChild);
            }

            let infoHeadline = document.createElement("h2");
            infoHeadline.textContent = elements.name;
            main.appendChild(infoHeadline);

            let imageContainer = document.createElement("div");
            imageContainer.id  = "mainImage";
            main.appendChild(imageContainer);

            let mainFigure = document.createElement("figure");
            imageContainer.appendChild(mainFigure);

            let image = document.createElement("img");
            image.src = elements.image;
            mainFigure.appendChild(image);

            let descBody = document.createElement("div");
            main.appendChild(descBody);

            // Add required info to description

            let timeStr = document.createElement("p");
            let timeStart = document.createElement("time");
            timeStart.classList.add("timeStart");
            timeStart.classList.add("icons");
            timeStart.classList.add("iconsCalendarClock");
            timeStart.textContent = elements.start;
            timeStr.appendChild(timeStart);
            let timeEnd = document.createElement("time");
            timeEnd.textContent = elements.end;
            timeStr.appendChild(timeEnd);
            descBody.appendChild(timeStr);

            let descriptionContent = document.createElement("div");
            descriptionContent.textContent = elements.description;
            main.appendChild(descriptionContent);

            }, debugging, "json");

    }

    function handleURL() {

        /**
         * Handle page calls.
         */

        let curURL;
        if (getVars.t === "objekt") {
            curURL = instanceBaseURL + "index.php?t=" + getVars.t + "&oges=" + getVars.oges + "&suinin=" + institutionID + "&output=json";
            handleObject(curURL);
        }
        else if (getVars.t === "institution") {
            handleInstitution(instData);
        }
        else if (getVars.t === "sammlung") {
            curURL = instanceBaseURL + "index.php?t=" + getVars.t + "&gesusa=" + getVars.gesusa + "&suinin=" + institutionID + "&output=json";
            handleCollection(curURL);
        }
        else if (getVars.t === "serie") {
            curURL = instanceBaseURL + "index.php?t=" + getVars.t + "&serges=" + getVars.serges + "&suinin=" + institutionID + "&output=json";
            handleSeries(curURL);
        }
        else if (getVars.t === "exhibition") {
            curURL = instanceBaseURL + "index.php?t=" + getVars.t + "&id=" + getVars.id + "&suinin=" + institutionID + "&output=json";
            handleExhibition(curURL);
        }
        else if (getVars.t === "event") {
            curURL = instanceBaseURL + "index.php?t=" + getVars.t + "&id=" + getVars.id + "&suinin=" + institutionID + "&output=json";
            handleEvent(curURL);
        }
        else if (getVars.t === "listen") {

            allowedVars = [
                'suinsa', 'ftext',
                'objektart', 'obz', 'startwert',
                'ereignistyp', 'ereignistyp_id', 'per', 'persinst_id', 'ort', 'ort_id',
                'zei', 'zeit_id', 'oort_id', 'gbreitenat',
                'sv', 'done', 'alpha', 'omega', 'sort', 'order', 'invno', 'title',
                'metadata_rights', 'metadata_rights_images', 'mattech', 'desc', 'size',
                'gesusa', 'exhibition_id', 'tag', 'tag_id', 'updated_since', 'placeExclusive',
                'oort_id', 'oort', 'tagInclusive', 'placeSecondInclusive', 'timeExclusive'
            ];

            let searchVars = "";
            for (let i = 0, max = allowedVars.length; i < max; i++) {

                if (getVars[allowedVars[i]] !== undefined && getVars[allowedVars[i]] !== null && isNumeric(getVars[allowedVars[i]])) {
                    searchVars += "&" + allowedVars[i] + "=" + getVars[allowedVars[i]];
                }

            }

            curURL = instanceBaseURL + "index.php?t=" + getVars.t + searchVars + "&instnr=" + institutionID + "&output=json&mod=complete";
            handleObjectSearch(curURL);

        }

    }

    handleURL();

    // Handle the browser back button
    window.addEventListener("popstate", function() {
        handleURL();
    }
    , false);

})();

