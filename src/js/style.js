function onEntry(entry){
  entry.forEach(change =>{
    if (change.isIntersecting){
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.text1, .text2,  #ser, #conts1, #what, #keys, #pr1, #sta');

for (let elm of elements){
  observer.observe(elm);
}

