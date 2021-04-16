const  express = require('express');
const path = require('path');
const port = 8000;
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList =[
    {
        name:'DELHI',
        mobile:'5522889944'
    },
    {
        name:'MUMBAI',
        mobile:'5522334'
    },
    {
        name:'NAGPUR',
        mobile:'8888888888'
    },

    {
        name:'PUNE',
        mobile:'254527911'
    }
]




app.get('/',function(req,res){
        return res.render('home',{
            title:'Contact List',
            contact_list:contactList
        });
});


app.get('/profile',function(req,res){
    res.send('<p>Profile Page Saurav Salunke </p>');
});



app.post('/create-contact',function(req,res){
   contactList.push({
       name:req.body.name,
       mobile:req.body.mobile
   })
   return res.redirect('/');
});

app.get('/practise',function(req,res){
    return res.render('practise',{title:'Playground'});
});


app.get('/delete-contact/:mobile',function(req,res){
    let phone = req.params.mobile;
    let contactIndex=contactList.findIndex(contact=>contact.mobile==phone);
    

    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }

    return res.redirect('/');
});





app.listen(port,function(err){
    if(err){
        console.log('Error occured whiile Running Express Server');
    }
    console.log('Yuup!My express server is running successfully on the port no',port);

});