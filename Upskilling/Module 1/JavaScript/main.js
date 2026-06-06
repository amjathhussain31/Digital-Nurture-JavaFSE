/* =====================================================
   COMMUNITY EVENT PORTAL
   JAVASCRIPT EXERCISES INTEGRATED FILE
===================================================== */

console.log("Community Event Portal Loaded");

/* =====================================================
   EVENT CLASS
===================================================== */

class Event {

    constructor(
        name,
        date,
        seats,
        category
    ) {

        this.name = name;
        this.date = date;
        this.seats = seats;
        this.category = category;
    }

    checkAvailability() {

        return this.seats > 0;
    }
}

/* =====================================================
   EVENT ARRAY
===================================================== */

let events = [

    new Event(
        "Music Festival",
        "2026-07-15",
        50,
        "Music"
    ),

    new Event(
        "Food Carnival",
        "2026-08-01",
        20,
        "Food"
    ),

    new Event(
        "Sports Meetup",
        "2026-09-10",
        0,
        "Sports"
    )
];

/* =====================================================
   WINDOW LOAD
===================================================== */

window.onload = function () {

    console.log(
        "Window Loaded Successfully"
    );

    loadStoredPreference();

    renderEvents();
};

/* =====================================================
   PHONE VALIDATION
===================================================== */

function validatePhone() {

    const phone =
        document.getElementById(
            "phone"
        ).value;

    if (
        phone.length > 0 &&
        phone.length < 10
    ) {

        alert(
            "Phone number must contain at least 10 digits."
        );
    }
}

/* =====================================================
   EVENT FEES
===================================================== */

function showFee() {

    const eventType =
        document.getElementById(
            "eventType"
        ).value;

    let fee = "";

    switch (eventType) {

        case "Music":
            fee = "Registration Fee: ₹500";
            break;

        case "Food":
            fee = "Registration Fee: ₹300";
            break;

        case "Sports":
            fee = "Registration Fee: ₹400";
            break;

        default:
            fee = "";
    }

    document.getElementById(
        "feeDisplay"
    ).innerHTML = fee;

    localStorage.setItem(
        "preferredEvent",
        eventType
    );
}

/* =====================================================
   FORM SUBMISSION
===================================================== */

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById(
            "name"
        ).value;

    document.getElementById(
        "confirmation"
    ).value =
        "Registration Successful!";

    sessionStorage.setItem(
        "registeredUser",
        name
    );

    alert(
        "Registration Successful!"
    );

    console.log(
        "Registered User:",
        name
    );
}

/* =====================================================
   CHARACTER COUNTER
===================================================== */

function countCharacters() {

    const count =
        document.getElementById(
            "feedback"
        ).value.length;

    document.getElementById(
        "charCount"
    ).innerText = count;
}

/* =====================================================
   DOUBLE CLICK IMAGE
===================================================== */

function enlargeImage(img) {

    if (
        img.style.transform ===
        "scale(1.3)"
    ) {

        img.style.transform =
            "scale(1)";
    }

    else {

        img.style.transform =
            "scale(1.3)";
    }
}

/* =====================================================
   VIDEO READY EVENT
===================================================== */

function videoReady() {

    document.getElementById(
        "videoStatus"
    ).innerText =
        "Video is ready to play.";

    console.log(
        "Video can now play."
    );
}

/* =====================================================
   BEFORE UNLOAD
===================================================== */

window.onbeforeunload =
    function () {

        return (
            "Are you sure you want to leave?"
        );
    };

/* =====================================================
   LOCAL STORAGE
===================================================== */

function loadStoredPreference() {

    const savedEvent =
        localStorage.getItem(
            "preferredEvent"
        );

    if (
        savedEvent &&
        document.getElementById(
            "eventType"
        )
    ) {

        document.getElementById(
            "eventType"
        ).value = savedEvent;

        showFee();
    }

    console.log(
        "Stored Event:",
        savedEvent
    );
}

/* =====================================================
   CLEAR STORAGE
===================================================== */

function clearPreferences() {

    localStorage.clear();

    sessionStorage.clear();

    alert(
        "Preferences Cleared."
    );

    console.log(
        "Storage Cleared"
    );
}

/* =====================================================
   GEOLOCATION
===================================================== */

function findLocation() {

    if (
        navigator.geolocation
    ) {

        navigator.geolocation
            .getCurrentPosition(

                function (
                    position
                ) {

                    document
                        .getElementById(
                            "geoResult"
                        )
                        .innerHTML =

                        "Latitude: " +
                        position.coords.latitude +

                        "<br>" +

                        "Longitude: " +
                        position.coords.longitude;

                    console.log(
                        position.coords
                    );
                },

                function (
                    error
                ) {

                    switch (
                        error.code
                    ) {

                        case error.PERMISSION_DENIED:

                            alert(
                                "Permission Denied"
                            );

                            break;

                        case error.TIMEOUT:

                            alert(
                                "Request Timed Out"
                            );

                            break;

                        default:

                            alert(
                                "Unable to get location"
                            );
                    }
                },

                {
                    enableHighAccuracy:
                        true,

                    timeout: 5000
                }
            );
    }

    else {

        alert(
            "Geolocation not supported."
        );
    }
}

/* =====================================================
   ADD EVENT
===================================================== */

function addEvent(
    name,
    date,
    seats,
    category
) {

    const event =

        new Event(
            name,
            date,
            seats,
            category
        );

    events.push(event);

    renderEvents();

    console.log(
        "Event Added",
        event
    );
}

/* =====================================================
   FILTER EVENTS
===================================================== */

function filterEventsByCategory(
    category
) {

    return events.filter(

        event =>

        event.category ===
        category
    );
}

/* =====================================================
   RENDER EVENTS
===================================================== */

function renderEvents() {

    const container =

        document.getElementById(
            "eventContainer"
        );

    if (!container) return;

    console.log(
        "Rendering Events..."
    );
}

/* =====================================================
   ARRAY METHODS
===================================================== */

const availableEvents =

    events.filter(

        event =>

        event.checkAvailability()
    );

console.log(
    "Available Events:",
    availableEvents
);

/* =====================================================
   FETCH API
===================================================== */

function loadPosts() {

    fetch(
        "https://jsonplaceholder.typicode.com/posts"
    )

        .then(

            response =>
            response.json()
        )

        .then(

            data => {

                console.log(
                    "Posts Loaded",
                    data
                );
            }
        )

        .catch(

            error => {

                console.error(
                    error
                );
            }
        );
}

/* =====================================================
   ASYNC / AWAIT
===================================================== */

async function loadPostsAsync() {

    try {

        const response =

            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

        const data =

            await response.json();

        console.log(
            "Async Data",
            data
        );
    }

    catch (error) {

        console.error(
            error
        );
    }
}

/* =====================================================
   DEBUGGING DEMO
===================================================== */

function debugDemo() {

    console.log(
        "Debugging Started"
    );

    let test = 100;

    console.log(
        test
    );
}

/* =====================================================
   CALL SAMPLE FUNCTIONS
===================================================== */

debugDemo();
loadPosts();