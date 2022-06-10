var url = require('url');
var adr = 'https://www.apple.com/ca/macbook-air-m2/';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);/*used in w3 example, but not defined for this apple website*/

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);/*used in w3 example, but not defined for this apple website*/
