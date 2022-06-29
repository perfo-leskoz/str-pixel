// please change below placeholders userId, depositId, transactionId  with data from your system
var userId = 'userId-placeholder';
var depositId = 'depositId-placeholder';
var transactionId = 'transactionId-placeholder';

var visitEventId = '3peOAZEJ8xsQeMdpe';
var registeredEventId = '3peOAZEJ8xsQeMdpe';
var transactionEventId = '3peOAZEJ8xsQeMdpe'

var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var paramSid = params.sid;
var sid = getPrfCookie('prf_sid');
var status = getPrfCookie('prf_status');

if (paramSid && paramSid !== sid) {
  sid = paramSid;
  setPrfCookie('prf_sid', sid);
}

if (sid && status === 'undefined') {
  sendPixelAdhoc4(visitEventId, sid);
  setPrfCookie('prf_status', 'visited');
}

var completeRegistrationInfo = document.getElementById('total-container');
if (completeRegistrationInfo && sid && status === 'visited') {
  sendPixelAdhoc4(registeredEventId, sid, userId);
  setPrfCookie('prf_status', 'registered');
}

var completeDeposit = document.getElementById('pl-24937');
if (completeDeposit && sid && status === 'registered') {
  sendPixelAdhoc4(transactionEventId, sid, userId, depositId, transactionId);
  setPrfCookie('prf_status', 'deposed');
}

function sendPixelAdhoc4(eventId, sid, userId , deposit, transactionId) {
  var allureBaseUrl = `https://event.softwarelink.cc/activity/k5/${eventId}/`;
  var requestUrl = allureBaseUrl + sid;

  if (transactionId || userId || deposit) {
    transactionId = transactionId || '';
    userId = userId || '';
    deposit = deposit || '';
    requestUrl = requestUrl + '?transaction_id=' + transactionId + '_' + userId + '_' + deposit;
  }

  var http = new XMLHttpRequest();
  http.open('GET', requestUrl);
  http.send();
  http.onload = function() {
  };
}
function setPrfCookie(cName, cValue, expDays) {
  var date = new Date();
  expDays = expDays || 30;
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
function getPrfCookie(cName) {
  var name = cName + "=";
  var cDecoded = decodeURIComponent(document.cookie); //to be careful
  var cArr = cDecoded .split('; ');
  var res;
  cArr.forEach(function(val) {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}
