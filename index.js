if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const path = require("path");
const Event = require("./models/event.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);
 

// Connect to MongoDB
main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.dburl);
}

// Routes
app.get("/", (req, res) => {
    res.render("intro.ejs");
  
});

app.get("/explore", async(req, res) => {
    const event = await Event.find();
    res.render("explore.ejs",{ event });
});



app.get("/show/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).send("Event not found");
        }
        res.render("show.ejs", { event });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

app.get("/feature", (req, res) => {
    res.render("feature.ejs");
});

app.get("/repository", (req, res) => {
    res.render("repository.ejs");
});

app.get("/timetable", (req, res) => {
    res.render("timetable.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/login", (req, res) => {
    res.render("index.ejs");
});
 
app.get("/profile", (req, res) => {
    res.render("profile.ejs");
});

app.get("/organize", (req, res) => {
    res.render("organizer.ejs");
});
app.get("/quiz", (req, res) => {
    res.render("quiz.ejs");
});

app.post("/explore", async (req, res) => {
    const { name, tagline, description, date, venue, img = "https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/ai-ml/artificial-intelligence-1920.jpg", mode, tracks, rules, contact_email, host, event_type, timezone, contact, countdown } = req.body;
    const newEvent = new Event({ 
        name, 
        tagline, 
        description, 
        date: { start: date.start, end: date.end }, 
        venue,
        img, 
        mode, 
        tracks, 
        rules, 
        contact_email, 
        host, 
        event_type, 
        timezone,
        contact,
        countdown
    });
    await newEvent.save();
    res.redirect("/explore");
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
  });