function loadData(){

	var getInfoReq = new XMLHttpRequest();
	var infoUrl = "https://stream.twitter.com/1.1/statuses/sample.json?oauth_consumer_key=1oi7DeHwoDQnHuUqe9bttt8bf&oauth_token=784482147981819904-2xfQZTz57q0A8gV5e1v95C7w5EGNaMu&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1475948690&oauth_nonce=TXshkc&oauth_version=1.0&oauth_signature=oN9EsSJC64N/N3fL85W28F3C08M=";

	getInfoReq.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText);	
		}
	}
	getInfoReq.open('GET', infoUrl, true);
	getInfoReq.send();

}
