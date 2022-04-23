function scuberGreetingForFeet(val){
  // Write your code here!
  if(val<200){
    return "This one is on me!"

  }
   if(val>399 && val<2000){
     return 'That will be twenty bucks.'

  }
  if(val>2000&&val<2499){
    return "I will gladly take your thirty bucks."

  }
  if(val>2500){
    return 'No can do.'

  }
}

function ternaryCheckCity(city){
 if(city==="NYC"){
   return 'Ok, sounds good.'
 }
 else{
   return "No go."
 }
}

function switchOnCharmFromTip(tip){
  if(tip==="generous"){
    return "Thank you so much."
  }
  if(tip==="not as generous"){
    return "Thank you."
  }
  return "Bye."

}