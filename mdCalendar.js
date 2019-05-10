/**
 * mdCalendar.js
 */

function generateCalendar() {

    /**
     * @var {array} translations Array of all translations.
     */
    let translations = {
        "en" : {
            "dow0"  : "Sunday",
            "dow1"  : "Monday",
            "dow2"  : "Tuesday",
            "dow3"  : "Wednesday",
            "dow4"  : "Thursday",
            "dow5"  : "Friday",
            "dow6"  : "Saturday",
            "mon0"  : "January",
            "mon1"  : "February",
            "mon2"  : "March",
            "mon3"  : "April",
            "mon4"  : "May",
            "mon5"  : "June",
            "mon6"  : "July",
            "mon7"  : "August",
            "mon8"  : "September",
            "mon9"  : "October",
            "mon10" : "November",
            "mon11" : "December",
            "Today" : "Today",
            "Title" : "Title",
            "Start" : "Start",
            "End"   : "End",
            "Location" : "Location",
            "prevMonth" : "Previous month",
            "nextMonth" : "Next month"
        },
        "de" : {
            "dow0"  : "Sonntag",
            "dow1"  : "Montag",
            "dow2"  : "Dienstag",
            "dow3"  : "Mittwoch",
            "dow4"  : "Donnerstag",
            "dow5"  : "Freitag",
            "dow6"  : "Samstag",
            "mon0"  : "Januar",
            "mon1"  : "Februar",
            "mon2"  : "März",
            "mon3"  : "April",
            "mon4"  : "Mai",
            "mon5"  : "Juni",
            "mon6"  : "Juli",
            "mon7"  : "August",
            "mon8"  : "September",
            "mon9"  : "Oktober",
            "mon10" : "November",
            "mon11" : "Dezember",
            "Today" : "Jetzt",
            "Title" : "Titel",
            "Start" : "Beginn",
            "End"   : "Ende",
            "Location" : "Ort",
            "prevMonth" : "Vorheriger Monat",
            "nextMonth" : "Nächster Monat"
        },
        "hu" : {
            "dow0": "Vas\u00e1rnap",
            "dow1": "H\u00e9tf\u0151",
            "dow2": "Kedd",
            "dow3": "Szerda",
            "dow4": "Cs\u00fct\u00f6rt\u00f6k",
            "dow5": "P\u00e9ntek",
            "dow6": "Szombat",
            "mon0": "Janu\u00e1r",
            "mon1": "Febru\u00e1r",
            "mon2": "M\u00e1rcius",
            "mon3": "\u00c1prilis",
            "mon4": "M\u00e1jus",
            "mon5": "J\u00fanius",
            "mon6": "J\u00falius",
            "mon7": "Augusztus",
            "mon8": "Szeptember",
            "mon9": "Okt\u00f3ber",
            "mon10": "November",
            "mon11": "December",
            "Today": "Ma",
            "Title": "C\u00edm",
            "Start": "Nyit",
            "End": "Bez\u00e1r",
            "Location": "Helysz\u00edn",
            "prevMonth" : "Previous month",
            "nextMonth" : "Next month"
        }
    }

    /**
     * @var {boolean} Toggle debugging.
     */
    let debugging = false;

    /**
     * Function queryPage queries a web page and runs the specified function over the output.
     *
     * @param {string}   url   URL to query.
     * @param {function} func  Callback function to run on the request after loading.
     * @param {boolean}  debug Enable / disable debug mode.
     *
     * @return {boolean}
     */
    function queryPage(url, func, debug = false) {

        let request     = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader("Cache-Control", "no-cache");
        request.responseType = 'htm';
        request.send();
        request.onload = function() {

            func(request, debug);
        };

    }

    /**
     * Removes all children of an element.
     *
     * @param {string} id ID of the element to tear down.
     *
     * @return {void}
     */
    function emptyElement(element) {
        while (element.firstChild) {
            emptyElement(element.firstChild);
        }
        element.parentNode.removeChild(element);
        if (debugging === true) {
            console.log("Removed element:");
            console.log(element);
        }
    }

    function tearDownById(id) {
        let target = document.getElementById(id);
        if (target !== null) emptyElement(target);
    }

    /**
     * Returns a requested translation from an array in the currently used language.
     *
     * @param {mixed[]} list      Translation variable.
     * @param {string}  specifier Specifies which translation to get.
     *
     * @return {string}
     */
    function getTranslation(list, specifier) {

        let preferedLang = document.getElementsByTagName("html")[0].getAttribute("lang");

        if (list[preferedLang] !== undefined && list[preferedLang][specifier] !== null) return list[preferedLang][specifier];
        return list["en"][specifier];

    }

    /**
     * Function to create calendar.
     */
    function createCalendarTable(target, events) {

        let startOfWeek = 1; // The week starts on Monday.
        let endOfWeek   = 0; // The week ends on Sunday.

        let calLocale = document.getElementsByTagName("html")[0].getAttribute("lang");
        if (calLocale === undefined || calLocale === null) calLocale = "en";

        function removeToolTips() {
            let toolTips = document.getElementsByClassName("mdCToolTip");
            for (let i = 0, max = toolTips.length; i < max; i++) {
                emptyElement(toolTips[i]);
            }
        }

        /**
         * Gets all days to display per month.
         * Adapted version of function described in https://stackoverflow.com/a/13146828.
         *
         * @param {int} The month number, 0 based
         * @param {int} The year, not zero based, required to account for leap years
         *
         * @return {Date[]} List with date objects for each day of the month
         */
        function getDaysInMonth(month, year) {

            var date = new Date(year, month, 1);
            var days = [];

            // If the weekday of the first of the month does not equal 1 (Monday),
            // get days until the last monday before the month.
            if (date.getDay() !== startOfWeek) {
                while (date.getDay() !== startOfWeek) {
                    date.setDate(date.getDate() - 1);
                    days.unshift(new Date(date));
                }
            }

            date = new Date(year, month, 1);
            // Get days of the month
            while (date.getMonth() === month) {
                days.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }

            // If the weekday of the first of the month does not equal 1 (Monday),
            // get days until the last monday before the month.
            while (date.getDay() !== startOfWeek) {
                days.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return days;
        }

        events = (function() {

            let colorSchemeLength = 29;
            for (var i = 0, max = events.length; i < max; i++) {
                let hash = 0;
                for (var j = 0, maxj = events[i].name.length; j < maxj; j++) {
                    hash = events[i].name.charCodeAt(j) + hash;
                }
                hash = hash % (colorSchemeLength) - 1;

                events[i].color = hash;
            }
            return events;

        })();

        let d = new Date();

        let year;
        if (target.getAttribute("data-year") !== null) year = parseInt(target.getAttribute("data-year"));
        else year = d.getFullYear();

        let month;
        if (target.getAttribute("data-month") !== null) month = parseInt(target.getAttribute("data-month") - 1);
        else month = d.getMonth();

        // Create outer div
        let mdCalDiv = document.createElement("div");
        mdCalDiv.classList.add("mdCalendar");

        /**
         * Creater header line of the calendar.
         */
        (function() {

            let mdCalTitleLine = document.createElement("header");
            mdCalTitleLine.classList.add("mdCTitleLine");

            let mdCalTitle = document.createElement("h3");
            mdCalTitle.textContent = getTranslation(translations, "mon" + month.toString());
            if (year != d.getFullYear()) mdCalTitle.textContent = mdCalTitle.textContent + " (" + year + ")";
            mdCalTitleLine.appendChild(mdCalTitle);

            let mdCalNav = document.createElement("div");
            mdCalNav.classList.add("mdCNav");
            mdCalTitleLine.appendChild(mdCalNav);

            let mdCalNavPrev    = document.createElement("a");
            mdCalNavPrev.href   = target.getAttribute("data-prev");
            mdCalNavPrev.rel    = "prev";
            mdCalNavPrev.title  = getTranslation(translations, "prevMonth");
            mdCalNavPrev.classList.add("mdCNavPrev");
            mdCalNav.appendChild(mdCalNavPrev);

            let mdCalNavNext  = document.createElement("a");
            mdCalNavNext.href = target.getAttribute("data-next");
            mdCalNavNext.rel  = "next";
            mdCalNavNext.title  = getTranslation(translations, "nextMonth");
            mdCalNavNext.classList.add("mdCNavNext");
            mdCalNav.appendChild(mdCalNavNext);

            let mdCalNavToday  = document.createElement("a");
            mdCalNavToday.href = target.getAttribute("data-today");
            mdCalNavToday.textContent = getTranslation(translations, "Today");
            mdCalNav.appendChild(mdCalNavToday);

            mdCalTitleLine.appendChild(mdCalNav);
            mdCalDiv.appendChild(mdCalTitleLine);

        })();

        /**
         * Create table.
         */
        let table = document.createElement("table");
        table.classList.add("mdCTable");

        let thead = document.createElement("thead");
        let theadTr = document.createElement("tr");

        for (let i = 1, max = 7; i < max; i++) {
            let th = document.createElement("th");
            th.textContent = getTranslation(translations, "dow" + i.toString());
            theadTr.appendChild(th);
        }
        let th = document.createElement("th");
        th.textContent = getTranslation(translations, "dow0");
        theadTr.appendChild(th);

        thead.appendChild(theadTr);
        table.appendChild(thead);

        let tbody = document.createElement("tbody");

        let days = getDaysInMonth(month, year);
        let tr;

        let daysTDs = [];

        function createSingleEventOverlay(e, parentElement, data) {

            let toolTip = document.createElement("table");
            toolTip.classList.add("mdCToolTip");

            let tableData = [];
            tableData.push(["Title", data["name"]]);
            if (data["start"] !== undefined) tableData.push(["Start", data["start"]]);
            if (data["end"] !== undefined)   tableData.push(["End", data["end"]]);
            if (data["place"] !== undefined) tableData.push(["Location", data["place"]]);

            for (let i = 0, max= tableData.length; i < max; i++) {
                let nameRow = document.createElement("tr");
                let nameTh = document.createElement("th");
                nameTh.textContent = getTranslation(translations, tableData[i][0]);
                nameRow.appendChild(nameTh);
                let nameTd = document.createElement("td");
                nameTd.textContent = tableData[i][1];
                nameRow.appendChild(nameTd);
                toolTip.appendChild(nameRow);
            }

            parentElement.appendChild(toolTip);

        }

        for (let i = 0, max= days.length; i < max; i++) {

            // Begin a new table row every Monday.
            if (days[i].getDay() === startOfWeek) {
                tr = document.createElement("tr");
                tbody.appendChild(tr);
            }

            // Create new TD per day and add appropriate classes.
            let td = document.createElement("td");
            if (days[i].getMonth() !== month) td.classList.add("mdCOtherMonth");
            if (days[i].getYear() == d.getYear() && days[i].getMonth() == d.getMonth() && days[i].getDate() == d.getDate()) td.classList.add("mdCToday");

            tdTitle = document.createElement("time");
            tdTitle.textContent = days[i].getDate();

            td.appendChild(tdTitle);
            tr.appendChild(td);

            // Append dates.
            let dayTime = days[i].getTime();
            let dayTimeMinusDay = days[i].getTime() + 24 * 3600 * 1000;
            let dayTimePlusDay = days[i].getTime() - 0 * 3600 * 1000;
            for (let j = 0, maxj = events.length; j < maxj; j++) {
                if (Date.parse(events[j].start) > dayTimeMinusDay || Date.parse(events[j].end) < dayTimePlusDay) continue;

                let eventSignifier = document.createElement("a");
                eventSignifier.classList.add("color" + events[j].color.toString());
                if (events[j].link) eventSignifier.href = events[j].link;

                let eventSignifierText = document.createElement("span");
                eventSignifierText.textContent = events[j].name;
                eventSignifier.appendChild(eventSignifierText);

                eventSignifier.addEventListener('mouseover', function(e) {
                    createSingleEventOverlay(e, eventSignifier, events[j]);
                });
                eventSignifier.addEventListener('mouseout', function(e) {
                    removeToolTips();
                });

                td.appendChild(eventSignifier);

            }

            // Add posibility for overlay.
            tdTitle.addEventListener('click', function(e) {

                tearDownById("mdCOverlay");

                let overlay = document.createElement("div");
                overlay.id = "mdCOverlay";

                let eventTitleBar = document.createElement("div");
                eventTitleBar.classList.add("mdCOverlayTitleBar");
                overlay.appendChild(eventTitleBar);

                let title = document.createElement("span");
                title.classList.add("mdCOverlayTitle");
                title.textContent = days[i].toLocaleDateString(calLocale);
                eventTitleBar.appendChild(title);

                let closer = document.createElement("span");
                closer.classList.add("mdCOverlayClose");
                closer.addEventListener('click', function(e) {
                    if (debugging === true) console.log("Clicked close button: Tearing down daily agenda.");
                    tearDownById("mdCOverlay");
                });
                eventTitleBar.appendChild(closer);

                let ul = document.createElement("ul");

                // Append events.
                for (let j = 0, maxj = events.length; j < maxj; j++) {

                    let start = new Date(events[j].start);
                    let end   = new Date(events[j].end);

                    if (start.getTime() > dayTime || end.getTime() < dayTimePlusDay) continue;

                    let eventLi = document.createElement("li");

                    let eventSignifier = document.createElement("a");
                    eventSignifier.textContent = events[j].name;
                    if (events[j].link) eventSignifier.href = events[j].link;
                    eventLi.appendChild(eventSignifier);

                    let eventP = document.createElement("p");
                    eventP.textContent = start.toLocaleDateString(calLocale) + " - " + end.toLocaleDateString(calLocale);
                    if (events[j].place !== undefined) eventP.textContent = eventP.textContent + ", " + events[j].place;
                    eventLi.appendChild(eventP);

                    let eventDesc = document.createElement("p");
                    eventDesc.textContent = events[j].description;
                    eventLi.appendChild(eventDesc);

                    ul.appendChild(eventLi);

                }

                overlay.appendChild(ul);
                document.getElementsByTagName("body")[0].appendChild(overlay);

            });

            if (td.childElementCount > 6) td.classList.add("mdCManyElements");
            daysTDs[days[i].getFullYear() + "-" + days[i].getMonth() + "-" + days[i].getDate()] = td;

        }

        table.appendChild(tbody);
        mdCalDiv.appendChild(table);

        target.appendChild(mdCalDiv);

        // Enable closing overlay by pressing escape.
        document.addEventListener('keydown', function(e) {
            if (e.keyCode !== 27) return;
            if (debugging === true) console.log("Pressed escape: Tearing down daily agenda.");
            tearDownById("mdCOverlay");
        });

        return daysTDs;
    }

    (function() {

        let calendars = document.getElementsByClassName("mdCalendar");
        for (let i = 0, max = calendars.length; i < max; i++) {

            queryPage(
                encodeURI(calendars[i].getAttribute("data-src")),
                function (request) {
                    if (debugging === true) console.log("Loaded\n" + request.response);
                    let elements = JSON.parse(request.response);
                    let tCalendar = createCalendarTable(calendars[i], elements);
                });
        }
    }
    )();

};

generateCalendar();
