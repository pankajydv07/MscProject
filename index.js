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
  await mongoose.connect("mongodb://127.0.0.1:27017/mscproject");
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

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});
 
app.get("/profile", (req, res) => {
    res.render("profile.ejs");
});

app.get("/organize", (req, res) => {
    res.render("organizer.ejs");
});

app.post("/explore", async (req, res) => {
    const { name, tagline, description, date, venue, mode, tracks, rules, contact_email, host, event_type, timezone, contact, countdown } = req.body;
    const newEvent = new Event({ 
        name, 
        tagline, 
        description, 
        date: { start: date.start, end: date.end }, 
        venue, 
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