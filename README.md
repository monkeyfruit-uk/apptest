# App Configuration File: config.js
<pre><code>
{
	"maps": {
		"locations": "",
		"api": "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false",
		"key": "",
		"mapType": "roadmap",
		"useGPS": true,
		"zoom": 16,
		"startAt": {
			"latitude": 0,
			"longitude": 0,
			"zoom": 11
		},
		"cache": 8640000,
		"callback": "app.maps.googleMapsInit"
	},
	"profile": {
		"photo": "assets/images/photo.jpg"
	},
	"timer": {
		"side": "left"
	}
}
</code></pre>

## maps
Settings block for the maps

* `locations:` URL to the JSON file holiding locations to be marked on the map

* `api:` Location of the Google Maps API file

* `key:` Google Maps API key if you need to track usage

* `mapType:` Type of map to be used, options are: *"roadmap" | "hybrid" | "satellite" | "terrain"*


* `useGPS:` Set to true for the map to centre on the users current location

* `zoom:` The level of zoom to be used when showing the users location

* `startAt:` Attributes to determine where the map should load when the users location is not used or can not be determined.

* `cache:` How long in milliseconds the locations will be kept before requesting the file from the server

* `callback:` *DO NOT CHANGE THIS VALUE!*

## profile
Settings block for the profile

* **photo: ** location of the default profile photo, relaitve to index.html

# 
# 
# Using the app framework

Acessing the framework is via a global variable: *window.app*

## Framework modules

* `app.maps`
* `app.profile`
* `app.timer`

## Useful methods and properties

### maps

* `app.maps.load(target, success, error): ` Loads the map and list of locations
	* `target` DOM element the map should be loaded in to.
	* `success` a method to be called once the map has loaded
	* `error` a method to be called if locading the maps fails will return, first parameter will be the error message.
* `app.maps.getLocationsList(): ` Returns an array of locations <pre>[{title:"", address:"", telephone: ""}, 
   {title:"", address:"", telephone: ""}]</pre>
   
### profile

* `app.profile.get(key):` Retrieves the profile value for the key sent (can be name | dob | photo)
* `app.profile.set(key, value):` Used to set the profile properties, same options as the get
* `app.profile.setPhotoFromCamera():` This will allow you get take a picture using the camera
* `app.profile.setPhotoFromLibrary():` This will allow you use an existing pictire from your album

### timer

* `app.timer.setSide(side):` Sets which side the feeding is taking place on (accepts "l" or "r")
* `app.timer.toggleTimer(tick):` Start/stop the timer and record each session.
	* `tick` The method to be called on each tick of the timer, first parameter should accept a string with the current time. E.g. <pre><code> app.timer.toggleTimer(function(time){
 	$('#timer').html(time);
 });</code></pre>
* `app.timer.getLastRecord():` Returns the last session recorded.
* `app.timer.getRecordsByDay():` Returns summary information for the diary view.
* `app.timer.deleteRecord(id):` Removes record with the specified id.

 










 