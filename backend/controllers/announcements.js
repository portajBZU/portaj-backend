var announcements=require('../models/coordinatorAnnouncement');
function addAnnouncement (CoordinatorName , announcementID , Title,bodyMSG,dateOfAnnouncement,email,role){
    const announcement=new announcements({
        CoordinatorName:CoordinatorName,
        announcementID:announcementID,
        Title:Title,
        bodyMSG:bodyMSG,
        dateOfAnnouncement:dateOfAnnouncement,
        email:email,
        role:role
    });
    announcement.save().then(function(data){
console.log("Announcement added");
    }).catch(function(err){
console.log(err);
    });
   

}
module.exports=addAnnouncement;