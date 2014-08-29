closures-concept
================

Once upon a time:

There was a princess...

function princess() {
She lived in a wonderful world full of adventures. She met her Prince Charming, rode around her world on a unicorn, battled dragons, encountered talking animals, and many other fantastical things.

    var adventures = [];

    function princeCharming() { /* ... */ }

    var unicorn = { /* ... */ },
        dragons = [ /* ... */ ],
        squirrel = "Hello!";
But she would always have to return back to her dull world of chores and grown-ups.

    return {
And she would often tell them of her latest amazing adventure as a princess.

        story: function() {
            return adventures[adventures.length - 1];
        }
    };
}
But all they would see is a little girl...

var littleGirl = princess();
...telling stories about magic and fantasy.

littleGirl.story();
And even though the grown-ups knew of real princesses, they would never believe in the unicorns or dragons because they could never see them. The grown-ups said that they only existed inside the little girl's imagination.

But we know the real truth; that the little girl with the princess inside...



**********************


Very creative, and this also highlights a topic that's not always mentioned: that closures can be used to keep private data private from outside code. In this case, the "adults" (any code outside the princess function) have no way to access the "unicorn" (data in the closure), even though it really does exist, and the little princess (function) has full access to it. So the lesson for the 6-year old is that a closure is like little "world" that you can go into from time-to-time, containing things that are not visible from "the outside". Well Done


the princess() function is a complex scope containing private data. Outside the function, the private data can't be seen or accessed. The princess keeps the unicorns, dragons, adventures etc. in her imagination (private data) and the grown-ups can't see them for themselves. BUT the princess's imagination is captured in the closure for the story() function, which is the only interface the littleGirl instance exposes into the world of magic.



Let's imagine the next situation: driver is sitting in a car. That car is inside a plane. Plane is in the airport. The ability of driver to access things outside his car, but inside the plane, even if that plane leaves an airport, is a closure. That's it. When you turn 27, look at the more detailed explanation or at the example below. Have a nice day!

UPDATE

Here is how I can convert my plane story into the code.

    var plane = function (defaultAirport) {

    var lastAirportLeft = defaultAirport;

    var car = {
        driver: {
            startAccessPlaneInfo: function () {
                setInterval(function () {
                    console.log("Last airport was " + lastAirportLeft);
                }, 2000);
            }
        }
    };
    car.driver.startAccessPlaneInfo();

    return {
        leaveTheAirport: function (airPortName) {
            lastAirportLeft = airPortName;
        }
    }
}("Boryspil International Airport");

plane.leaveTheAirport("John F. Kennedy");
