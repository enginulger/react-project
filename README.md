npx create-react-app .
npm start
npm install react-bootstrap bootstrap
{ Col, Container, Row, Accordion }
npm i react-router-dom

github deploy
npm install gh-pages --save-dev
package.json
{
"homepage": “http://enginulger.github.io/react-project"
"name": ...
}

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

git add .
git commit -m "FAQ commit"
npm run deploy
git push -u origin master
