$(document).ready(function(){

// regarding old posts "archives"
  $('.archived').hide();
  $('#2021').click(function(){
    $('.21').toggle();
  });
  $('#2022').click(function(){
    $('.22').toggle();
  });


  
  $('.lyrics').hide();

// get target image and display modal
$('.cd-img').click(function(e){
  target = e.target;
  targetID = target.id;
  src = target.src;
  img = getImg(src);
  var modalImg = $('#modal-img')[0];
  modalImg.src = '/images/music/' + img;
  myModal.style.display = 'block';
})

// obtain file name of target image
function getImg(src){
  var targetImg;
  targetImg = src.split();
  fileName = targetImg[0].split('/')[5];
  return fileName;
}


// close modal
$('.close').click(function(){
  myModal.style.display = 'none';
})




});
