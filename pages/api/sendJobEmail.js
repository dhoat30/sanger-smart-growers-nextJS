// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_KEY = process.env.MAILGUN_API_KEY; 
const DOMAIN = 'sandbox93c505de5180440798332fd28ed32a3c.mailgun.org';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

export default function handler(req, res) {
 const msg = `Form Name: ${req.body.formName} \n First Name: ${req.body.firstName} \n Last Name: ${req.body.lastName} \n Phone Number: ${req.body.phoneNumber} \n Email: ${req.body.emailAddress} \n Legal Status: ${req.body.legalStatus} \n Transport: ${req.body.transport} \n Accomodation: ${req.body.accomodation} \n Found: ${req.body.found}`
 var data = JSON.stringify(req.body.msg);

  if (req.method === 'POST') {

    const messageData = {
      from: req.body.emailAddress,
      to: 'pardeep@sangergrowers.co.nz',
      subject: 'Form Submission',
      text: msg
    };
    
    client.messages.create(DOMAIN, messageData)
    .then((response) => {
      console.log(response);
      if(response.status === 200){ 
        res.status(200).json({ data: response })
      }
      else{ 
        res.status(400).json({ data: response })
      }
 
    })
    .catch((err) => {
      console.error(err);
    });
    
  }
}