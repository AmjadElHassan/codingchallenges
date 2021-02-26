solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let answer = ((givenMass1/molarMass1)+(givenMass2/molarMass2))*0.082*(temp+273.15)*(1/volume)
    return answer
    
  }