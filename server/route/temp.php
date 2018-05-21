<?php
function getTemperature()
{
  $temperature = fopen("../data/temperature.dat","r");
  $temp = array();

  while ($dat=fgets($temperature)) {
    $datas = array();
    $datas["temperature"] = str_replace("\n","",$dat);
    array_push($temp,$datas);
  }
  fclose($temperature);
  return $temp;
}

$data = [
  'temp_data'=>getTemperature()
];
header('Content-type: application/json');
echo json_encode($data);

 ?>
