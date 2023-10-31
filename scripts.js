document.querySelectorAll('.download-btn').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault(); 

       
        showLoadingScreen();

        
        const href = this.parentElement.getAttribute('href');
        setTimeout(function() {
            window.location.href = href;
        }, 2000); 
    });
});

function showLoadingScreen() {
    
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');

    
    loadingScreen.innerHTML = '<div class="loader"></div>';

    
    document.body.appendChild(loadingScreen);
}
