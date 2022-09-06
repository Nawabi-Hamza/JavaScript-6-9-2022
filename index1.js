
//  date type

// const d1 = new Date()
// document.write(d1)
// document.write('</br>')

// document.write("copy@right 1999 - "+d1.getFullYear()+"/"+d1.getMonth()+"/"+d1.getDate())
// document.write('</br>')
// document.write(d1.getHours())
// document.write('</br>')
// document.write(d1.getMinutes())
// document.write('</br>')
// document.write(d1.getSeconds())
// document.write('</br>')
// document.write(d1.getMilliseconds())
// document.write('</br>')
// document.write(d1.getTime())
// document.write('</br>')
// document.write(d1.Date.now())
// document.write('</br>')
    // change date
// var d= new Date()
// var cd= d.getFullYear()

// // document.write(cd)
// var user= prompt('Your date of birth:')
// var userage=parseInt(user)
// document.write('</br>')

// document.write((cd-621)-(cd-userage))


        // live clock

        let d;
        let time;

setInterval((a)=>{
    d=new Date();
    time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    document.getElementById('tim').innerHTML=time;

  
},10)
