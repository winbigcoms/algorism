function isC(p){
  let sets=0;
  for(let i=0; i<p.length-1;i++){
      if(p[i]==="("){
          sets+=1;
      }else{
          sets-=1;
          if(sets < 0){
              return false
          }
      }
  }
  return true
}

function solution(p) {
  if(p==="")return p;
  if(isC(p)){
      return p
  }
  let v =""
  let u ="";
  let left=0;
  let right =0;
  for(let i =0; i< p.length;i++){
    if(p[i]==="("){
      left+=1;
    }else if(p[i]===")"){
      right +=1;
    }
    console.log(left===right)
    if(left===right){
      u =p.slice(0,i+1);
      v = p.slice(i+1);
      break;
    }
  }
  if(isC(u)){
    return u+solution(v)
  }
  return "("+solution(v)+")"+u.split("").slice(1,-1).map(str=>str==="("?")":"(").join("");
}