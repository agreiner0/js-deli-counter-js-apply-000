function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}



function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var customer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}


function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}




function currentLine(katzDeliLine){
  var lineString = [];

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++){
      lineString.push(" " + (i + 1) + `. ${katzDeliLine[i]}`);
      }
    }
    return "The line is currently:" + lineString;
}



function dropOut(katzDeliLine,linenumberlostCustomer){
  //not sure how remove customer by name without indexOf()
  if (linenumberlostCustomer > 0){
      var indexLost =  linenumberlostCustomer - 1 ;
      katzDeliLine.splice(indexLost,1);
      return katzDeliLine;
  }else{
    return katzDeliLine.shift();
  }
}

function lineCutter(katzDeliLine,cutterName,numberofPeopleCut){
  if(katzDeliLine.length === 0){
    return katzDeliLine.push(cutterName)
  }else{
    var cutterposition = (katzDeliLine.length - numberofPeopleCut);
    katzDeliLine[cutterposition] = cutterName;
    return katzDeliLine;
  }
}

function serveWholeLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return console.log('Nobody in line!!')
  }else{
  while(0 < katzDeliLine.length){
    nextup = katzDeliLine[0]
    katzDeliLine.shift();
    return console.log(`Now Serving: ${nextup}`)
  }
  }
}