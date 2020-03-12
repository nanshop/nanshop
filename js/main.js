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
    detailPic:['/images/programs/Encounter-Barbican.01.jpg','/images/programs/Space-Odyssey.02.jpg',],
    rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">Project </h1>  <p class="m-member__text">' +
        '-time: </p> <p class="m-member__text">' +
        '-location: </p> <p class="m-member__text">' +
        '-focus: </p><p class="m-member__text">' +
        '-info: ' +
        '</p>' +
        '</div></div>',
  },
  {
    pic: '/images/programs/Space-Odyssey.02.jpg',
    detailPic:['/images/programs/Space-Odyssey.02.jpg',],
    rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">Project </h1>  <p class="m-member__text">' +
        '-time: </p> <p class="m-member__text">' +
        '-location: </p> <p class="m-member__text">' +
        '-focus: </p><p class="m-member__text">' +
        '-info: ' +
        '</p>' +
        '</div></div>',
  },
];


var archivesData = [
  {
    pic: '/images/archives/Mountain Shape Rack Design.jpg',
    detailPic:['/images/archives/Mountain Shape Rack Design.jpg','/images/programs/Space-Odyssey.02.jpg',],
    rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">Project </h1>  <p class="m-member__text">' +
        '-time: </p> <p class="m-member__text">' +
        '-location: </p> <p class="m-member__text">' +
        '-focus: </p><p class="m-member__text">' +
        '-info: ' +
        '</p>' +
        '</div></div>',
  },
  {
    pic: '/images/programs/Space-Odyssey.02.jpg',
    detailPic:['/images/programs/Space-Odyssey.02.jpg',],
    rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">Project </h1>  <p class="m-member__text">' +
        '-time: </p> <p class="m-member__text">' +
        '-location: </p> <p class="m-member__text">' +
        '-focus: </p><p class="m-member__text">' +
        '-info: ' +
        '</p>' +
        '</div></div>',
  },
];


var renderProgram = function(isProgram){
  var proramDom = "";
  if(isProgram){
    for(var i = 0;i<programsData.length;i++){
      programsData[i].index=i;
      proramDom+=('<img onload="programImgLoad('+i+')" onclick="programPicClick('+i+')" src="'+programsData[i].pic+'" alt="Space" class="swiper-slide m-space__photo"></img>');
    }
  }
  else{
    for(var i = 0;i<archivesData.length;i++){
      proramDom+=('<img onload="archiveImgLoad('+i+')" onclick="archivePicClick('+i+')" src="'+archivesData[i].pic+'" alt="Space" class="swiper-slide m-space__photo"></img>');
    }
  }
  
  return proramDom
}

var programPicClick = function(x){
  window.location.hash = '/program/'+(x+1)
}

var archivePicClick = function(x){
  window.location.hash = '/archive/'+(x+1)
}
var programLoaded = 0
function programImgLoad(){
  programLoaded++;
  if(programLoaded===programsData.length){
    setTimeout(function() {
      var swiper = new Swiper('.program-container', {
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


var archiveLoaded = 0
function archiveImgLoad(){
  archiveLoaded++;
  if(archiveLoaded===archivesData.length){
    setTimeout(function() {
      new Swiper('.archive-container', {
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

var showPrograms = function(isProgram,projectIndex) {
  if (isProgram&&!$('.zindexprogram .swiper-container').length) {
    var swiperDomArray = [
      '<div class="swiper-container program-container swiper-container-3d swiper-container-coverflow">',
      '<div class="swiper-wrapper">'+renderProgram(isProgram)+'</div>',
      '</div>'
    ]
    $('.zindexprogram .common-layer').append($(swiperDomArray.join('')))
  }
  if (!isProgram&&!$('.zindexarchive .swiper-container').length) {
    var swiperDomArray = [
      '<div class="swiper-container archive-container swiper-container-3d swiper-container-coverflow">',
      '<div class="swiper-wrapper">'+renderProgram(isProgram)+'</div>',
      '</div>'
    ]
    $('.zindexarchive .common-layer').append($(swiperDomArray.join('')))
  }
  if(projectIndex){
    showProject(projectIndex-1,isProgram)
  }
}


var memberObject = {
    'yinxi-lu': {
      class: 'yinxi-lu',
      name: 'yinxi lu',
      image: '/images/members/yinxi.jpg',
      bgcolor: '#40ae49',
      rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">Yinxi Lu </h1> <p class="m-member__title">-architect / visual designer / photographer </p> <p class="m-member__text">' +
        '-website: <a href="https://www.yinxilu.com/" target="_blank">www.yinxilu.com</a></p> <p class="m-member__text">' +
        '-contact: <a href="mailto:atelier@yinxilu.com ">atelier@yinxilu.com </a></p> <p class="m-member__text -margin-top">' +
        '-location: <a href="javascript:void(0)"> Rotterdam, The Netherlands </a>' +
        '</p>' +
        '<p class="m-member__text -margin-top">' +
        '-focus: Yinxi is the founder of atelier yinxi which is a creative initiative based in Rotterdam,' +
        'specializing in visual design related to space: architecture design, space design and visual ' +
        'improvement, she is deeply interested in the spatial concept and the intended role of ' +
        'material and structure.' +
        '</p> </div></div>',
    },
    'fred-zhang': {
      class: 'fred-zhang',
      name: 'fred zhang',
      image: '/images/members/fred.png',
      bgcolor: '#00aeef',
      rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">fred zhang </h1> <p class="m-member__title">-landscape architect / photographer </p> <p class="m-member__text">' +
        '-contact: <a href="mailto:smelescwx@gmail.com">smelescwx@gmail.com  </a></p> <p class="m-member__text -margin-top">' +
        '-location: <a href="javascript:void(0)"> copenhagen, danmark  </a>' +
        '</p>' +
        '<p class="m-member__text -margin-top">' +
        '-focus: Fred is a lead design landscape architect and works on a variety of international landscape '+
        'and urban space projects across Europe and Asia. Holding a bachelor’s degree in '+
        'architecture from China and a master’s degree in landscape architecture from Denmark, '+
        'Fred has a very valuable understanding of how to create cohesive urban solutions where '+
        'buildings, infrastructure, landscape and city nature fusion in sustainable and holistic design, '+
        'that increases life quality and strengthens the environment. ' +
        '</p> </div></div>',
    },
    'eki-ong': {
      class: 'eki-ong',
      name: 'eki ong',
      image: '/images/members/eki_ong.jpg',
      bgcolor: '#f9e108',
      rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">eki ong </h1> <p class="m-member__title">-designer / architect / independent curator  </p> <p class="m-member__text">' +
        '-contact: <a href="mailto:yichi.wang88@gmail.com ">yichi.wang88@gmail.com </a></p> <p class="m-member__text -margin-top">' +
        '-location: <a href="javascript:void(0)"> Guangzhou, China  </a>' +
        '</p>' +
        '<p class="m-member__text -margin-top">' +
        '-focus: Yi-Chi Wang, (1988, Taiwan) the founder of ski ong studio, she graduated in architecture in '+
        'Taipei in 2010, and she completed her master degree in Madrid in 2013. Beside '+
        'architecture, she’s passionate about food and cuisine as a journey to discover everything '+
        'related to people, agriculture, cooking, eating and conviviality in different cultures. She is '+
        'especially fascinated by the rich terroir and cultural influences behind food culture, which '+
        'she feels architecture is made of, as well. Currently, she lives and works between Beijing, '+
        'Guangzhou and Taipei. ' +
        '</p> </div></div>',
    },
    'sebastiano-pibia': {
      class: 'sebastiano-pibia',
      name: 'sebastiano pibia',
      image: '/images/members/S_Pibia.jpg',
      bgcolor: '#ecc7de',
      rightDom:
        '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name">sebastiano pibia </h1> <p class="m-member__title">-designer / architect </p> <p class="m-member__text">' +
        '-contact: <a href="mailto:spibia@outlook.com  ">spibia@outlook.com  </a></p> <p class="m-member__text -margin-top">' +
        '-location: <a href="javascript:void(0)"> Rotterdam, The Netherlands  </a>' +
        '</p>' +
        '<p class="m-member__text -margin-top">' +
        '-focus: Sebastiano, (1989, Italy) graduated from TU delft with a master degree in architecture. He is ' +
        'fascinated about all designs which build up characters and imaginary worlds in themselves. '+
        'His conceptual thinking and practical method of developing a creative idea into a feasible '+
        'individual solution for the design, which strengthen the ability of the team to built on a '+
        'deep understanding of its objectives.' +
        '</p> </div></div>',
    },

}

var showMember = function(name,isInfo) {
  if($('.'+(isInfo?'info-':'who-')+name).length){
    return false;
  }
  let memberData = memberObject[name]
  renderMember(memberData,isInfo)
  
}


var  renderMember=function(memberData,isInfo){
  let domTemplate = '<div class="target-wrap rightmodal hash-target '+(isInfo?'info-':'who-')+memberData.class+'" data-hash="/'+(isInfo?'info/':'whoweare/')+memberData.class+'">'+
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
     $(domTemplate).appendTo($('.l-page'));
     setTimeout(function(){$('.'+(isInfo?'info-':'who-')+memberData.class).addClass('act')},100)
}


var showProject = function(index,isProgram) {
  var projectData
  if(isProgram){
    if($('.project-'+index).length){
      return false;
    }
    projectData = programsData[index];
    
  }else{
    if($('.archive-'+index).length){
      return false;
    }
     projectData = archivesData[index]
  }
  renderProject(projectData,index,isProgram)
  
 
  
}


var  renderProject=function(projectData,index,isProgram){
  var domTemplate = '<div class="target-wrap rightmodal project-modal hash-target '+(isProgram?"project":"archive")+'-'+index+'" data-hash="/'+(isProgram?"program":"archive")+'/'+(index+1)+'">'+
  '<div class="common-layer">'+
  '<div class="left-layer" '+
            '>'+
            '<div class="swiper-container"><div class="swiper-wrapper">'+
            renderProjectSwiper(projectData,isProgram)+
        '</div></div></div>'+
        '<div class="right-layer">'+
            '<a href="javascript:hashback()" class="l-layer__close nuxt-link-active"><svg width="41" height="40" viewbox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">'+
                    '<g fill-rule="evenodd">'+
                        '<path d="M6.372 39.68L40.41 5.645 34.75-.014.715 34.021"></path>'+
                        '<path d="M.713 5.645L34.75 39.679l5.66-5.657L6.371-.012"></path>'+
                    '</g>'+
                '</svg></a>'+
            '<div class="infomodal-layer-info" style="background-color:'+(isProgram?'#40ae49':'#e3a923')+'">'+
                projectData.rightDom
            +'</div></div></div></div>';
     $(domTemplate).appendTo($('.l-page'));
     setTimeout(function() {
       $('.'+(isProgram?'project':'archive')+'-' + index).addClass('act')
       if(projectData.detailPic&&projectData.detailPic.length>1){
         var swiperContainer = '.'+(isProgram?'project':'archive')+'-'+index+' .swiper-container';
        new Swiper(swiperContainer,{
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        })
       }
     }, 100)
}

var renderProjectSwiper = function(projectData,isProgram){

  // style="background-image: url(&quot;'+projectData.pic+'&quot;);"
  var picArray = projectData.detailPic

  var slide = '';
  for(var i=0;i<picArray.length;i++){
    slide+=('<div class="swiper-slide" style="background-image: url(&quot;'+picArray[i]+'&quot;);"></div>')
  }
  return slide
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
      showPrograms(1);
    }
    if(firsthash==='/archive'){
      showPrograms(0);
    }
  }
  else if(hasharray.length>2){
    var pophash = hasharray.pop();
    var firstlevelhash = hasharray.join('/');
    document.title = pophash+' / '+title;
    for (var i = 0; i < aDiv.length; i++) {
      if (aDiv[i].dataset.hash == firsthash||aDiv[i].dataset.hash===firstlevelhash) {
        $(aDiv[i]).addClass('act')
      }
      else{
        $(aDiv[i]).removeClass('act')
      }
    }
    if(firstlevelhash==='/program'){
      showPrograms(1,pophash);
    }
    else if(firstlevelhash==='/archive'){
      showPrograms(0,pophash);
    }
    else if(firstlevelhash==='/info'){
      showMember(pophash,1);
    }
    else if(firstlevelhash==='/whoweare'){
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
