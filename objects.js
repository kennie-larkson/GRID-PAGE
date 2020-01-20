const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
//   console.log(result);

const makeList = arr =>{
  
    // console.log(result.failure);
    const resultDisplayArray = [];
    arr.map(element => {
      resultDisplayArray.push(`<li class="text-warning">${element}</li>`
    );  
    });

   console.log(resultDisplayArray) ;
   
}
 const resultDisplayArray = makeList(result.failure);

