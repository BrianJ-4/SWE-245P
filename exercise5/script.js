const sidebar = document.querySelector("#sidebar")
const tabsContainer = sidebar.parentElement;
setupTabButtons();

// Add listener for buttons
function setupTabButtons() {
    sidebar.querySelectorAll(".tab_button").forEach((button) => {
        button.addEventListener("click", () => {
            handleButtonClick(button);
        });
    });
}

// Switch tab when button is pressed
function handleButtonClick(button) {
    // Reset buttons and tabs
    sidebar.querySelectorAll(".tab_button").forEach((button) => {
        button.classList.remove("tab_button--active");
    });

    tabsContainer.querySelectorAll(".tab_content").forEach((tab) => {
        tab.classList.remove("tab_content--active");
    });

    // Show selected button and tab
    button.classList.add("tab_button--active");
    const tabToShow = tabsContainer.querySelector(`.tab_content[data-tab-number="${button.dataset.buttonNumber}"]`);
    tabToShow.classList.add("tab_content--active");
}

