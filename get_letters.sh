#!/bin/bash


for l in {A..Z};do

curl 'http://cooltext.com/PostChange' -H 'Cookie: ASP.NET_SessionId=n2tloslsxcfw2s3epucczxdt; recentlyUsedColors0=#FC0F3E; recentlyUsedColors1=#F9A148; recentlyUsedColors2=#85DB30; recentlyUsedColors3=#1F95EF; recentlyUsedColors4=#CABEDD; recentlyUsedColors5=#594C47; recentlyUsedColors6=#002F47; __utma=170232063.451545336.1412096393.1412632738.1412697620.8; __utmb=170232063.5.10.1412697620; __utmc=170232063; __utmz=170232063.1412096393.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)' -H 'Origin: http://cooltext.com' -H 'Accept-Encoding: gzip,deflate' -H 'Accept-Language: en-US,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: http://cooltext.com/Logo-Design-Keen' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data "IsRender=false&LogoID=1088824555&Text=$l&FontSize=70&Color1_color=%23FFBC6B&Color2_color=%23FF8400&Color3_color=%23000000&Integer1=2&Integer5=0&Integer7=0&Integer8=0&Integer14_color=%23000000&Integer6=75&Integer9=0&Integer13=on&Integer12=on&FileFormat=6&BackgroundColor_color=%23FFFFFF" --compressed|\
        cut -d\" -f2|while read letter
        do
            echo "Getting $l..."
            mkdir -p "res/letters/"
            wget -q "$letter" -O "res/letters/$l.png"
        done
done
