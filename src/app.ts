// function sum(a: number, b:number){
//     return a+b;
// }
// const a = 10;
// const b = 20;
// const result = sum(10, 20)
// console.log(result);

// let a:number = 5;
// let b:number = 10;
// let c:string = 'Result';
// let d:boolean = true;

// const result = a + b;
// if(d){
//     console.log(c + result);
// }else{
//     console.log('Khong co ket qua');
// }

type TPerson = {
    id:number;
    name: string;
    age: number;
    status?: boolean; // status? có thể có hoặc không
}

const person: TPerson = {
    id:1,
    name: "Dung",
    age: 22,
}

const persons: TPerson[] = [
    {id: 1, name: "dffdf", age: 21, status: true},
    {id: 2, name: "sdsadsad", age: 20, status: false},
]

console.log(persons);
