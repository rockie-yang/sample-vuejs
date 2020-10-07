# bootstrap-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## [NeoVis](https://github.com/neo4j-contrib/neovis.js/)

NeoVis is a visualization library for Neo. 

Installation

    npm install --save neovis.js vis-network

[Issue dependency was not found](https://github.com/neo4j-contrib/neovis.js/issues/121)

changed every line on ./node_modules/neovis.js/dist/neovis-without-dependencies.js, this vis-network/dist/vis-network.min.css to this vis-network/dist/dist/vis-network.min.css


## sockjs-node ERR_CONNECTION_REFUSED when accessing from network

the error message is printed out in browser console. 

[the issue is described in webpack](https://github.com/webpack/webpack-dev-server/issues/416)
[issue described in vuejs](https://forum.vuejs.org/t/sockjs-node-errors/85578/2)
 
have try to add vue.config.js according to this guide https://cli.vuejs.org/guide/webpack.html#simple-configuration, while leads to unable to access the root page

add devServer in vue.config.js solve the issue