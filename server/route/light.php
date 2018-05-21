<?php

function getLight()
{
  $light = fopen("../data/light.dat","r");
  $li = array();

  while ($dat=fgets($light)) {
    $datas = array();
    $datas["light"] = str_replace("\n","",$dat);
    array_push($li,$datas);
  }
  fclose($light);
  return $li;
}

$data = [
  'light_data'=>getLight(),
];

header('Content-type: application/json');
echo json_encode($data);

 ?>
