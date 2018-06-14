// TODO HAe aseman aikataulut:
// https://rata.digitraffic.fi/api/v1/live-trains?station=KRS&arrived_trains=1&arriving_trains=5&departed_trains=1&departing_trains=5
// parsi:
// - aika (moment.js + moment timezone.js): var m = moment('2017-03-29T11:34:42.000Z');var time=m.tz('Europe/Helsinki').locale('fi').format('LTS');
// - juna koodi

var junaasemat = {
	_templates: {
		popup: jQuery('<div>'+
			'<h3><i class="fa fa-train" aria-hidden="true"></i><span class="name"></span></h3>' +
			'<div><div class="label">Palvelut:</div><div class="text service"></div><div class="clear"></div></div>'+
			'</div>'
		)
	},
	_junaasemat: [
  {
    "lat": 24.06403545859996,
    "lon": 62.5532687542,
    "name": "Ähtäri",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.101506426399965,
    "lon": 60.4567578982,
    "name": "Ainola",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 23.600424176700017,
    "lon": 62.6177771634,
    "name": "Alavus",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.956817,
    "lon": 60.3041,
    "name": "Aviapolis",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.101506426399965,
    "lon": 60.4567578982,
    "name": "Kyrölä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.488645734900047,
    "lon": 59.9902288384,
    "name": "Dragsvik",
    "service": ""
  },
  {
    "lat": 24.190369025699965,
    "lon": 62.5409795049,
    "name": "Eläinpuisto - Zoo",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 30.138838096100017,
    "lon": 62.805991019,
    "name": "Eno",
    "service": ""
  },
  {
    "lat": 24.655987059200015,
    "lon": 60.2050678004,
    "name": "Espoo",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 25.334356601600007,
    "lon": 63.7545224953,
    "name": "Haapajärvi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.455122031100018,
    "lon": 62.2464100548,
    "name": "Haapamäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.133260000000064,
    "lon": 60.496743,
    "name": "Haarajoki",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.478291999500016,
    "lon": 61.0026199308,
    "name": "Hämeenlinna",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 26.478140304599947,
    "lon": 62.3028203034,
    "name": "Hankasalmi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 22.98839580029994,
    "lon": 59.8301562042,
    "name": "Hanko-Pohjoinen",
    "service": ""
  },
  {
    "lat": 22.968283004800014,
    "lon": 59.8268626061,
    "name": "Hanko",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 22.133251678900024,
    "lon": 61.3096988649,
    "name": "Harjavalta",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 28.643539250800018,
    "lon": 62.3825582975,
    "name": "Heinävesi",
    "service": ""
  },
  {
    "lat": 24.940389959200047,
    "lon": 60.1767331085,
    "name": "Helsinki",
    "service": [
      "Taksit",
      "Venäjän",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 25.475612110099974,
    "lon": 60.896942913,
    "name": "Herrala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.04693629999997,
    "lon": 60.3031776,
    "name": "Hiekkaharju",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.919197009199934,
    "lon": 60.752587159,
    "name": "Hikiä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.447637130999965,
    "lon": 63.4534629154,
    "name": "Höljäkkä",
    "service": ""
  },
  {
    "lat": 23.362763710900026,
    "lon": 60.9195091539,
    "name": "Humppila",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.89345686850004,
    "lon": 60.2183645424,
    "name": "Huopalahti",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.85744942240001,
    "lon": 60.6314535429,
    "name": "Hyvinkää",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 27.201105778400006,
    "lon": 63.5601108904,
    "name": "Iisalmi",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 24.140829335399985,
    "lon": 61.0905802846,
    "name": "Iittala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.92057754610005,
    "lon": 60.2081532435,
    "name": "Ilmala",
    "service": ""
  },
  {
    "lat": 28.76376804710003,
    "lon": 61.1912552385,
    "name": "Imatra",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 26.838971151500004,
    "lon": 60.6967956336,
    "name": "Inkeroinen",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.935816039999963,
    "lon": 60.0615167425,
    "name": "Inkoo",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.17327955999997,
    "lon": 61.8656298491,
    "name": "Jämsä",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 25.274655717799988,
    "lon": 60.8673258354,
    "name": "Järvelä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.090844272000027,
    "lon": 60.4736450379,
    "name": "Järvenpää",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 29.774484671799996,
    "lon": 62.5973125688,
    "name": "Joensuu",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 24.970551447300068,
    "lon": 60.5528484064,
    "name": "Jokela",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.51277672599997,
    "lon": 60.1378938986,
    "name": "Jorvas",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 28.476129322599945,
    "lon": 61.1170910396,
    "name": "Joutseno",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.36503598690001,
    "lon": 61.7967935744,
    "name": "Juupajoki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.752689873300028,
    "lon": 62.2403928135,
    "name": "Jyväskylä",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola",
      "Avustuspalvelu",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 27.738563586700025,
    "lon": 64.2197217439,
    "name": "Kajaani",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 24.87699902899999,
    "lon": 60.2395606068,
    "name": "Kannelmäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.91537214020002,
    "lon": 63.8984350894,
    "name": "Kannus",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.946478301500065,
    "lon": 60.2203544057,
    "name": "Käpylä",
    "service": ""
  },
  {
    "lat": 23.661435465700038,
    "lon": 60.0688092747,
    "name": "Karjaa",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 23.049118439200015,
    "lon": 61.4433196024,
    "name": "Karkku",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.035288949300025,
    "lon": 63.0996489035,
    "name": "Kauhava",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.600336001799974,
    "lon": 60.1894536091,
    "name": "Kauklahti",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.730866391500058,
    "lon": 60.2119376381,
    "name": "Kauniainen",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 26.329564922500026,
    "lon": 60.8853206024,
    "name": "Kausala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.57438433760001,
    "lon": 65.7367067986,
    "name": "Kemi",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 27.40108209999994,
    "lon": 66.7239394,
    "name": "Kemijärvi",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Autojuna",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 25.512482399999953,
    "lon": 64.9137583,
    "name": "Kempele",
    "service": ""
  },
  {
    "lat": 24.755630416299937,
    "lon": 60.2165702406,
    "name": "Kera",
    "service": ""
  },
  {
    "lat": 25.10601371849998,
    "lon": 60.4043390852,
    "name": "Kerava",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 29.1140682404,
    "lon": 61.8614039376,
    "name": "Kerimäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.802849241800004,
    "lon": 61.8874454473,
    "name": "Kesälahti",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.70731179130007,
    "lon": 62.2553130133,
    "name": "Keuruu",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.782390682599953,
    "lon": 60.2179363281,
    "name": "Kilo",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.438889000000017,
    "lon": 60.123611,
    "name": "Kirkkonummi",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 30.049001387600015,
    "lon": 62.1427474361,
    "name": "Kitee",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 26.61134563500002,
    "lon": 63.6409124974,
    "name": "Kiuruvesi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.845781999999986,
    "lon": 60.315046,
    "name": "Kivistö",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.300153122700067,
    "lon": 63.512778509,
    "name": "Kohtavaara",
    "service": ""
  },
  {
    "lat": 24.701267211999948,
    "lon": 60.2071447397,
    "name": "Koivuhovi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.060009351499957,
    "lon": 60.323522963,
    "name": "Koivukylä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 22.303429020400017,
    "lon": 61.2541831399,
    "name": "Kokemäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.131099637099965,
    "lon": 63.8344380883,
    "name": "Kokkola",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 23.836261263600022,
    "lon": 67.3487034686,
    "name": "Kolari",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola",
      "Autojuna"
    ]
  },
  {
    "lat": 24.507439112500037,
    "lon": 62.1280485882,
    "name": "Kolho",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 28.11479378429999,
    "lon": 64.3381769153,
    "name": "Kontiomäki",
    "service": [
      "Pysäköintimahdollisuus",
      "Ravintola"
    ]
  },
  {
    "lat": 26.602240078800037,
    "lon": 60.847444758,
    "name": "Koria",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.078220510200026,
    "lon": 60.3509363152,
    "name": "Korso",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 26.928608715900054,
    "lon": 60.4643797466,
    "name": "Kotka",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 26.940251916299985,
    "lon": 60.468657606,
    "name": "Kotkan satama",
    "service": ""
  },
  {
    "lat": 26.704562030000034,
    "lon": 60.8656129716,
    "name": "Kouvola",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 27.679546321999965,
    "lon": 62.8972187754,
    "name": "Kuopio",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 22.297181121699964,
    "lon": 60.4502200275,
    "name": "Kupittaa",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 29.76888236399998,
    "lon": 63.3620044361,
    "name": "Kylänlahti",
    "service": ""
  },
  {
    "lat": 26.89554947939996,
    "lon": 60.5083443214,
    "name": "Kyminlinna",
    "service": ""
  },
  {
    "lat": 25.65725434670003,
    "lon": 60.9764729541,
    "name": "Lahti",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 27.393572792999976,
    "lon": 63.3606680693,
    "name": "Lapinlahti",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 28.19472313999995,
    "lon": 61.0477802709,
    "name": "Lappeenranta",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 23.236746878299982,
    "lon": 59.9040565876,
    "name": "Lappohja",
    "service": ""
  },
  {
    "lat": 23.015116652100005,
    "lon": 62.971341699,
    "name": "Lapua",
    "service": [
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 23.755082763600058,
    "lon": 61.3142909311,
    "name": "Lempäälä",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.96801800000003,
    "lon": 60.313778,
    "name": "Helsinki Lentoasema",
    "service": [
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 24.81345469000007,
    "lon": 60.2194757681,
    "name": "Leppävaara",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 23.06040862240002,
    "lon": 60.8473983347,
    "name": "Loimaa",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.85328398289994,
    "lon": 60.2708012679,
    "name": "Louhela",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.322275162300002,
    "lon": 61.800545926,
    "name": "Lusto",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.842968092499973,
    "lon": 60.2213059139,
    "name": "Mäkkylä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.011830001199996,
    "lon": 60.2518667094,
    "name": "Malmi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.861266028099976,
    "lon": 60.2493189192,
    "name": "Malminkartano",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.309296000000018,
    "lon": 60.650301,
    "name": "Mäntsälä",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 26.881753246600056,
    "lon": 61.4211052427,
    "name": "Mäntyharju",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.85258980930007,
    "lon": 60.2780805691,
    "name": "Martinlaakso",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.539095365799994,
    "lon": 60.1586618181,
    "name": "Masala",
    "service": ""
  },
  {
    "lat": 27.277965059500048,
    "lon": 61.6878118036,
    "name": "Mikkeli",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 26.687243970000054,
    "lon": 66.6179244745,
    "name": "Misi",
    "service": ""
  },
  {
    "lat": 25.075127442300072,
    "lon": 60.8211767517,
    "name": "Mommila",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 37.65435200000002,
    "lon": 55.777297,
    "name": "Moskova (Leningradski)",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Ravintola",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 25.992011071799993,
    "lon": 64.8053996999,
    "name": "Muhos",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.374816298500036,
    "lon": 66.3706274194,
    "name": "Muurola",
    "service": ""
  },
  {
    "lat": 26.78759247309995,
    "lon": 60.7700291661,
    "name": "Myllykoski",
    "service": ""
  },
  {
    "lat": 24.28095710690002,
    "lon": 62.5247528555,
    "name": "Myllymäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.854736058799972,
    "lon": 60.2613255025,
    "name": "Myyrmäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.93515549289998,
    "lon": 60.9356586216,
    "name": "Nastola",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.960786298599942,
    "lon": 63.9363931491,
    "name": "Nivala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.499164261500027,
    "lon": 61.481064498,
    "name": "Nokia",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 29.14429588379994,
    "lon": 63.5397237705,
    "name": "Nurmes",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.021306215100026,
    "lon": 60.7898087499,
    "name": "Oitti",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.371727999999962,
    "lon": 61.676009,
    "name": "Orivesi keskusta",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.3680428655,
    "lon": 61.6500966986,
    "name": "Orivesi",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.821003639499963,
    "lon": 64.2694769197,
    "name": "Oulainen",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 25.486143947100004,
    "lon": 65.0123966953,
    "name": "Oulu",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola",
      "Avustuspalvelu",
      "Autojuna",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 24.968073364800034,
    "lon": 60.2292163391,
    "name": "Oulunkylä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 28.92500222640001,
    "lon": 61.8622234042,
    "name": "Pääskylahti",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 26.91934630619994,
    "lon": 60.4759342617,
    "name": "Paimenportti",
    "service": ""
  },
  {
    "lat": 27.82219246880004,
    "lon": 64.4006159273,
    "name": "Paltamo",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 22.790356805499982,
    "lon": 63.5953921004,
    "name": "Pännäinen",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 29.505005293799968,
    "lon": 61.5563343812,
    "name": "Parikkala",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola"
    ]
  },
  {
    "lat": 23.078393004100008,
    "lon": 62.052159375,
    "name": "Parkano",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.36632555799997,
    "lon": 61.050026774,
    "name": "Parola",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.933367132400008,
    "lon": 60.1989978008,
    "name": "Pasila",
    "service": ""
  },
  {
    "lat": 24.929945999999973,
    "lon": 60.203724,
    "name": "Pasila Autojuna-asema",
    "service": [
      "Pysäköintimahdollisuus",
      "Autojuna"
    ]
  },
  {
    "lat": 23.99430476680004,
    "lon": 66.7861508443,
    "name": "Pello",
    "service": ""
  },
  {
    "lat": 25.189341926300017,
    "lon": 62.2569725463,
    "name": "Petäjävesi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 27.16752839440005,
    "lon": 62.3012506477,
    "name": "Pieksämäki",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 30.355910999999992,
    "lon": 59.956385,
    "name": "Pietari (Finljandski)",
    "service": [
      "Taksit",
      "Venäjän",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 30.441463,
    "lon": 59.931237,
    "name": "Pietari (Ladozhki)",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Ravintola",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 22.71471488559996,
    "lon": 63.6742869272,
    "name": "Pietarsaari",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.39561729449997,
    "lon": 62.3455972849,
    "name": "Pihlajavesi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.85977929270007,
    "lon": 60.2233919546,
    "name": "Pitäjänmäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.88324500270005,
    "lon": 60.2300804183,
    "name": "Pohjois-Haaga",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 21.786592997199932,
    "lon": 61.477220245,
    "name": "Pori",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 25.03679452489996,
    "lon": 60.2765956068,
    "name": "Puistola",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.993657752499985,
    "lon": 60.2424175793,
    "name": "Pukinmäki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.382354328500014,
    "lon": 61.761146667,
    "name": "Punkaharju",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.982636431299966,
    "lon": 63.682938887,
    "name": "Pyhäsalmi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.06882073790007,
    "lon": 60.3331049191,
    "name": "Rekola",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.294292745599932,
    "lon": 61.8033055003,
    "name": "Retretti",
    "service": ""
  },
  {
    "lat": 24.781216527499964,
    "lon": 60.7361268478,
    "name": "Riihimäki",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 25.705329875400025,
    "lon": 66.4976763571,
    "name": "Rovaniemi",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola",
      "Avustuspalvelu",
      "Autojuna"
    ]
  },
  {
    "lat": 26.88650936160002,
    "lon": 63.6020558864,
    "name": "Runni",
    "service": ""
  },
  {
    "lat": 25.098200381799984,
    "lon": 64.6603653823,
    "name": "Ruukki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.75812668060007,
    "lon": 60.818153541,
    "name": "Ryttylä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.121690430700028,
    "lon": 60.3846141875,
    "name": "Salo",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 23.121311758500042,
    "lon": 59.8750684989,
    "name": "Santala",
    "service": ""
  },
  {
    "lat": 25.065570604200047,
    "lon": 60.4872858284,
    "name": "Saunakallio",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 25.097841658300013,
    "lon": 60.3814283217,
    "name": "Savio",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 28.88623450329999,
    "lon": 61.869052594,
    "name": "Savonlinna",
    "service": [
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 22.863192765900067,
    "lon": 62.7825767092,
    "name": "Seinäjoki",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola"
    ]
  },
  {
    "lat": 27.666571721199944,
    "lon": 63.0749541163,
    "name": "Siilinjärvi",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 29.366413343299996,
    "lon": 61.4243641421,
    "name": "Simpele",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.221752475699986,
    "lon": 60.1406544801,
    "name": "Siuntio",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.31061885300005,
    "lon": 59.926013527,
    "name": "Skogby",
    "service": ""
  },
  {
    "lat": 27.422320797199973,
    "lon": 63.8646151468,
    "name": "Sukeva",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 27.12450825220003,
    "lon": 62.6237181784,
    "name": "Suonenjoki",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 23.443418801199982,
    "lon": 59.979547489,
    "name": "Tammisaari",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 23.773458067299998,
    "lon": 61.4983464823,
    "name": "Tampere",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola",
      "Avustuspalvelu",
      "Autojuna",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 25.030258091099995,
    "lon": 60.2641450967,
    "name": "Tapanila",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 26.954229044099975,
    "lon": 60.5728891615,
    "name": "Tavastila",
    "service": ""
  },
  {
    "lat": 22.142597199999955,
    "lon": 63.0044475,
    "name": "Tervajoki VR bussi",
    "service": ""
  },
  {
    "lat": 21.619628000000034,
    "lon": 63.098234,
    "name": "Tervajoki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.77230254990002,
    "lon": 66.0818131564,
    "name": "Tervola",
    "service": ""
  },
  {
    "lat": 25.044182280600012,
    "lon": 60.2924339614,
    "name": "Tikkurila",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 23.86082973449993,
    "lon": 61.1705910115,
    "name": "Toijala",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola"
    ]
  },
  {
    "lat": 24.472737000000052,
    "lon": 60.118536,
    "name": "Tolsa",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.181935000000067,
    "lon": 65.851016,
    "name": "Tornio- Itäinen",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.68175151180003,
    "lon": 60.2060506494,
    "name": "Tuomarila",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.638562668900022,
    "lon": 60.9184679368,
    "name": "Turenki",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 22.21877739859997,
    "lon": 60.4446285687,
    "name": "Turku satama",
    "service": ""
  },
  {
    "lat": 22.253085706199954,
    "lon": 60.454174121,
    "name": "Turku",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu",
      "Ravintola",
      "Autojuna",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 23.7225375493,
    "lon": 62.6053336554,
    "name": "Tuuri",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 35.89147600000001,
    "lon": 56.835828,
    "name": "Tver",
    "service": [
      "Taksit",
      "Venäjän",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 30.23678358990003,
    "lon": 62.9096024598,
    "name": "Uimaharju",
    "service": ""
  },
  {
    "lat": 26.413578143399945,
    "lon": 64.7589298781,
    "name": "Utajärvi",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 25.994707000000062,
    "lon": 60.92752,
    "name": "Uusikylä",
    "service": ""
  },
  {
    "lat": 26.842712498499964,
    "lon": 64.5580191229,
    "name": "Vaala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 21.62169639039996,
    "lon": 63.0978391303,
    "name": "Vaasa",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Ravintola",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 28.303193033900016,
    "lon": 60.8638280057,
    "name": "Vainikkala",
    "service": [
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Ravintola"
    ]
  },
  {
    "lat": 24.875814011900047,
    "lon": 60.2221683062,
    "name": "Valimo",
    "service": ""
  },
  {
    "lat": 22.88764895660006,
    "lon": 61.3495236388,
    "name": "Vammala",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.84829793359995,
    "lon": 60.2856158617,
    "name": "Vantaankoski",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 27.873704156899976,
    "lon": 62.3122822397,
    "name": "Varkaus",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 24.843121999999994,
    "lon": 60.295183,
    "name": "Vehkala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 24.99364996329996,
    "lon": 64.4845181387,
    "name": "Vihanti",
    "service": [
      "Pysäköintimahdollisuus",
      "Lippuautomaatti"
    ]
  },
  {
    "lat": 29.02928385740006,
    "lon": 62.3807383744,
    "name": "Vihtari",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 23.770720016099972,
    "lon": 61.2117255654,
    "name": "Viiala",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.237187298499975,
    "lon": 62.6416874196,
    "name": "Viinijärvi",
    "service": ""
  },
  {
    "lat": 28.753108999999995,
    "lon": 60.71603,
    "name": "Viipuri",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Venäjän",
      "Lipunmyynti"
    ]
  },
  {
    "lat": 25.824823000000038,
    "lon": 60.946671,
    "name": "Villähde",
    "service": ""
  },
  {
    "lat": 24.506955924700037,
    "lon": 62.0258922299,
    "name": "Vilppula",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  },
  {
    "lat": 29.991975478199947,
    "lon": 63.15080281,
    "name": "Vuonislahti",
    "service": ""
  },
  {
    "lat": 23.68320822229998,
    "lon": 66.3253364654,
    "name": "Ylitornio",
    "service": ""
  },
  {
    "lat": 24.54061034410006,
    "lon": 64.0719070534,
    "name": "Ylivieska",
    "service": [
      "Taksit",
      "Pysäköintimahdollisuus",
      "Lippuautomaatti",
      "Avustuspalvelu"
    ]
  },
  {
    "lat": 25.040031999999997,
    "lon": 60.323043,
    "name": "Leinelä",
    "service": [
      "Pysäköintimahdollisuus"
    ]
  }
],
	_markers: {
		junaasemat: L.AwesomeMarkers.icon({
			icon: 'train',
			prefix: 'fa',
			markerColor: 'lightgray'
		})
	},
	init: function(){
		var me = this;
		me._addMarkers();
    me._addLegenda();
	},
  _addLegenda: function(){
    var me = this;
    legenda.lisaaSelite({title: 'Juna-asema', icon: 'fa-train', color: 'lightgray'}, 'Juna-asema <span class="small">(' + me._junaasemat.length + ' kpl)</span>');
  },
	_addMarkers: function(){
		var me = this;
		var allMarkers = [];
		var markers = L.markerClusterGroup();

		jQuery.each(me._junaasemat,function(index,junaasema){
			var marker = L.marker([junaasema.lon, junaasema.lat], {icon:me._markers.junaasemat});

			var markerContent = me._templates.popup.clone();

			markerContent.find('.label').addClass('junaasemat');
			for(var key in junaasema) {
				if(key === 'service' && junaasema[key].length > 1) {
					var services = jQuery('<ul></ul>');
					for(var j=0;j<junaasema[key].length;j++) {
						services.append('<li>'+junaasema[key][j]+'</li>');
					}
					markerContent.find('.' + key).html(services);
				}
				else {
					markerContent.find('.' + key).html(junaasema[key]);
				}
			}
			marker.bindPopup(markerContent.prop('outerHTML'),
				{
					className: 'popup_junaasemat'
				}
			);

			allMarkers.push(marker);
			markers.addLayer(marker);
		});

		l.map.map.addLayer(markers);
	}
};

jQuery(document).ready(function(){
	junaasemat.init();
});