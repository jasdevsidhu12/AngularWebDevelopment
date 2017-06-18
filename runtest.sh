echo "---------------INSTALLING PROTRACTOR AND PHANTOMJS--------------------"
npm install phantomjs-prebuilt
npm install protractor@5.1.2
webdriver-manager update
echo "---------Going to angularDesign package------------------------------"
cd ./packages/angularDesign
echo "---------INSTALLING DEPENDENCIES------------------------------"
npm install
echo "---------RUNNING UNIT TEST------------------------------"
npm run test
# echo "---------STARTING DEVELOPMENT SERVER------------------------------"
# npm start
# echo "---------RUNNING E2E TEST------------------------------"
# npm run e2e