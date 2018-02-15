
document.addEventListener('DOMContentLoaded', function(){
  let body = document.querySelector('body');
  document.querySelector('.themeselect').addEventListener('change', handleThemeSelect);
  function handleThemeSelect(event) {
    event.preventDefault();
    
    // change body class
    body.className = event.target.value;
  };
  
});

