# BookShopManagementSystem
::Express is for building the Rest apis.
::cors provides Express middleware to enable CORS with various options.
 :Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins   (domain, scheme, or port) other than its own from which a browser should permit loading resources
::Origin: http://localhost:8080

:: config directory which stores database details and environment variables like database for production and development.

::controller directory which holds the functional files. These files are responsible to manage the data from models and responses.

::model directory stores database table schemes i.e each model have their table structure and will handle database related operations with that.

::route directory keeps application or restful apis routes configuration.

::server.js is the main file which executes application and provides the listening port of requests. package.json file keep tracks of application dependencies. node_modules folder contain package dependent files which we installs via NPM.