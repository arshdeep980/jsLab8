let url = 'https://arshdeep980.github.io/jsLab8/products.json';

function jsonDisplay(url,callback){
	let xhr = new XMLHttpRequest();
 	xhr.open('GET', url);
 	xhr.responseType= 'json';
 	xhr.onload = function(){
 		callback(xhr.response);
 	};
 	xhr.send();
};