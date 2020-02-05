function showMenu() {
    // Your code here
    // Add class pink to element with id="pageTitle"

    const showMenuListElement = document.querySelector('#showMenuList');

    if (showMenuListElement) {
        showMenuListElement.classList.toggle('linksMobile')
    }

}