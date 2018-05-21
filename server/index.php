<?php

function getHumidity()
{
  $humidity = fopen("data/humidity.dat","r");
  $humid = array();

  while ($dat=fgets($humidity)) {
    $datas = array();
    $datas["humidity"] = str_replace("\r\n","",$dat);
    array_push($humid,$datas);
  }
  fclose($humidity);
  return $humid;
}

function getLight()
{
  $light = fopen("data/light.dat","r");
  $li = array();

  while ($dat=fgets($light)) {
    $datas = array();
    $datas["light"] = str_replace("\n","",$dat);
    array_push($li,$datas);
  }
  fclose($light);
  return $li;
}

function getTemperature()
{
  $temperature = fopen("data/temperature.dat","r");
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
  'humidity_data'=>getHumidity(),
  'light_data'=>getLight(),
  'temp_data'=>getTemperature()
];
header('Content-type: application/json');
echo json_encode($data);

 ?>
