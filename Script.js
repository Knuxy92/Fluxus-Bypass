let divElement = document.querySelector('div.title.title-en');
  var bodyContent = document.body.textContent;
  var checkHost = window.location.href;

  function Log(Text,Color){
    Text = Text || '???'
    Color = Color || '#A8FFC1'
    console.log('%c '+Text, 'background: #222; color: '+Color);
    showNotification({ r: 72, g: 72, b: 72 },Text)
  }



  if (divElement !== null) {
      Log('Please Enter Captcha','#FFA8A8');
  }else if(bodyContent.includes("Trying to bypass the Fluxus key system will get you banned from using Fluxus.")){
      document.body.textContent = "Pls Try F5 To Getkey Or Getkey Again";
  } else {
      Log('Now You Link > ' + checkHost,'#FFFCA8');

      if (checkHost === 'https://linkvertise.com/580726/fluxus1') {
          Log('Now You In Linkvertise Checkpoint1');
          setTimeout(function() {
              window.location.href = "https://fluxteam.net/android/checkpoint/check1.php";
          }, 500);
      } else if (checkHost === 'https://linkvertise.com/580726/fluxus') {
          Log('Now You In Linkvertise Checkpoint Main');
          setTimeout(function() {
              window.location.href = "https://fluxteam.net/android/checkpoint/main.php";
          }, 500);
      } else if (checkHost.includes('?HWID=')) {
          Log('Now You In Start Page');
          setTimeout(function() {
              window.location.href = "https://linkvertise.com/580726/fluxus1";
          }, 500);
      } else if (checkHost === 'https://fluxteam.net/android/checkpoint/check1.php') {
          Log('Now You In Checkpoint 1');
          setTimeout(function() {
              window.location.href = "https://linkvertise.com/580726/fluxus";
          }, 500);
    } else if (checkHost === 'https://fluxteam.net/android/checkpoint/main.php') {
        Log('Bypass Success !');
        setTimeout(2000);
        if(bodyContent.includes("Trying to bypass the Fluxus key system will get you banned from using Fluxus.")){
            Log('Pls F5 To Get Key');
        }else{
        const textContent = document.querySelector('code').textContent.replace(" ","");
        console.log(textContent);
        navigator.clipboard.writeText(textContent);
        Log('You Key '+textContent+' Auto Setclipboard')
        }
      } else {
          Log('Not Found Page Fluxus!','#FFA8A8');
      }
  }

  function showNotification(color, message) {
    const notificationDiv = document.createElement('div');
    notificationDiv.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    notificationDiv.style.color = 'white';
    notificationDiv.style.position = 'fixed';
    notificationDiv.style.top = '0';
    notificationDiv.style.left = '50%';
    notificationDiv.style.transform = 'translateX(-50%)';
    notificationDiv.style.width = '50%';
    notificationDiv.style.padding = '10px';
    notificationDiv.style.textAlign = 'center';
    notificationDiv.style.fontWeight = 'bold';
    notificationDiv.textContent = message;
    document.body.appendChild(notificationDiv);
    setTimeout(() => {
      document.body.removeChild(notificationDiv);
    }, 4000); //Ty Portal (woah24 on Discord) for the simplified code :)
  }
