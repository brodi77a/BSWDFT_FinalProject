const mongoose= require ('mongoose'),
        Schema= mongoose.Schema;

const userSchema= {
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
    Alumni: String,
    Recording_URL: String,
    School: String,
    Photo_URL: String,
    Github: String,
    LinkedIn: String,
    Project_snapShot_URL: String,
    Project_Title: String,
    Description: String
}

const userModel= mongoose.model('User', userSchema);

module.exports= userModel;