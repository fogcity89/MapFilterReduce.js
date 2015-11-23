
function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}

function filter(collection, callback){
	var result=[];
	each(collection,function(element){
		if(callback(element)){
			result.push(element);
		}
	});
	return result;
}

function reduce(collection, callback, initial){
	var accumulator = initial;
	each(collection, function(element){
		if(accumulator==undefined){
			accumulator=element;
		} else{
			accumulator=callback(accumulator,element);
		}
	});
	return accumulator;
}
// reduce example
var arrayOfNumbers =[1,2,3,4,5];
var myNumber = [232,23];
var reducedNumbers = reduce(arrayOfNumbers, function(sum, number){
	return sum + number;
});
//reduce example

//map example
var modifiedArray = map(arrayOfNumbers,function(numbers){
	console.log("That is the number " + numbers );
});

console.log(modifiedArray);

function addFive(number){
	return number + 5;
}
//map example


//filter example
var numbers = [1,2,-4,6,-12,24,2,-9]
var negative = [-2,-4,-6,8]
var positiveNumbers = filter(numbers, function(number) {
    return number > 0;
}); 
//filter example








