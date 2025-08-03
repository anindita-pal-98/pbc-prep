

let str = "aaabbc cd ffg" ; // 2a2bcd2fg


let newstr = "";
let count = 1;
let lastchar = null;
for(let i = 0; i< str.length; i++) {
	if (str[i] == " "  && str[i+1] == " ") continue;
	if (str[i] != " " && str[i+1] == " ") {
	lastchar = str[i]; 
	continue;
	}
	if (lastchar != null) {
		if (lastchar == str[i] || lastchar == str[i+1]) {
			count++;
			lastchar = null;
		}
		else {
			if (count > 1) {
				newstr += count + lastchar;
				count = 1;
				lastchar=null;
			}
			else {
				newstr += lastchar;
				count = 1;
				lastchar=null;
			}
		}
        continue;
}		
       if (str[i] == str[i+1]) { 
       count++;
       }
       else {
       if(count > 1) {
       newstr += count + str[i];
       count = 1;
       }
       else {
       newstr += str[i];
       count = 1;
       }
       }

}
console.log(newstr); 