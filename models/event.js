const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  venue: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
  },
  tracks: {
    type: String, // Changed back to string
  },
  rules: {
    type: String,
    
  },
  contact_email: {
    type: String,
  },
  host: {
    type: String,
  },
  event_type: {
    type: String,
  },
  timezone: {
    type: String,
  },
  contact: {
    type: String,
  },
  countdown: {
    type: String,
  },
  img: {
    type: String,
    default: 'https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/ai-ml/artificial-intelligence-1920.jpg',
    set: v => v.trim() === '' ? 'https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/ai-ml/artificial-intelligence-1920.jpg' : v,
  },
  link:{
    type: String,
  }
});

// Create the model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;