rm -rf public
hugo -t cactus
cd public
git init
git remote add origin https://github.com/blackcater/blackcater.github.io.git
git add *
git commit -m "redeploy"
git push origin master
