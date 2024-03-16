let ism = ['Abbos', 'Muhammadamin', 'abduazim' , 'saidbek']
alert(`${ism}`)

let con = confirm('tasdiqlash')
console.log(con);
if(con){
    console.log(ism.splice(0,3))
}
else{
    console.log(ism);
}

