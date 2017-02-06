app.controller('myCtrl', function($scope,$filter) {
	$scope.mydata = { 
		arr: [
		{
			name: "jane",
			age:34
		},
		{
			name:"jake",
			age:56
		},
		{
			name:"jack",
			age:23
		},
		{
			name:"john",
			age:45
		},
		{
			name:"joe",
			age:32
		},
		{
			name:"amy",
			age: 19
		},
		{
			name:"david",
			age: 19
		},
		{
			name: "lois",
			age:15
		},
		{
			name:"blake",
			age:80
		},
		{
			name:"johnny",
			age:2
		},
		{
			name:"flo",
			age:60
		},
	]}
})    

// Filter name
app.filter('charlimit', function() {
	return function(input,length) {
		// Limit to 10 chars
		if (!length) {
			length = 10
		}
		// Calls string
		if(!input) {
			return ''
		}
		// Returns it
		if(input.length <= length) {
			return input
		}
		else {
			// String
			return input.substring(0, length) + 'max charlimit'
		}
	}	
})

app.filter('candrive', function() {
	return function(data,minage) {
		var filtered = []
		if (!minage) {
			minage = 16
		}
		for (var i = 0; i < data.length; i++) {
			var value = data[i]
			if (value.age >= minage) {
				filtered.push(value)
			}
		}
		return filtered
	}
})