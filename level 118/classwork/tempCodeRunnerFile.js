// 1) შექმენით პროგრამა რომელიც საშუალებას მოგვცემს დავიყოთ ჯგუფებად.
let students = ['ani', 'gabro', 'lasha', 'nika', 'ilia', 'nata', 'giorgi', 'mate', 'luka']
let leaders = ['lasha-giorgi', 'data', 'kote', 'gobroni', 'luka']

let groupsCount = leaders.length;
let studentsLength = students.length

let result = []

for (let i = 0; i < groupsCount; i++) {
    group = [];
    while (group.length < 2) {
        let randomIndex = Math.trunc(Math.random() * students.length);
        group.push(students.splice(randomIndex, 1).toString())
    }
    group.unshift(leaders[i] + " (leader)")
    result.push(group)

}

result.push(students)

console.log(result)
