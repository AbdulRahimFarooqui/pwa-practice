let cacheData = "appv1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            data.addAll([
                "index.html",
                "App.js",
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js"
            ])
        }).catch((err) => {
            console.log("err", err)
        })
    )
})

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                console.log("results:", result);
                if (result) {
                    return result;
                }
            })
        )
    }
})