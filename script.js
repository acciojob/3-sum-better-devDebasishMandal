function threeSum(arr, target) {
// write your code here
	let currDiff=Number.MAX_VALUE;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
				let sum=arr[i]+arr[j]+arr[k];
				let diff=target-sum;
					if(diff<currDiff){
						currDiff=diff
							let x=sum;
					}
			}
		}
	}
  return x ;
}

module.exports = threeSum;
