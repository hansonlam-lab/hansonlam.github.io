const getSleepHours = day =>{
    if(day === 'monday'){
      return 8;
    }
    if(day === 'tuesday'){
      return 8;
    }
    if(day === 'wednesday'){
      return 8;
    }
  }
  
  
  getActualSleepHours = () =>{
    let a = getSleepHours('monday') +getSleepHours('tuesday') + getSleepHours('wednesday');
    return a;
  }
  console.log(getActualSleepHours());
  const getIdealSleepHours = () => {
    const idealHours = 8.5;
    return idealHours * 3;
  };
  
  const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect sleep!')
    }else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed!')
    }else if(actualSleepHours < idealSleepHours){
      console.log('You should get more rest!')
    }
  }
  
  calculateSleepDebt()
  
  
  
  
  