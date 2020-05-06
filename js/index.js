window.addEventListener("load", () => {
  const pads = document.querySelectorAll('.pads > div');
  const sounds = document.querySelectorAll('.sound');
  const shaps = document.querySelectorAll('.shap');
  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      showSahp();
    });
  });
  function showSahp(){
    shaps.forEach(function(shap, index){
      const randoWidth = Math.floor(Math.random() * (screen.height - 300));
      const randoHeight = Math.floor(Math.random() * (screen.width - 300));
      const colors = ['#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#e74c3c', '#f1c40f'];
      shap.style.top =  randoWidth + 'px';
      shap.style.left =  randoHeight + 'px';
      shap.style.backgroundColor = colors[index];
      shap.style.animation = 'show .2s ease ' + index * 0.1 + 's';

      shap.addEventListener('animationend', function(){
        this.style.animation = '';
      })
    })
  }

});
