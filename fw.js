const {	Schema,	model	}	= require('./conn');
const unique = require('mongoose-beautiful-unique-validation');
const FrameworkSchema	= new Schema({
"title": {
"type": "String",
"required": true,
"unique": "Не бывает одинаковых title"
},
"votes": {
"type": "Number"
},
"id": {
"type": "Number",
"required": true,
"unique": "Не бывает одинаковых id"
}
});
FrameworkSchema.plugin(unique);
const fw	= model('Framework',	FrameworkSchema);
module.exports = {	fw };
