const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if(!deferredPrompt){
    return;
  }

  const promptInstall = deferredPrompt;
  deferredPrompt = null

  promptInstall.prompt()

  const result = await promptInstall.userChoice;
  if(result === 'accepted'){
    console.log('downloading app');
  }
  else{
    console.log('cancelled')
  }
butInstall.display.style = 'none'

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app was installed',event)
    window.deferredPrompt = null
});
