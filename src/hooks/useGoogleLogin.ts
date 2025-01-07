import { useEffect } from "react";

interface GoogleConfig {
  clientId: string;
  callback: (response: any) => void;
}

export const useGoogleLogin = (config: GoogleConfig, user: any) => {
  useEffect(() => {
    if (window.google) {
      const isLoggedIn = Boolean(localStorage.getItem("user")); // Or your own method of checking login status

      if (isLoggedIn) {
        console.log("User is already logged in");
        // Optionally, you could redirect or show some other UI for logged-in users
      } else {
        console.log(window.google.accounts);
        window.google.accounts.id.initialize({
          client_id: config.clientId,
          callback: config.callback,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button")!,
          { theme: "filled_blue", size: "medium", text: "signin" }
        );

        window.google.accounts.id.prompt(); // Prompts the user if not logged in
      }
    } else {
      console.error("Google Identity Services script not loaded");
    }
  }, [config.clientId, config.callback, user]);
};
