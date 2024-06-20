const DATA = {
    dishes: [
        {
            id: 1,
            name: 'Corvina',
            description: 'CAMARÃO, MOLHO DE CAMARÃO, SALADA, ARROZ E PIRÃO',
            type: 'snack',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wpVo50Q-fMn_BRXquNHXzExaiBlSMPl9Og&s',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '3 POSTAS',
                    price: 75.00,
                },
                {
                    portion: '2 pessoa',
                    description: '6 POSTAS',
                    price: 150.00,
                },
                {
                    portion: '3 pessoa',
                    description: '9 POSTAS',
                    price: 225.00,
                },
                {
                    portion: '4 pessoa',
                    description: '12 POSTAS',
                    price: 300.00,
                },
            ]
        },
        {
            id: 2,
            name: 'Dourado',
            description: 'CAMARÃO, MOLHO DE CAMARÃO, SALADA, ARROZ E PIRÃO',
            type: 'snack',
            image: 'https://assets.delirec.com/images%2FTyh1bVeLjmZN71lFAPWDslUxVpk2%2Frecipe%2Fcb77387a-0d69-4d7a-9d4a-05be0612e279-Peixe-frito-sequinho-0',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '2 POSTAS',
                    price: 77.00,
                },
                {
                    portion: '2 pessoa',
                    description: '4 POSTAS',
                    price: 154.00,
                },
                {
                    portion: '3 pessoa',
                    description: '6 POSTAS',
                    price: 231.00,
                },
                {
                    portion: '4 pessoa',
                    description: '8 POSTAS',
                    price: 308.00,
                },
            ]
        },
        {
            id: 3,
            name: 'FILÉ DE PEIXE AO MOLHO DE CAMARÃO',
            description: 'FILÉ DE PEIXE, CAMARÃO FRITO, ARROZ, PIRÃO, MOLHO DE CAMARÃO E SALADA',
            type: 'snack',
            image: 'https://i.ytimg.com/vi/TzCTBfccVYM/maxresdefault.jpg',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 95.00,
                },
            ]
        },
        {
            id: 4,
            name: 'Corvina',
            description: 'CAMARÃO, MOLHO DE CAMARÃO, SALADA, ARROZ E PIRÃO',
            type: 'commercial',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '2 POSTAS',
                    price: 53.00,
                },
            ]
        },
        {
            id: 5,
            name: 'Dourado',
            description: 'CAMARÃO, MOLHO DE CAMARÃO, SALADA, ARROZ E PIRÃO',
            type: 'commercial',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '1 POSTA',
                    price: 54.00,
                },
            ]
        },
        {
            id: 6,
            name: 'Filé',
            description: 'CAMARÃO, MOLHO DE CAMARÃO, SALADA, ARROZ E PIRÃO',
            type: 'commercial',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 53.00,
                },
            ]
        },
        {
            id: 7,
            name: 'Camarão',
            description: '',
            type: 'portion',
            image: 'https://assets.delirec.com/images%2Fw1K2NX0oPSbmkMKDy3EpjlxScOp1%2Frecipe%2F59401af5-a866-463e-acbb-49d5444bad-gallery16',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 67.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 45.00,
                },
            ]
        },
        {
            id: 8,
            name: 'Sardinha',
            description: '',
            type: 'portion',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_8Th-Om_g6qZ3cJ2uqpYSoUcQrMYGCZypw&s',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 45.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 35.00,
                },
            ]
        },
        {
            id: 9,
            name: 'Batata Frita',
            description: '',
            type: 'portion',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk647BDzhrZki5yZb_QCk8rCroOlaZUG7Gqg&s',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 30.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 25.00,
                },
            ]
        },
        {
            id: 10,
            name: 'Ova de Peixe',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 35.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 28.00,
                },
            ]
        },
        {
            id: 11,
            name: 'Salada de Palmito',
            description: '',
            type: 'portion',
            image: 'https://cdn0.tudoreceitas.com/pt/posts/5/4/0/salada_de_palmito_com_tomate_9045_orig.jpg',
            characteristics: [
                {
                    portion: '',
                    description: '',
                    price: 35.00,
                },
            ]
        },
        {
            id: 12,
            name: 'Arroz',
            description: '',
            type: 'portion',
            image: 'https://alemaolanches.festzap.com.br/_core/_uploads/106/2024/03/235410032485bh9g88hf.jpg',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 14.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 12.00,
                },
                {
                    portion: 'mini',
                    description: '',
                    price: 8.00,
                },
            ]
        },
        {
            id: 13,
            name: 'Pirão',
            description: '',
            type: 'portion',
            image: 'https://www.restaurantemandala.com.br/img/porcoes/pirao-pescador.png',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 14.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 12.00,
                },
                {
                    portion: 'mini',
                    description: '',
                    price: 8.00,
                },
            ]
        },
        {
            id: 14,
            name: 'Feijão',
            description: '',
            type: 'portion',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRnsdpZzHQ6aj6HnRCeBjj3h50Gul8zSn0w&s',
            characteristics: [
                {
                    portion: '',
                    description: '',
                    price: 8.00,
                },
            ]
        },
        {
            id: 15,
            name: 'Bolinho de Bacalhau',
            description: '',
            type: 'portion',
            image: 'https://www.armazembarril.com.br/restaurante/painel/wa/catalogo_produtos/uploads/c0456154832906673fea276757e84bb5',
            characteristics: [
                {
                    portion: 'unidade',
                    description: '*no mínimo 5 unidades',
                    price: 3.50,
                },
            ]
        },
        {
            id: 16,
            name: 'Pastel',
            description: '',
            type: 'portion',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GnMHP_HYDiBBrh-O5QdRwvuICsjxyDk2ZQ&s',
            characteristics: [
                {
                    portion: 'unidade',
                    description: 'camarão',
                    price: 4.50,
                },
                {
                    portion: 'unidade',
                    description: 'carne',
                    price: 4.50,
                },
                {
                    portion: 'unidade',
                    description: 'queijo',
                    price: 4.50,
                },
                {
                    portion: 'unidade',
                    description: 'frango',
                    price: 4.50,
                },
            ]
        },
        {
            id: 17,
            name: 'Posta Corvina',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'unidade',
                    description: '',
                    price: 15.00,
                },
            ]
        },
        {
            id: 18,
            name: 'Posta Dourado',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'unidade',
                    description: '',
                    price: 20.00,
                },
            ]
        },
        {
            id: 19,
            name: 'Nhoque ao molho de camarão',
            description: 'COM CAMARÃO DESCASCADO, CATUPIRY E QUEIJO RALADO',
            type: 'pasta',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYScLAEYwKJiedUHeghzPvDgPymaLT0m7orA&s',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 45.00,
                },
            ]
        },
        {
            id: 20,
            name: 'Macarrão ao molho de camarão',
            description: 'TIPO ESPAGUETE, COM CAMARÃO DESCASCADO E QUEIJO RALADO',
            type: 'pasta',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTXvRJPLjArAngJxuG4y81yomDvIxGn3auQ&s',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 40.00,
                },
            ]
        },
        {
            id: 21,
            name: 'Contrafilé Bovino',
            description: 'BIFE BOVINO, BATATA FRITA, MOLHO À CAMPANHA, FAROFA, ARROZ E FEIJÃO',
            type: 'snack',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 36.00,
                },
                {
                    portion: '2 pessoa',
                    description: '',
                    price: 62.00,
                },
            ]
        },
        {
            id: 22,
            name: 'Filé de Frango',
            description: 'FILÉ DE PEITO, BATATA FRITA, MOLHO À CAMPANHA, FAROFA, ARROZ E FEIJÃO',
            type: 'snack',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 36.00,
                },
                {
                    portion: '2 pessoa',
                    description: '',
                    price: 62.00,
                },
            ]
        },
        {
            id: 45,
            name: 'Pudim de Leite',
            description: 'Fatia',
            type: 'dessert',
            image: '',
            characteristics: [
                {
                    portion: '1 fatia',
                    description: '',
                    price: 7.00,
                },
            ]
        },
        {
            id: 46,
            name: 'Mousse de Maracujá',
            description: '',
            type: 'dessert',
            image: '',
            characteristics: [
                {
                    portion: 'Pote',
                    description: '',
                    price: 7.00,
                },
            ]
        },
        {
            id: 47,
            name: 'Pavê de Amendoim',
            description: 'Fatia',
            type: 'dessert',
            image: '',
            characteristics: [
                {
                    portion: '1 fatia',
                    description: '',
                    price: 7.00,
                },
            ]
        },
        {
            id: 47,
            name: 'Embalagem',
            description: 'Para Viagem',
            type: 'others',
            image: '',
            characteristics: [
                {
                    portion: '',
                    description: 'Caso o cliente queira embalar a comida para levar será cobrado o valor da embalagem',
                    price: 2.50,
                },
            ]
        },
    ],
    drinks: [
        {
            id: 23,
            name: 'Cerveja',
            brand: 'Brahma',
            characteristics: [
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 12.00,
                    image: ''
                },
                {
                    type: 'latão',
                    size: '473ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'zero lata',
                    size: '350ml',
                    price: 7.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 12.00,
                    image: ''
                }
            ]
        },
        {
            id: 24,
            name: 'Cerveja',
            brand: 'Antarctica',
            characteristics: [
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 12.00,
                    image: ''
                },
                {
                    type: 'latão',
                    size: '473ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 12.00,
                    image: ''
                }
            ]
        },
        {
            id: 25,
            name: 'Cerveja Duplo Malte',
            brand: 'Brahma',
            characteristics: [
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 12.00,
                    image: ''
                },
            ]
        },
        {
            id: 26,
            name: 'Cerveja',
            brand: 'Caracu',
            characteristics: [
                {
                    type: 'lata',
                    size: '330ml',
                    price: 8.00,
                    image: ''
                },
            ]
        },
        {
            id: 27,
            name: 'Cerveja',
            brand: 'Heineken',
            characteristics: [
                {
                    type: 'long neck',
                    size: '375ml',
                    price: 10.00,
                    image: ''
                },
            ]
        },
        {
            id: 28,
            name: 'Cerveja Malzebier',
            brand: 'Itaipava',
            characteristics: [
                {
                    type: 'long neck',
                    size: '375ml',
                    price: 11.00,
                    image: ''
                },
                {
                    type: 'lata',
                    size: '350ml',
                    price: 7.00,
                    image: ''
                },
            ]
        },
        {
            id: 29,
            name: 'Cerveja Malzebier',
            brand: 'Brahma',
            characteristics: [
                {
                    type: 'long neck',
                    size: '375ml',
                    price: 12.00,
                    image: ''
                },
                {
                    type: 'lata',
                    size: '350ml',
                    price: 8.00,
                    image: ''
                },
            ]
        },
        {
            id: 30,
            name: 'Vinho',
            brand: 'da casa',
            characteristics: [
                {
                    type: 'caneca',
                    size: '',
                    price: 10.00,
                    image: ''
                },
                {
                    type: 'copo',
                    size: '',
                    price: 8.00,
                    image: ''
                },
            ]
        },
        {
            id: 31,
            name: 'Chop de Vinho',
            brand: 'Du Gomes',
            characteristics: [
                {
                    type: 'garrafinha',
                    size: '300ml',
                    price: 10.00,
                    image: ''
                },
            ]
        },
        {
            id: 31,
            name: 'Limão',
            brand: 'da Casa',
            characteristics: [
                {
                    type: 'copo',
                    size: '',
                    price: 13.00,
                    image: ''
                },
            ]
        },
        {
            id: 32,
            name: 'Refrigerante',
            brand: 'Coca-Cola',
            characteristics: [
                {
                    type: 'lata',
                    size: '350ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafinha',
                    size: '290ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 10.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '1.5l',
                    price: 12.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '2l',
                    price: 15.00,
                    image: ''
                },
            ]
        },
        {
            id: 33,
            name: 'Refrigerante',
            brand: 'Pepsi',
            characteristics: [
                {
                    type: 'lata',
                    size: '350ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafinha',
                    size: '290ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 10.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '1.5l',
                    price: 12.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '2l',
                    price: 15.00,
                    image: ''
                },
            ]
        },
        {
            id: 34,
            name: 'Refrigerante',
            brand: 'Fanta Sabores',
            characteristics: [
                {
                    type: 'lata',
                    size: '350ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafinha',
                    size: '290ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '600ml',
                    price: 10.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '1.5l',
                    price: 12.00,
                    image: ''
                },
                {
                    type: 'garrafa',
                    size: '2l',
                    price: 15.00,
                    image: ''
                },
            ]
        },
        {
            id: 35,
            name: 'Guraná Natural',
            brand: 'Guaracamp',
            characteristics: [
                {
                    type: 'copo',
                    size: '285ml',
                    price: 3.50,
                    image: ''
                },
            ]
        },
        {
            id: 36,
            name: 'Guraná Natural',
            brand: 'Guaravita',
            characteristics: [
                {
                    type: 'copo',
                    size: '290ml',
                    price: 3.50,
                    image: ''
                },
            ]
        },
        {
            id: 37,
            name: 'Guraná Natural',
            brand: 'Guaraviton',
            characteristics: [
                {
                    type: 'garrafinha',
                    size: '500ml',
                    price: 7.00,
                    image: ''
                },
            ]
        },
        {
            id: 38,
            name: 'H2OH',
            brand: '',
            characteristics: [
                {
                    type: 'normal',
                    size: '500ml',
                    price: 8.00,
                    image: ''
                },
                {
                    type: 'limoneto',
                    size: '500ml',
                    price: 8.00,
                    image: ''
                },
            ]
        },
        {
            id: 39,
            name: 'Isotônico',
            brand: 'Gatorade',
            characteristics: [
                {
                    type: '',
                    size: '500ml',
                    price: 9.00,
                    image: ''
                },
            ]
        },
        {
            id: 40,
            name: 'Suco',
            brand: 'Natural',
            characteristics: [
                {
                    type: 'Uva',
                    size: 'caneca',
                    price: 10.00,
                    image: ''
                },
                {
                    type: 'Laranja',
                    size: 'caneca',
                    price: 10.00,
                    image: ''
                },
                {
                    type: 'Laranja',
                    size: 'jarra média',
                    price: 20.00,
                    image: ''
                },
                {
                    type: 'Laranja',
                    size: 'jarra grande',
                    price: 25.00,
                    image: ''
                },
            ]
        },
        {
            id: 41,
            name: 'Energético',
            brand: 'Red Bull',
            characteristics: [
                {
                    type: 'lata',
                    size: '250ml',
                    price: 14.00,
                    image: ''
                },
            ]
        },
        {
            id: 42,
            name: 'Água Tônica',
            brand: 'Schweppes',
            characteristics: [
                {
                    type: 'lata',
                    size: '350ml',
                    price: 8.00,
                    image: ''
                },
            ]
        },
        {
            id: 43,
            name: 'Água Mineral sem gás',
            brand: 'Minalba',
            characteristics: [
                {
                    type: 'garrafa',
                    size: '500ml',
                    price: 3.50,
                    image: ''
                },
            ]
        },
        {
            id: 44,
            name: 'Água Mineral com gás',
            brand: 'Minalba',
            characteristics: [
                {
                    type: 'garrafa',
                    size: '500ml',
                    price: 4.00,
                    image: ''
                },
            ]
        },
    ],
    trip: [
        {
            id: 48,
            name: 'Corvina',
            description: 'Acompanha salada, molho de camarão e camarão frito',
            type: 'snack',
            image: '',
            characteristics: [
                {
                    portion: '5 POSTAS',
                    description: '',
                    price: 75.00,
                },
                {
                    portion: '6 POSTAS',
                    description: '',
                    price: 90.00,
                },
                {
                    portion: '7 POSTAS',
                    description: '',
                    price: 105.00,
                },
                {
                    portion: '8 POSTAS',
                    description: '',
                    price: 120.00,
                },
                {
                    portion: '9 POSTAS',
                    description: '',
                    price: 135.00,
                },
                {
                    portion: '10 POSTAS',
                    description: '',
                    price: 150.00,
                },
                {
                    portion: '11 POSTAS',
                    description: '',
                    price: 165.00,
                },
                {
                    portion: '12 POSTAS',
                    description: '',
                    price: 180.00,
                },
            ]
        },
        {
            id: 49,
            name: 'Dourado',
            description: 'Acompanha salada, molho de camarão e camarão frito',
            type: 'snack',
            image: '',
            characteristics: [
                {
                    portion: '4 POSTAS',
                    description: '',
                    price: 76.00,
                },
                {
                    portion: '5 POSTAS',
                    description: '',
                    price: 95.00,
                },
                {
                    portion: '6 POSTAS',
                    description: '',
                    price: 114.00,
                },
                {
                    portion: '7 POSTAS',
                    description: '',
                    price: 133.00,
                },
                {
                    portion: '8 POSTAS',
                    description: '',
                    price: 152.00,
                },
                {
                    portion: '9 POSTAS',
                    description: '',
                    price: 171.00,
                },
                {
                    portion: '10 POSTAS',
                    description: '',
                    price: 190.00,
                },
            ]
        },
        {
            id: 50,
            name: 'Corvina(Quentinha)',
            description: 'CORVINA, ARROZ, PIRÃO, CAMARÃO FRITO, MOLHO DE CAMARÃO, SALADA',
            type: 'commercial',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '2 POSTAS',
                    price: 35.00,
                },
            ]
        },
        {
            id: 51,
            name: 'Filé de Peixe',
            description: 'FILÉ DE PEIXE, ARROZ, PIRÃO, MOLHO DE CAMARÃO, SALADA E CAMARÃO FRITO',
            type: 'snack',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: 'completo',
                    price: 35.00,
                },
            ]
        },
        {
            id: 52,
            name: 'Camarão',
            description: 'Frito',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 68.00,
                },
                {
                    portion: 'meia',
                    description: '',
                    price: 45.00,
                },
            ]
        },
        {
            id: 53,
            name: 'Sardinha',
            description: 'Frita',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 45.00,
                },
            ]
        },
        {
            id: 54,
            name: 'Macarrão ao Molho de Camarão',
            description: '',
            type: 'pasta',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 40.00,
                },
            ]
        },
        {
            id: 55,
            name: 'Nhoque ao molho de Camarão',
            description: '',
            type: 'pasta',
            image: '',
            characteristics: [
                {
                    portion: '1 pessoa',
                    description: '',
                    price: 45.00,
                },
            ]
        },
        {
            id: 56,
            name: 'Isca de Filé',
            description: 'FILÉ DE PEIXE, ARROZ, PIRÃO, MOLHO DE CAMARÃO, SALADA E CAMARÃO FRITO',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'a partir de',
                    description: '',
                    price: 55.00,
                },
            ]
        },
        {
            id: 57,
            name: 'Arroz',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 14.00,
                },
            ]
        },
        {
            id: 58,
            name: 'Pirão',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'inteira',
                    description: '',
                    price: 14.00,
                },
            ]
        },
        {
            id: 59,
            name: 'Bolinho de Bacalhau',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'unidade',
                    description: '',
                    price: 3.50,
                },
            ]
        },
        {
            id: 60,
            name: 'Pastel de Camarão',
            description: '',
            type: 'portion',
            image: '',
            characteristics: [
                {
                    portion: 'unidade',
                    description: '',
                    price: 4.50,
                },
            ]
        },
    ],
};

export default DATA;