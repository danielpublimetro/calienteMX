<?php
function httpGet($url)
{
    $ch = curl_init();  
 
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//  curl_setopt($ch,CURLOPT_HEADER, false); 
 
    $output=curl_exec($ch);
 
    curl_close($ch);
    return $output;
}
 
echo httpGet("https://feeds-sports.caliente.mx/odds_feed?key=get_match_markets_for_sport&lang=en&sport_code=FOOT&mkt_sort=MRES");

?>