var announcements=require('../models/coordinatorAnnouncement');
function addAnnouncement (CoordinatorName , announcementID , Title,details,dateOfAnnouncement,role){
    const announcement=new announcements({
        CoordinatorName:CoordinatorName,
        announcementID:announcementID,
        Title:Title,
        details:details,
        dateOfAnnouncement:dateOfAnnouncement,
        role:role
    });
    announcement.save().then(function(data){
console.log("Announcement added");
    }).catch(function(err){
console.log(err);
    });
   

}
module.exports=addAnnouncement;