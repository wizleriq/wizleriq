let count = 0;
const number = document.querySelector('#number');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles= e.currentTarget.classList;
    if(styles.contains ('decrease')){
      count--;
    } else if (styles.contains('increase')){
      count++;
  } else{
    count = 0;
  }

  if(count >= 0){
    number.style.color = 'green';
  } if (count <= 0){
    number.style.color = 'red';
  } if (count === 0) { 
    number.style.color = 'black'
  }
  
  
    
  

    number.textContent = count;
    
  });
}
);