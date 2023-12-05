let cars = [
    {
        id: 1,
        carName: 'Batmobile',
        carImage: 'https://static.wikia.nocookie.net/batman/images/e/e5/Batmobile_New_52.png',
        vote: 1
    },
    {
        id: 2,
        carName: 'Spider Mobile',
        carImage: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/05/Spider-Man-sees-the-Spider-Mobile.png',
        vote: 12
    },
    {
        id: 3,
        carName: '2005 Audi A8 6.0 W12',
        carImage: 'https://static.wikia.nocookie.net/transporter/images/6/65/I009694.jpg',
        vote: 7
    }
]

export async function getCarsHandler(req, res) {
    res.status(200).json(cars)
}

export async function getCarHandler(req, res) {
    const car = cars.find((car) => car.id == req.params.id)
    if (car === undefined) {
        res.status(400).json('Not found')
    } else res.status(200).json(car)
}

export async function addCarHandler(req, res) {
    if (cars.find((car) => car.id === req.body.id)) {
        res.status(409).json('Car id must be unique')
    }
    else {
        cars.push(req.body)
        res.status(200).json(cars)
    }
}

export async function deleteCarHandler(req, res) {
    const index = cars.findIndex((car) => car.id == req.params.id)
    if (index >= 0) {
        cars.splice(index, 1)
        res.status(200).json(cars)
    } else res.status(400).send()
}

export async function editCarHandler(req, res) {
    const index = cars.findIndex((car) => car.id == req.body.id)
    if (index >= 0) {
        cars.splice(index, 1, req.body)
        res.status(200).json(cars)
    } else res.status(400).send()
}


export async function updateVoteHandler(req, res) {
    const index = cars.findIndex((car) => car.id == req.params.id)
    if (index >= 0) {
        res.status(200).json(increaseVote(index, cars))
    } else res.status(400).send()
}

function increaseVote(index, jsonArr) {
    for (var i = 0; i < jsonArr.length; i++) {
        if (jsonArr[i].id == jsonArr[index].id) {
            console.log(index);
            jsonArr[i].vote += 1;
            break;
        }
    }
    return jsonArr[index];
}
