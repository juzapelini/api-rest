
//FUNCIONANNNNNNDOOOOOOOOOOOOOOOOOO
const request = require('request');

const URL = 'http://httpbin.org/ip';
const getIP = (callback) => {
  request(URL, {json : true}, (err, res, body) =>{
    if (err){
      return callback(err)
    }
    // return callback(body)
    return callback(res)
  })
}

module.exports.callApi = getIP;













// exports.get =  async (req, res, next)  => { 
    
//   console.log('callAPI-service::get::11111');


//   await request("http://httpbin.org/ip", function(error, response, body) {
//     console.log('callAPI-service::get::2222');
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     const statusCode = response.statusCode;
//     console.log('body:', body); // Print the HTML for the Google homepage.
//     const data = body;
//   });

//   res.status(statusCode);
//   res.send(data); 

//   console.log('callAPI-service::get::333333');
//   return;
// };

//http://httpbin.org/ip'

  // requestePromisse(options)
  //     .then(function (response) {
  //         console.log('callAPI-service::get::333333');
  //         console.log("statusCode: ", response.statusCode);
  //         console.log('User has %d repos', response.length);
  //         console.log('repos: ', response);
  //         return response;

  //     })
  //     .catch(function (err) {
  //         console.log('callAPI-service::get::444444');
  //         console.log(err);
  //     });

  // console.log('callAPI-service::get::5555');
  




// exports.get = async () => {
    
//     console.log('callAPI-service::get::11111');
//     await request("http://www.google.com", function(error, response, body) {
//         console.log('error:', error); // Print the error if one occurred
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log('body:', body); // Print the HTML for the Google homepage.
//     });
//   };




// exports.get3 =  (req, res, next) => {
//     console.log('callAPI-service::get::11111');

//     request("http://www.google.com", function(error, response, body) {
//         next();
//     });
//     console.log('callAPI-service::get::222222');
//     return body;
// };

  
// exports.get = async () => {   
//     console.log('callAPI-service::get::11111');

//     var options = {
//         url: 'https://jsonplaceholder.typicode.com/users',
//         // headers: {
//         //   'User-Agent': 'request'
//         // }
//       };

//     console.log('callAPI-service::get::22222');
//     var data = '';
//     try {
//         await request(options, function(error, res, body){
//             console.log('HTTP StatusCode: '+ res.statusCode);
    
//             if(!error && res.statusCode == 200){
//                 console.log('callAPI-service::get::3333');
//                 //console.log(body);
//                 data = body;
//             }else{
//                 console.log('callAPI-service::get::4444');
//                 console.log('Http Error: '+ error);
//             }
//         }); 

//         return data;
//     } catch (error) {
//         console.log('callAPI-service::get::5555 ERROOOOOOOOO');
//         console.log(error);
//     }
// }



// exports.get = async () => {   
//     console.log('callAPI-service::get::11111')
//     https.get('https://jsonplaceholder.typicode.com/users', res =>{
//         console.log(res.statusCode);
//         console.log(res.headers);
    
//         let body = "";
//         res.on('data', data =>{
//             body += data;
//             console.log('callAPI-service::get::222222')
//         })
//         console.log(body)
//         res.on('end', () =>  body);

//         console.log('callAPI-service::get::33333')
        
//     }).on('error', error => console.error(error.message));
// }

// exports.get = async () => {
//     console.log('callAPI-service::get::11111')
//     const options = {
//         hostname: 'https://jsonplaceholder.typicode.com/users',
//         //port: 443,
//         //path: '/users',
//         // headers: {
//         //     'Content-Type': 'application/x-www-form-urlencoded',
//         //     'Content-Length': Buffer.byteLength(postData)
//         // }
//         method: 'GET'
//     };
//     console.log('callAPI-service::get::222222')

//     const data2 = "";

//     const req = https.request(options, (res) => {
//         console.log('statusCode:', res.statusCode);
//         console.log('headers:', res.headers);
    
//         res.on('data', (data) => {
//             //res.setEncoding('utf8');
//             data2 = data;
//             process.stdout.write(data);
//         });
//     });
//     console.log('callAPI-service::get::33333')
//     req.on('error', (e) => {
//         console.error(e);
//     });
//     req.end((), =>{
//         return data;
//     }); 

//     console.log('callAPI-service::get::44444')
    
// }
