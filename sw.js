self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./script.js",
                "./assets/project.json",
                "./assets/cd21514d0531fdffb22204e0ec5ed84a.svg",
                "./assets/83a9787d4cb6f3b7632b4ddfebf74367.wav",
                "./assets/ba905a21ae1a6beb3b54acd07851a09e.png",
                "./assets/50b2ebc8a4c0087d23c77ac6023d7f18.svg",
                "./assets/64b59074f24d0e2405a509a45c0dadba.svg",
                "./assets/5878ffdcc84c0a4387aef46d0a7a5dc8.svg",
                "./assets/9f75c26aa6c56168a3e5a4f598de2c94.svg",
                "./assets/e8d8bf59db37b5012dd643a16a636042.svg",
                "./assets/57f7afe3b9888cca56803b73a62e4227.svg",
                "./assets/b8209e1980475b30ff11e60d7633446d.svg",
                "./assets/aacb5b3cec637f192f080138b4ccd8d2.svg",
                "./assets/84d9f26050c709e6b98706c22d2efb3d.svg",
                "./assets/6194b9a251a905d0001a969990961724.svg",
                "./assets/55e95fb9c60fbebb7d20bba99c7e9609.svg",
                "./assets/0f53ee6a988bda07cba561d38bfbc36f.svg",
                "./assets/14e46ec3e2ba471c2adfe8f119052307.svg",
                "./assets/e42484e6a9e19217b0b2ab24f83117af.svg",
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})