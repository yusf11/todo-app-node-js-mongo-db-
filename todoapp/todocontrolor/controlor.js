var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var data = [];
mongoose.connect('mongodb+srv://root:root@cluster0.uncwl.mongodb.net/todo?retryWrites=true&w=majority')
var schema = new mongoose.Schema({
    item : String
});
var todo = mongoose.model('todo',schema);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app){
   
    app.get('/todo',(req,res)=>{
        todo.find({},(err,data)=>{
            if(err){throw err};
            
            res.render('todo',{todo : data});
        });
        })

   
    app.post('/todo',urlencodedParser,(req,res)=>{ 
        var newItem = todo(req.body).save((err,data)=>{
            if(err){throw err;}
            res.json(data);

        }

        )
        
    });


    app.delete('/todo/:item',(req,res)=>{
        console.log(req.params.item.replace(/\-/g," "));
        todo.find({item: req.params.item.replace(/\-/g," ")}).deleteMany((err,data)=>{
            if(err){throw err}{
                res.json(data);
            }
        }
        )   

    });

};
