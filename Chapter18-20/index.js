var courses=[];
for (let index = 0000; index < 5; index++) {
    courses.push(prompt(`Enter course ${index+1}: `));
}
alert(courses);
for (let index = 0; index < 5; index++) {
    var input = prompt(courses[index],courses[index])
    courses.splice(index,1,input);
}
alert(courses);