let cookies;

function setCookie(cookieName, cookieValue, expiryDate) {
  cookieName = cookieName.trim();
  if (expiryDate != undefined) {
    document.cookie = "" + cookieName + "=" + cookieValue + ";expires=" + expiryDate;
  } else {
    document.cookie = "" + cookieName + "=" + cookieValue /*+";expires="+expiryDate*/;
  }
}

function getCookie(cookie) {
  let aCookies = [];

  // Trimming Whitespaces and preparing for the associative array
  cookies = document.cookie.split(";");
  for (let i in cookies) {
    cookies[i] = cookies[i].trim();
    cookies[i] = cookies[i].split("=");
  }

  // Associative Array
  for (let i = 0; i < cookies.length; i++) {
    aCookies[cookies[i][0]] = cookies[i][1];
  }

  return aCookies[cookie];
}

function hasCookie(cookie) {
  if (getCookie(cookie)) {
    return true;
  } else {
    return false;
  }
}

function allCookieList() {
  return cookies;
}

function deleteCookie(cookie) {
  let oldDate = new Date("1998-05-31");
  document.cookie = cookie + "=;expires=" + oldDate;
}