const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = require('../profile/profile_model');

const EntrantSchema = new Schema({
    _id: Number,
    medal: { type: Boolean, required: true },
    total_score: { type: Number, required: true },
    is_entranted: { type: Boolean, required: true },
    entrant_year: { type: Number, required: true },
    //_profile_id: { type: Schema.Types.ObjectId, ref: 'Profile'}
   /// _speciality_id: { type: Schema.Types.ObjectId, ref: 'brbrbbr' }
});

module.exports = mongoose.model('Entrant', EntrantSchema);