var cheerio = require('cheerio');
var request = require('request');

do_request = function(success){
    var jar = request.jar();
    request({
        uri: "https://shareworks.solium.com/solium/servlet/userLogin.do",
        method: "POST",
        form: {
            state: '',
            lang: '',
            browserwidth:1264,
            browserheight:661,
            screenwidth:2560,
            screenheight:1440,
            account_number: 'tdowling',
            password: process.env.SOLIUM_PASS,
            login_method: 'account_number'
        },
        jar: jar
    }, function(error, response, body) {
        request({
            uri: "https://shareworks.solium.com/solium/servlet/userCommonEmployeePortfolio.do?employee_id=4683052740",
            method: "GET",
            jar:jar
        }, function(error, response, body){
            var $ = cheerio.load(body);
            res = [];
            el = $('#_table tr:last-child td:nth-child(4)')
            console.log(el.text());
            success(body);
        });
    });
}
module.exports.do_request = do_request

