
setTimeout(() => {
    const jsonData = {
        userName: "Ronaldo",
        userEmail: 37,
        userSex: "Male"
    }
    const ronaldoJson = JSON.stringify(jsonData)    
    setTimeout(()=> {
      const dataParse = JSON.parse(ronaldoJson);
    });
});

  const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
      const errorIndicator = false;
      if(!errorIndicator){
        const jsonData =JSON.stringify( {
          userName: "Ronaldo",
          userEmail: 37,
          userSex: "Male"
        });
        console.log(jsonData);
        resolve(jsonData);
      }
      else{
        reject("Что то пошло не так статус 404")
      }
    },2000)
})
  .then((res) => {
    setTimeout(() => {
      const resParse = JSON.parse(res)
      console.log(resParse);
      })
  })
  .catch((err)=> {
    console.log(err);
  });