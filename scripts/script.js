function preloader(){
	// create object
	imageobj = new Image();
	// set image list
	images = new array();
	images = "./images/000_00.jpg"
	images[1] = "./images/101_02.jpg"
	images[2] = "./images/102_02.jpg"
	images[3] = "./images/103_02.jpg"
	images[4] = "./images/104_03.jpg"
	images[5] = "./images/105_03.jpg"
	images[6] = "./images/106_03.jpg"
	images[7] = "./images/107_04.jpg"
	images[8] = "./images/108_03.jpg"
	images[9] = "./images/109_04.jpg"
	images[10] = "./images/110_04.jpg"
	images[11] = "./images/111_04.jpg"
	images[12] = "./images/112_05.jpg"
	images[13] = "./images/113_05.jpg"
	images[14] = "./images/114_05.jpg"
	images[15] = "./images/115_05.jpg"
	images[16] = "./images/201_04.jpg"
	images[17] = "./images/202_02.jpg"
	images[18] = "./images/203_03.jpg"
	images[19] = "./images/204_05.jpg"
	images[20] = "./images/205_05.jpg"
	images[21] = "./images/301_02.jpg"
	images[22] = "./images/302_03.jpg"
	images[23] = "./images/303_02.jpg"
	images[24] = "./images/304_03.jpg"
	images[25] = "./images/305_02.jpg"
	images[26] = "./images/306_06.jpg"
	images[27] = "./images/307_03.jpg"
	images[28] = "./images/308_05.jpg"
	images[29] = "./images/309_03.jpg"
	images[30] = "./images/310_05.jpg"
	images[31] = "./images/311_04.jpg"
	images[32] = "./images/312_05.jpg"
	images[33] = "./images/313_02.jpg"
	images[34] = "./images/314_04.jpg"
	images[35] = "./images/315_04.jpg"
	images[36] = "./images/315_02.jpg"
	images[37] = "./images/317_05.jpg"
	images[38] = "./images/318_03.jpg"
	images[39] = "./images/319_02.jpg"
	images[40] = "./images/320_04.jpg"
	// start preloading
	for(i=0; i<=40; i++){
		imageobj.src=images[i];
	}
}

function getPic(objectHtml, pic){
	objectHtml.value = pic;
	objectHtml.src = "./images/" + pic + ".jpg";
}

function modifyArray(inputArray){
	var resultArray = new Array(0);
	for(i=0; i<10; i++){
		resultArray[i] = inputArray[i];
	}
	return resultArray;
}

function sortArray(inputArray){
	//先確認Array內容為resultArray前10元素
	var tempArray = new Array(10);
	var resultArray = new Array(0);
	
	for(i=0; i<10; i++){
		tempArray[i] = inputArray[i];
	}
	
	//排序這10個元素後回傳
	for(j=0; j<tempArray.length; j++){
		var temp = tempArray[j];
		if(j!=0){
			var tempSplit = temp.split("_");
			var tempCost = parseInt(tempSplit[1]);
			//依照金額排序
			for(k=0; k<resultArray.length; k++){
				var fix = resultArray[k];
				var fixSplit = fix.split("_");
				var fixCost = parseInt(fixSplit[1]);
				if(tempCost < fixCost){
					//小於就不比了放這
					resultArray.splice(k,0,temp);
					break;
				}else if(k == resultArray.length-1){
					resultArray.push(temp);
					break;
				}
			}
			
		}else{
			resultArray.push(temp);
		}
	}
	
	return resultArray;
}