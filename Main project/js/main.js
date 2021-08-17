const navbar = $(".navbar")
const home = $("#home")
const button = $(".go-home .icon")
let Mobilequery = window.matchMedia("(max-width: 426px)")
const burger = $(".burger")
const navbar_items = $(".navbar ul")
const opacity = $(".opacity") 
const close_icon = $(".navbar .close")
// links
const homeLink = $(".1link")
const aboutLink = $(".2link")
const symptomsLink = $(".3link")
const preventionLink = $(".4link") 
const treatmentlink = $(".5link")
const faqLink = $(".6link")
const newsLink = $(".7link")
// faq'
const faqTransm = $(".transm-faq")
const faqList = $(".faq .faq-li")
const faqProtect = $(".faq .faq-li.protect-faq")
const faqDisease = $(".faq .left .disease-faq")
const faqSymptoms = $(".faq .left .faq-li.symptoms-faq")
const faqOutbreak = $(".faq .left .faq-li.outbreak-faq")
const faqBusters = $(".faq .left .faq-li.busters-faq")
// faq sections
const faqSections = $(".faq .right div")
const transmSect = $(".faq .transm-info")
const diseaseSect = $(".faq .disease-info")
const protectSect = $(".faq .protect-info")
const symptomsSect = $(".faq .symptoms-info.hidden")
const outbreakSect = $(".faq .outbreak-info.hidden")
const busterSect = $(".faq .busters-info.hidden")
// faq uls
const uls = $(".faq .boxes .right ul")
const firstUl = $(".faq .boxes .right ul.first")

// disease ul
const firstDiseaseUl = $(".faq .boxes .right .disease-info .item.first")
const secondDiseaseUl = $(".faq .boxes .right .disease-info .item.second")
const thirdDiseaseUl = $(".faq .boxes .right .disease-info .item.third")
const fourthDiseaseUl = $(".faq .boxes .right .disease-info .item.fourth")

// transm ul
const firstTransmUl = $(".faq .boxes .right .transm-info .item.first")
const secondTransmUl = $(".faq .boxes .right .transm-info .item.second")
const thirdTransmUl = $(".faq .boxes .right .transm-info .item.third")
const fourthTransmUl = $(".faq .boxes .right .transm-info .item.fourth")
const fifthTransmUl = $(".faq .boxes .right .transm-info .item.fifth")
const sixthTransmUl = $(".faq .boxes .right .transm-info .item.sixth")

// protect ul
const firstProtectUl = $(".faq .boxes .right .protect-info .item.first")
const secondProtectUl = $(".faq .boxes .right .protect-info .item.second")
const thirdProtectUl = $(".faq .boxes .right .protect-info .item.third")
const fourthProtectUl = $(".faq .boxes .right .protect-info .item.fourth")
const fifthProtectUl = $(".faq .boxes .right .protect-info .item.fifth")

// symptoms ul
const firstSymptomsUl = $(".faq .boxes .right .symptoms-info .item.first")
const secondSymptomsUl = $(".faq .boxes .right .symptoms-info .item.second")
const thirdSymptomsUl = $(".faq .boxes .right .symptoms-info .item.third")
const fourthSymptomsUl = $(".faq .boxes .right .symptoms-info .item.fourth")

// outbreak ul
const firstOutbreakUl = $(".faq .boxes .right .outbreak-info .item.first")
const secondOutbreakUl = $(".faq .boxes .right .outbreak-info .item.second")
const thirdOutbreakUl = $(".faq .boxes .right .outbreak-info .item.third")
const fourthOutbreakUl = $(".faq .boxes .right .outbreak-info .item.fourth")
const fifthOutbreakUl = $(".faq .boxes .right .outbreak-info .item.fifth")
const sixthOutbreakUl = $(".faq .boxes .right .outbreak-info .item.sixth")

// busters ul
const firstBustersUl = $(".faq .boxes .right .busters-info .item.first")
const secondBustersUl = $(".faq .boxes .right .busters-info .item.second")
const thirdBustersUl = $(".faq .boxes .right .busters-info .item.third")
const fourthBustersUl = $(".faq .boxes .right .busters-info .item.fourth")
const fifthBustersUl = $(".faq .boxes .right .busters-info .item.fifth")
const sixthBustersUl = $(".faq .boxes .right .busters-info .item.sixth")
const seventhBustersUl = $(".faq .boxes .right .busters-info .item.seventh")
const eighthBustersUl = $(".faq .boxes .right .busters-info .item.eighth")

// faq info
const firstInfo = $(".faq .boxes .right  .info.first")

// disease info
const firstDiseaseInfo = $(".disease-info .info.first")
const secondDiseaseInfo = $(".disease-info .info.second")
const thirdDiseaseInfo = $(".disease-info .info.third")
const fourthDiseaseInfo = $(".disease-info .info.fourth")

// transm info
const firstTransmInfo = $(".transm-info .info.first")
const secondTransmInfo = $(".transm-info .info.second")
const thirdTransmInfo = $(".transm-info .info.third")
const fourthTransmInfo = $(".transm-info .info.fourth")
const fifthTransmInfo = $(".transm-info .info.fifth")
const sixthTransmInfo = $(".transm-info .info.sixth")

// protect info
const firstProtectInfo = $(".protect-info .info.first")
const secondProtectInfo = $(".protect-info .info.second")
const thirdProtectInfo = $(".protect-info .info.third")
const fourthProtectInfo = $(".protect-info .info.fourth")
const fifthProtectInfo = $(".protect-info .info.fifth")

// symptoms info
const firstSymptomsInfo = $(".faq .symptoms-info.hidden .info.first")
const secondSymptomsInfo = $(".symptoms-info .info.second")
const thirdSymptomsInfo = $(".symptoms-info .info.third")
const fourthSymptomsInfo = $(".symptoms-info .info.fourth")

// outbreak info
const firstOutbreakInfo = $(".faq .outbreak-info.hidden .info.first")
const secondOutbreakInfo = $(".outbreak-info .info.second")
const thirdOutbreakInfo = $(".outbreak-info .info.third")
const fourthOutbreakInfo = $(".outbreak-info .info.fourth")
const fifthOutbreakInfo = $(".outbreak-info .info.fifth")
const sixthOutbreakInfo = $(".outbreak-info .info.sixth")

// busters info
const firstBustersInfo = $(".faq .busters-info.hidden .info.first")
const secondBustersInfo = $(".busters-info .info.second")
const thirdBustersInfo = $(".busters-info .info.third")
const fourthBustersInfo = $(".busters-info .info.fourth")
const fifthBustersInfo = $(".busters-info .info.fifth")
const sixthBustersInfo = $(".busters-info .info.sixth")
const seventhBustersInfo = $(".busters-info .info.seventh")
const eighthBustersInfo = $(".busters-info .info.eighth")

// buttons
const pluss = $(".faq .boxes .right .main-title .plus")
const firstPlus = $(".faq .boxes .right .main-title .plus.first")
const minuss = $(".faq .boxes .right .main-title .minus")
const firstMinus = $(".faq .boxes .right .main-title .minus.first")

// disease pluses
const firstDiseasePlus = $(".faq .boxes .right .disease-info .item.first .main-title.first .plus.first")
const secondDiseasePlus = $(".faq .boxes .right .disease-info .item.second .main-title.second .plus.second")
const thirdDiseasePlus = $(".faq .boxes .right .disease-info .item.third .main-title.third .plus.third")
const fourthDiseasePlus = $(".faq .boxes .right .disease-info .item.fourth .main-title.fourth .plus.fourth")

// disease minuses
const firstDiseaseMinus = $(".faq .boxes .right .disease-info .item.first .main-title.first .minus.first")
const secondDiseaseMinus = $(".faq .boxes .right .disease-info .item.second .main-title.second .minus.second")
const thirdDiseaseMinus = $(".faq .boxes .right .disease-info .item.third .main-title.third .minus.third")
const fourthDiseaseMinus = $(".faq .boxes .right .disease-info .item.fourth .main-title.fourth .minus.fourth")

// transm pluses
const firstTransmPlus = $(".faq .boxes .right .transm-info .item.first .main-title.first .plus.first")
const secondTransmPlus = $(".faq .boxes .right .transm-info .item.second .main-title.second .plus.second")
const thirdTransmPlus = $(".faq .boxes .right .transm-info .item.third .main-title.third .plus.third")
const fourthTransmPlus = $(".faq .boxes .right .transm-info .item.fourth .main-title.fourth .plus.fourth")
const fifthTransmPlus = $(".faq .boxes .right .transm-info .item.fifth .main-title.fifth .plus.fifth")
const sixthTransmPlus = $(".faq .boxes .right .transm-info .item.sixth .main-title.sixth .plus.sixth")

// protect pluses
const firstProtectPlus = $(".faq .boxes .right .protect-info .item.first .main-title.first .plus.first")
const secondProtectPlus = $(".faq .boxes .right .protect-info .item.second .main-title.second .plus.second")
const thirdProtectPlus = $(".faq .boxes .right .protect-info .item.third .main-title.third .plus.third")
const fourthProtectPlus = $(".faq .boxes .right .protect-info .item.fourth .main-title.fourth .plus.fourth")
const fifthProtectPlus = $(".faq .boxes .right .protect-info .item.fifth .main-title.fifth .plus.fifth")

// symptoms pluses
const firstSymptomsPlus = $(".faq .boxes .right .symptoms-info .item.first .main-title.first .plus.first")
const secondSymptomsPlus = $(".faq .boxes .right .symptoms-info .item.second .main-title.second .plus.second")
const thirdSymptomsPlus = $(".faq .boxes .right .symptoms-info .item.third .main-title.third .plus.third")
const fourthSymptomsPlus = $(".faq .boxes .right .symptoms-info .item.fourth .main-title.fourth .plus.fourth")

// outbreak pluses
const firstOutbreakPlus = $(".faq .boxes .right .outbreak-info .item.first .main-title.first .plus.first")
const secondOutbreakPlus = $(".faq .boxes .right .outbreak-info .item.second .main-title.second .plus.second")
const thirdOutbreakPlus = $(".faq .boxes .right .outbreak-info .item.third .main-title.third .plus.third")
const fourthOutbreakPlus = $(".faq .boxes .right .outbreak-info .item.fourth .main-title.fourth .plus.fourth")
const fifthOutbreakPlus = $(".faq .boxes .right .outbreak-info .item.fifth .main-title.fifth .plus.fifth")
const sixthOutbreakPlus = $(".faq .boxes .right .outbreak-info .item.sixth .main-title.sixth .plus.sixth")

// busters pluses
const firstBustersPlus = $(".faq .boxes .right .busters-info .item.first .main-title.first .plus.first")
const secondBustersPlus = $(".faq .boxes .right .busters-info .item.second .main-title.second .plus.second")
const thirdBustersPlus = $(".faq .boxes .right .busters-info .item.third .main-title.third .plus.third")
const fourthBustersPlus = $(".faq .boxes .right .busters-info .item.fourth .main-title.fourth .plus.fourth")
const fifthBustersPlus = $(".faq .boxes .right .busters-info .item.fifth .main-title.fifth .plus.fifth")
const sixthBustersPlus = $(".faq .boxes .right .busters-info .item.sixth .main-title.sixth .plus.sixth")
const seventhBustersPlus = $(".faq .boxes .right .busters-info .item.seventh .main-title.seventh .plus.seventh")
const eighthBustersPlus = $(".faq .boxes .right .busters-info .item.eighth .main-title.eighth .plus.eighth")

// transm minuses
const firstTransmMinus = $(".faq .boxes .right .transm-info .item.first .main-title.first .minus.first")
const secondTransmMinus = $(".faq .boxes .right .transm-info .item.second .main-title.second .minus.second")
const thirdTransmMinus = $(".faq .boxes .right .transm-info .item.third .main-title.third .minus.third")
const fourthTransmMinus = $(".faq .boxes .right .transm-info .item.fourth .main-title.fourth .minus.fourth")
const fifthTransmMinus = $(".faq .boxes .right .transm-info .item.fifth .main-title.fifth .minus.fifth")
const sixthTransmMinus = $(".faq .boxes .right .transm-info .item.sixth .main-title.sixth .minus.sixth")

// protect minuses
const firstProtectMinus = $(".faq .boxes .right .protect-info .item.first .main-title.first .minus.first")
const secondProtectMinus = $(".faq .boxes .right .protect-info .item.second .main-title.second .minus.second")
const thirdProtectMinus = $(".faq .boxes .right .protect-info .item.third .main-title.third .minus.third")
const fourthProtectMinus = $(".faq .boxes .right .protect-info .item.fourth .main-title.fourth .minus.fourth")
const fifthProtectMinus = $(".faq .boxes .right .protect-info .item.fifth .main-title.fifth .minus.fifth")

// symptoms minuses
const firstSymptomsMinus = $(".faq .boxes .right .symptoms-info .item.first .main-title.first .minus.first")
const secondSymptomsMinus = $(".faq .boxes .right .symptoms-info .item.second .main-title.second .minus.second")
const thirdSymptomsMinus = $(".faq .boxes .right .symptoms-info .item.third .main-title.third .minus.third")
const fourthSymptomsMinus = $(".faq .boxes .right .symptoms-info .item.fourth .main-title.fourth .minus.fourth")

// outbreak minuses
const firstOutbreakMinus = $(".faq .boxes .right .outbreak-info .item.first .main-title.first .minus.first")
const secondOutbreakMinus = $(".faq .boxes .right .outbreak-info .item.second .main-title.second .minus.second")
const thirdOutbreakMinus = $(".faq .boxes .right .outbreak-info .item.third .main-title.third .minus.third")
const fourthOutbreakMinus = $(".faq .boxes .right .outbreak-info .item.fourth .main-title.fourth .minus.fourth")
const fifthOutbreakMinus = $(".faq .boxes .right .outbreak-info .item.fifth .main-title.fifth .minus.fifth")
const sixthOutbreakMinus = $(".faq .boxes .right .outbreak-info .item.sixth .main-title.sixth .minus.sixth")

// busters minuses
const firstBustersMinus = $(".faq .boxes .right .busters-info .item.first .main-title.first .minus.first")
const secondBustersMinus = $(".faq .boxes .right .busters-info .item.second .main-title.second .minus.second")
const thirdBustersMinus = $(".faq .boxes .right .busters-info .item.third .main-title.third .minus.third")
const fourthBustersMinus = $(".faq .boxes .right .busters-info .item.fourth .main-title.fourth .minus.fourth")
const fifthBustersMinus = $(".faq .boxes .right .busters-info .item.fifth .main-title.fifth .minus.fifth")
const sixthBustersMinus = $(".faq .boxes .right .busters-info .item.sixth .main-title.sixth .minus.sixth")
const seventhBustersMinus = $(".faq .boxes .right .busters-info .item.seventh .main-title.seventh .minus.seventh")
const eighthBustersMinus = $(".faq .boxes .right .busters-info .item.eighth .main-title.eighth .minus.eighth")

// faq li

// disease li

const firstDiseaseLi = $(".faq .boxes .right .disease-info .item.first li.main-title.first")
const secondDiseaseLi = $(".faq .boxes .right .disease-info .item.second li.main-title.second")
const thirdDiseaseLi = $(".faq .boxes .right .disease-info .item.third li.main-title.third")
const fourthDiseaseLi = $(".faq .boxes .right .disease-info .item.fourth li.main-title.fourth")

// transm li
const firstTransmLi = $(".faq .boxes .right .transm-info .item.first .main-title.first")
const secondTransmLi = $(".faq .boxes .right .transm-info .item.second .main-title.second")
const thirdTransmLi = $(".faq .boxes .right .transm-info .item.third .main-title.third")
const fourthTransmLi = $(".faq .boxes .right .transm-info .item.fourth .main-title.fourth")
const fifthTransmLi = $(".faq .boxes .right .transm-info .item.fifth .main-title.fifth")
const sixthTransmLi = $(".faq .boxes .right .transm-info .item.sixth .main-title.sixth")

// protect li
const firstProtectLi = $(".faq .boxes .right .protect-info .item.first .main-title.first")
const secondProtectLi = $(".faq .boxes .right .protect-info .item.second .main-title.second")
const thirdProtectLi = $(".faq .boxes .right .protect-info .item.third .main-title.third")
const fourthProtectLi = $(".faq .boxes .right .protect-info .item.fourth .main-title.fourth")
const fifthProtectLi = $(".faq .boxes .right .protect-info .item.fifth .main-title.fifth")

// symptoms li
const firstSymptomsLi = $(".faq .boxes .right .symptoms-info .item.first .main-title.first")
const secondSymptomsLi = $(".faq .boxes .right .symptoms-info .item.second .main-title.second")
const thirdSymptomsLi = $(".faq .boxes .right .symptoms-info .item.third .main-title.third")
const fourthSymptomsLi = $(".faq .boxes .right .symptoms-info .item.fourth .main-title.fourth")

// outbreak li
const firstOutbreakLi = $(".faq .boxes .right .outbreak-info .item.first .main-title.first")
const secondOutbreakLi = $(".faq .boxes .right .outbreak-info .item.second .main-title.second")
const thirdOutbreakLi = $(".faq .boxes .right .outbreak-info .item.third .main-title.third")
const fourthOutbreakLi = $(".faq .boxes .right .outbreak-info .item.fourth .main-title.fourth")
const fifthOutbreakLi = $(".faq .boxes .right .outbreak-info .item.fifth .main-title.fifth")
const sixthOutbreakLi = $(".faq .boxes .right .outbreak-info .item.sixth .main-title.sixth")

// busters li 
const firstBustersLi = $(".faq .boxes .right .busters-info .item.first .main-title.first")
const secondBustersLi = $(".faq .boxes .right .busters-info .item.second .main-title.second")
const thirdBustersLi = $(".faq .boxes .right .busters-info .item.third .main-title.third")
const fourthBustersLi = $(".faq .boxes .right .busters-info .item.fourth .main-title.fourth")
const fifthBustersLi = $(".faq .boxes .right .busters-info .item.fifth .main-title.fifth")
const sixthBustersLi = $(".faq .boxes .right .busters-info .item.sixth .main-title.sixth")
const seventhBustersLi = $(".faq .boxes .right .busters-info .item.seventh .main-title.seventh")
const eighthBustersLi = $(".faq .boxes .right .busters-info .item.eighth .main-title.eighth")

// functions
function Active(link,x,y){
  if( x <= $(window).scrollTop() && $(window).scrollTop() < y){
  link.addClass("active")
}
else {
  link.removeClass("active")
}
}

 function faq(li,info){
  faqList.removeClass("active-faq")
  li.addClass("active-faq")
  info.show()  
}
function showOnly(section){
  faqSections.hide()
  section.show()
  pluss.show()
  minuss.hide()
  firstPlus.hide()
  firstMinus.show()
  uls.removeClass("change-color")
  firstUl.addClass("change-color")
}
function change(ul,plusButton,minusButton,info){
  ul.toggleClass("change-color")
  plusButton.toggle()
  minusButton.toggle()
  info.toggle()
}

// application
$(window).scroll(function (){
  Active(homeLink,0,660)
  Active(aboutLink,661,1218)
  Active(symptomsLink,2226,2960)
  Active(preventionLink,2961,5067)
  Active(treatmentlink,5068,5900)
  Active(faqLink,6940,7508)
  Active(newsLink,7509,10000)
})
$(window).scroll(function (){
  if ($(this).scrollTop() > 12){
  navbar.addClass("navbar-scroll")
  home.addClass("padding-top")
  button.fadeIn()
  }
  else {
      navbar.removeClass("navbar-scroll")
      home.removeClass("padding-top")
      button.fadeOut()
  } 
  })
 
  // transm
  faqTransm.click(function(){
    showOnly(transmSect)
    faq(faqTransm,firstTransmInfo)
  }
  )
  // protect
  faqProtect.click(function(){
    showOnly(protectSect)
    faq(faqProtect,firstProtectInfo)
  })
  // disease
  faqDisease.click(function(){
    showOnly(diseaseSect)
    faq(faqDisease,firstDiseaseInfo)
  })
  // symptoms
  faqSymptoms.click(function(){
    showOnly(symptomsSect)
    faq(faqSymptoms,firstSymptomsInfo)
  })
  // outbreak
  faqOutbreak.click(function(){
    showOnly(outbreakSect)
    faq(faqOutbreak,firstOutbreakInfo)
  })
  // busters
  faqBusters.click(function(){
    showOnly(busterSect)
    faq(faqBusters,firstBustersInfo)
  })
   
 // button function
 
//  disease
 firstDiseaseLi.click(function(){
   change(firstDiseaseUl,firstDiseasePlus,firstDiseaseMinus,firstDiseaseInfo)
 })
 secondDiseaseLi.click(function(){
  change(secondDiseaseUl,secondDiseasePlus,secondDiseaseMinus,secondDiseaseInfo)
})
thirdDiseaseLi.click(function(){
  change(thirdDiseaseUl,thirdDiseasePlus,thirdDiseaseMinus,thirdDiseaseInfo)
})
fourthDiseaseLi.click(function(){
  change(fourthDiseaseUl,fourthDiseasePlus,fourthDiseaseMinus,fourthDiseaseInfo)
})

// transm
firstTransmLi.click(function(){
  change(firstTransmUl,firstTransmPlus,firstTransmMinus,firstTransmInfo)
})
secondTransmLi.click(function(){
 change(secondTransmUl,secondTransmPlus,secondTransmMinus,secondTransmInfo)
})
thirdTransmLi.click(function(){
 change(thirdTransmUl,thirdTransmPlus,thirdTransmMinus,thirdTransmInfo)
})
fourthTransmLi.click(function(){
 change(fourthTransmUl,fourthTransmPlus,fourthTransmMinus,fourthTransmInfo)
})
fifthTransmLi.click(function(){
  change(fifthTransmUl,fifthTransmPlus,fifthTransmMinus,fifthTransmInfo)
 })
 sixthTransmLi.click(function(){
  change(sixthTransmUl,sixthTransmPlus,sixthTransmMinus,sixthTransmInfo)
 })

// protect
firstProtectLi.click(function(){
  change(firstProtectUl,firstProtectPlus,firstProtectMinus,firstProtectInfo)
})
secondProtectLi.click(function(){
 change(secondProtectUl,secondProtectPlus,secondProtectMinus,secondProtectInfo)
})
thirdProtectLi.click(function(){
 change(thirdProtectUl,thirdProtectPlus,thirdProtectMinus,thirdProtectInfo)
})
fourthProtectLi.click(function(){
 change(fourthProtectUl,fourthProtectPlus,fourthProtectMinus,fourthProtectInfo)
})
fifthProtectLi.click(function(){
  change(fifthProtectUl,fifthProtectPlus,fifthProtectMinus,fifthProtectInfo)
 })

//  symptoms
firstSymptomsLi.click(function(){
  change(firstSymptomsUl,firstSymptomsPlus,firstSymptomsMinus,firstSymptomsInfo)
})
secondSymptomsLi.click(function(){
 change(secondSymptomsUl,secondSymptomsPlus,secondSymptomsMinus,secondSymptomsInfo)
})
thirdSymptomsLi.click(function(){
 change(thirdSymptomsUl,thirdSymptomsPlus,thirdSymptomsMinus,thirdSymptomsInfo)
})
fourthSymptomsLi.click(function(){
 change(fourthSymptomsUl,fourthSymptomsPlus,fourthSymptomsMinus,fourthSymptomsInfo)
})

// outbreak
firstOutbreakLi.click(function(){
  change(firstOutbreakUl,firstOutbreakPlus,firstOutbreakMinus,firstOutbreakInfo)
})
secondOutbreakLi.click(function(){
 change(secondOutbreakUl,secondOutbreakPlus,secondOutbreakMinus,secondOutbreakInfo)
})
thirdOutbreakLi.click(function(){
 change(thirdOutbreakUl,thirdOutbreakPlus,thirdOutbreakMinus,thirdOutbreakInfo)
})
fourthOutbreakLi.click(function(){
 change(fourthOutbreakUl,fourthOutbreakPlus,fourthOutbreakMinus,fourthOutbreakInfo)
})
fifthOutbreakLi.click(function(){
  change(fifthOutbreakUl,fifthOutbreakPlus,fifthOutbreakMinus,fifthOutbreakInfo)
 })
 sixthOutbreakLi.click(function(){
  change(sixthOutbreakUl,sixthOutbreakPlus,sixthOutbreakMinus,sixthOutbreakInfo)
 })

//  busters
firstBustersLi.click(function(){
  change(firstBustersUl,firstBustersPlus,firstBustersMinus,firstBustersInfo)
})
secondBustersLi.click(function(){
 change(secondBustersUl,secondBustersPlus,secondBustersMinus,secondBustersInfo)
})
thirdBustersLi.click(function(){
 change(thirdBustersUl,thirdBustersPlus,thirdBustersMinus,thirdBustersInfo)
})
fourthBustersLi.click(function(){
 change(fourthBustersUl,fourthBustersPlus,fourthBustersMinus,fourthBustersInfo)
})
fifthBustersLi.click(function(){
  change(fifthBustersUl,fifthBustersPlus,fifthBustersMinus,fifthBustersInfo)
 })
 sixthBustersLi.click(function(){
  change(sixthBustersUl,sixthBustersPlus,sixthBustersMinus,sixthBustersInfo)
 })
 seventhBustersLi.click(function(){
  change(seventhBustersUl,seventhBustersPlus,seventhBustersMinus,seventhBustersInfo)
 })
 eighthBustersLi.click(function(){
  change(eighthBustersUl,eighthBustersPlus,eighthBustersMinus,eighthBustersInfo)
 })



// mobileL()
burger.click(function(){
  burger.hide()
  close_icon.show()
  opacity.fadeIn()
  navbar_items.addClass("show")

})
close_icon.click(function(){
  close_icon.hide()
  burger.show()
  opacity.fadeOut()
  navbar_items.removeClass("show")
})



// 



console.log($(window).scrollTop());





