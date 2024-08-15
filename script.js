function stringChop(str, size) {
  // your code here
	let ans = {};
	let n = str.length;
	let idx=0;
	while(idx+size < n){
		let subStr = str.subString(idx,size+idx);
		ans.push(subStr);
		idx += size;
	}
	if(idx >= n){
		let subStr = str.subString(idx);
		ans.push(subStr);
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

alert(stringChop(str, size));
