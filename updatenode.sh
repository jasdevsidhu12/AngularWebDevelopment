echo "========Copying files form angularDesign to nodeServer=========="
echo "========Removing app.min.js file from nodeServer======"
rm packages/nodeServer/static/js/app.min.js
echo "=============Deleting new node_modules in nodeServer"
rimraf ./packages/nodeServer/node_modules
echo "========Copying new files from angularDesign to nodeServer====="
cp ./packages/angularDesign/dist/app.min.js ./packages/nodeServer/static/js
cp -rf ./packages/angularDesign/resources/data/* ./packages/nodeServer/public/resources/data
echo "===========Updating ec2 instances==========="
scp -rp /c/code/MyProject/FeedService/packages/nodeServer/* jasdevsidhu@ec2-34-240-16-43.eu-west-1.compute.amazonaws.com:/home/USERNAME/app
