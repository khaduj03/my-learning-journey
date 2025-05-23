//try a cacth--------------------------------------------------------
   
// const person = {
//     name:"ali", 
//     fname:"mohammad",
//     get fullName(){
//         return `${person.name} ${person.fname}`
//     },
//     set fullName(value){
//         const parts = value.split(' ')
//         if(typeof value!=='string')
//             throw new Error("value is not difind");
//         if(value.length!==2){
//             throw new Error("inter a name and last name")
//         }
//         this.name=parts[0]
//         this.fname=parts[1]
//     }
// }
// try{
//     person.fullName=true;
//     person.fullName="jhdsguys"
// }catch(e){
//     console.log(e)
// }
// person.fullName="cli"
// console.log(person.fullName)