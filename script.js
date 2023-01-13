function letterCombinations(input_digit) {
    //Complete the function

      let map = [0, 1, "abc" ,"def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
      let n = input_digit.length;
  
      let str = [];
      for(let i=0; i<input_digit.length; i++){
          let c = input_digit.charAt(i);
          str[i] = map[Number(c)];
      }
        // console.log(str);

        let ans = [];

      let q = [];
    
      q.push("");

      while(q.length > 0){
        let s = q.shift();
        
        if(s.length == n){
            ans.push(s);
        }else{
            let value = map[Number(input_digit.charAt(s.length))];
            for(let j=0; j<value.length; j++){
                q.push(s + value.charAt(j));
            }
        }

      }

      return ans;
  }

module.exports = letterCombinations;
