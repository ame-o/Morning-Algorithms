/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  
  const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
  /* expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ]; */
  
  // This object contains inherited key value pairs from the above proto obj.
  const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });
  
  
  
  
  /* expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];*/
  
  /**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */
  
  // Object.keys(obj)[0]
  
    // console.log(`Key: ${key}`)
    // console.log(`value: ${obj2[key]}` )
  
  //loop through the object
  //key/value pair = an array
  //
  function entries(obj) {
    const newArray = []
    for(key in obj){
      if(obj.hasOwnProperty(key)){
        newArray.push([key, obj[key]])  
      }  
    }
    
    console.log(newArray)
    return newArray;
  }
  
  entries(obj1);
  entries(obj2);
  
  
  //[ [ 'name', 'Pizza' ], [ 'calories', 9001 ] ]
  
  
  
  
  
  
  
  
  /* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
  */
  
  const table = "users";
  const insertData1 = { first_name: "John", last_name: "Doe" };
  const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";
  
  // Bonus:
  const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
  };
  const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
  // Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.
  
  /**
   * Generates a SQL insert statement from the inputs
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} tableName
   * @param {Object} columnValuePairs
   * @returns {string} A string formatted as a SQL insert statement where the
   *    columns and values are extracted from columnValuePairs.
   */
  function insert(tableName, columnValuePairs) {}
  
  /**
   * - Time: O(?).
   * - Space: O(?).
   */
  function insertFunctional(tableName, columnValuePairs) {}