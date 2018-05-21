<?php

function getHumidity()
{
  $humidity = fopen("../data/humidity.dat","r");
  $humid = array();

  while ($dat=fgets($humidity)) {
    $datas = array();
    $datas["humidity"] = str_replace("\r\n","",$dat);
    array_push($humid,$datas);
  }
  fclose($humidity);
  return $humid;
}

$data = [
  'humidity_data'=>getHumidity(),
];

header('Content-type: application/json');
echo json_encode($data);

 ?>
