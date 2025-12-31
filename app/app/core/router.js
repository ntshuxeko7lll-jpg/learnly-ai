const router = {
  navigate(screen) {
    const app = document.getElementById("app");

    if (!app) {
      console.error("App container not found");
      return;
    }

    state.currentScreen = screen;

    switch (screen) {
      case "home":
        app.innerHTML = HomeScreen();
        break;
      case "learn":
        app.innerHTML = LearnScreen();
        break;
      default:
        app.innerHTML = "<p>Page not found</p>";
    }
  }
};
