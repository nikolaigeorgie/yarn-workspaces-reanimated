import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('myprojectname', () => App)
// AppRegistry.runApplication('myprojectname', {
//   rootTag: document.getElementById('root'),
// })

const rootTag = document.getElementById('root');
AppRegistry.runApplication(appName, {rootTag});
