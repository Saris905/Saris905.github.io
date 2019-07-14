window.Seed = (function () {
    const cards = [ // исходные данные
        {
            name: 'Honda S2000',
            src: 'img/HondaS2000.jpg',
            btn: ['Toyota Supra', 'Honda S2000', 'Honda Integra', 'Dodge Neon'],
            right: 'Honda S2000'
        },
        {
            name: 'BMW M3 E92',
            src: 'img/BMWm3e92.jpg',
            btn: ['Audi A4', 'BMW M3 E92', 'Honda Civic Type R', 'BMW E90'],
            right: 'BMW M3 E92'
        },
        {
            name: 'Mitsubishi ASX',
            src: 'img/MitsubishiASX.jpg',
            btn: ['Mitsubishi ASX', 'Mitsubishi Outlander', 'Suzuki Jimny', 'Nissan Qashqai'],
            right: 'Mitsubishi ASX'
        },
        {
            name: 'Ferrari 458 Italia',
            src: 'img/Ferrari458Italia.jpg',
            btn: ['Pagani Huayra', 'Lamborghini Huracan', 'Ferrari 458 Italia', 'Porsche 918'],
            right: 'Ferrari 458 Italia'
        },
        {
            name: 'Nissan 370Z',
            src: 'img/Nissan370z.jpg',
            btn: ['Nissan 350Z', 'Honda Civic Type R', 'Toyota Celica', 'Nissan 370Z'],
            right: 'Nissan 370Z'
        },
        {
            name: 'Mitsubishi Eclipse',
            src: 'img/MitsubishiEclipse.jpg',
            btn: ['Honda Prelude', 'Honda Integra', 'Mitsubishi Galant', 'Mitsubishi Eclipse'],
            right: 'Mitsubishi Eclipse'
        },
        {
            name: 'Toyota Xb',
            src: 'img/toyotaxb.jpg',
            btn: ['Kia Soul', 'Toyota Xb', 'Nissan Cube', 'Toyota Corolla'],
            right: 'Toyota Xb'
        },
        {
            name: 'Kia Stinger GT',
            src: 'img/KiaStingerGt.jpg',
            btn: ['Audi A7', 'Audi A6', 'Kia Stinger GT', 'Porsche Panamera'],
            right: 'Kia Stinger GT'
        },
        {
            name: 'Toyota Land Cruiser 80',
            src: 'img/ToyotaLC80.jpg',
            btn: ['Toyota Land Cruiser 80', 'Mitsubishi Pajero', 'Suzuki Grand Vitara', 'Toyota 4runner'],
            right: 'Toyota Land Cruiser 80'
        },
        {
            name: 'Cadillac CTS',
            src: 'img/CadillacCTS.jpg',
            btn: ['Cadillac CTS', 'Infiniti FX37', 'Kia Optima', 'Infinity Q50'],
            right: 'Cadillac CTS'
        },

        {
            name: 'Nissan GTR R34',
            src: 'img/difficult/NissanGTR34.jpg',
            btn: ['Nissan Silvia', 'Nissan GTR R34', 'Nissan Laurel', 'Nissan GTR R35'],
            right: 'Nissan GTR R34'
        },
        {
            name: 'Audi 80',
            src: 'img/difficult/audi80.jpg',
            btn: ['Audi A4', 'Audi 100', 'Audi 80', 'Audi RS3'],
            right: 'Audi 80'
        },
        {
            name: 'Nissan GTR R35',
            src: 'img/difficult/NissanGTR35.jpg',
            btn: ['Nissan 350Z', 'Nissan GTR R33', 'Nissan GTR R35', 'Nissan Silvia'],
            right: 'Nissan GTR R35'
        },
        {
            name: 'Toyota MR2',
            src: 'img/difficult/ToyotaMR2.jpg',
            btn: ['Porsche Cayman', 'Ferrari 348', 'Porsche Boxter', 'Toyota MR2'],
            right: 'Toyota MR2'
        },
        {
            name: 'BMW E30',
            src: 'img/difficult/bmwe30.jpg',
            btn: ['BMW E30', 'BMW E34', 'BMW E46', 'BMW E31'],
            right: 'BMW E30'
        },
        {
            name: 'Ford Scorpio',
            src: 'img/difficult/fordScorpioi.jpg',
            btn: ['Ford Escort', 'Ford Scorpio', 'Ford Orion', 'Ford Sierra'],
            right: 'Ford Scorpio'
        },
        {
            name: 'Range Rover Velar',
            src: 'img/difficult/RangeRoverVelar.jpg',
            btn: ['Range Rover Velar', 'Range Rover Discovery', 'Range Defender', 'Range Rover Evoque'],
            right: 'Range Rover Velar'
        },
        {
            name: 'Jeep Compass',
            src: 'img/difficult/JeepCompass.jpg',
            btn: ['Jeep Grand Cherokee', 'Jeep Wrangler', 'Jeep Compass', 'Jeep Renegade'],
            right: 'Jeep Compass'
        },
        {
            name: 'Volvo 460',
            src: 'img/difficult/Volvo460.jpg',
            btn: ['Volvo 460', 'Volvo 740', 'Volvo 760', 'Volvo 960'],
            right: 'Volvo 460'
        },
        {
            name: 'Lamborghini Diablo',
            src: 'img/difficult/lamborghiniDiablo.jpg',
            btn: ['Lamborghini Countach', 'Lamborghini Gallardo', 'Lamborghini Diablo', 'Lamborghini Egoista'],
            right: 'Lamborghini Diablo'
        }
    ];

    return { cards: cards };
}());
