var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dmcbykoyp/upload';
var CKOUDINARY_UPLOAD_PRESET = 'dn7a3ds6';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change',function(event){
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset',CKOUDINARY_UPLOAD_PRESET);
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res){
        imgPreview.src = res.data.secure_url;
    }).catch(function(err){
        console.log(err);
    });

});