function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length;i++){
		 let currentChar = str.charAt(i);
        // Check if the current character is not repeated in the entire string
        if (str.indexOf(currentChar) === str.lastIndexOf(currentChar)) {
            return currentChar;
			// if(str.charAt(i)!=str.charAt(i+1)){
			// return str.charAt(i);
			// }
		}else{
			i++;
		}

		}
	return null;
	}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
