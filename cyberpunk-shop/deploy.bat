xcopy ..\\cyberpunk-shop ..\\..\\ztm-react-heroku-2021 /exclude:..\\cyberpunk-shop\\exclude.txt /y /i /s
cd ..\\..\\ztm-react-heroku-2021
git add .
git commit -m "auto deploy"
git push heroku master