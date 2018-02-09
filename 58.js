/*var foo=(arg1,arg2) => {
	console.log('foo:'+arg1+arg2);
}
setTimeout(foo,1500,'joe','jim');
//------------------------------------------------------------------------------------------
setTimeout(() => console.log('Masranym'),2000);
console.log("Helloworld");
//------------------------------------------------------------------------------------------
var id= setInterval(()=> console.log('fool'),2500);
setTimeout(()=>clearInterval(id),10000);
//------------------------------------------------------------------------------------------
function CurriedAdd(x){ 
	return function(y){ return x+y} 
};
g = CurriedAdd(2);
console.log(g(3))
//-----------------------------------------------------------------------------------------
//=== Non curried function 
function greet(mesg) {console.log(mesg);}
function greeter(name) {return "Hello" + name;}
var mesg = greeter('John')
greet(mesg);

//==== curried function
function greeter(name) {
	var mesg = "Hello" + name;
	return function  greet() {
		console.log(mesg)
	}

}

var fn = greeter('John');
fn();
//-----------------------------------------------------------------------------------------
function sumAll() {
	   var total=0;
   for (var i=0; i< sumAll.arguments.length; i++) 
   		total+=sumAll.arguments[i];
   return(total); 
}
console.log(sumAll(3,5,3,5,3,2,6));
//-----------------------------------------------------------------------------------------
var sumAll = (... args) => {
   var total=0;
   for (var i=0; i< args.length; i++) 
   		total+=args[i];
   return(total); 
}
console.log(sumAll(5,5,4,5,3,2,6));
//----------------------------------------------------------------------------------------*/
/*var myFunction = require('./59.js');
console.log(myFunction.sa(3,9,9));
*/
/*var myFunction = require('./59.js');
console.log(myFunction.sa(3,9,9));
*/
var net = require('net');

var HOST = 'dev.werapun.com';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected,
    //the server will receive it as message from the client 
    client.write('Miinmas');

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    // Close the client socket completely
    client.destroy();
    
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('18');
}); 

