const butInstall = document.getElementById('buttonInstall');
let defferedPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    defferedPrompt= event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!defferedPrompt){
        return
    };

    defferedPrompt.prompt();

    const { outcome } = await defferedPrompt.userChoice;

    if(outcome === 'accepted'){
        console.log('downloading app');
    }
    else{
        console.log('cancelled app download');
    }
    defferedPrompt = null;

    butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app was installed')
});
