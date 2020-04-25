var Archives=require('../models/Archives');
function addArchive (nameOFreport , yearOfthisArchive , supervisodBy){
    const archive=new Archives({
        nameOFreport:nameOFreport,
        yearOfthisArchive:yearOfthisArchive,
        supervisodBy:supervisodBy,
      
    });
    archive.save().then(function(data){
        console.log("archive added");
            }).catch(function(err){
        console.log(err);
            });
        }
 
        module.exports=addArchive;