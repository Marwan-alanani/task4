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
// faq
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
// faq info
const transmInfo = $(".transm-info .info.first")
const protectInfo = $(".protect-info .info.first")
const diseaseInfo = $(".disease-info .info.first")
const symptomsInfo = $(".faq .symptoms-info.hidden .info.first")
const outbreakInfo = $(".faq .outbreak-info.hidden .info.first")
const bustersInfo = $(".faq .busters-info.hidden .info.first")
// functions
function Active(link,x,y){
  if( x <= $(window).scrollTop() && $(window).scrollTop() < y){
  link.addClass("active")
}
else {
  link.removeClass("active")
}
}

 function faq(x,info){
  faqList.removeClass("active-faq")
  x.addClass("active-faq")
  info.show()  
}
function showOnly(section){
  faqSections.hide()
  section.show()
}
function showOnly_button(){

}

// application
$(window).scroll(function (){
  Active(homeLink,0,660)
  Active(aboutLink,661,1218)
  Active(symptomsLink,2226,2960)
  Active(preventionLink,2961,5067)
  Active(treatmentlink,5068,5900)
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
    faq(faqTransm,transmInfo)
  }
  )
  // protect
  faqProtect.click(function(){
    showOnly(protectSect)
    faq(faqProtect,protectInfo)
  })
  // disease
  faqDisease.click(function(){
    showOnly(diseaseSect)
    faq(faqDisease,diseaseInfo)
  })
  // symptoms
  faqSymptoms.click(function(){
    showOnly(symptomsSect)
    faq(faqSymptoms,symptomsInfo)
  })
  // outbreak
  faqOutbreak.click(function(){
    showOnly(outbreakSect)
    faq(faqOutbreak,outbreakInfo)
  })
  // busters
  faqBusters.click(function(){
    showOnly(busterSect)
    faq(faqBusters,bustersInfo)
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



// console.log($(window).scrollTop());





