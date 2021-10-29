// require('dotenv').config()

import express from 'express'
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`nodemailerFCC is listening at http://localhost:${port}`)
})




//  Transporter
// Pay attention, as apart from the user and the pass keys, 
// which are your own credentials for your gmail account, 
// the other three keys need to be retrieved after setting up OAuth.
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clietnSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

//  MailOptions Object 
let mailOptions = {
    from: codebuilder.bob@gmail.com,
    to: codebuilder.bob@gmail.com,
    subject: "nodemailerFFC Project",
    text: "Hi from your nodemailer project"
};

// sendMail
transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        console.log("Error " + err);
    }else{
        console.log("Email sent successfully");
    }
});