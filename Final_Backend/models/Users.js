const mongoose= require ('mongoose'),
        Schema= mongoose.Schema;

const userSchema= {
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
    Alumni: {type:String, required: true, unique: true},
    Recording_URL: {type:String, required: true},
    School: {type:String, required: true},
    Photo_URL: {type:String, required: true},
    Github: {type:String, unique: true},
    LinkedIn: {type:String, unique: true, required: true},
    Twitter: {type:String, unique: true},
    Project_snapShot_URL1: {type:String, required: true},
    Project_Title1: {type:String, required: true},
    Project_snapShot_URL2: {type:String, required: true},
    Project_Title2: {type:String, required: true},
    Project_snapShot_URL3: {type:String, required: true},
    Project_Title3: {type:String, required: true},
    Description: {type:String, required: true},
}

const userModel= mongoose.model('User', userSchema);

module.exports= userModel;