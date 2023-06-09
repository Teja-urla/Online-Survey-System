const mongoose =require('mongoose');

const PostSchema =mongoose.Schema({
    user_id: {
        type: String,
        required:true
    },
    document_name: {
          type: String,
          required:true
    },
    doc_desc: {
        type:String,
        required:true
    },
    questions:{
        type: mongoose.Schema.Types.Mixed
    }
});

module.exports =mongoose.model('Posts',PostSchema);