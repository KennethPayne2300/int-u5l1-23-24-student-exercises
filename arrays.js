// CODE ALONG

// 1. Update the variable songList so that it is an array with at least 3 song titles.
let songList = ["Inner steel", "come on out", "knight falls"];
console.log(songList);

// 2. Update the variable studentList so that it is an array with 4 Code Nation students (including yourself) in your class.
let studentList = ["Alice", "Bob", "Charlie", "David"];
console.log(studentList);

// 3. Update the variable teacherList so that it is an array with all the Code Nation adults in your class.
let teacherList= ["Mr. Smith", "Ms. Johnson", "Mrs. Brown"];
console.log(teacherList);

// 4. Update the variable familyAges so that it is an array with a list of ages (numbers) of your family members.
let familyAges = [40, 38, 16, 12];
console.log(familyAges);

//PAUSE HERE

// CODE SOLO

// 5. Update the variable favSong to retrieve the array element of your favorite song in the songList array (Task 1). 
let favSong = songList[0];
console.log(favSong);

// 6. Update the variable bestStudent to retrieve your name from the classList array (Task 2).
let bestStudent = studentList[1];
console.log(bestStudent);

// 7. Update the variable tallestTeacher to retrieve the array element of the tallest teacher in the teacherList array (Task 3).
let tallestTeacher = teacherList[2];
console.log(tallestTeacher);

// 8. Update the variable oldestMemeber to retrieve the array element of the oldest member of your family in the familyAges array. (Task 4)
let oldestMember = familyAges[0];
console.log(oldestMember);

// Done Early?
//  - On your own, create an array that combines both the class list and the teacher list without rewriting the names of students and teachers.
//  - Google how to combine arrays you've already created.
let combinedList = studentList.concat(teacherList);
console.log(combinedList);

