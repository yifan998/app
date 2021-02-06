import Cookie from "js-cookie";

function setUserCookie(params) {
  const arr = Object.entries(params)//转为二维数组
  for (let i = 0; i < arr.length; i++) {
    Cookie.set(arr[i][0],arr[i][1])//  Cookie.set(name,value,..params) 
  }
}
function getUserCookie(){
  return {
    username:Cookie.get('username'),
    appkey:Cookie.get('appkey'),
    role:Cookie.get('role'),
    email:Cookie.get('email')
  }
}
function removeUserCookie(){
  Cookie.remove('username')
  Cookie.remove('appkey')
  Cookie.remove('role')
  Cookie.remove('email')
} 
export {
  setUserCookie,
  getUserCookie,
  removeUserCookie
}
