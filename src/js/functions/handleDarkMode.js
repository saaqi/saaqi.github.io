export const handleDarkMode = (classReplacements, parentSelector = null) => {
  document.addEventListener("DOMContentLoaded", () => {
    // Function to update classes based on the theme
    const updateClassesForTheme = () => {
      const isDarkTheme = document.documentElement.getAttribute("data-bs-theme") === "dark"

      // Get all containers if a parentSelector is provided, otherwise use the document
      const containers = parentSelector ? document.querySelectorAll(parentSelector) : [document]

      containers.forEach((container) => {
        // Iterate over the class replacements
        for (const [originalClass, newClass] of Object.entries(classReplacements)) {
          // Select elements with the original or new class within the container
          const elements = container.querySelectorAll(`.${originalClass}, .${newClass}`)

          // Replace or revert the classes based on the current theme
          elements.forEach((element) => {
            if (isDarkTheme) {
              element.classList.remove(originalClass)
              element.classList.add(newClass)
            } else {
              element.classList.remove(newClass)
              element.classList.add(originalClass)
            }
          })
        }
      })
    }

    // Run the function initially to handle the current theme
    updateClassesForTheme()

    // Observe changes to the `data-bs-theme` attribute
    const observer = new MutationObserver(() => {
      updateClassesForTheme()
    })

    observer.observe(document.documentElement, {
      attributes: true, // Observe attribute changes
      attributeFilter: ["data-bs-theme"], // Only watch `data-bs-theme`
    })
  })
}











export const setDarkMode = (switchSelector, buttonSelector) => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value')
        setStoredTheme(theme)
        setTheme(theme)
      })
    })
  })


  // Dark Mode Switcher
  const htmlElement = document.documentElement

  const switchElement = document.querySelector(switchSelector)
  const buttonElement = document.querySelector(buttonSelector)

  const updateSwitchAttributes = (isChecked) => {
    if (isChecked) {
      switchElement.setAttribute('checked', 'checked')
      switchElement.setAttribute('aria-checked', 'true')
      switchElement.checked = true
    } else {
      switchElement.removeAttribute('checked')
      switchElement.setAttribute('aria-checked', 'false')
      switchElement.checked = false
    }
  }

  const updateButtonClasses = () => {
    if (getStoredTheme() === 'dark') {
      buttonElement.classList.add('btn-outline-primary')
      buttonElement.classList.remove('btn-outline-warning')
    } else {
      buttonElement.classList.add('btn-outline-warning')
      buttonElement.classList.remove('btn-outline-primary')
    }
  }

  const initializeSwitch = () => {
    if (switchElement) {
      const currentTheme = htmlElement.getAttribute('data-bs-theme')
      const isDarkMode = currentTheme === 'dark'
      switchElement.checked = isDarkMode
      updateSwitchAttributes(isDarkMode)

      switchElement.addEventListener('change', function () {
        const theme = this.checked ? 'dark' : 'light'
        htmlElement.setAttribute('data-bs-theme', theme)
        setStoredTheme(theme)
        updateSwitchAttributes(this.checked)
        if (buttonElement) {
          buttonElement.classList.remove('active')
          updateButtonClasses()
        }
      })
    }
  }
  initializeSwitch()

  const initializeButton = () => {
    if (buttonElement) {
      if (getStoredTheme() === 'auto') {
        buttonElement.classList.add('active')
      }
      updateButtonClasses()

      buttonElement.addEventListener('click', () => {
        setStoredTheme('auto')
        htmlElement.setAttribute('data-bs-theme', `${getPreferredTheme() === 'dark' ? 'dark' : 'light'}`)
        buttonElement.classList.add('active')
        updateButtonClasses()
        if (switchElement) {
          updateSwitchAttributes(getStoredTheme() === 'dark')
        }
      })
    }
  }
  initializeButton()

}