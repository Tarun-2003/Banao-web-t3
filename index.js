function handleSubmit() {
    var btn = document.querySelector('.btn');
    
    btn.innerHTML = "<img class='loader' src='Loading.png'> <span>Button </span></img>";
    
    setTimeout(function() {
      
      btn.innerHTML = "<i class='fa-solid fa-magnifying-glass searcher'></i> <span class='post'>Button </span>";
      btn.style.color="#BFBFBF";
      btn.style.backgroundColor ="var(--input-background)";
     
      btn.style.border="var(--border-size) solid var(--input-border-color)"
    }, 2000);
  }
  