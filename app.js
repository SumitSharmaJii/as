const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const girlName = "Arpitaah"; // ❤️ Change this to her real name
const loveLetter = `
My Dearest ${girlName},

I hope as you read this, you’re wrapped in comfort, surrounded by peace, and know just how deeply and endlessly I love you.

From the moment we crossed paths, something inside me shifted. It was like my heart recognized its missing piece — and there you were, glowing, beautiful, and full of life. You've painted my days with joy, filled my nights with warmth, and turned ordinary moments into the most cherished memories of my life.

Your smile — that breathtaking, soul-melting smile — has the power to brighten the darkest day. The way your eyes light up when you talk about things you love, the way you care for those around you, the way your hand fits perfectly in mine — it's all so magical, so real, and so deeply meaningful to me.

I love you not just for who you are, but for who I become when I’m with you. You’ve brought out the softest, strongest, and most honest parts of me. Your love has been my anchor in the storms, my wings when I’ve needed to fly, and my calm in chaos.

When I imagine the future, it’s your face I see beside mine. In every dream, every hope, and every plan, you’re there — laughing with me, crying with me, growing old with me. I want to hold your hand through every season, cheer you on through every challenge, and dance with you through every joy.

This website is just a small piece of my love for you. A place that will forever hold words from my heart, dedicated to the most extraordinary girl I’ve ever known. You deserve poems written in stars, songs sung by the wind, and a lifetime of love so fierce it never fades.

Thank you for being you. Thank you for letting me love you. And thank you, above all, for loving me in return.

Forever yours,  
Your Love 💖
`;

app.get("/", (req, res) => {
    res.render("index", { name: girlName });
});

app.get("/letter", (req, res) => {
    res.render("letter", { letter: loveLetter });
});

const loveStartDate = new Date("2025-05-06T00:00:00"); // 💖 Set this to when your love began

app.get("/love", (req, res) => {
    const now = new Date();
    const msElapsed = now - loveStartDate;
    const seconds = Math.floor(msElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const heartbeats = Math.floor(seconds * 1.2); // avg 72 bpm → 1.2 beats per second

    res.render("love", {
        girlName,
        seconds,
        minutes,
        hours,
        days,
        heartbeats,
        loveStartDate
    });
});


app.get("/game", (req, res) => {
  res.render("game", { girlName });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
