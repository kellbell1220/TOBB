window.onload = getMyLocation();

//Global Variable For Closing The Info Windows
var lastOpenedInfoWindow;

//Users Location will be intitalized in the displayLocation function
var latLng;

var storeLatLng;

// Array of store markers
 var stores = [
   // BASIC FORMATTING FOR THE STORE
   // - {latitude, longitude},
   //- Stores name
   //-  phone number in meta tag format for the meta tag which will automatically dial a phone number from a telephone
   //- telephone number which is displayed
   //- street address
   //- city, state and zip code
   [
      {lat:38.380689,lng:-91.4745},
      'G & G Welding',
      '15737373641',
      '573-437-3641',
      '3286 Piezuch Road',
      'Owensville, MO 65606'
   ],
   [
     {lat:37.064106, lng:-93.700965},
     'Global Harvest Organics',
     '18558706702',
     '855-870-6702',
     '19886 Lawrence 2145',
     'Arora, MO 65606'
   ],
   [
     {lat:36.367223, lng:-92.460673},
     'Gregg Farm Services',
     '18704815165',
     '870-481-5165',
     '6153 AR-126',
     'Gasville, AR 72635'
   ],
   [
     {lat:37.098507, lng:-93.827277},
     'Feed & More Country Store',
     '14174711410',
     '417-471-1410',
     '595 W Sloan Street',
     'Mount Vernon, MO 65712'
   ],
   [
     {lat:36.721626, lng:-91.879632},
     'Hirsch Feed & Farm Supply Inc',
     '14172563749',
     '417-256-3749',
     '789 Worley Drive',
     'West Plains, MO 65775'
   ],
   [
     {lat:36.511556, lng:-91.541851},
     'Hirsch Feed & Farm Supply Inc',
     '14172647616',
     '417-264-7616',
     '1400 Nettleton Ave',
     'Thayer, MO 65791'
   ],
   [
     {lat:39.465719, lng:-95.728875},
     'Jackson Farmers Inc',
     '17853643161',
     '785-364-3161',
     '509 Lowell',
     'Holton, KS 66436'
   ],
   [
     {lat:39.522446, lng:-95.398066},
     'Jackson Farmers Inc',
     '19138332070',
     '913-833-2070',
     '511 Howard',
     'Effingham, KS 66023'
   ],
   [
     {lat:37.469349, lng:-92.847717},
     'Letterman Feed',
     '14175898135',
     '417-589-8135',
     '739 Honeylocust',
     'Niangua, MO 65713'
   ],
   [
     {lat:36.918282, lng:-93.928304},
     'Main Street Feeds',
     '14172356680',
     '417-235-6680',
     '109 Main Street',
     'Monett, MO 65708'
   ],
   [
     {lat:37.213997, lng:-93.398577},
     'Main Street Feeds',
     '14178695384',
     '417-869-5384',
     '8270 W. State Highway 226',
     'Springfield, MO 65802'
   ],
   [
     {lat:38.92898, lng:-92.30236},
     'MFA Incorporated',
     '15738745111',
     '573-387-5111',
     '201 Ray Young Drive',
     'Columbia, MO 65201'
   ],
   [
     {lat:37.916191, lng:-91.322699},
     'MFA Agri Services',
     '15737752646',
     '573-775-2646',
     '17784 MO Highway 19',
     'Steelville, MO 65565'
   ],
   [
     {lat:36.969757, lng:-93.703574},
     'MFA Agri Services',
     '14176783244',
     '417-678-3244',
     '1104 East Church Street',
     'Aurora, MO 65605'
   ],
   [
     {lat:38.570425, lng:-91.075983},
     'MFA Cooperative Association No. 2',
     '16362392068',
     '636-239-2068',
     '6927 West MO-100',
     'Washington, MO 63090'
   ],
   [
     {lat:38.53489, lng:-93.52694},
     'MFA Incorporated',
     '16606472117',
     '660-647-2117',
     '500 West Jackson Street',
     'Windsor, MO 65360'
   ],
   [
     {lat:38.186508, lng:-91.958336},
     'MFA Farmers Elevator Company',
     '15734223182',
     '573-422-3182',
     '243 MO-42',
     'Vienna, MO 65582'
   ],
   [
     {lat:38.692306, lng:-93.240143},
     'MFA Agri Services',
     '16608267097',
     '660-826-7097',
     '2200 Clinton Road',
     'Sedalia, MO 65301'
   ],
   [
     {lat:37.679477, lng:-92.662945},
     'MFA Agri Services',
     '14175323174',
     '417-532-3174',
     '225 South Jefferson Avenue',
     'Lebanon, MO 65536'
   ],
   [
     {lat:37.509797, lng:-92.822162},
     'MFA Agri Services',
     '14175892501',
     '417-589-2501',
     '430 North Newport Avenue',
     'Conway, MO 65632'
   ],
   [
     {lat:38.402318, lng:-91.330327},
     'MFA Agri Services',
     '15737643912',
     '573-764-3912',
     '228 Main Street',
     'Gerald, MO 63037'
   ],
   [
     {lat:38.348308, lng:-90.987423},
     'MFA Agri Services',
     '16366292822',
     '636-629-2822',
     '35 North Commercial Avenue',
     'Saint Clair, MO 63077'
   ],
   [
     {lat:37.128327, lng:-92.265203},
     'MFA Agri Services',
     '14179264291',
     '417-926-4291',
     '100 West North Street',
     'Mountain Grove, MO 65711'
   ],
   [
     {lat:38.687481, lng:-91.449306},
     'MFA Feeds',
     '15734865414',
     '573-486-5414',
     'E 191 MO-100',
     'Hermann, MO 65041'
   ],
   [
     {lat:38.348274, lng:-90.987445},
     'MFA Agri Services',
     '16366292822',
     '636-629-2822',
     '35 North Commercial',
     'Saint Clair, MO 63077'
   ],
   [
     {lat:37.316457, lng:-91.958508},
     'MFA Agri Services',
     '14179672145',
     '417-967-2145',
     '110 East Route MO-17',
     'Houston, MO 65483'
   ],
   [
     {lat:36.663279, lng:-90.427165},
     'MFA Agri Services Midsouth',
     '15737850916',
     '573-785-0916',
     '421 MO-158',
     'Poplar Bluff, MO 63901'
   ],
   [
     {lat:37.400112, lng:-92.608417},
     'MFA True Value',
     '14174623266',
     '417-462-3266',
     '2135 Highway M',
     'Grovesprings, MO 65662'
   ],
   [
     {lat:37.856384, lng:-92.403934},
     'MFA Agri Services',
     '15737653301',
     '573-765-3301',
     '116 East McClurg',
     'Richland, MO 65556'
   ],
   [
     {lat:37.912949, lng:-91.725844},
     'MFA Rolla Farmers Exchange',
     '15733641874',
     '573-364-1874',
     '12595 Country Road',
     'Rolla, MO 65402'
   ],
   [
     {lat:36.347068, lng:-93.548937},
     'MFA Plant Foods Division',
     '18704236333',
     '870-423-6333',
     '438 Country Road 702',
     'Berryville, AR 72616'
   ],
   [
     {lat:38.542052, lng:-92.36428},
     'Lohman Producers Exchange',
     '15737824611',
     '573-782-4611',
     '2915 Main Street',
     'Lohman, MO 65053'
   ],
   [
     {lat:37.043121, lng:-93.304695},
     'Nixa Hardware & Seed Company',
     '14177253512',
     '417-725-3512',
     '510 West Mount Vernon Street',
     'Nixa, MO 65714'
   ],
   [
     {lat:38.389178, lng:-78.245986},
     'Orange Madison Cooperative',
     '15409485671',
     '540-948-5671',
     '1295 North Main Street',
     'Madison, VA 22727'
   ],
   [
     {lat:38.221693, lng:-78.123483},
     'Orange Madison Cooperative',
     '15406722977',
     '540-672-2977',
     '13323 James Madison Highway',
     'Orange, VA 22960'
   ],
   [
     {lat:38.177866, lng:-94.273166},
     'Ranalli Farm & Equipment',
     '14793612738',
     '4793612738',
     '2122 W Henri De Tonti Blvd',
     'Springdale, AR 73762'
   ],
   [
     {lat:37.131463, lng:-81.526848},
     'Southern States',
     '12769883411',
     '276-988-3411',
     '1015 Tazewell Ave',
     'North Tazewell, VA 24630'
   ],
   [
     {lat:37.329099, lng:-79.501928},
     'Southern States',
     '15405868201',
     '540-586-8201',
     '1053 Independence Blvd',
     'Bedford, VA 24523'
   ],
   [
     {lat:36.602795, lng:-82.192817},
     'Southern States',
     '12766698101',
     '276-669-8101',
     '1313 Euclid Avenue',
     'Bristol, VA 24201'
   ],
   [
     {lat:37.744425, lng:-80.47239},
     'Southern States',
     '13406475501',
     '340-647-5501',
     '608 Monroe Avenue',
     'Ronceverte, WV 24970'
   ],
   [
     {lat:38.223372, lng:-80.092811},
     'Southern States',
     '13047996523',
     '304-799-6523',
     '719 Third Avenue',
     'Marlinton, WV 24954'
   ],
   [
     {lat:36.946383, lng:-81.06365},
     'Southern States',
     '12762283401',
     '276-228-3401',
     '1055 Industry Road',
     'Wytheville, VA 24382'
   ],
   [
     {lat:37.131383, lng:-80.3907},
     'Southern States',
     '15403822984',
     '540-382-2984',
     '885 Roanoke Street',
     'Christianburg, VA 24073'
   ],
   [
     {lat:36.414484, lng:-89.702476},
     'Ag Distributor',
     '15733793815',
     '573-379-3815',
     '230 State Hwy T',
     'Portageville, MO 63873'
   ],
   [
     {lat:35.873104, lng:-84.574612},
     'AgCentral Farmers Co-op',
     '18658822127',
     '865-882-2127',
     '3058 Roane State Highway',
     'Harriman, TN 37748'
   ],
   [
     {lat:35.654312, lng:-84.155428},
     'Greenback Co-op',
     '18658563002',
     '865-856-3002',
     '3963 TN-95',
     'Greenback, TN 37742'
   ],
   [
     {lat:35.740259, lng:-83.987342},
     'AgCentral Farmers Cooperative',
     '18659822761',
     '865-982-2761',
     '1514 West Broadway',
     'Maryville, TN 37801'
   ],
   [
     {lat:35.478973, lng:-84.595328},
     'AgCentral Farmers Cooperative',
     '14237450443',
     '423-745-0443',
     '920 Congress Pkwy N',
     'Athens, TN 37303'
   ],
   [
     {lat:35.514735, lng:-84.371969},
     'AgCentral Farmers Co-op',
     '14234422407',
     '423-442-2407',
     '1249,626 Anderson Street',
     'Madisonville, TN 37354'
   ],
   [
     {lat:35.590905, lng:-84.479687},
     'AgCentral Tire Pros',
     '14233373551',
     '423-337-3551',
     '776 New Highway 68',
     'Sweetwater, TN 37874'
   ],
   [
     {lat:35.715768, lng:-84.361367},
     'AgCentral Tire Pros',
     '18658561181',
     '865-856-1181',
     '2084 West Lee Highway',
     'Loudon, TN 37086'
   ],
   [
     {lat:37.76391, lng:-86.460681},
     'GreenPoint AG',
     '12707562311',
     '270-756-2311',
     '1268 Highway 261 S',
     'Hardinsburg, KY 40143'
   ],
   [
     {lat:34.925004, lng:-88.52529},
     'Alcorn County Co-op',
     '16622866886',
     '662-286-6886',
     '221 Hwy 72 W',
     'Corinth, MS 38834'
   ],
   [
     {lat:38.134292, lng:-79.041416},
     'Augusta Co-op Farmer Bureau Inc',
     '15408551265',
     '540-855-1265',
     '1205 Richmond Avenue',
     'Staunton, VA 24401'
   ],
   [
     {lat:36.09824, lng:-84.132065},
     'Anderson Farmers Co-op',
     '18654579641',
     '865-457-9641',
     '110 S Charles G Seivers Blvd',
     'Clinton, TN 37716'
   ],
   [
     {lat:35.480265, lng:-86.465691},
     'Bedford Farmer\'s Co-op',
     '19316843506',
     '931-684-3506',
     '3912, 222 S Cannon Blvd',
     'Shelbyville, TN 37160'
   ],
   [
     {lat:36.050807, lng:-88.099447},
     'Benton Farmers Co-op',
     '17315848294',
     '731-584-8294',
     '172 Natchez Trace Road',
     'Camden, TN 38320'
   ],
   [
     {lat:37.100991, lng:-85.814929},
     'C & F Farm Supply Inc',
     '12704533595',
     '270-453-3595',
     '91 W Hiseville Main Street',
     'Hiseville, KY 42152'
   ],
   [
     {lat:36.015334, lng:-88.624022},
     'Carroll Farmers Co-op',
     '17316696281',
     '731-669-6281',
     '190 Melton Street',
     'Trezevant, TN 38258'
   ],
   [
     {lat:36.273366, lng:-87.066276},
     'Cheatham Farmer\'s Co-op',
     '16157925611',
     '615-792-5611',
     '114 Cumberland Street',
     'Ashland City, TN 37015'
   ],
   [
     {lat:36.375009, lng:-84.126565},
     'Claiborne Farmers Cooperative',
     '14235625237',
     '423-562-5237',
     '505 West Beech Street',
     'LaFollette, TN 37766'
   ],
   [
     {lat:36.444204, lng:-83.599696},
     'Claiborne Farmers Cooperative',
     '14236265251',
     '423-626-5251',
     '605 Third Avenue',
     'New Tazewell, TN 37825'
   ],
   [
     {lat:36.510852, lng:-83.782715},
     'Claiborne Farmers Cooperative',
     '14238694726',
     '423-869-4726',
     '100 Old Highway 63',
     'Speedville, TN 37870'
   ],
   [
     {lat:35.970322, lng:-83.206065},
     'Cocke Farmers',
     '14236262331',
     '423-623-2331',
     '464 West Broadway',
     'Newport, TN 37821'
   ],
   [
     {lat:35.494921, lng:-86.072171},
     'Coffee Farmers Co-op',
     '19317282492',
     '931-728-2492',
     '93 Interstate Drive',
     'Manchester, TN 37355'
   ],
   [
     {lat:35.962408, lng:-85.039001},
     'Cumberland Farmers Co-op',
     '19314849577',
     '931-484-9577',
     '152 Elmore Road',
     'Crossville, TN 38555'
   ],
   [
     {lat:35.960764, lng:-85.841776},
     'De Kalb\' Farmers Co-op',
     '16155974134',
     '615-597-4134',
     '725 West Broad Street',
     'Smithville, TN 37166'
   ],
   [
     {lat:35.7553, lng:-86.65085},
     'Eagleville Farmers Co-op',
     '16152746211',
     '615-274-6211',
     '1217 North Main Street',
     'Eagleville, TN 37060'
   ],
   [
     {lat:34.120294, lng:-86.893482},
     'Federer Fertilizer Inc',
     '12567341226',
     '256-734-1226',
     '2471, Country Road 222',
     'Cullman, AL 35057'
   ],
   [
     {lat:36.400795, lng:-84.936971},
     'Fentress County Farmers Co-op',
     '19318798114',
     '931-879-8114',
     '1219 Old Jamestown Highway 127 S',
     'Jamestown, TN 38556'
   ],
   [
     {lat:35.579744, lng:-83.012984},
     'Farmers Cooperative',
     '18289266124',
     '828-926-6124',
     '4082 Jonathan Creek Road',
     'Waynesville, NC 28785'
   ],
   [
     {lat:35.446489, lng:-88.614872},
     'First Farmers Co-op',
     '17319894621',
     '731-989-4621',
     '1013 E Main Street',
     'Henderson, TN 38340'
   ],
   [
     {lat:35.583533, lng:-88.127673},
     'First Farmers Co-op',
     '17318522931',
     '731-852-2931',
     '423 West Main Street',
     'Decaturville, TN 38329'
   ],
   [
     {lat:36.237854, lng:-85.949376},
     'Smith Farmers Co-op',
     '16157350404',
     '615-735-0404',
     '81 Cookeville Highway',
     'Carthage, TN 37030'
   ],
   [
     {lat:35.212128, lng:-86.097802},
     'Franklin Farmers Cooperative',
     '19319675511',
     '931-967-5511',
     '2229 Decherd Blvd',
     'Decherd, TN 37324'
   ],
   [
     {lat:35.961916, lng:-88.950762},
     'Gibson Farmers Co-op',
     '17318551891',
     '731-855-1891',
     '1210 Manufactures Row',
     'Trenton, TN 38382'
   ],
   [
     {lat:36.109081, lng:-89.263574},
     'Gibson Farmers Co-op',
     '17316272525',
     '731-627-2525',
     '307 Jefferson Street',
     'Newbern, TN 38059'
   ],
   [
     {lat:35.152658, lng:-87.00585},
     'Giles County Co-op Pulaski',
     '19313632563',
     '931-363-2563',
     '2070 Elkton Pike',
     'Pulaski, TN 38478'
   ],
   [
     {lat:36.285386, lng:-83.501331},
     'Grainger Farmers Co-op',
     '18658285226',
     '865-828-5226',
     '8570 Rutledge Pike',
     'Rutledge, TN 37861'
   ],
   [
     {lat:36.150213, lng:-82.85508},
     'Greene Farmers Co-op',
     '14236388101',
     '423-638-8101',
     '1414 West Main Street',
     'Greenville, TN 37743'
   ],
   [
     {lat:36.233363, lng:-83.240293},
     'Hamblen Farmers\' Co-op',
     '14235869141',
     '423-586-9141',
     '4048 East Morris Blvd',
     'Morristown, TN 37813'
   ],
   [
     {lat:36.529072, lng:-83.216988},
     'Hancock Farmers Co-op',
     '14237332255',
     '423-733-2255',
     '192 Jail Street',
     'Sneedville, TN 37869'
   ],
   [
     {lat:36.416424, lng:-82.982496},
     'Hawkins Farmers Cooperative',
     '14232722611',
     '423-272-2611',
     '240 Burem Road',
     'Rogersville, TN 37857'
   ],
   [
     {lat:35.718055, lng:-88.389925},
     'Henderson-Chester Farmers',
     '17319682087',
     '731-968-2087',
     '16219 TN-22',
     'Lexington, TN 38351'
   ],
   [
     {lat:36.305672, lng:-88.342911},
     'Henry Farmers Co-op',
     '17316421385',
     '731-642-1385',
     '225 TN-69',
     'Paris, TN 38242'
   ],
   [
     {lat:36.05612, lng:-87.779687},
     'Humphrey\'s Farmers Co-op',
     '19312962541',
     '931-296-2541',
     '2173 TN-13',
     'Waverly, TN 37185'
   ],
   [
     {lat:35.768571, lng:-87.463217},
     'Humphrey\'s Farmers Co-op',
     '19317292271',
     '931-729-2271',
     '146 Linden Road',
     'Centerville, TN 37033'
   ],
   [
     {lat:36.316539, lng:-87.674987},
     'Humphrey\'s Farmers Co-op',
     '19312893446',
     '931-286-3446',
     '6671 TN-13',
     'Erin, TN 37061'
   ],
   [
     {lat:36.054054, lng:-83.463962},
     'Jefferson Farmers Co-op',
     '18653973434',
     '865-397-3434',
     '106 TN-92',
     'Danridge, TN 37725'
   ],
   [
     {lat:36.068333, lng:-83.93456},
     'Knox Farmers Co-op Halls',
     '18659225115',
     '865-922-2115',
     '3903 Fountain Valley Drive',
     'Knoxville, TN 37918'
   ],
   [
     {lat:36.848462, lng:-84.86038},
     'Lake Cumberland Farmers Co-op',
     '16063400171',
     '606-340-0171',
     '469 KY-90',
     'Monticello, KY 42633'
   ],
   [
     {lat:35.269067, lng:-87.3171},
     'Lawrence Farmers Co-op Tires',
     '19317627139',
     '931-762-7139',
     '400 Crews Street',
     'Lawrenceburg, TN 38464'
   ],
   [
     {lat:35.162166, lng:-86.550369},
     'Lincoln Farmers Co-op',
     '19314334508',
     '931-433-4508',
     '1205 Winchester Highway',
     'Fayetteville, TN 37334'
   ],
   [
     {lat:36.529573, lng:-86.027557},
     'Macon-Trousdale Farmers Co-op',
     '16156662755',
     '6156662755',
     '905 Scottville Road',
     'Lafayette, TN 37083'
   ],
   [
     {lat:35.076938, lng:-85.619837},
     'Marion Farmer\'s Co-op',
     '14239423428',
     '423-942-3428',
     '255 Turner Street',
     'Jasper, TN 37347'
   ],
   [
     {lat:35.631435, lng:-86.688045},
     'Marshall Farmers Co-op',
     '19313647421',
     '931-364-7421',
     '2304 Unionville Road',
     'Chapel Hill, TN 37034'
   ],
   [
     {lat:35.43993, lng:-86.772822},
     'Marshall Farmers Co-op Power Equipment',
     '19313591558',
     '931-359-1558',
     '615 South Ellington Pkwy',
     'Lewisburg, TN 37091'
   ],
   [
     {lat:35.609578, lng:-87.06719},
     'Maury Farmers Co-op',
     '19313880714',
     '931-388-0714',
     '423 Westover Drive',
     'Columbia, TN 38402'
   ],
   [
     {lat:35.230863, lng:-89.032918},
     'Mid-South Farmers Co-op',
     '17316581534',
     '731-658-1534',
     '14840 TN-18',
     'Bolivar, TN 38008'
   ],
   [
     {lat:35.784758, lng:-89.123996},
     'Mid-South Farmers Co-op',
     '17316965527',
     '731-696-5527',
     '359 West Main Street',
     'Alamo, TN 38001'
   ],
   [
     {lat:36.554593, lng:-87.322652},
     'Montgomery Farmers Co-op',
     '19316480637',
     '931-648-0637',
     '1801 Wilma Rudolph Blvd',
     'Clarksville, TN 37040'
   ],
   [
     {lat:35.266624, lng:-86.389576},
     'Moore Farmers Co-op',
     '19317597236',
     '931-759-7236',
     '1533 Fayetteville Highway',
     'Lynchburg, TN 37352'
   ],
   [
     {lat:36.369147, lng:-85.341537},
     'Overton Farmers Co-op',
     '19318231291',
     '931-823-1291',
     '2210, 1500 W Main Street',
     'Livingston, TN 38570'
   ],
   [
     {lat:35.590964, lng:-87.865122},
     'Perry Farmers Co-op Inc',
     '19315892518',
     '931-589-2518',
     '2796 Squirrel Hollow Drive',
     'Linden, TN 37096'
   ],
   [
     {lat:36.596722, lng:-85.136388},
     'Pickett Farmers Co-op',
     '19318643172',
     '931-864-3172',
     '1116 Olympus Drive',
     'Byrdstown, TN 38549'
   ],
   [
     {lat:36.167425, lng:-85.517755},
     'Putnam Farmers Co-op',
     '19315267147',
     '931-526-7147',
     '541 West Broad Street',
     'Cookeville, TN 38501'
   ],
   [
     {lat:35.828309, lng:-86.392545},
     'Rutherford Farmers Co-op',
     '16158936212',
     '615-893-6212',
     '985 Middle Tennessee Blvd',
     'Murfreesboro, TN 37133'
   ],
   [
     {lat:35.870168, lng:-83.572109},
     'Sevier Farmers Co-op',
     '18654537101',
     '865-453-7101',
     '321 West Main Street',
     'Sevierville, TN 37862'
   ],
   [
     {lat:35.588164, lng:-85.185152},
     'Southeastern Farmers Co-op',
     '14234472105',
     '423-447-2105',
     '41448 TN-30',
     'Pikeville, TN 37367'
   ],
   [
     {lat:35.527968, lng:-84.986347},
     'Southeastern Farmers Co-op',
     '14237752884',
     '423-775-2884',
     '9083 Rhea County Highway',
     'Dayton, TN 37321'
   ],
   [
     {lat:34.738323, lng:-85.275602},
     'Southeastern Farmers Co-op',
     '17066383889',
     '706-638-3889',
     '105 West McCarter Road',
     'LaFayette, GA 30728'
   ],
   [
     {lat:37.785694, lng:-87.606506},
     'Southern States',
     '12708264366',
     '270-826-4366',
     '5290 Highway 425 W',
     'Henderson, KY 42420'
   ],
   [
     {lat:36.840841, lng:-82.234889},
     'Southwest Virginia Farm Supply',
     '12767949572',
     '276-794-9572',
     '24572 US Highway 58 A',
     'Castlewood, VA 24224'
   ],
   [
     {lat:35.161682, lng:-88.583329},
     'Stockdale\'s',
     '17316453238',
     '731-645-3238',
     '581 Mulberry Avenue',
     'Selmer, TN 38375'
   ],
   [
     {lat:36.019438, lng:-86.581698},
     'Tennessee Farmers Cooperative',
     '16157938400',
     '615-793-8400',
     '180 Old Nashville Highway',
     'La Vergne, TN 37086'
   ],
   [
     {lat:36.47321, lng:-81.802195},
     'Tri-State Growers',
     '14237277881',
     '423-727-7881',
     '101 Depot Street',
     'Mountain City, TN 37683'
   ],
   [
     {lat:36.234537, lng:-83.832244},
     'Union Farmer Co-op',
     '15555555555',
     'Phone',
     '3035 Maynardville Highway',
     'Maynardville, TN 37807'
   ],
   [
     {lat:35.658519, lng:-85.789328},
     'Warren Farmers Co-op',
     '19316684151',
     '931-668-4151',
     '1839 S Chancery Street',
     'McMinnville, TN 37111'
   ],
   [
     {lat:36.28394, lng:-82.48161},
     'Washington Farmers Co-op',
     '14239131100',
     '423-913-1100',
     '1001 Depot Street',
     'Jonesborough'
   ],
   [
     {lat:36.892221, lng:-82.3046},
     'Washington Farmers Co-op',
     '12767947191',
     '276-794-7191',
     '24572 US-58 ALT',
     'Castlewood, VA 24224'
   ],
   [
     {lat:36.34265, lng:-88.84039},
     'Weakley Farmers Co-op',
     '17315879531',
     '731-587-9531',
     '330 Nash Street',
     'Martin, TN 38237'
   ],
   [
     {lat:35.923765, lng:-85.481967},
     'White County Farmers Co-op',
     '19318362278',
     '931-836-2278',
     '271 Mayberry Street',
     'Sparta, TN 38583'
   ],
   [
     {lat:35.927517, lng:-86.857497},
     'Williamson Farmers Co-op',
     '16157906100',
     '615-790-6100',
     '200 Eddy Lane',
     'Franklin, TN 37064'
   ],
   [
     {lat:35.991408, lng:-87.093078},
     'Williamson Farmers Co-op Fairview',
     '16157994100',
     '615-799-4100',
     '1702 Fairview Blvd',
     'Fairview, TN 37062'
   ],
   [
     {lat:36.21617, lng:-86.325811},
     'Wilson Farmers Co-op',
     '16154445212',
     '615-444-5212',
     '107 Babb Drive',
     'Lebanon, TN 37087'
   ],
   [
     {lat:35.827541, lng:-86.061694},
     'Woodbury Farmers Co-op',
     '16155634056',
     '615-563-4056',
     '400 McMinnville Highway',
     'Woodbury, TN 37190'
   ],
 ];

// GEOLOACATION SECTION
 function getMyLocation(){
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(displayLocation);
   }//end if
   else{
     alert('Oops, no geolocation support');
   }//end else
 }//end getMyLocation

//FUNCTION TO SEND CURRENT LAT LNG TO THE INITMAP FUNCTION
function displayLocation(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  latLng = new google.maps.LatLng(latitude,longitude);

  initMap(latLng);
}//End of displayLocation

  // CREATES THE MAP
  function initMap(latLng){
    // Map Options
    var options = {
      zoom:9,
      center:latLng
    }

    // NEW INSTANCE OF MAP
    var map = new google.maps.Map(document.getElementById('map'), options);

    // ADDING ALL OF THE MARKERS IN THE STORES ARRAY
    for (var i = 0; i < stores.length; i++){
      addMarker(stores[i][0], stores[i][1], stores[i][2], stores[i][3]);
    }//end for loop

    var service = new google.maps.DistanceMatrixService;
    var storelocation = stores[i][0].toString();
    var user = "{" + storelocation +"}";

    service.getDistanceMatrix(
    {
      origins: [latLng],
      destination:[user],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    },
    callback
  );

    //ADDING ALL THE MARKERS TO THE MAP
     function addMarker(location, name, meta, phone){
        var marker = new google.maps.Marker({
          position: location,
          map:map
       });//end of addMarker function

       // WHAT WILL BE DISPLAYED ON THE INFOWINDOW
       if(name != null && phone != null){
         var infoWindow = new google.maps.InfoWindow({
            content:'<h4>'+name+'</h4><p><a href = "tel:' +meta+ '">Phone: ' + phone + '</a></p>'
         });


         // lISTENER FOR THE CLICK TO DISPLAY INFO WINDOW
         marker.addListener('click', function(){
           //Calling the function to close any other infoWindows open
           closeLastOpenedInfoWindow()
           //Opening the infoWindow
           infoWindow.open(map, marker);
           //Assigning the open infoWindow to the lastOpened
           lastOpenedInfoWindow = infoWindow;
         });//end of listener

         //Closes the previously opened info window
         function closeLastOpenedInfoWindow(){
           if(lastOpenedInfoWindow){
             lastOpenedInfoWindow.close();
           }//End if
         }//End function ClosesLastOpenedInfoWindow
         //END OF FUNCTIONS FOR THE INFO WINDOW LISTENER

         var bounds = new google.maps.LatLngBounds;

         //THIS SECTION RETRIEVES THE BOUNDS OF THE MAP THAT IS DISPLAYED AND SENDS MARKER INFO TO THE
         // ADDSTORE FUNCTION
         if(map.getBounds().contains(marker.getPosition())){
           // call to add store info to the div
           addStoreInfo(stores[i][1],stores[i][2], stores[i][3], stores[i][4], stores[i][5]);
         }//end if
       }//end of if for the infowindows
     }//end addMarker Function
  }//end of initMap Function

  //FUNCTION THAT USES INNERHTML TO PRINT OUT THE STORES IN THE STOREINFO DIV
  function addStoreInfo(name, meta, phone, streetAddress, city){
    document.getElementById("storeInfo").innerHTML += '<h4>'+name+'</h4><p><a href = "tel:' +meta+ '">Phone: ' + phone + '</a></p><p>' + streetAddress +'</p><p>' + city + '</p>';
  }//End for addStoreInfo function


function callback(response, status){
  var dist = documentGetElementByID("dist");

  if(status=="OK"){
    dist.value = response.rows[0].elements[0].distance.text;
  }
  else{
    alert("Error: " + status);
  }
}
