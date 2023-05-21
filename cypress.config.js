import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents (on, config) {
      // implement node event listeners here
      on('task', {
        seedDB (filename) {
          // do anything you want to do such as writing a specific thing to a file etc.
          // e.g., I print the name of the file that I passed.
          console.log(filename)
          return filename
        }
      })
    }
  },
  component: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents (on, config) {
      // implement node event listeners here
      on('task', {
        seedDB (filename) {
          // do anything you want to do such as writing a specific thing to a file etc.
          // e.g., I print the name of the file that I passed.
          console.log(filename)
          return filename
        }
      })
    }
  }
})
