
import PropTypes from "prop-types"; //zorunlu sayısal başlangıç değerinin girilmesi için import edilir
import { useState } from "react";


const Sayac = ({baslangic}) => {
  
  const [sayacDegeri, setSayacDegeri]=useState(0);
  const artir=()=>setSayacDegeri(sayacDegeri+1);
  //const artir=()=>setSayacDegeri((sayacDegeri)=>sayacDegeri+1); 
  //setSayacDegeri(sayacDegeri+1) ile setSayacDegeri((sayacDegeri)=>sayacDegeri+1) ikisi de aynı işi
  //yapıyor.

//   useEffect(()=>{
// console.log("Bu kısım komponent her render edildiğinde çalışır");
//   }
//   );

// useEffect(()=>{
//   console.log("Bu kısım komponent ilk kez render edildiğinde çalışır");
//     },[]
//     );

    // useEffect(()=>{
    //  const id= setInterval(()=>{console.log(new Date().toTimeString());
    //   },1000);
    //   return() => { //>>>> komponent App içerisinde unmount edildiğinde log kaydından da silinmesi için kullandık.
    //     clearInterval(id);
    //   }
    // },[]
    // );
//Not: Yukarıda komponent kaldırıldığında log kayıtlarında timer da silinecek, 
//yeni komponent eklendiğinde eklenecektir. Temizlik işlemi return() ile gerçekleşir.


// useEffect(() => {
//   const fetchSomething = async () => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await res.json()
//       console.log(data)
//   }
//   fetchSomething()
// }, []);

//Not: useEffect veri çekme işlemlerinde sıkça kullanılır buna bir örnek olarak yukarıda 
//herhangi bir sunucudan json veri çeken useEffect örneği bulunmaktadır.

    return (
      <div className='sayac'>      
        <h2>{baslangic+sayacDegeri}</h2>    

        <button className='btn' onClick={artir}>+</button>
      </div>
    );
    
    // Sayac.defaultProps={
    //   baslangic:1,
    // } >>>> baslangic değerini normalde  kapanış ' }' parantezinden önce tanımlarız

    //Not: Proplar yukarıdan aşağıya doğru tanımlanır. Yani App komponentinden Sayac komponentine
// geçilen baslangic props değeri vardır ancak Sayac'tan App'a baslangic veya herhangi bir props geçme
// imkanı yoktur. Aynı şey state'ler için de geçerlidir. Yukarıdaki komponentten aşağıdakine aktarılır.

  }

  Sayac.defaultProps={
    baslangic:1,
  }
  Sayac.propTypes = {
    baslangic: PropTypes.number, //başlangıç değerini numerik olarak girilmesiniz
    //zorunlu kılmak için
  }
  

export default Sayac