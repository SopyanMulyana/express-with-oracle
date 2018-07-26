var express = require('express');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var _ = require('lodash');
var app = express();

var async = require('async');
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

//supaya output berbentuk JSON
oracledb.outFormat = oracledb.OBJECT;

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });

app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//timeout handling
var timeout = require('connect-timeout');
//app.use(timeout(5000));

app.use(cookieSession({
    name: 'session',
    secret: 'random_string_goes_here',
    maxAge: 3 * 60 * 60 * 1000
}));

//set CORS
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://localhost:8050');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var port = process.env.PORT || 8050;
var router = express.Router();

//include routing from another files
require('./route-app')(app);

//percobaan
var tools = require('./function-service');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined

// var doconnect = function(cb) {
//     oracledb.getConnection(
//       {
//         user          : dbConfig.user,
//         password      : dbConfig.password,
//         connectString : dbConfig.connectString
//       },
//       cb);
//   };

//   var doquery = function (conn, cb) {
//     oracledb.getConnection(
//       {
//         user          : dbConfig.user,
//         password      : dbConfig.password,
//         connectString : dbConfig.connectString
//       },
//       function(err, connection2) {
//         if (err) {
//           console.error(err.message);
//           return cb(err, conn);
//         }
//         connection2.execute(
//           "SELECT * FROM CUSTOMERS",
//           function(err, result) {
//             if (err) {
//               console.error(err.message);
//               return cb(err, conn);
//             }

//             // Uncomment the autoCommit option above and you will see both rows
//             console.log(result.rows);
//             this.dataBaru = result.rows;
//             connection2.close(
//               function(err) {
//                 if (err) {
//                   console.error(err.message);
//                   return cb(err, conn);
//                 } else
//                   return cb(null, conn);
//               });
//           });
//       });
//   };
//   var dorelease = function(conn) {
//     conn.close(function (err) {
//       if (err)
//         console.error(err.message);
//     });
//   };


// function getEmployee() {
//     var conn;
//     try {
//       conn = oracledb.getConnection(config);
//       const result = conn.execute(
//         "SELECT * FROM CUSTOMERS"
//       );
//       //return result.rows;
//       console.log(result.rows);
//     } catch (err) {
//       console.log('Ouch!', err);
//     } finally {
//       if (conn) { // conn assignment worked, need to close
//          conn.close();
//       }
//     }
// }

// Default Array Output Format
// var doquery_array = function (conn, cb) {
//     conn.execute(
//       "SELECT * FROM CUSTOMER",
//       function(err, result) {
//         if (err) {
//           return cb(err, conn);
//         } else {
//           console.log(result.rows);
//           return cb(null, conn);
//         }
//       });
//   };

router.post('/login', function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    if (userName == 'pimon' && password == 'pimon') {
        req.session.user = userName;
        res.json({
            responseStatus: {
                responseCode: "00",
                responseDesc: "SUCCESS"
            },
            requestId: "62c62124a08049bda7e6e06889ff5ad5",
            data: {}
        });
    } else {
        res.status(401);
        console.dir(req.body);
        res.json({
            responseStatus: {
                responseCode: "401",
                responseDesc: "Unauthorized"
            },
            requestId: "62c62124a08049bda7e6e06889ff5ad5",
            data: req.body
        });
    }

});

app.get('/print/',function(req,res){
    var body = req.body;
    res.sendFile('files/fwd_bck.pdf', { root: __dirname });
})

let dataBaru;
app.get('/branchCash/limit/:id',   function(req, res) {
    var idd = req.params.id;
    var cb,conn;
    let dataBaru;
    console.log(req.session);
    async.waterfall(
        [
            function(cb){
                cb(null, idd)
            },
            tools.doconnect,
            tools.doquery
        ],
        function (err, result) {
          if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
          if (result){
            if (req.session.user) {
                res.json({
                    "responseStatus": {
                      "responseCode": "00",
                      "responseDesc": "SUCCESS"
                    },
                    "requestId": "a6b4aa304d394a6d92f492202d06dae3",
                    "data": result
                  })
            } else {
                res.json({});
            }
            
          }
            
        });

    req.session.user = 'userName';
    // let dataBaru = Object.assign({
    //     branchCode : "0012",
    //     limitType : "0",
    //     subBranchName : "ORIGIN",
    //     limitValue : 8989898900,
    //     active : true,
    //     branchType : "0"
    // });
    //req.session.user && cif
    
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);
