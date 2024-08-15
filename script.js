function stringChop(str, size) {
  // your code here
	
	if(str === "") return null;
	size = parseInt(size, 10); // Convert size to an integer
	let ans = [];
	let n = str.length;
	let idx=0;
	while(idx+size <= n){
		let subStr = str.substring(idx,size+idx);
		ans.push(subStr);
		idx += size;
	}
	if(idx < n){
		let subStr = str.substring(idx);
		ans.push(subStr);
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

alert(stringChop(str, size));
