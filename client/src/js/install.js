const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.defferedPrompt= event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
   const prompt = window.defferedPrompt;
   if(prompt){
    return;
   }
   prompt.prompt()
   const result = await prompt.userChoice;
   if (result.outcome === 'accepted'){
    console.log('downloading app')
   }
   else{
    console.log('cancelled')
   }

   window.defferedPrompt = null;
   butInstall.style.display = 'none'
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app was installed',event)
    window.defferedPrompt = null
});
