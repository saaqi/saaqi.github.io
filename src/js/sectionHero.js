// Import Styles -
import "../styles/sectionHero.scss"
// Handle Dark Mode Changess
import { handleDarkMode } from "./functions/handleDarkMode"
handleDarkMode(
  {
    "btn-primary": "btn-light",
    "btn-secondary": "btn-warning",
  },
  ".section.home"
)

// Import the socialMediaLists function from the functions directory
import socialMediaLists from "./functions/socialMediaLists"

// Attach socialMediaLists to 'hero-social-links'
socialMediaLists('hero-social-links', false, '', 'var(--bs-body-color)')