function telephoneCheck(str) {
 // Remove whitespace and non-digits. 
  var cleanStr = str.replace(/\s/g, '').replace(/\D/g, '');
  
  // Check if string has 10 or 11 digits and first character starts with a '1'.
  if (cleanStr.length === 10 || (cleanStr.length === 11 && cleanStr.charAt(0) === '1')) {
    
    // Check if the string matches one of the valid formats. 
    if (str.match(/^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/) ||
        str.match(/^1?\s?\d{3}\s?\d{3}\s?\d{4}$/) ||
        str.match(/^1?\s?\d{3}-\d{3}-\d{4}$/)) {
      return true;
    }
  }
  
  // If conditions are not met return false. 
  return false;
}

telephoneCheck("555-555-5555");