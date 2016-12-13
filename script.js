/* original object:

avengersMovie = {
    name : Avengers;
    runtime : 143 mins;
    releaseYear = 2012;
    "Director" : "Joss Whedon".
}

corrected object (w. explaination):

We seperate the properties using commas. 
Make sure the name "Avengers" is a string.
We define properties of the object with a colon, and not an equals sign.
Set the property of 'runtime' to runTimeMin and omit the 'min' from the 
property because it needs to be either an integer or string, not both.
Change "Director" property to be lowercase to keep everything following the same naming scheme.
No need for a period at the end of the last property.
Use semicolon at the end of your statement(s).
*/


avengersMovie = {
	name : "Avengers",
	runTimeMin : 143,
	releaseYear : 2012,
	director : "Joss Whedon"
};

console.log(avengersMovie);