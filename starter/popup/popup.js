var saveNote = document.querySelector('#save-note');
 // Add a "checked" symbol when clicking on a list item
 var list = document.querySelector('ul');
 list.addEventListener('click', function (ev) {
     if (ev.target.tagName === 'LI') {
         ev.target.classList.toggle('checked');
     }
 },false);

//saves note using 
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
  window.addEventListener('DOMContentLoaded', function() {
      //button
    var link = document.getElementById('btnOpenNewTab');
    link.addEventListener('click', function() {
        var songs =["https://open.spotify.com/track/5Pgq1Gfeth2CuUhyCXwlfC?si=-4Hk7KDeTBGJyVKs2dpiRQ", "https://open.spotify.com/track/4eVkn18rN4GguUWOsR6Use?si=hLEeUSjlRUK8Ad4AaCwRqA",
    "https://open.spotify.com/track/3p6hnejEQYXkiTO1lAzVc0?si=Y7CdeK6mR5iEzXGQw01-aA,spotify:track:3uA8SjMyDtwtt0jLPMQbVD","https://www.youtube.com/watch?v=GuwmWnN2Q90&ab_channel=IndieSoundsGood",
    "https://www.youtube.com/watch?v=VUCuoxOUD6U&ab_channel=DopeLyrics","https://open.spotify.com/track/19aYshJ803a6F4BXQSPrwR?si=wul4ti_TS1qZhXsK_IbxiA"
,"https://open.spotify.com/track/0GO8y8jQk1PkHzS31d699N?si=XHHzBHq0QBKa25nYniBbZA","https://open.spotify.com/track/57nNNkgk768QVXq3uHxu5e?si=TN3K0qOVQYiodfkCU_CvTA",
"https://open.spotify.com/track/1j8z4TTjJ1YOdoFEDwJTQa?si=hOBZW2WzQAatXRR2YnwMsQ"]
    const random_song=Math.floor(Math.random()*songs.length);
        var newURL = songs[random_song];
        chrome.tabs.create({ url: newURL });
    });
  });
