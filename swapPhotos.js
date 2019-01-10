// ****************PICTURE VARIABLES********************

//Creep Page -- Gallary Pictures for Creep Feeder
var CreepFeederPictures = [
  "images/CreepFeeders/CreepFeederGateDown.jpg",
  "images/CreepFeeders/GrayCreepFeeder.jpg",
  "images/CreepFeeders/CreepFeederSide2.jpg",
  "images/CreepFeeders/CreepFeederEnd.jpg",
  "images/CreepFeeders/CreepFeederSide3.png",
  "images/CreepFeeders/CreepFeederInsideLandscape.png",
  "images/CreepFeeders/CreepFeederTongue.png",
  "images/CreepFeeders/CreepFeederEasyLandScape.jpg"];

//Bin Page -- Gallary Pictures for the 2 ton single axle
var TwoTonSingleAxlePictures = [
  "images/GrainBinsAxle/2TonSingleProfile.jpg",
  "images/GrainBinsAxle/2TonSingleSide2.jpg",
  "images/GrainBinsAxle/2TonSingleSide.jpg",
  "images/GrainBinsAxle/2TonSingleOtherSide.jpg",
  "images/GrainBinsAxle/3TonAxleWheels.png"];

//Bin Page -- Gallary Pictures for the 3 ton dual axle
var TwoTonDualAxlePictures = [
  "images/GrainBinsAxle/DualRedFuzzy.png",
  "images/GrainBinsAxle/3TonAxleFront.png",
  "images/GrainBinsAxle/3TonAxleside.png",
  "images/GrainBinsAxle/3TonAxleShoot.png",
  "images/GrainBinsAxle/3TonAxleWheels.png"];

//Bin Page -- Gallary Pictures for the 2 ton stationary
var TwoTonSkidPictures = [
  "images/GrainBinsSkid/GreenThreeFront.png",
  "images/GrainBinsSkid/GreenThreeSide2.png",
  "images/GrainBinsSkid/GreenThreeSide.png",
  "images/GrainBinsSkid/3TonFront.png",
  "images/GrainBinsSkid/3TonFront2.png"];

//Bin Page -- Gallary Pictures for the 3 ton dual axle
var ThreeTonAxlePictures = [
  "images/GrainBinsAxle/DualRedFuzzy.png",
  "images/GrainBinsAxle/3TonAxleFront.png",
  "images/GrainBinsAxle/3TonAxleside.png",
  "images/GrainBinsAxle/3TonAxleShoot.png",
  "images/GrainBinsAxle/3TonAxleWheels.png"];

//Bin Page -- Gallary Pictures for the 3 ton stationary
var ThreeTonStationaryPictures = [
  "images/GrainBinsSkid/GreenThreeFront.png",
  "images/GrainBinsSkid/GreenThreeSide2.png",
  "images/GrainBinsSkid/GreenThreeSide.png",
  "images/GrainBinsSkid/3TonFront.png",
  "images/GrainBinsSkid/3TonFront2.png",
  "images/GrainBinsAxle/3TonAxleShoot.png",
  "images/GrainBinsSkid/3TonSide.png" ];

//Bin Page -- Gallary Pictures for the 5 ton stationary
var FiveTonStationaryPictures = [
  "images/GrainBinsSkid/BlueFiveFront.png",
  "images/GrainBinsSkid/BlueFiveTon.png",
  "images/GrainBinsSkid/BlueFiveSide.png",
  "images/GrainBinsSkid/5TonFront.png",
  "images/GrainBinsSkid/5TonFront2.png",
  "images/GrainBinsAxle/3TonAxleShoot.png",
  "images/GrainBinsSkid/5TonSide.png" ];

// ************* SAYINGS VARIABLES****************

//Creep Page -- Sayings for the Creep Feeder
var sayingsCreep = [
  "162 Bushel Creep Feeder",
  "Gates Fold Up For Easy Transport",
  "Adjustable Doors For Feed Flow",
  "Sleek Design",
  "Custom Colors Upon Request",
  "Fully Braced Interior",
  "Tongue Jack Stand",
  "Easy-Open Lid" ];

//Bin Page -- Sayings for the 2 Ton Skid Axle
var sayings2Skid = [
  "2 Ton Stationary Feed Bin",
  "Easy Transport",
  "Sleek Design",
  "Handy Grain Control Shut Off",
  "Full Axles With Leaf Springs!"];

//Bin Page -- Sayings for the 2 Ton Single Axle
var sayings2Single = [
  "2 Ton Single Axle Feed Bin",
  "Easy Transport",
  "Sleek Design",
  "Handy Grain Control Shut Off",
  "Full Axles With Leaf Springs!"];

//Bin Page -- Sayings for the 2 Ton Dual Axle
var sayings2Dual = [
  "2 Ton Dual Axle Feed Bin",
  "Easy Transport",
  "Sleek Design",
  "Handy Grain Control Shut Off",
  "Full Axles With Leaf Springs!"];

//Bin Page -- Sayings for the 3 Ton Dual Axle
var sayings3Dual = [
  "3 Ton Dual Axle Feed Bin",
  "Easy Transport",
  "Sleek Design",
  "Handy Grain Control Shut Off",
  "Full Axles With Leaf Springs!"];

//Bin Page -- Sayings for the 3 Ton Stationary
var sayings3Skid = [
  "3 Ton Stationary Feed Bin",
  "Custom Colors Upon Request",
  "Feeding Made Easy",
  "Ditch The Feed Bags",
  "Stay Dry Feed Shoot Design",
  "Built to Last For Years To Come",
  "Why Pay More For Grain"];

//Bin Page -- Sayings for the 5 Ton Stationary
var sayings5Skid = [
  "5 Ton Stationary Feed Bin",
  "Grain Bins To Suite Every Season",
  "Save Money And Time",
  "Easy-Open Lid!",
  "Handy Grain Control Shut-Off Chute",
  "Built to Last For Years To Come",
  "Custom Colors Upon Request"];


function swapPhotos(i, idPhotoMain, photoList, idSaying, sayingList) {
  document.getElementById(idPhotoMain).src=photoList[i];
  document.getElementById(idSaying).innerHTML = sayingList[i];
}
