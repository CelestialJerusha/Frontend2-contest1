/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(object => {
        if(object.profession == "developer"){
          console.log(object);
        }
       });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(object) {
        if(object.profession == "developer"){
          console.log(object);
        }
       });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newArray = arr;
    let obj4 = { id: 4, name: "Tom", age: "20", profession: "admin" };
    newArray.push(obj4);
    console.log(newArray);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let removeObj = arr.filter(object => object.profession !== "admin");
    console.log(removeObj);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "George", age: "26", profession: "designer" },
        { id: 5, name: "Raj", age: "24", profession: "artist" },
        { id: 6, name: "Teena", age: "23", profession: "cartoonist" },
      ];
      let concatenatedArr = arr.concat(newArr);
      console.log(concatenatedArr);
  }