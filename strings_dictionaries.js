
/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";
//if xtr[i] == " " and str[i+1] == ' ' or str[i-1] == ' '

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
  new_str = ''
    for(var i=0; i<str.length; i++){
      if(str[i] != ' '){
        new_str += str[i]
      }
      else if(str[i] == ' ' && str[i-1] != ' ' && str[i+1] != ' '){
        new_str += str[i]
      }
    }
    return new_str
}
console.log(trim(str1))






// -----------------------------------------------------------------



/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
  ];
  const expected2 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  
  const newInv2 = [];
  const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
  const expected3 = [{ name: "Peanut Butter", quantity: 20 }];
  
  const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
  const currInv3 = [];
  const expected4 = [{ name: "Peanut Butter", quantity: 20 }];
  
  /**
   * Updates the current inventory based on the new inventory.
   * - Time: O(?).
   * - Space: O(?).
   * @typedef {Object} Inventory
   * @property {string} Inventory.name The name of the item.
   * @property {number} Inventory.quantity The quantity of the item.
   * @param {Array<Inventory>} newInv A shipment of new inventory.
   *    An array of inventory objects.
   * @param {Array<Inventory>} currInv
   * @return The currInv after being updated.
   */
  //run for loop to add iterate through object
  /**current array of dictionaries
   * need to loop to iterate through array
   * if current array[i] == new array[i]
**/
  function updateInventory(newInv, currInv) {
    for(var i = 0;i<currInv.length; i++) 
    {
        if (newInv[i] == currInv[i]){
            for(key in newInv[i]){
            newInv.quantity+=currInv.quantity
            }
        }
      else{
        newInv.push(currInv[i])
      }
    }
    return newInv
  }

  console.log(updateInventory(newInv1,newInv1));