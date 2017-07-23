function handleFileSelect(evt) {
    var files = evt.target.files;
    var imNum = $(evt.target).closest(".formline").attr("data-upload");
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
            reader.onload = (function(theFile) {
        return function(e) {
            console.log(escape(e.target.result))
          $(".img-holder[data-render='"+imNum+"'] div").attr("style","background-image:url("+e.target.result+")");
          localStorage.setItem('img'+imNum, e.target.result);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);


  if(localStorage.img1) { 
          $(".img-holder[data-render='1'] div").attr("style","background-image:url("+localStorage.img1+")");
    }