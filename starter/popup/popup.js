var saveNote = document.querySelector('#save-note');
 // Add a "checked" symbol when clicking on a list item
 var list = document.querySelector('ul');
 list.addEventListener('click', function (ev) {
     if (ev.target.tagName === 'LI') {
         ev.target.classList.toggle('checked');
     }
 },false);


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
    // your button here
    var link = document.getElementById('btnOpenNewTab');
    // onClick's logic below:
    link.addEventListener('click', function() {
        var newURL = "https://open.spotify.com/track/4hObp5bmIJ3PP3cKA9K9GY?si=aH5aIXwgQzeHNlowBqIUGA";
        chrome.tabs.create({ url: newURL });
    });
  });


