echo "---------Going to angularDesign package------------------------------"
cd ./packages/angularDesign
echo "---------INSTALLING DEPENDENCIES------------------------------"
npm install
echo "---------RUNNING UNIT TEST------------------------------"
npm run test
echo "---------STARTING DEVELOPMENT SERVER------------------------------"
npm start &
sleep 15
echo "---------RUNNING E2E TEST------------------------------"
npm run e2e