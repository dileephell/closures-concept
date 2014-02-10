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


...is really a princess with a little girl inside.
