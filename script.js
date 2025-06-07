function stringChop(str, size) {
  // your code here
	let gb=[]
	if(str.length==0){
		return [str]
	}
	if(str.length<size){
		gb.push(str)
		return str;
	}
	
	for(let i=0; i<str.length; i=i+size){
	    gb.push(str.substring(i,i+size))
	}
	return gb;
}

// Do not change the code below
//const str = prompt("Enter String");
//const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
