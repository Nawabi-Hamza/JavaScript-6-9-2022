const items= ['book ', 'pin','blackboard','markar','desk', 'zip']
const numb=[12,324,34,5,456,345,123,11]
document.write(items)

document.write("</br>")

document.write(items.sort())

document.write("</br>")

document.write(items.reverse())


document.write("</br>")

document.write(numb.sort())

document.write("</br>")

document.write(numb.reverse())

numb.sort(function(a,b){
    return a-b;
    // return a+b;     for reverse
})

document.write("</br>")
document.write(numb)
document.write("</br>")
document.write(numb[0])
document.write("</br>")
document.write(numb.reverse())
document.write("</br>")
document.write(numb[0])

function max(val){
    return Math.max.apply(null,val)
}
document.write("</br>")
document.write(max(numb))

function min(val){
    return Math.min.apply(null,val)
}
document.write("</br>")
document.write(min(numb))
document.write("</br>")


items.forEach(function(value,index,numb){
    document.write(value+"  ")
})

document.write("</br>")
items.forEach((value,index,)=>{
    document.write(value+"  ")
})


const nuu=[
    [123,312,1,1,2,23,2],
    [123,312,1,1,2,23,2],
    [123,312,1,1,2,23,2],
    [123,312,1,1,2,23,2],
    [123,312,4,1,2,23,2],
]
document.write("</br>")
document.write(nuu[4][2])
document.write("</br>")


const nu1=[234,34,43,9,3,5,31,23,54]
var a= nu1.map((v,i,a)=>{
    return v*3;
})
document.write(a)
document.write("</br>")

var toU=items.map(function(v,i,a){
    return v.toUpperCase()
})
document.write(items)      // main
document.write("</br>")

document.write(toU)        // copy of out array
document.write("</br>")

var y= numb.filter((v)=>{
    return v<123
})
document.write(y+"</br>")

var ch=items.filter((v)=>{
    return v=="desk"
})
document.write(ch)





