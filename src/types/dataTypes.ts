type dataTypes = {
    dishes: [
        {
            id: number,
            name: string,
            description: string,
            type: 'snack' | 'portion' | 'commercial' | 'pasta' | 'dessert' | 'others',
            image: string,
            characteristics: [
                {
                    portion: string,
                    description: string,
                    price: number,
                },
            ]
        }
    ],
    drinks: [
        {
            id: number,
            name: string,
            brand: string,
            characteristics: [
                {
                    type: string,
                    size: string,
                    price: number,
                    image: string,
                },
            ]
        }
    ],
    trip: [
        {
            id: number,
            name: string,
            description: string,
            type: 'snack' | 'portion' | 'commercial' | 'pasta' | 'dessert' | 'others',
            image: string,
            characteristics: [
                {
                    portion: string,
                    description: string,
                    price: number,
                },
            ]
        }
    ],
};

export type CardInfoTypes = {
    id: number,
    name: string,
    description: string,
    type?: 'snack' | 'portion' | 'commercial' | 'pasta' | 'dessert' | 'others',
    image: string,
    characteristics: {
            portion: string,
            description: string,
            price: number,
        } []
}

export default dataTypes;