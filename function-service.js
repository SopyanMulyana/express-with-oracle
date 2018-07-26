module.exports = {
    oracledb : require('oracledb'),
    dbConfig : require('./dbconfig.js'),
    foo: function () {
      // whatever
    },
    bar: function () {
      // whatever
    },
    doconnect : function(args,callback) {
      
      var oracledb = require('oracledb');
      var dbConfig = require('./dbconfig.js');
      oracledb.getConnection(
        {
          user          : dbConfig.user,
          password      : dbConfig.password,
          connectString : dbConfig.connectString
        },function(err,connection){
            callback(null,connection,args);
        });
    },
    doquery : function(connection2,args,callback) {
      // var oracledb = require('oracledb');
      // var dbConfig = require('./dbconfig.js');
      // oracledb.getConnection(
      //   {
      //     user          : dbConfig.user,
      //     password      : dbConfig.password,
      //     connectString : dbConfig.connectString
      //   },
      //   function(err, connection2) {
          // if (err) {
          //   console.error("1. error",err.message);
          //   //return cb(err, conn);
          // }
          connection2.execute(
            `SELECT * FROM CUSTOMERS WHERE CITY = :id`,[args],
            function(err, result) {
              if (err) {
                console.error("ini error",err.message);
                //return cb(err, conn);
              }
  
              // Uncomment the autoCommit option above and you will see both rows
              console.log(result.rows);
              
              connection2.close(
                function(err) {
                  if (err) {
                    console.error(err.message);
                    return callback(err, conn);
                  } else
                    return callback(null,result.rows)
                });
            });
        // });
    },
    dorelease : function(conn) {
      conn.close(function (err) {
        if (err)
          console.error(err.message);
      });
    }
  };
  
  var zemba = function () {
  }