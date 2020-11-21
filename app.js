/* const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
	profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs); */

const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

const data = generatePage(name, github);

fs.writeFile('./index.html', data, err => {
	if (err) throw new Error(err);

	console.log('Portfolio complete! Check out index.html to see the output!');
});

/* fs.appendFile('./index.html', data, (err) => {
	if (err) throw err;
	console.log('The "data to append" was appended to file!');
  }); */
