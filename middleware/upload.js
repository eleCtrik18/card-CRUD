const multer = require("multer");
const Path = require('path');

const storage = multer.diskStorage({


});



let upload = multer({
  storage: storage,

});

module.exports = upload.single();
