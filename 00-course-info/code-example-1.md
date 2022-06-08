```
switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0)
        }
        break
      case '/services':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break
      case '/customsoftware':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break
      case '/mobileapps':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case '/websites':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(3)
        }
        break
      case '/revolution':
        if (value !== 2) {
          setValue(2)
        }
        break
      case '/about':
        if (value !== 3) {
          setValue(3)
        }
        break
      case '/contact':
        if (value !== 4) {
          setValue(4)
        }
        break
      case '/estimate':
        if (value !== 5) {
          setValue(5)
        }
        break
      default:
        break
    }
```
