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
let elements = document.querySelectorAll('.about-text2, .about-text3, .what_can1, .anim, .pr1, .stat-te, .rev1, .con-text1');

for (let elm of elements){
  observer.observe(elm);
}

