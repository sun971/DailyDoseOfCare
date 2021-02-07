var saveNote = document.querySelector('#save-note');

 // Add a "checked" symbol when clicking on a list item
 var list = document.querySelector('ul');
 list.addEventListener('click', function (ev) {
     if (ev.target.tagName === 'LI') {
         ev.target.classList.toggle('checked');
     }
 },false);

//saves entries using 
saveNote.onclick = function () {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      // nothing
      let url = tabs[0].url;
      let note = notesField.value;
      chrome.storage.local.get(url, notes => {
        if (notes[url])
          notes[url].push(note);
        else
          notes[url] = [note];
        chrome.tabs.sendMessage(tabs[0].id, {notes: [note], action: "add"}, _ => {
          console.log("Added Note: '"+ note);
        });
        chrome.storage.local.set(notes);
      });
    });
    location.reload();
  };
  //Song generator 
  window.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('btnOpenNewTab');
    link.addEventListener('click', function() {
        var songs =["https://open.spotify.com/track/5Pgq1Gfeth2CuUhyCXwlfC?si=-4Hk7KDeTBGJyVKs2dpiRQ", "https://open.spotify.com/track/4eVkn18rN4GguUWOsR6Use?si=hLEeUSjlRUK8Ad4AaCwRqA",
    "https://open.spotify.com/track/3p6hnejEQYXkiTO1lAzVc0?si=Y7CdeK6mR5iEzXGQw01-aA,spotify:track:3uA8SjMyDtwtt0jLPMQbVD","https://www.youtube.com/watch?v=GuwmWnN2Q90&ab_channel=IndieSoundsGood",
    "https://www.youtube.com/watch?v=VUCuoxOUD6U&ab_channel=DopeLyrics","https://open.spotify.com/track/19aYshJ803a6F4BXQSPrwR?si=wul4ti_TS1qZhXsK_IbxiA"
,"https://open.spotify.com/track/0GO8y8jQk1PkHzS31d699N?si=XHHzBHq0QBKa25nYniBbZA","https://open.spotify.com/track/57nNNkgk768QVXq3uHxu5e?si=TN3K0qOVQYiodfkCU_CvTA",
"https://open.spotify.com/track/1j8z4TTjJ1YOdoFEDwJTQa?si=hOBZW2WzQAatXRR2YnwMsQ", "spotify:track:4lQsB3ERTWSNaAN1IkuNRl",
"https://open.spotify.com/track/13MF2TYuyfITClL1R2ei6e?si=m9QHAprNQ5Ss__kjs6rGQQ","https://open.spotify.com/track/0v1x6rN6JHRapa03JElljE?si=vDJF38yrTX220nDGDm0gGQ",
"https://open.spotify.com/track/1e9oZCCiX42nJl0AcqriVo?si=D-PsvhV-Qmepv4ieu7dTeg","https://open.spotify.com/track/4evmHXcjt3bTUHD1cvny97?si=TaBpo_9aQjuNYvTUbNoycg",
"https://open.spotify.com/track/7LP4Es66zdY7CyjepqmvAg?si=73Qr_m1nQvmHjG3wl-dBZg","https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp?si=FExQf99KTc6irUD-iCYDgg",
"https://open.spotify.com/track/3ia3dJETSOllPsv3LJkE35?si=wrVXwk8jR4WEnzebNBb8Lw","https://open.spotify.com/track/5Hroj5K7vLpIG4FNCRIjbP?si=EErJlEouSVOnfOOs2fupww",
"https://open.spotify.com/track/2d8JP84HNLKhmd6IYOoupQ?si=xE85AHObRBSB0ceiIviLLw","https://open.spotify.com/track/4vp2J1l5RD4gMZwGFLfRAu?si=omVu4bTGTEOUQKvOPNNacQ",
"https://open.spotify.com/track/66TRwr5uJwPt15mfFkzhbi?si=67086HP3R4yC8pLtQO1V_A","https://open.spotify.com/track/5jy9FJWUqjCLtc44sndXoc?si=14ygR2WqRTWRStpRFK7Hrw",
"https://open.spotify.com/track/6HZILIRieu8S0iqY8kIKhj?si=fNv6hzGmRUuXHH02VzvFjw","https://open.spotify.com/track/5IVuqXILoxVWvWEPm82Jxr?si=VsLM3diUQqK61auA-O3R7g",
"https://open.spotify.com/track/3a1lNhkSLSkpJE4MSHpDu9?si=9KZhpffPSDGn6c5WZklBdw","https://open.spotify.com/track/45sDIKapDyxPl307QpEAwl?si=-2mi9FlWSMSR7BOritAMQQ",
"https://open.spotify.com/track/1s6v6PYcoiHn2Yai8B4Mfd?si=O5rYxOnZRtmX_C61jOkxyQ","https://open.spotify.com/track/2qSFoqrAeraGINMwPR7oVB?si=rzJOziW1TLOgrIyqN2WC-A",
"https://open.spotify.com/track/4QNpBfC0zvjKqPJcyqBy9W?si=CKbF9l3SRMKmcNih0LJ-VQ", "https://open.spotify.com/track/2bJvI42r8EF3wxjOuDav4r?si=vNHzntvrQ7G3uYWsNNyFWg",
"https://open.spotify.com/track/2EEeOnHehOozLq4aS0n6SL?si=s5bXE_8GQtOm-HCCgCi6MA", "https://open.spotify.com/track/6MI31BOtD6AKOF0an4fP2H?si=2p6XL216TiGk5_QYsswgXw",
"https://open.spotify.com/track/3wT0YTtRh2DGcL31u1r9Eb?si=BTCd4-mARUmZe20GI8BKyA", "https://open.spotify.com/track/3DamFFqW32WihKkTVlwTYQ?si=Achlpu2YRjmvrVFh197vJg",
"https://open.spotify.com/track/3AaiEsiqHO2ylnnOdWninE?si=ECUKZzTcSqGeyElFHZOM4g","https://open.spotify.com/track/7yws3pF3FFguwT2Psi6c15?si=78XsTzAqTV-bdIeww-4Gig"]
    const random_song=Math.floor(Math.random()*songs.length);
        var newURL = songs[random_song];
        chrome.tabs.create({ url: newURL });
    });
  });
