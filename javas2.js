const data = [
     {
        Principal:2500,
        time: 1.8
        
    },
    {
        Principal:1000,
        time: 5
    },
    {
        Principal:3000,
        time: 1
    },
    {
        Principal:2000,
        time: 3
    }
    
]
 
//create function with i argument
const interestCalculator = (myarray)=>{
    const interestData = []
      
    
    //loop through the array
    for(let i =0; i<myarray.length;i++){
        
        
        var rate;
        if (myarray[i].Principal>=2500 && myarray[i].time>1 &&myarray[i].time<3){
            rate =3
        }
        else if(myarray[i].Principal>=2500 && myarray[i].time>=3){
            rate = 4
        }
        else if(myarray[i].Principal<2500 || myarray[i].time<=1){
            rate = 2
        }
        else{
            rate =1
        }

        const interest = (myarray[i].Principal * rate * myarray[i].time)/100
        // console.log(interest)   
       const Data = {
        Principal: myarray[i].Principal,
        rate: rate,
        time: myarray[i].time,
        interest: interest
       }
       
       interestData.push(Data)
      
    }
  
    console.log(interestData)
    return interestData

   
}

//pass data array
interestCalculator(data)


