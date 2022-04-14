var video = document.getElementById("player1");

window.addEventListener("load", function() {
	video = document.querySelector("#player1")//.loop = false;
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	// console.log("Pause Video"); not sure if necessary 
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New Speed is now: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New Speed is now: " + video.playbackRate);
}); 

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 15;
	}
	console.log("Current time is now at " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var muted = video.muted; 
	if (muted == false) {
		video.muted = true; 
		console.log("Video Muted");
		this.innerHTML = "UnMute";
	}
	else {
		video.muted = false; 
		console.log("Video Unmuted");
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function(event) {
	video.volume = event.currentTarget.value / 100;
	console.log("Volume is " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
	console.log("Video is now old school");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
	console.log("Video is now original")
});


