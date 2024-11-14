//function to toggle the menu bar
function toggleMenu(){
    console.log("Menu toggled");
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}
//Optional: Close the menu if clicking outside of it
document.addEventListener('click',function(event){
    const navBar = document.querySelector('.nav-bar');
    const menuBar = document.querySelector('.menu-bar');

    // Check if the click was outside the nav-bar or menu-bar
    // ពិនិត្យមើលថាតើការចុចនៅខាងក្រៅ nav-bar ឬ menu-bar
    if (!navBar.contains(event.target) && !menuBar.contains(event.target)) {
        navBar.classList.remove('active'); // Close menu if open
    }

})