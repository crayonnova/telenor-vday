<?php



$region = $_POST['region'];
$networktype = $_POST['networktype'];
// var_dump($region);

 	for ($i=0; $i < count($networktype) ; $i++) { 

			for ($y=0; $y < count($region) ; $y++) { 
		    
					$dir = $networktype[$i]."/".$region[$y]."Classified/";
					$count =  (count(scandir($dir)) - 2)-1;

					for ($x=0; $x < $count ; $x++) { 


					$data['data']['img'][] = $dir.'0/'.$x.'.png';
					$kml  = $dir.$x.".kml";


					$xml=simplexml_load_file($kml) or die("Error: Cannot create object");
					

					$array = json_decode(json_encode($xml,1));

					// var_dump($array->Document->Region->LatLonAltBox->north);

					$post['north'] = $array->Document->Region->LatLonAltBox->north;
					$post['south'] =  $array->Document->Region->LatLonAltBox->south;
					$post['east']  = $array->Document->Region->LatLonAltBox->east;
					$post['west'] = $array->Document->Region->LatLonAltBox->west;

					// $location['LatLonAltBox'][] = $post;
					$data['data']['located'][] = $post;
					
						

					}
	    
	    	}
	


		
		
	}

echo json_encode($data);


