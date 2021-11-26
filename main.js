const zodiacs={
  aquarius:{text:"Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.",image:"/images/bg1.jpg",title:"an Aquarius"},
  pisces:{text:"Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.",image:"/images/bg2.jpg",title:"a Pisces"},
  aries:{text:"As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.",image:"/images/bg1.jpg",title:"an Aries"},
  taurus:{text:"Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures.",image:"/images/bg2.jpg",title:"a Taurus"},
  gemini:{text:"Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless.",image:"/images/bg2.jpg",title:"a Gemini"},
  cancer:{text:"Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close.",image:"/images/bg1.jpg",title:"a Cancer"},
  leo:{text:"People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to.",image:"/images/bg2.jpg",title:"a Leo"},
  virgo:{text:"Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world.",image:"/images/bg2.jpg",title:"a Virgo"},
  libra:{text:"People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves.",image:"/images/bg1.jpg",title:"a Libra"},
  scorpio:{text:"Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.",image:"/images/bg1.jpg",title:"a Scorpio"},
  sagittarius:{text:"Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.",image:"/images/bg2.jpg",title:"a Sagittarius"},
  capricon:{text:"Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives.",image:"/images/bg2.jpg",title:"a Capricon"}
  
};
const funFactBox=document.querySelector(".fun-fact-box");
const funFactText=document.getElementById('funFactText');
const funFactTitle=document.getElementById('funFactTitle');
const funFactImage=document.getElementById("funFactImage");
const dateInput=document.getElementById("date-input");
const formElem=document.getElementById("form");
const daysElem=document.getElementById("daysElem");
const hoursElem=document.getElementById("hoursElem");
const minutesElem=document.getElementById("minutesElem");
const secondsElem=document.getElementById("secondsElem");
const daysDisplayCon=document.querySelector(".days-display-container");
formElem.addEventListener("submit",checkDays);
const Boxes=document.querySelectorAll(".box");

window.onload=function(){
  let dd=new Date().getDate() < 10 ? "0"+ new Date().getDate() : new Date().getDate();
  let mm=(new Date().getMonth()+1) < 10 ? "0"+ (new Date().getMonth()+1) : new Date().getMonth()+1;
  let yyyy=new Date().getFullYear();
  dateInput.setAttribute("max",`${yyyy}-${mm}-${dd}`);

}
function checkDays(e){
  e.preventDefault();
 const inputtedDate=dateInput.valueAsNumber;
  const zodiacBirthday=new Date(inputtedDate);
  getZodiacDate(zodiacBirthday)
  const birthday=new Date(inputtedDate).getTime();
  const today=new Date().getTime();
  const daysDiff= today - birthday;
  const daysOld=dateFormatter(daysDiff);
  daysDisplayCon.style.opacity="1"
if(!funFactBox.classList.contains("show")){
    funFactBox.classList.add("show")
}
  setTimeout(function() {
    setElementsText(daysOld.days,daysOld.hours,daysOld.minutes,daysOld.seconds);
  }, 1000);
  showBoxes();
  
}
function showBoxes(){
  for(let i=0;i < Boxes.length;i++){
  if(Boxes[i].classList.contains("show")){
      Boxes[i].classList.remove("show")
setTimeout(function() {
Boxes[i].classList.add("show")
      }, 900);
  }
  else{
      Boxes[i].classList.add("show")
  }
  }
}
function setElementsText(days,hours,minutes,seconds){
  daysElem.textContent=days;
  hoursElem.textContent=hours;
  minutesElem.textContent=minutes;
  secondsElem.textContent=seconds;
}
function getZodiacDate(zodiacBday){
  const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
 const month= months[zodiacBday.getMonth()];
 const zodiacDay=zodiacBday.getDate();
   const checkZodiac={
  isAquarius:month =="jan" && zodiacDay >= 20 || month=="feb" && zodiacDay <= 19,
  isAries:month =="mar" && zodiacDay >= 21 || month=="apr" && zodiacDay <= 20,
  isCapricon:month =="dec" && zodiacDay >= 22 || month=="jan" && zodiacDay <= 19,
  isLibra:month =="sep" && zodiacDay >= 23 || month=="oct" && zodiacDay <= 22,
  isLeo:month =="jul" && zodiacDay >= 23 || month=="aug" && zodiacDay <= 22,
  isSagittarius:month =="nov" && zodiacDay >= 23 || month=="dec" && zodiacDay <= 21,
  isPisces:month =="feb" && zodiacDay >= 20 || month=="mar" && zodiacDay <= 20,
  isTaurus:month =="apr" && zodiacDay >= 21 || month=="may" && zodiacDay <= 20,
  isGemini:month =="may" && zodiacDay >= 21 || month=="jun" && zodiacDay <= 20,
  isVirgo:month =="aug" && zodiacDay >= 23 || month=="sep" && zodiacDay <= 22,
  isScorpio:month =="oct" && zodiacDay >= 23 || month=="nov" && zodiacDay <= 22,
  isCancer:month =="jun" && zodiacDay >= 21 || month=="jul" && zodiacDay <= 22
} 
displayZodiacData(checkZodiac);
}
function displayZodiacData(checkZodiac){
  if(checkZodiac.isAquarius){setFunFact(zodiacs.aquarius.text,zodiacs.aquarius.image,zodiacs.aquarius.title)}
  else if (checkZodiac.isAries){setFunFact(zodiacs.aries.text,zodiacs.aries.image,zodiacs.aries.title)}
  else if(checkZodiac.isCancer){setFunFact(zodiacs.cancer.text,zodiacs.cancer.image,zodiacs.cancer.title)}
  else if(checkZodiac.isVirgo){setFunFact(zodiacs.virgo.text,zodiacs.virgo.image,zodiacs.virgo.title)}
  
  else if(checkZodiac.isScorpio){setFunFact(zodiacs.scorpio.text,zodiacs.scorpio.image,zodiacs.scorpio.title)}
  else if(checkZodiac.isGemini){setFunFact(zodiacs.gemini.text,zodiacs.gemini.image,zodiacs.gemini.title)}
  else if(checkZodiac.isSagittarius){setFunFact(zodiacs.sagittarius.text,zodiacs.sagittarius.image,zodiacs.sagittarius.title)}
  else if(checkZodiac.isTaurus){setFunFact(zodiacs.taurus.text,zodiacs.taurus.image,zodiacs.taurus.title)}
  else if(checkZodiac.isLeo){setFunFact(zodiacs.leo.text,zodiacs.leo.image,zodiacs.leo.title)} 
  else if(checkZodiac.isLibra){setFunFact(zodiacs.libra.text,zodiacs.libra.image,zodiacs.libra.title)}
  else if(checkZodiac.isPisces){
    setFunFact(zodiacs.pisces.text,zodiacs.pisces.image,zodiacs.pisces.title)}
  else if(checkZodiac.isCapricon){setFunFact(zodiacs.capricon.text,zodiacs.capricon.image,zodiacs.capricon.title)}

}

function setFunFact(text,image,title){
  funFactImage.src=image
  funFactText.textContent=text;
  funFactTitle.textContent=`You're ${title}.`;
}
function dateFormatter(diff){
const seconds=1000;
const minutes=seconds * 60;
const hours=minutes * 60;
const days = hours * 24;
return{
  days:Math.floor(diff/(days)),
  hours:Math.floor((diff%(days))/(hours)),
  minutes:Math.floor((diff%(hours))/(minutes)),
  seconds:Math.floor((diff%(minutes)/seconds))
}
}

