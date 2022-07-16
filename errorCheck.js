user1 = { 
    username:"user1", // at least 2 characters
    age: 30,// must be positive
    password:"password",  // at least 8 characters
    confirm: "password" // confirm must match password
  }
  
  user2 = { 
    username:"u", // at least 2 characters
    age: 30,// must be positive
    password:"password",  // at least 8 characters
    confirm: "pass" // confirm must match password
  }
  
  function errorCheck(user){
    // given an object, if any of the fields fails the validation, return true
    if (user.username.length < 2) {
      return true
    }
    if (user.age < 1) {
      return true
    }
    if (user.password.length < 8) {
      return true
    }
    if (user.confirm != user.password) {
      return true
    }
    return false
  }
  
  function goodUser(user){
      // given an object, if all fields pass the validation, return true
      if(user.username.length < 2){
        return false
      }
      if(user.age < 0){
        return false
      }
      if(user.password.length < 8){
        return false
      }
      if(user.password != user.confirm){
        return false
      }
    return true
  }
  console.log(errorCheck(user1))
  console.log(errorCheck(user2))
  
  console.log(goodUser(user1))
  console.log(goodUser(user2))