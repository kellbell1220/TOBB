
//Product Page -- Gallary Pic for The Creep Feeder
var pictures = ["images/CreepFeeders/CreepFeederEndFuzzy.png", "images/CreepFeeders/CreepEndGateDownFuzzy.png", "images/CreepFeeders/GrayCreepFeederFuzzy.png",
"images/CreepFeeders/CreepFeederEasyLandScapeFuzzy.png", "images/CreepFeeders/CreepFeederSide2Fuzzy.png", "images/CreepFeeders/CreepFeederEnd2Fuzzy.png",
"images/CreepFeeders/CreepFeederStraightOnFuzzy.png",
"images/CreepFeeders/CreepFeederGateDownFuzzy.png"];

//Product Page -- Pic for the Bins
var pictures2 = ["images/GrainBinsAxle/3TonAxleFront.png", "images/GrainBinsSkid/BlueFiveTon.png", "images/GrainBinsAxle/3TonAxleSide.png", "images/GrainBinsSkid/GreenThreeSide2.png", "images/GrainBinsAxle/dualRedFuzzy.png", "images/GrainBinsSkid/3TonSide.png"];

//Product Page -- Indexes for changeImage function
var imageIndex = 0;
var imageIndex2 = 0;

//Product Page -- Change Image Function
function changeImage() {
	document.getElementById("Creeper").src=pictures[imageIndex];
  document.getElementById("Grain").src=pictures2[imageIndex2];
	imageIndex++;
  imageIndex2++;
	if (imageIndex>=pictures.length){
		imageIndex=0;
	}
  if (imageIndex2>=pictures2.length){
    imageIndex2=0;
  }
}

//Product Page -- Timer that controls the Change Image Function
var myTimer = setInterval(changeImage,3000);
