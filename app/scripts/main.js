'use strict';

var aryImages = [
				  'http://www.pageresource.com/wallpapers/wallpaper/water-wedding-cool-helicopters_110264.jpg',
				  'http://hdwalldownloads.com/wp-content/uploads/2014/02/Fantasy-Cool-Wallpaper-Free-Download-1024x576.jpg',
				  'http://th02.deviantart.net/fs71/PRE/i/2013/194/e/b/hoods_are_cool____by_moni158-d6dam6q.png',
				];

function imageLooper(aryImages, numDelayMilliseconds) {
	var numCounter = 0;

	setInterval(function() {
		$('#image-render').empty();
		$('#image-render').append('<img src="' + aryImages[numCounter] + '">');

		numCounter += 1;

		if (numCounter === aryImages.length) {
			numCounter = 0;
		}
	}, numDelayMilliseconds);
}

imageLooper(aryImages, 2500);