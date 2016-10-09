function loadData(){

		$("body").tooltip({ selector: '[data-toggle=tooltip]' });
		createBindings();
 
}

var kbind = {};
function createBindings(){

		var tweets = tweet;
		var tweetFields = [];
		tweets.forEach(function(tweet, index){
			var newTweet = {};
			newTweet.name = tweet.user.name;
			newTweet.username = tweet.user.screen_name;
			newTweet.text = tweet.text;
			newTweet.user_img = tweet.user.profile_image_url;
			newTweet.favorite_count = tweet.favorite_count;
			newTweet.retweet_count = tweet.retweet_count;
			newTweet.hasImage = tweet.hasImage;
			newTweet.imgUrl = tweet.imgUrl;
			tweetFields.push(newTweet);
		});
		kbind['tweets'] = tweetFields;
		console.log(kbind);
		ko.applyBindings(kbind);
}

