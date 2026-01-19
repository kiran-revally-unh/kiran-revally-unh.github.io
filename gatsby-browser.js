import "./src/styles/global.css"

// Load LinkedIn badge script
export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }
}
