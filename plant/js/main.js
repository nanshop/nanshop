var aA = document.getElementsByClassName('hash-go')
var title = 'hexxi - a creative platform where culture interaction happens';

for (var i = 0; i < aA.length; i++) {
  aA[i].onclick = function() {
    var hash = this.dataset.hash
    window.location.hash = hash //添加hash值
  }
}

var programsData = [
  {
    pic: '/images/programs/Encounter-Barbican.01.jpg',
  },
  {
    pic: '/images/programs/Space-Odyssey.02.jpg',
  },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/84fdac085a/3.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/df4a6eac27/4.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/1000x667/624af45f77/5.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/4f7598c305/6.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/15b1a3ab3f/7.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/5672613306/8.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/1000x667/a7fd201c3d/9.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/e80c0560b1/10.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/ea3eec7f84/11.jpg',
  // },

  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/ff55daf485/12.jpg',
  // },
  // {
  //   pic: '//img2.storyblok.com/0x1000/f/70988/667x1000/4a4f1de101/13.jpg',
  // },
];
var renderProgram = function(){
  var proramDom = "";
  for(var i = 0;i<programsData.length;i++){
    programsData[i].index=i;
    proramDom+=('<img onload="programImgLoad('+i+')" onclick="programPicClick('+i+')" src="'+programsData[i].pic+'" alt="Space" class="swiper-slide m-space__photo"></img>');
  }
  return proramDom
}

var programPicClick = function(x){
  console.log('x',x)
}
var b = 0
function programImgLoad(){
  b++;
  console.log(b,i)
  if(b===programsData.length){
    console.log('dasdasd')
    setTimeout(function() {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 1,
        centeredSlides: true,
        updateOnImagesReady: true,
        spaceBetween: -10,
        observer: true,
        freeMode: true,
        watchSlidesProgress: true,
        observeSlideChildren: true,
        navigation: {
          nextEl: '.-next',
          prevEl: '.-prev',
        },
      })
    }, 500)
  }
}

var hashback = function() {
  var hash = window.location.hash.substring(1)
  hasharray = hash.split('/')
  hasharray.pop()
  window.location.hash = hasharray.join('/')
}

var showPrograms = function() {
  
  var swiperDomArray = [
    '<div class="swiper-container swiper-container-3d swiper-container-coverflow">',
    '<div class="swiper-wrapper">'+renderProgram()+'</div>',
    '</div>'
  ]


  if (!$('.zindexprogram swiper-container').length) {
    $('.zindexprogram .common-layer').append($(swiperDomArray.join('')))
  }
}

var showMember = function(name) {
  switch (name) {
    case 'yinxi-lu':
      if($('.yinxi-lu').length){
        return false;
      }
      let memberData = {
        class:'yinxi-lu',
        name:'yinxi lu',
        image:'/images/members/yinxi.jpg',
        bgcolor:'#40ae49',
        rightDom:'<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">Yinxi Lu </h1> <p class="m-member__title">-architect / visual designer </p> <p class="m-member__text">'+
        '-website: <a href="https://www.yinxilu.com/" target="_blank">www.yinxilu.com</a></p> <p class="m-member__text">'+
        '-contact: <a href="mailto:atelier@yinxilu.com ">atelier@yinxilu.com </a></p> <p class="m-member__text -margin-top">'+
       '-location: <a href="mailto:atelier@yinxilu.com "> Rotterdam, The Netherlands </a>'+
      '</p>'+
'<p class="m-member__text -margin-top">'+
       '-focus: Yinxi is the founder of atelier yinxi which is a creative initiative based in Rotterdam,'+
'specializing in visual design related to space: architecture design, space design and visual '+
'improvement, she is deeply interested in the spatial concept and the intended role of '+
'material and structure.'+
      '</p> </div></div>'
      }
      renderMember(memberData)
      //todo
      break
    default:
      break
  }
}


var  renderMember=function(memberData){
  let domTemplate = '<div class="target-wrap rightmodal hash-target '+memberData.class+'" data-hash="/info/'+memberData.class+'">'+
  '<div class="common-layer">'+
  '<div class="left-layer" '+
            'style="background-image: url(&quot;'+memberData.image+'&quot;);">'+
        '</div>'+
        '<div class="right-layer">'+
            '<a href="javascript:hashback()" class="l-layer__close nuxt-link-active"><svg width="41" height="40" viewbox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">'+
                    '<g fill-rule="evenodd">'+
                        '<path d="M6.372 39.68L40.41 5.645 34.75-.014.715 34.021"></path>'+
                        '<path d="M.713 5.645L34.75 39.679l5.66-5.657L6.371-.012"></path>'+
                    '</g>'+
                '</svg></a>'+
            '<div class="infomodal-layer-info" style="background-color:'+memberData.bgcolor+'">'+
                memberData.rightDom
            +'</div></div></div></div>';

console.log('ds')
     $(domTemplate).appendTo($('.l-page'));
     setTimeout(function(){$('.'+memberData.class).addClass('act')},100)
}

var initHash = function() {
  var firsthash = window.location.hash.substring(1);
  var hasharray=firsthash.split('/');
  var aDiv = document.getElementsByClassName('hash-target');
  if(hasharray.length<2){
    document.title = title;
    $('.hash-target').removeClass('act')
  }
  if(hasharray.length==2){
    document.title = hasharray[1]+' / '+title;
    for (var i = 0; i < aDiv.length; i++) {
      if (aDiv[i].dataset.hash == firsthash) {
        $(aDiv[i]).addClass('act')
      }
      else{
        $(aDiv[i]).removeClass('act')
      }
    }
    if(firsthash==='/program'){
      showPrograms();
    }
  }
  else if(hasharray.length>2){
    var pophash = hasharray.pop();
    var firstlevelhash = hasharray.join('/');
    document.title = pophash+' / '+title;
    for (var i = 0; i < aDiv.length; i++) {
      if (aDiv[i].dataset.hash == firsthash||aDiv[i].dataset.hash===firstlevelhash) {
        console.log(aDiv,$(aDiv[i]).attr('class'))
        $(aDiv[i]).addClass('act')
      }
      else{
        $(aDiv[i]).removeClass('act')
      }
    }
    if(firstlevelhash==='/program'){
      showPrograms();
    }
    else if(firstlevelhash==='/info'){
      showMember(pophash);
    }
    
  }
  
}

setTimeout(function() {
  initHash()
}, 300)

window.onhashchange = function() //回车更新地址
{
  initHash()
}
