var debug              = false;
var CACHE_NAME         = 'my-site-cache-v1';
var urlsToCache = [

    // Style files
    'static/css/mdInMuseum.css',
    'static/css/mdCalendar.css',

    // Scripts
    'static/css/mdCalendar.css',

    // Icons

    'static/css/icons/baseline-dashboard-24px.svg',
    'static/css/icons/baseline-help-24px.svg',
    'static/css/icons/baseline-home-24px.svg',
    'static/css/icons/baseline-list_alt-24px.svg',
    'static/css/icons/baseline-search-24px.svg',
    'static/css/icons/calendar-clock.svg',
    'static/css/icons/clock-outline.svg',
    'static/css/icons/human-female.svg',
    'static/css/icons/map-marker.svg',
    'static/css/icons/tag.svg',

    // Stock photos
    'static/img/erol-ahmed-460277-unsplash-500px.jpg',
    'static/img/julian-mora-769310-unsplash-500px.jpg',
    'static/img/rey-seven-479590-unsplash-500px.jpg',
    'static/img/ryoji-iwata-walking-street-500px.jpg',
    'static/img/steven-garcia-260350-unsplash-500px.jpg',

    // Static pages
    'index.php',
    'exhibitionCalendar.php',
    'eventsCalendar.php',

];

// API data
var apiDataToCache = [
    'index.php?t=museum&output=json',
    'index.php?t=collection&output=json',
    'apis/randomImages.php',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        Promise.all([
        caches.open(CACHE_NAME)
            .then(function(cache) {
                if (debug === true) console.log('Opened cache');
                return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
            }),

        ])
    );
});

self.addEventListener('fetch', function(event) {

    if (event.request.url.startsWith(location.origin) === false) return;

    event.respondWith(
        caches.match(event.request)
            .then(function(response) {

                if (response) {
                    if (debug === true) console.log("Serving " + event.request.url + " from cache.");
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                if (debug === true) console.log("Added " + event.request.url + "to cache");
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                ).catch(
                    () => {
                        console.log("Problem");
                        if (event.request.url.indexOf("index.php?") == -1) return;
                        else {
                            console.log("Fixing");
                            return caches.open(CACHE_NAME).then(
                                function(cache) {
                                    // cache.keys().then(function(keys) { console.log(keys); })
                                    return cache.match("index.php")
                                });
                        }
                    }
                    );
            })
        );
});
