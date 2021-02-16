export default function swReg(){
    let swReg = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swReg).then((result)=>{
      console.log('Registration done! result:',result)
    })
    .catch((err)=>{
      console.log("err:",err)
    })
  }