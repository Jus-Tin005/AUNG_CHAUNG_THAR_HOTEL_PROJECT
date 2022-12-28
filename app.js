/*
! jQuery Area
*/
$(document).ready(function(){
        // console.log("hi");

        // Start Pop Up

        $('.roomPopup').magnificPopup({
                type: 'image'
                // other options
              });
});




/*
! JS Area
*/


// START HEADER SECTION
// Start nav bar

/*
! Search box Area
*/

/*
Notes = event must be adding perfect in HTML onclick attribute.
*/
function dropBtn(e){
        // console.log("he");
        // document.getElementById("myDropdown").classList.toggle("show");

        // undefine
        // console.log(this);
        // console.log(e);

        // console.log(e.target);
        // console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.classList.toggle('show');


}


function dropFilter(){
        // console.log("loooo");
        var getSearch,filter,getDropDiv,getLinks,linkValues;

        getSearch = document.getElementById("search");
        filter = getSearch.value.toUpperCase();
        // getDropDiv = document.getElementById("myDropdown");
        // getLinks = getDropDiv.getElementsByTagName("a");
        getLinks = document.querySelectorAll(".myDropdowns a");

        // console.log(getLinks);

        for(var x = 0; x < getLinks.length; x++){
                // method 1
                linkValues = getLinks[x].textContent;
                // method  2
                linkValues = getLinks[x].textContent || getLinks[x].innerText;

                if(linkValues.toUpperCase().indexOf(filter) > -1){
                        getLinks[x].style.display = ""; // no setting for none
                }else {
                        getLinks[x].style.display = "none";

                }
        }
}
// End nav bar

// Start banner

/*
 ! Auto banner Background Area
 */

 function* genFun(){
        var idx = 8;

        while(true){
                yield idx++;

                if(idx > 13){
                        idx = 8;
                }
        }
 }

var getGen = genFun();

// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);
// console.log(getGen.next().value);


 var getHeader = document.querySelector("header");
 getHeader.style.backgroundImage = `url("./assets/img/banner/banner${getGen.next().value}.jpg")`;  // notice css file path,not html file path


 function autoLoad() {
        // console.log(getGen.next().value);
        getHeader.style.backgroundImage = `url("./assets/img/banner/banner${getGen.next().value}.jpg")`;
 }

 setInterval(autoLoad,2900);
// End banner
// END HEADER SECTION


/*
! Testimonial Section Area
*/
const getCompanyName = document.querySelector(".companyName"),
          getRoles = document.querySelector(".roles"),
          getMytestimonial = document.querySelector(".myTestimonial");

          const testimonialDatas = [
                {
                        name: "Rich Star Restaurant",
                        position: "Our Outlet",
                        text:  "loren",
                },
                {
                        name: "52 Beach hotel",
                        position: "Our branch",
                        text:  "loren",
                },
                {
                        name: "48 Sky bar cafe",
                        position: "Our Partner",
                        text:  "loren",
                },
                {
                        name: "Cool Land Swimming Pool",
                        position: "Our Client",
                        text:  "loren",
                },
                {
                        name: "Chaung Thar SPA",
                        position: "Our Business",
                        text:  "loren",
                },
                {
                        name: "Seven Star Hotel",
                        position: "Our Local Brand",
                        text:  "loren",
                },
          ];

let idx = 0;
// console.log(testimonialDatas[idx]);
// console.log(testimonialDatas[idx].name);
// console.log(testimonialDatas[idx].position);
// console.log(testimonialDatas[idx].text);


function updateTestimonials() {
        //  method 1
        // getCompanyName.textContent = testimonialDatas[idx].name;
        // getRoles.textContent = testimonialDatas[idx].position;
        // getMytestimonial.textContent = testimonialDatas[idx].text;

        // method 2
        const {name,position,text} = testimonialDatas[idx];

        // console.log(name);
        // console.log(position);
        // console.log(text);

         getCompanyName.textContent = name;
        getRoles.textContent = position;
        getMytestimonial.textContent = text;


        idx++;
        if(idx > testimonialDatas.length -1){
                idx = 0;
        }
}
updateTestimonials(); // notice here
setInterval(updateTestimonials,10000);









// START PROPERTY SECTION

 filterBy('all');
 function filterBy(keyword){
     // console.log(keyword);
     var getFilters = document.querySelectorAll(".filters");
     // console.log(getFilters)

     if(keyword === 'all'){
        keyword = '';
     }

     for(var x = 0 ; x < getFilters.length ; x++){
         // console.log(getFilters[x])
         // console.log(getFilters[x].className.indexOf(keyword) > -1)

         removeShowClass(getFilters[x],'show');

         if(getFilters[x].className.indexOf(keyword) > -1){
                addShowClass(getFilters[x],'show');
         }
     }



 }

 function addShowClass(ele,opt){
     // console.log(ele)
     var getFilters = ele.className.split(" ");
     // console.log(getFilters)

     var getOpt = opt.split(" ");
     // console.log(getOpt);
     // console.log(getOpt.length);
     // console.log(opt.length)

     for(var y = 0 ; y < getOpt.length ; y++){
         // console.log(getOpt[y]);
         // console.log(getFilters[y].indexOf(getOpt[y] === -1));

         if(getFilters[y].indexOf(getOpt[y]) === -1){
             // ele.classList.add(getOpt[y])
             ele.className += " "+getOpt[y];
         }

     }
 }

 function removeShowClass(ele,opt){
     // console.log(ele)
     let getFilters = ele.className.split(' ');
//      console.log(getFilters);

     // getFilters.forEach(function(getFilters){
      // console.log(getFilters.indexOf(opt) > -1)
     //     if(getFilters.indexOf(opt) > -1){
     //         ele.classList.remove(opt)
     //     }
     // });

     let getOpt = opt.split();
//      console.log(getOpt.length);

     for(var k = 0 ; k < getFilters.length ; k++){
         // console.log(getFilters[k]);
         // console.log(getFilters[0]);
         // console.log(getFilters[1]);

         // console.log(getFilters[k])

         while(getFilters.indexOf(getOpt[k]) > -1){
             getFilters.splice(getFilters.indexOf(getOpt[k]),1)
         }
     }

     // console.log(getFilters)
     // console.log(getFilters.join(' '))

     ele.className = getFilters.join(' ');
//      console.log(ele.className);

 }

 var getFilterControl = document.getElementById('filterControl');
 let getListitems = getFilterControl.getElementsByClassName('list-inline-item');

 for(var i = 0 ; i < getListitems.length ; i++){
        getListitems[i].addEventListener('click',function(){
         let currActives = document.querySelector('.activeItems');
         currActives.className = currActives.className.replace(' activeItems'," ");
         this.classList.add('activeItems')
     })
 }

// END PROPERTY SECTION






// START CONTACT SECTION
const textBoxes = (link, evn, btnColor) => {
        var getTabContents = document.getElementsByClassName("tabContents"),
              getBtnTabs = document.getElementsByClassName("btn-tabs");

              for(var i = 0; i < getTabContents.length; i++ ){
                        getTabContents[i].style.display = "none";
                        getBtnTabs[i].style.backgroundColor = '';
              }

        document.getElementById(link).style.display = "block";
        evn.style.backgroundColor = btnColor;
        // console.log(evn);
}

document.getElementById("autoClick").click();
// END CONTACT SECTION

// START CHAT BOX SECTION
const getMyChat = document.getElementById("myChat");

const openChatBox = () => {
        getMyChat.style.display= "block"
}

const closeChatBox = () => {
        getMyChat.style.display = "none";
}
// END CHAT BOX SECTION