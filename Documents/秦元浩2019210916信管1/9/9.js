let john = {
  name: "John",
  surname: "Smith",
  id: 1
};
let pete = {
  name: "Pete",
  surname: "Hunt",
  id: 2
};
let mary = {
  name: "Mary",
  surname: "Key",
  id: 3
};

let users = [john, pete, mary];
let usersMapped = [{
  fullName: users[0].name + ' ' + users[0].surname,
  id: users[0].id
},
{
  fullName: users[1].name + ' ' + users[1].surname,
  id: users[1].id
},
{
  fullName: users[2].name + ' ' + users[2].surname,
  id: users[2].id
}
]

/*
usersMapped = [
{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },
{ fullName: "Mary Key", id: 3 }
]
*/
alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith
console.log(usersMapped);