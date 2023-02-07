// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const formApiKey = "pat-na1-59bcc5be-e72e-4a87-bf25-58f4efb3a18c"

export default function handler(req, res) {
  if (req.method === 'POST') {
    var axios = require('axios');
    var data = JSON.stringify({
      "properties": {
        "email": req.body.emailAddress,
        "firstname": req.body.firstName,
        "lastname": req.body.lastName,
        "phone": req.body.phoneNumber,
        "company": req.body.companyName,
        "orchard_size": req.body.orchardSize,
        "lifecyclestage": req.body.leadType
      }
    });

    var config = {
      method: 'post',
      url: 'https://api.hubapi.com/crm/v3/objects/contacts',
      headers: {
        'Authorization': 'Bearer pat-na1-dbe412ac-b53d-47ed-a104-07a481fe73ae',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        res.status(200).json({ data: response.data })
      })
      .catch(function (error) {
        console.log(error);
        res.status(409).json({ data: error.data })
      });
  }
}