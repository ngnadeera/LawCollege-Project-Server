const express = require('express');
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json())

const db = require('./models');

//Routers

const Applicant_signup = require("./routes/Applicant_signup");
app.use("/Applicant_signup", Applicant_signup);

const GEA_personal_details = require("./routes/GEA_personal_details");
app.use("/GEA_personal_details", GEA_personal_details);

const GEA_contact = require("./routes/GEA_contact");
app.use("/GEA_contact", GEA_contact);

const GEA_address = require("./routes/GEA_address");
app.use("/GEA_address", GEA_address);

const GEA_al_results = require("./routes/GEA_al_results");
app.use("/GEA_al_results", GEA_al_results);

const GEA_al = require("./routes/GEA_al");
app.use("/GEA_al", GEA_al);

const GEA_convicted_fine = require("./routes/GEA_convicted_fine");
app.use("/GEA_convicted_fine", GEA_convicted_fine);

const GEA_convicted_offence = require("./routes/GEA_convicted_offence");
app.use("/GEA_convicted_offence", GEA_convicted_offence);

const GEA_language_selection = require("./routes/GEA_language_selection");
app.use("/GEA_language_selection", GEA_language_selection);

const GEA_ol_english = require("./routes/GEA_ol_english");
app.use("/GEA_ol_english", GEA_ol_english);

const GEA_ol_sinhala = require("./routes/GEA_ol_sinhala");
app.use("/GEA_ol_sinhala", GEA_ol_sinhala);

const GEA_ol_tamil = require("./routes/GEA_ol_tamil");
app.use("/GEA_ol_tamil", GEA_ol_tamil);

const GEA_other_qulification = require("./routes/GEA_other_qulification");
app.use("/GEA_other_qulification", GEA_other_qulification);

const GEA_payment = require("./routes/GEA_payment");
app.use("/GEA_payment", GEA_payment);

const GEA_previous_sits = require("./routes/GEA_previous_sits");
app.use("/GEA_previous_sits", GEA_previous_sits);

const Student_login = require("./routes/Student_login");
app.use("/Student_login", Student_login);

const Applicant_edit_request = require("./routes/Applicant_edit_request");
app.use("/Applicant_edit_request", Applicant_edit_request);

const Entrance_exam_center = require("./routes/Entrance_exam_center");
app.use("/Entrance_exam_center", Entrance_exam_center);

const Entrance_exam_center_allocation = require("./routes/Entrance_exam_center_allocation");
app.use("/Entrance_exam_center_allocation", Entrance_exam_center_allocation);

const Entrance_exam_admission = require("./routes/Entrance_exam_admission");
app.use("/Entrance_exam_admission", Entrance_exam_admission);

const Entrance_exam_date_time = require("./routes/Entrance_exam_date_time");
app.use("/Entrance_exam_date_time", Entrance_exam_date_time);

const Entrance_exam_results = require("./routes/Entrance_exam_results");
app.use("/Entrance_exam_results", Entrance_exam_results);

const View_entexmaddmilist = require("./routes/view_entexmaddmilist")
app.use("/View_entexmaddmilist", View_entexmaddmilist);

const Notices = require("./routes/Notices");
app.use("/Notices", Notices);


//Internal student's Routes

const Registered_Applicants = require("./routes/Registered_Applicants");
app.use("/Registered_Applicants", Registered_Applicants)

const Student_personal_details = require("./routes/Student_personal_details");
app.use("/Student_personal_details", Student_personal_details) 

const Student_al = require("./routes/Student_al")
app.use("/Student_al", Student_al)

const Student_al_results = require("./routes/Student_al_results")
app.use("/Student_al_results", Student_al_results)

const Student_ol = require("./routes/Student_ol")
app.use("/Student_ol", Student_ol)

const Student_other_qulification = require("./routes/Student_other_qulification")
app.use("/Student_other_qulification", Student_other_qulification)

const Student_convicted = require("./routes/Student_convicted")
app.use("/Student_convicted", Student_convicted)

const Preliminary_Lecture_Regisration = require("./routes/Preliminary_Lecture_Regisration ")
app.use("/Preliminary_Lecture_Regisration", Preliminary_Lecture_Regisration)

const Intermidiate_Lecture_Regisration  = require("./routes/Intermidiate_Lecture_Regisration")
app.use("/Intermidiate_Lecture_Regisration", Intermidiate_Lecture_Regisration )

const Final_Lecture_Regisration = require("./routes/Final_Lecture_Regisration")
app.use("/Final_Lecture_Regisration", Final_Lecture_Regisration)

const Student_Status = require("./routes/Student_Status")
app.use("/Student_Status", Student_Status)

db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("Server Running on Port 3001")
    });
})
