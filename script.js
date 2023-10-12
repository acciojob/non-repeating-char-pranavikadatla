function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length;i++){
		if(str.charAt(i)!=str.charAt(i+1)){
			return str.charAt(i);
			}
		else{
			i++;
		}
		}
	return null;
	}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
