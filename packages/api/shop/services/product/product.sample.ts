import Product from './product.type';
import { plainToClass } from 'class-transformer';



export function createProductSamples() {
  return plainToClass(Product, [
    {
      "id": 1,
      "title": "Dragon Ball Z (Dragon Ball Z",
      "slug": 1586998338589,
      "unit": 10,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "0613563328",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0613563328-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563328-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563301-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563321-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/061356331X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563360-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563291-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563352-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563369-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563336-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563379-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563338-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563376-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563314-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563284-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563307-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563298-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563352-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613563344-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/061356328X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613563345-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 1,
          "title": "Internet Archive Wishlist",
          "slug": 1586998338589
        }
      ]
    },
    {
      "id": 2,
      "title": "Dragon Ball Z 24 (Dragon Ball Z)",
      "slug": 1586998338590,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Akira toriyama,Tandem Library",
        "isbn": "9781417751754",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781417751754-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751754-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751754-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 2,
          "title": null,
          "slug": 1586998338590
        }
      ]
    },
    {
      "id": 3,
      "title": "Dragon Ball Z 19 (Dragon Ball Z",
      "slug": 1586998338591,
      "unit": null,
      "author": {
        "id": "OL3285456A",
        "name": "A. Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL3285456A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "1417751703",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1417751703-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751703-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751709-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 3,
          "title": null,
          "slug": 1586998338591
        }
      ]
    },
    {
      "id": 4,
      "title": "Dragon Ball Z 25 (Dragon Ball Z)",
      "slug": 1586998338592,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "1417751762",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1417751762-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751762-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751761-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 4,
          "title": null,
          "slug": 1586998338592
        }
      ]
    },
    {
      "id": 5,
      "title": "Dragon Ball Z 21 (Dragon Ball Z)",
      "slug": 1586998338593,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "141775172X",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/141775172X-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/141775172X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751723-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 5,
          "title": null,
          "slug": 1586998338593
        }
      ]
    },
    {
      "id": 6,
      "title": "Dragon Ball Z 23 (Dragon Ball Z)",
      "slug": 1586998338594,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "9781417751747",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781417751747-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751747-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751746-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 6,
          "title": null,
          "slug": 1586998338594
        }
      ]
    },
    {
      "id": 7,
      "title": "Dragon Ball Z 26 (Dragon Ball Z)",
      "slug": 1586998338595,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "1417751770",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1417751770-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751770-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751778-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 7,
          "title": null,
          "slug": 1586998338595
        }
      ]
    },
    {
      "id": 8,
      "title": "Dragon Ball Z 20 (Dragon Ball Z)",
      "slug": 1586998338596,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "1417751711",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1417751711-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751711-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751716-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 8,
          "title": null,
          "slug": 1586998338596
        }
      ]
    },
    {
      "id": 9,
      "title": "Dragon Ball Z",
      "slug": 1586998338597,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Viz,Shonen Jump Graphic Novel/Viz,Viz Communications,Viz Media,Tandem Library",
        "isbn": "1415667004",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1415667004-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1415667004-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1415501335-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781415635551-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417652136-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591160069-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1415635552-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417652152-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319376-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/075879293X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421504049-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781415667002-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319375-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1404699619-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613997166-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781415580776-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421502739-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417652150-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781413103601-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591165059-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417652144-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/141310360X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421502731-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417652136-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613997164-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781415657690-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319857-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591160065-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319855-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421501482-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/141560021X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1415580774-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417652128-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781404699618-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417652160-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421501481-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591168082-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1415657696-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591168089-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417652129-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319321-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417652167-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421504049-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417652143-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780758792938-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319324-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591165057-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781415600214-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781415501337-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 9,
          "title": "Martial artists",
          "slug": 1586998338597
        }
      ]
    },
    {
      "id": 10,
      "title": "Dragon Ball Z",
      "slug": 1586998338598,
      "unit": null,
      "author": {
        "id": "OL1395518A",
        "name": "Eric Mylonas",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1395518A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games.,Prima Games,Prima Pub.",
        "isbn": "0761544038",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761544038-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761544038-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761553885-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761546774-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/076154402X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761543570-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761544029-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761542070-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761542078-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761546790-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761543572-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761546771-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761546758-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761544011-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761546795-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761553886-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761544036-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761546757-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761544012-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 10,
          "title": "Video games.",
          "slug": 1586998338598
        }
      ]
    },
    {
      "id": 11,
      "title": "Dragon ball Z",
      "slug": 1586998338599,
      "unit": null,
      "author": {
        "id": "OL4931196A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL4931196A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Viz,Viz Comics,Viz Communications,VIZ, LLC",
        "isbn": "1569319863",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319863-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319863-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591163282-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591161800-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319314-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319391-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569316993-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319864-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591163285-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319316-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569316988-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319383-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591160065-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569315316-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319855-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569316996-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569316382-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319383-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569315329-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569315507-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569314985-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569314975-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569318077-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569315507-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319307-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569316384-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319857-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569314977-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569318072-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569316986-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/159116043-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319308-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591160069-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591161806-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319390-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569315310-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569314982-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569315323-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 11,
          "title": "Martial artists",
          "slug": 1586998338599
        }
      ]
    },
    {
      "id": 12,
      "title": "Dragon Ball Z",
      "slug": 1586998338600,
      "unit": null,
      "author": {
        "id": "OL2838674A",
        "name": "Scruffy Productions",
        "avatar": "http://covers.openlibrary.org/a/olid/OL2838674A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761539956",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761539956-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761539956-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761539957-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 12,
          "title": null,
          "slug": 1586998338600
        }
      ]
    },
    {
      "id": 13,
      "title": "Dragon Ball Z",
      "slug": 1586998338601,
      "unit": null,
      "author": {
        "id": "OL243640A",
        "name": "Elizabeth Hollinger",
        "avatar": "http://covers.openlibrary.org/a/olid/OL243640A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761539948",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761539948-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761539948-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761539940-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 13,
          "title": null,
          "slug": 1586998338601
        }
      ]
    },
    {
      "id": 14,
      "title": "Super Dragon Ball Z",
      "slug": 1586998338602,
      "unit": null,
      "author": {
        "id": "OL1395516A",
        "name": "Stephen Stratton",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1395516A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761553894",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761553894-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761553894-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761553892-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 14,
          "title": null,
          "slug": 1586998338602
        }
      ]
    },
    {
      "id": 15,
      "title": "Dragon Ball Z LE",
      "slug": 1586998338603,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1591163617",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1591163617-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591163617-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591163619-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 15,
          "title": null,
          "slug": 1586998338603
        }
      ]
    },
    {
      "id": 16,
      "title": "Dragon Ball Z Kai",
      "slug": 1586998338604,
      "unit": null,
      "author": {
        "id": "OL7521647A",
        "name": "Masako Nozawa",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7521647A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "null",
        "isbn": null,
        "edition": 2017,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,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",
      "gallery": null,
      "categories": [
        {
          "id": 16,
          "title": "Drama",
          "slug": 1586998338604
        }
      ]
    },
    {
      "id": 17,
      "title": "Dragon Ball Z Kai",
      "slug": 1586998338605,
      "unit": null,
      "author": {
        "id": "OL7521603A",
        "name": "FUNimation Productions, Ltd",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7521603A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "null",
        "isbn": null,
        "edition": 2017,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,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",
      "gallery": null,
      "categories": [
        {
          "id": 17,
          "title": "Drama",
          "slug": 1586998338605
        }
      ]
    },
    {
      "id": 18,
      "title": "Dragon ball Z Kai",
      "slug": 1586998338606,
      "unit": null,
      "author": {
        "id": "OL7521378A",
        "name": "Justin Cook",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7521378A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "null",
        "isbn": null,
        "edition": 2017,
        "country": null,
        "languages": [
          "jpn"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,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",
      "gallery": null,
      "categories": [
        {
          "id": 18,
          "title": "Drama",
          "slug": 1586998338606
        }
      ]
    },
    {
      "id": 19,
      "title": "Dragon Ball Z Kai",
      "slug": 1586998338607,
      "unit": null,
      "author": {
        "id": "OL7521647A",
        "name": "Masako Nozawa",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7521647A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "null",
        "isbn": null,
        "edition": 2017,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,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",
      "gallery": null,
      "categories": [
        {
          "id": 19,
          "title": "Drama",
          "slug": 1586998338607
        }
      ]
    },
    {
      "id": 20,
      "title": "Dragon ball Z Kai",
      "slug": 1586998338608,
      "unit": null,
      "author": {
        "id": "OL7523995A",
        "name": "FUNimation Entertainment (Firm)",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7523995A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "null",
        "isbn": null,
        "edition": 2017,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,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",
      "gallery": null,
      "categories": [
        {
          "id": 20,
          "title": "Drama",
          "slug": 1586998338608
        }
      ]
    },
    {
      "id": 21,
      "title": "Dragon ball Z Kai",
      "slug": 1586998338609,
      "unit": null,
      "author": {
        "id": "OL7521377A,OL7521378A",
        "name": "Carly Hunter,Justin Cook",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7521377A,OL7521378A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "null",
        "isbn": null,
        "edition": 2017,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADwCAYAAADxXop4AAAHPElEQVR4Xu3d23La2BaGUREOPpTf/0mNwYCsvthFtoMdix+WxBIZ46qrsjpxutpfNOXlmVnXdV0DEPjVdwDglHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcQWfQco53A4/P7n+XzezGazH89DrYRjQF3XNbvdrtntdk3btl9+fD6fN4vFonl8fBQRJmXWdV3Xd4jcfr9v3t7emnP+885ms+bh4aF5fHzsOwpVEI4BbDab5v39ve/YF8vlsnl+fvb0QfW8HC3s0mg0n55SoHbCUdB+v784Gkf7/b7Zbrd9x+CmhKOgzWbTd+Qs7+/vZ70bgVsRjkJ2u13z8fHRd+wsXdd56qBqwlHIfr/vOxIp/fNBScJRSOlP9I+PD+MK1RKOin13aQxqIBwFeDL40+er9dwn4SjAha3/a9u2Wa/X7qPcOeEoZIh4zOfzviNV6bru9zX74/focJ+Eo5Dlctl3JDLF755dr9d/vJd5e3szttwp4SikdDhWq1XfkapsNptvI7Fer4vdb6EewlHIcrksNlrMZrNJhWO32/31qn3Xdc16vfYC+c4IR0FPT099R87y9PQ0mTGlbdveq/bnnGFahKOgxWLRPD8/9x370Wq1mszTRtd1zevr61lPE7vdzjX6OyIcha1Wq4vj8fDwcPG/ewvnRuNou90Wv2HLbVjkM5DD4dBsNpuzbn/++vWreXp6Kv6CdUhvb28Xfbl1Nps1Ly8vxd4HcRvCMbDdbtccDodmv99/+dN5uVw2y+VyMqPJ0W63u+qC13w+b15eXibzHoevhGNkbdtO+k/bw+HQvL6+9h3rtVgsmpeXl75jVMo7jpFNORofHx/Ner3uO3aW4yjHNAkHZxniPsb7+/tF70m4PeGoWMlP0mud+6I3NdTPy7CEo1Kl3iWUsN1uB3sySO6CUA/hqNDxu0zbtr35pakxtq4f48F0CEeFttvt728M2263N3uUb9v2qi+7Jsb8tbiecFTmcDh8+YaxW3xCfd6tMRY7PKZDOCpy/GQ9dYuR5XS3xljs8JgG4ajI5xHlux8b6xP5b7s1xmKHR/2EoxLfjSinxhhZftqtMZYh7oxQlnBU4G8jyqmhR5aa9mbU9LHwlXBU4KcR5dRQI0uN9yns8KiXcNzYOSPKqXOeTlK1RePIDo86CccNnTuinCo9shwvm9Wq9o/vXyQcN5SMKKdKjSxTuDtxizsl/Ew4buSSEeXUJU8rnx0Oh6t/jrEc/4Y46iAcN3DpiHLqmpGl5G6NsdjhUQ/huIFrRpRTl4wsU74nYYdHHYRjZCVGlFPp08vUd2BM/eO/B8IxolIjyqlkZBlyt8ZYarxz8q8RjhGVHFFOnTOyjLFbYyx2eNyWcIykbdviI8qpn55m7nHfxT3+nqZCOEYyxv/gfxtZ7vkexBTuodwj4RjBOWNEKd/9WrfarTEWOzzGJxwDS15clvL56ebWuzXGYofHuIRjYGOMKKeOsapht8ZYpnw3ZYr8FZAD2m63oz9tfDabzf65T6TVatU8Pz/3HeNKnjgGcosR5dS/Fo3GDo/RCMdAbjGi8D92eAxPOAYw5ldR+J4dHsMSjsJqGFG477srNRCOwowo9bDDYzjCUZARpT52eAxDOAoxotTLDo/yhKMQI0rd7PAoSzgKMKLUzw6PsoTjSkaU6bDDoxzhuJIRZVrs8ChDOK5gRJkmOzyuJxwXMqJMmx0e1xGOC3ncnT47PC4nHBcwotwHOzwuJxwhI8p9advWzdILCEfIiHJ/7PDICUfAiHK/7PDILPoO8KfHx8e+I0yUF6Xns3MUiBlVgJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOI/Qe0gyoTzEMWZQAAAABJRU5ErkJggg==",
      "gallery": null,
      "categories": [
        {
          "id": 21,
          "title": "Drama",
          "slug": 1586998338609
        }
      ]
    },
    {
      "id": 22,
      "title": "Dragon Ball Z",
      "slug": 1586998338610,
      "unit": null,
      "author": {
        "id": "OL3403058A",
        "name": "Jesse Burgess",
        "avatar": "http://covers.openlibrary.org/a/olid/OL3403058A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Scholastic, Inc.",
        "isbn": "0439622719",
        "edition": 2004,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0439622719-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0439622719-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780439622714-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 22,
          "title": "Accessible book",
          "slug": 1586998338610
        }
      ]
    },
    {
      "id": 23,
      "title": "Dragon Ball Z",
      "slug": 1586998338611,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Planeta",
        "isbn": "978-84-16308-99-6",
        "edition": 2015,
        "country": null,
        "languages": [
          "spa"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/978-84-16308-99-6-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/978-84-16308-99-6-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/8416308993-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 23,
          "title": null,
          "slug": 1586998338611
        }
      ]
    },
    {
      "id": 24,
      "title": "Total Dragon Ball Z",
      "slug": 1586998338612,
      "unit": null,
      "author": {
        "id": "OL3073840A",
        "name": "Triumph Books",
        "avatar": "http://covers.openlibrary.org/a/olid/OL3073840A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Triumph Books",
        "isbn": "1572434163",
        "edition": 2000,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1572434163-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1572434163-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781572434165-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 24,
          "title": "Internet Archive Wishlist",
          "slug": 1586998338612
        }
      ]
    },
    {
      "id": 25,
      "title": "Dragon Ball Z, Vol. 11 (Dragon Ball Z",
      "slug": 1586998338613,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "0613674022",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0613674022-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613674022-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613674027-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 25,
          "title": null,
          "slug": 1586998338613
        }
      ]
    },
    {
      "id": 26,
      "title": "Dragon Ball Z, Volume 17 (Dragon Ball Z)",
      "slug": 1586998338614,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781591165057",
        "edition": 2004,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781591165057-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591165057-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591165059-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 26,
          "title": null,
          "slug": 1586998338614
        }
      ]
    },
    {
      "id": 27,
      "title": "Dragon Ball Z, Vol. 22 (Dragon Ball Z",
      "slug": 1586998338615,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "1417751738",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1417751738-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1417751738-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781417751730-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 27,
          "title": null,
          "slug": 1586998338615
        }
      ]
    },
    {
      "id": 28,
      "title": "Dragon Ball Z, Volume 14 (Dragon Ball Z)",
      "slug": 1586998338616,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1591161800",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1591161800-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591161800-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591161806-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 28,
          "title": null,
          "slug": 1586998338616
        }
      ]
    },
    {
      "id": 29,
      "title": "Dragon Ball Z, Volume 18 (Dragon Ball Z)",
      "slug": 1586998338617,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781591166375",
        "edition": 2004,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781591166375-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591166375-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591166373-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 29,
          "title": "Graphic novels",
          "slug": 1586998338617
        }
      ]
    },
    {
      "id": 30,
      "title": "Dragon Ball Z, Volume 15 (Dragon Ball Z)",
      "slug": 1586998338618,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781591161868",
        "edition": 2004,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781591161868-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591161868-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/159116186X-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 30,
          "title": "Comic books, strips",
          "slug": 1586998338618
        }
      ]
    },
    {
      "id": 31,
      "title": "Dragon Ball Z, Volume 19 (Dragon Ball Z)",
      "slug": 1586998338619,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781591167518",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781591167518-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591167518-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591167515-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 31,
          "title": "Martial artists",
          "slug": 1586998338619
        }
      ]
    },
    {
      "id": 32,
      "title": "Dragon Ball Z, Volume 21 (Dragon Ball Z)",
      "slug": 1586998338620,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781591168737",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781591168737-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591168737-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591168732-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 32,
          "title": "Martial artists",
          "slug": 1586998338620
        }
      ]
    },
    {
      "id": 33,
      "title": "Dragon Ball Z, Vol. 6",
      "slug": 1586998338621,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319359",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319359-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319359-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569316382-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569316384-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319352-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 33,
          "title": "Martial artists",
          "slug": 1586998338621
        }
      ]
    },
    {
      "id": 34,
      "title": "Dragon Ball Z, Vol. 5",
      "slug": 1586998338622,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781569319345",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781569319345-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319345-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569315507-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569315507-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319340-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 34,
          "title": "Juvenile fiction",
          "slug": 1586998338622
        }
      ]
    },
    {
      "id": 35,
      "title": "Dragon Ball Z, Vol. 2",
      "slug": 1586998338623,
      "unit": null,
      "author": {
        "id": "OL7422945A",
        "name": "Meko the reactor",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7422945A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781421520650",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781421520650-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421520650-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319316-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319314-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421520656-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 35,
          "title": "Accessible book",
          "slug": 1586998338623
        }
      ]
    },
    {
      "id": 36,
      "title": "Dragon Ball Z, Vol. 7",
      "slug": 1586998338624,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569316988",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569316988-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569316988-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319367-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569316986-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319369-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 36,
          "title": "Martial artists",
          "slug": 1586998338624
        }
      ]
    },
    {
      "id": 37,
      "title": "The Dragon Ball Z legend",
      "slug": 1586998338625,
      "unit": null,
      "author": {
        "id": "OL3026257A",
        "name": "Satoshi Ikeda",
        "avatar": "http://covers.openlibrary.org/a/olid/OL3026257A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "DH Pub.,DH Publishing",
        "isbn": "0972312498",
        "edition": 2004,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0972312498-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0972312498-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780972312493-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 37,
          "title": "Dragon Ball Z (Television program)",
          "slug": 1586998338625
        }
      ]
    },
    {
      "id": 38,
      "title": "Dragon Ball Z, Vol. 8",
      "slug": 1586998338626,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569316996",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569316996-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569316996-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319375-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319376-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569316993-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 38,
          "title": null,
          "slug": 1586998338626
        }
      ]
    },
    {
      "id": 39,
      "title": "Dragon Ball Z. Temporada 1",
      "slug": 1586998338627,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Planeta",
        "isbn": "8416308977",
        "edition": 2015,
        "country": null,
        "languages": [
          "spa"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/8416308977-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/8416308977-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/978-84-16308-97-2-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 39,
          "title": null,
          "slug": 1586998338627
        }
      ]
    },
    {
      "id": 40,
      "title": "Dragon Ball Z. Temporada 1",
      "slug": 1586998338628,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Planeta",
        "isbn": "8416308055",
        "edition": 2015,
        "country": null,
        "languages": [
          "spa"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/8416308055-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/8416308055-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/978-84-16308-05-7-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 40,
          "title": null,
          "slug": 1586998338628
        }
      ]
    },
    {
      "id": 41,
      "title": "Dragon Ball Z. Temporada 1",
      "slug": 1586998338629,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Planeta",
        "isbn": "978-84-16308-07-1",
        "edition": 2015,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/978-84-16308-07-1-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/978-84-16308-07-1-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/8416308071-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 41,
          "title": null,
          "slug": 1586998338629
        }
      ]
    },
    {
      "id": 42,
      "title": "Dragon Ball Z : Temporada 1",
      "slug": 1586998338630,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Planeta",
        "isbn": "8416401063",
        "edition": 2015,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/8416401063-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/8416401063-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/978-84-16401-06-2-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 42,
          "title": null,
          "slug": 1586998338631
        }
      ]
    },
    {
      "id": 43,
      "title": "Dragon Ball Z, Vol. 1",
      "slug": 1586998338632,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1421520648",
        "edition": 2008,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1421520648-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421520648-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421520643-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 43,
          "title": "In library",
          "slug": 1586998338632
        }
      ]
    },
    {
      "id": 44,
      "title": "Dragon Ball Z, Volume 26",
      "slug": 1586998338633,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781421506364",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781421506364-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421506364-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/142150636X-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 44,
          "title": "Juvenile fiction",
          "slug": 1586998338633
        }
      ]
    },
    {
      "id": 45,
      "title": "Dragon Ball Z, Volume 22",
      "slug": 1586998338634,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781421500515",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781421500515-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421500515-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421500515-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 45,
          "title": "Juvenile fiction",
          "slug": 1586998338634
        }
      ]
    },
    {
      "id": 46,
      "title": "Dragon Ball Z, Vol. 4",
      "slug": 1586998338635,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319332",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319332-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319332-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319338-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 46,
          "title": "Martial artists",
          "slug": 1586998338635
        }
      ]
    },
    {
      "id": 47,
      "title": "Dragon Ball Z Postermagazin 01.",
      "slug": 1586998338636,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "9783551763914",
        "edition": 2002,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9783551763914-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551763914-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551763917-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 47,
          "title": null,
          "slug": 1586998338636
        }
      ]
    },
    {
      "id": 48,
      "title": "Dragon Ball Z (12 Issues)",
      "slug": 1586998338637,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Viz Communications",
        "isbn": "5552537181",
        "edition": null,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/5552537181-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/5552537181-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9785552537181-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 48,
          "title": "Comics",
          "slug": 1586998338637
        }
      ]
    },
    {
      "id": 49,
      "title": "Dragon Ball Z Postermagazin 04.",
      "slug": 1586998338638,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551763941",
        "edition": 2003,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551763941-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551763941-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551763945-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 49,
          "title": null,
          "slug": 1586998338638
        }
      ]
    },
    {
      "id": 50,
      "title": "Dragon Ball Z Postermagazin 03",
      "slug": 1586998338639,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551763933",
        "edition": 2002,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551763933-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551763933-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551763938-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 50,
          "title": null,
          "slug": 1586998338639
        }
      ]
    },
    {
      "id": 51,
      "title": "Dragon Ball Z Taschenbuch 07.",
      "slug": 1586998338640,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "355176607X",
        "edition": 2003,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/355176607X-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/355176607X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551766076-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 51,
          "title": null,
          "slug": 1586998338640
        }
      ]
    },
    {
      "id": 52,
      "title": "Dragon Ball Z, Vol. 12",
      "slug": 1586998338641,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319855",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319855-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319855-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319857-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 52,
          "title": null,
          "slug": 1586998338641
        }
      ]
    },
    {
      "id": 53,
      "title": "Dragon Ball Z, Vol. 10",
      "slug": 1586998338642,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319391",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319391-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319391-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319390-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 53,
          "title": null,
          "slug": 1586998338642
        }
      ]
    },
    {
      "id": 54,
      "title": "Dragon Ball Z, Volume 10",
      "slug": 1586998338643,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "159116043X",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/159116043X-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/159116043X-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591160434-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 54,
          "title": null,
          "slug": 1586998338643
        }
      ]
    },
    {
      "id": 55,
      "title": "Dragon Ball Z, Vol. 11",
      "slug": 1586998338644,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781569318072",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781569318072-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569318072-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569318077-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 55,
          "title": null,
          "slug": 1586998338644
        }
      ]
    },
    {
      "id": 56,
      "title": "Dragon Ball Z, Volume 1",
      "slug": 1586998338645,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569314977",
        "edition": 2000,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569314977-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569314977-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569314975-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 56,
          "title": null,
          "slug": 1586998338645
        }
      ]
    },
    {
      "id": 57,
      "title": "Dragon Ball Z, Volume 23",
      "slug": 1586998338646,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781421501482",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781421501482-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421501482-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421501481-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 57,
          "title": null,
          "slug": 1586998338646
        }
      ]
    },
    {
      "id": 58,
      "title": "Dragon Ball Z, Volume 24",
      "slug": 1586998338647,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1421502739",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1421502739-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421502739-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421502731-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 58,
          "title": null,
          "slug": 1586998338647
        }
      ]
    },
    {
      "id": 59,
      "title": "Dragon Ball Z, Volume 2",
      "slug": 1586998338648,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781569314982",
        "edition": 2000,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781569314982-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569314982-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569314985-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 59,
          "title": null,
          "slug": 1586998338648
        }
      ]
    },
    {
      "id": 60,
      "title": "Dragon Ball Z, Vol. 1",
      "slug": 1586998338649,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319308",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319308-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319308-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319307-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 60,
          "title": null,
          "slug": 1586998338649
        }
      ]
    },
    {
      "id": 61,
      "title": "Dragon Ball Z, Vol. 13",
      "slug": 1586998338650,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319863",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319863-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319863-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319864-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 61,
          "title": null,
          "slug": 1586998338650
        }
      ]
    },
    {
      "id": 62,
      "title": "Dragon Ball Z, Volume 3",
      "slug": 1586998338651,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569315310",
        "edition": 2001,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569315310-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569315310-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569315316-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 62,
          "title": null,
          "slug": 1586998338651
        }
      ]
    },
    {
      "id": 63,
      "title": "Dragon Ball Z, Vol. 3",
      "slug": 1586998338652,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781569319321",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781569319321-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319321-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319324-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 63,
          "title": null,
          "slug": 1586998338652
        }
      ]
    },
    {
      "id": 64,
      "title": "Dragon Ball Z, Volume 9",
      "slug": 1586998338653,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "9781591160069",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781591160069-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591160069-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591160065-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 64,
          "title": null,
          "slug": 1586998338653
        }
      ]
    },
    {
      "id": 65,
      "title": "Dragon Ball Z, Vol. 9",
      "slug": 1586998338654,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569319383",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569319383-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569319383-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569319383-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 65,
          "title": null,
          "slug": 1586998338654
        }
      ]
    },
    {
      "id": 66,
      "title": "Dragon Ball Z, Volume 20",
      "slug": 1586998338655,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1591168082",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1591168082-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1591168082-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781591168089-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 66,
          "title": null,
          "slug": 1586998338655
        }
      ]
    },
    {
      "id": 67,
      "title": "Dragon Ball Z, Volume 25",
      "slug": 1586998338656,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1421504049",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1421504049-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421504049-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421504049-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 67,
          "title": null,
          "slug": 1586998338656
        }
      ]
    },
    {
      "id": 68,
      "title": "Dragon Ball Z, Volume 4",
      "slug": 1586998338657,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "VIZ Media LLC",
        "isbn": "1569315329",
        "edition": 2001,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1569315329-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1569315329-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781569315323-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 68,
          "title": null,
          "slug": 1586998338657
        }
      ]
    },
    {
      "id": 69,
      "title": "Dragon Ball Z Budokai Tenkaichi",
      "slug": 1586998338658,
      "unit": null,
      "author": {
        "id": "OL1395518A",
        "name": "Eric Mylonas",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1395518A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761552499",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761552499-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761552499-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761552499-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 69,
          "title": null,
          "slug": 1586998338658
        }
      ]
    },
    {
      "id": 70,
      "title": "Dragon Ball Z Volume 8\r\n            \r\n                Dragon Ball Vizbig Editions Paperback",
      "slug": 1586998338659,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Viz Media",
        "isbn": "9781421520711",
        "edition": 2010,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781421520711-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421520711-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421520710-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 70,
          "title": "Internet Archive Wishlist",
          "slug": 1586998338659
        }
      ]
    },
    {
      "id": 71,
      "title": "Dragon Ball Z #16 in Japanese",
      "slug": 1586998338660,
      "unit": null,
      "author": {
        "id": "OL4167959A",
        "name": "Tong Li Comics",
        "avatar": "http://covers.openlibrary.org/a/olid/OL4167959A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tong Li Comics,Dong li chu ban she",
        "isbn": "9573431696",
        "edition": 1995,
        "country": null,
        "languages": [
          "chi",
          "jpn"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9573431696-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573431696-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573431695-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 71,
          "title": null,
          "slug": 1586998338660
        }
      ]
    },
    {
      "id": 72,
      "title": "Dragon Ball Z Taschenbuch 06. Drei Dramolette",
      "slug": 1586998338661,
      "unit": null,
      "author": {
        "id": "OL4326320A",
        "name": "Thomas Bernhard",
        "avatar": "http://covers.openlibrary.org/a/olid/OL4326320A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "9783551766069",
        "edition": 2003,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9783551766069-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551766069-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551766061-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 72,
          "title": null,
          "slug": 1586998338661
        }
      ]
    },
    {
      "id": 73,
      "title": "Dragon Ball Z 2007 Wall Calendar",
      "slug": 1586998338662,
      "unit": null,
      "author": {
        "id": "OL2879178A",
        "name": "Universe Publishing",
        "avatar": "http://covers.openlibrary.org/a/olid/OL2879178A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Universe Publishing",
        "isbn": "0789314398",
        "edition": 2006,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0789314398-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0789314398-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780789314390-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 73,
          "title": null,
          "slug": 1586998338662
        }
      ]
    },
    {
      "id": 74,
      "title": "Dragon Ball Z (How to Draw)",
      "slug": 1586998338663,
      "unit": null,
      "author": {
        "id": "OL3195636A",
        "name": "B. Watson",
        "avatar": "http://covers.openlibrary.org/a/olid/OL3195636A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "9780613943826",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9780613943826-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613943826-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613943821-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 74,
          "title": null,
          "slug": 1586998338663
        }
      ]
    },
    {
      "id": 75,
      "title": "Dragon Ball Z 13 (The Shonen Jump)",
      "slug": 1586998338664,
      "unit": null,
      "author": {
        "id": "OL3285456A",
        "name": "A. Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL3285456A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Tandem Library",
        "isbn": "9780613902502",
        "edition": 2003,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9780613902502-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780613902502-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0613902505-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 75,
          "title": null,
          "slug": 1586998338664
        }
      ]
    },
    {
      "id": 76,
      "title": "Dragon Ball Z Schüler-Kalender 2003/2004.",
      "slug": 1586998338665,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "9783551764027",
        "edition": 2003,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9783551764027-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551764027-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551764026-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 76,
          "title": null,
          "slug": 1586998338665
        }
      ]
    },
    {
      "id": 77,
      "title": "Dragon Ball Z Postermagazin 02. 10 Poster",
      "slug": 1586998338666,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551763925",
        "edition": 2002,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551763925-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551763925-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551763921-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 77,
          "title": null,
          "slug": 1586998338666
        }
      ]
    },
    {
      "id": 78,
      "title": "Dragon Ball Z, Bd.1, Die Entscheidungsschlacht",
      "slug": 1586998338667,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551766010",
        "edition": 2002,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551766010-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551766010-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551766014-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9793551766013-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 78,
          "title": null,
          "slug": 1586998338667
        }
      ]
    },
    {
      "id": 79,
      "title": "Dragon Ball, Bd.30, Die Gruppe Z",
      "slug": 1586998338668,
      "unit": null,
      "author": {
        "id": "OL1399629A,OL3183101A,OL3183102A",
        "name": "Akira Toriyama,Junko Iwamoto-Seebeck,Jürgen Seebeck",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A,OL3183101A,OL3183102A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551735700",
        "edition": 1999,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551735700-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551735700-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551735706-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 79,
          "title": null,
          "slug": 1586998338668
        }
      ]
    },
    {
      "id": 80,
      "title": "Dragon Ball Z: Budokai Tenkaichi 3",
      "slug": 1586998338669,
      "unit": null,
      "author": {
        "id": "OL1395518A",
        "name": "Eric Mylonas",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1395518A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761558683",
        "edition": 2007,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761558683-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761558683-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761558682-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 80,
          "title": null,
          "slug": 1586998338669
        }
      ]
    },
    {
      "id": 81,
      "title": "Dragon Ball Z Supersonic Warriors 2",
      "slug": 1586998338670,
      "unit": null,
      "author": {
        "id": "OL2838365A",
        "name": "Prima Games",
        "avatar": "http://covers.openlibrary.org/a/olid/OL2838365A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761552502",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761552502-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761552502-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761552505-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 81,
          "title": null,
          "slug": 1586998338670
        }
      ]
    },
    {
      "id": 82,
      "title": "How to draw action dragon ball z",
      "slug": 1586998338671,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Schoolastic",
        "isbn": null,
        "edition": null,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,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",
      "gallery": null,
      "categories": [
        {
          "id": 82,
          "title": null,
          "slug": 1586998338671
        }
      ]
    },
    {
      "id": 83,
      "title": "How to draw action dragon ball z",
      "slug": 1586998338672,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Schoolastic",
        "isbn": null,
        "edition": null,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADwCAYAAADxXop4AAAHPElEQVR4Xu3d23La2BaGUREOPpTf/0mNwYCsvthFtoMdix+WxBIZ46qrsjpxutpfNOXlmVnXdV0DEPjVdwDglHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcQWfQco53A4/P7n+XzezGazH89DrYRjQF3XNbvdrtntdk3btl9+fD6fN4vFonl8fBQRJmXWdV3Xd4jcfr9v3t7emnP+885ms+bh4aF5fHzsOwpVEI4BbDab5v39ve/YF8vlsnl+fvb0QfW8HC3s0mg0n55SoHbCUdB+v784Gkf7/b7Zbrd9x+CmhKOgzWbTd+Qs7+/vZ70bgVsRjkJ2u13z8fHRd+wsXdd56qBqwlHIfr/vOxIp/fNBScJRSOlP9I+PD+MK1RKOin13aQxqIBwFeDL40+er9dwn4SjAha3/a9u2Wa/X7qPcOeEoZIh4zOfzviNV6bru9zX74/focJ+Eo5Dlctl3JDLF755dr9d/vJd5e3szttwp4SikdDhWq1XfkapsNptvI7Fer4vdb6EewlHIcrksNlrMZrNJhWO32/31qn3Xdc16vfYC+c4IR0FPT099R87y9PQ0mTGlbdveq/bnnGFahKOgxWLRPD8/9x370Wq1mszTRtd1zevr61lPE7vdzjX6OyIcha1Wq4vj8fDwcPG/ewvnRuNou90Wv2HLbVjkM5DD4dBsNpuzbn/++vWreXp6Kv6CdUhvb28Xfbl1Nps1Ly8vxd4HcRvCMbDdbtccDodmv99/+dN5uVw2y+VyMqPJ0W63u+qC13w+b15eXibzHoevhGNkbdtO+k/bw+HQvL6+9h3rtVgsmpeXl75jVMo7jpFNORofHx/Ner3uO3aW4yjHNAkHZxniPsb7+/tF70m4PeGoWMlP0mud+6I3NdTPy7CEo1Kl3iWUsN1uB3sySO6CUA/hqNDxu0zbtr35pakxtq4f48F0CEeFttvt728M2263N3uUb9v2qi+7Jsb8tbiecFTmcDh8+YaxW3xCfd6tMRY7PKZDOCpy/GQ9dYuR5XS3xljs8JgG4ajI5xHlux8b6xP5b7s1xmKHR/2EoxLfjSinxhhZftqtMZYh7oxQlnBU4G8jyqmhR5aa9mbU9LHwlXBU4KcR5dRQI0uN9yns8KiXcNzYOSPKqXOeTlK1RePIDo86CccNnTuinCo9shwvm9Wq9o/vXyQcN5SMKKdKjSxTuDtxizsl/Ew4buSSEeXUJU8rnx0Oh6t/jrEc/4Y46iAcN3DpiHLqmpGl5G6NsdjhUQ/huIFrRpRTl4wsU74nYYdHHYRjZCVGlFPp08vUd2BM/eO/B8IxolIjyqlkZBlyt8ZYarxz8q8RjhGVHFFOnTOyjLFbYyx2eNyWcIykbdviI8qpn55m7nHfxT3+nqZCOEYyxv/gfxtZ7vkexBTuodwj4RjBOWNEKd/9WrfarTEWOzzGJxwDS15clvL56ebWuzXGYofHuIRjYGOMKKeOsapht8ZYpnw3ZYr8FZAD2m63oz9tfDabzf65T6TVatU8Pz/3HeNKnjgGcosR5dS/Fo3GDo/RCMdAbjGi8D92eAxPOAYw5ldR+J4dHsMSjsJqGFG477srNRCOwowo9bDDYzjCUZARpT52eAxDOAoxotTLDo/yhKMQI0rd7PAoSzgKMKLUzw6PsoTjSkaU6bDDoxzhuJIRZVrs8ChDOK5gRJkmOzyuJxwXMqJMmx0e1xGOC3ncnT47PC4nHBcwotwHOzwuJxwhI8p9advWzdILCEfIiHJ/7PDICUfAiHK/7PDILPoO8KfHx8e+I0yUF6Xns3MUiBlVgJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHEBMOICYcQEw4gJhwADHhAGLCAcSEA4gJBxATDiAmHEBMOICYcAAx4QBiwgHEhAOI/Qe0gyoTzEMWZQAAAABJRU5ErkJggg==",
      "gallery": null,
      "categories": [
        {
          "id": 83,
          "title": null,
          "slug": 1586998338672
        }
      ]
    },
    {
      "id": 84,
      "title": "How to draw action Dragon Ball Z",
      "slug": 1586998338673,
      "unit": null,
      "author": {
        "id": "OL2704062A",
        "name": "B. S. Watson",
        "avatar": "http://covers.openlibrary.org/a/olid/OL2704062A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Scholastic",
        "isbn": "0439437245",
        "edition": 2002,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0439437245-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0439437245-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780439437240-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 84,
          "title": "Accessible book",
          "slug": 1586998338673
        }
      ]
    },
    {
      "id": 85,
      "title": "How to Draw Dragon Ball Z",
      "slug": 1586998338674,
      "unit": null,
      "author": {
        "id": "OL34620A",
        "name": "Michael Teitelbaum",
        "avatar": "http://covers.openlibrary.org/a/olid/OL34620A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Scholastic Paperbacks",
        "isbn": "0439313481",
        "edition": 2001,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0439313481-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0439313481-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780439313483-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 85,
          "title": "Video game characters",
          "slug": 1586998338674
        }
      ]
    },
    {
      "id": 86,
      "title": "Dragon Ball Z. 3-in-1 Book 4",
      "slug": 1586998338675,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Viz Media",
        "isbn": "9781421520674",
        "edition": 2009,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9781421520674-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421520674-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421520672-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 86,
          "title": "Graphic novels",
          "slug": 1586998338675
        }
      ]
    },
    {
      "id": 87,
      "title": "Dragon Ball Z Book 2: The Frieza Saga",
      "slug": 1586998338676,
      "unit": null,
      "author": {
        "id": "OL2959589A",
        "name": "Mike Pondsmith",
        "avatar": "http://covers.openlibrary.org/a/olid/OL2959589A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Talsorian Games, Incorporated",
        "isbn": "1891933043",
        "edition": 2001,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/1891933043-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/1891933043-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781891933042-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 87,
          "title": null,
          "slug": 1586998338676
        }
      ]
    },
    {
      "id": 88,
      "title": "Dragon Ball Z Taschenbuch 04. Rache für Freezer.",
      "slug": 1586998338677,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551766045",
        "edition": 2003,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551766045-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551766045-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551766045-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 88,
          "title": null,
          "slug": 1586998338677
        }
      ]
    },
    {
      "id": 89,
      "title": "Dragon Ball Z Taschenbuch 03. Die Todeszone des Garlic Jr.",
      "slug": 1586998338678,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Carlsen",
        "isbn": "3551766037",
        "edition": 2002,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/3551766037-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/3551766037-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9783551766038-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 89,
          "title": null,
          "slug": 1586998338678
        }
      ]
    },
    {
      "id": 90,
      "title": "Dragon Ball Z. 3-in-1 Book 5",
      "slug": 1586998338679,
      "unit": null,
      "author": {
        "id": "OL1399629A",
        "name": "Akira Toriyama",
        "avatar": "http://covers.openlibrary.org/a/olid/OL1399629A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Viz Media",
        "isbn": "0329712438",
        "edition": 2009,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0329712438-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0329712438-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780329712433-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/1421520680-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9781421520681-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 90,
          "title": "Accessible book",
          "slug": 1586998338679
        }
      ]
    },
    {
      "id": 91,
      "title": "Dragon Ball Z \"It's Over 9,000!\" When Worldviews Collide",
      "slug": 1586998338680,
      "unit": null,
      "author": {
        "id": "OL7694400A",
        "name": "Derek Padula",
        "avatar": "http://covers.openlibrary.org/a/olid/OL7694400A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Derek Padula",
        "isbn": "9780983120537",
        "edition": 2012,
        "country": null,
        "languages": null,
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9780983120537-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780983120537-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0983120536-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 91,
          "title": null,
          "slug": 1586998338680
        }
      ]
    },
    {
      "id": 92,
      "title": "Dragonball Z",
      "slug": 1586998338681,
      "unit": null,
      "author": {
        "id": "OL29758A",
        "name": "Lois H. Gresh",
        "avatar": "http://covers.openlibrary.org/a/olid/OL29758A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "St. Martin's Paperbacks",
        "isbn": "9780312977573",
        "edition": 2000,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9780312977573-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780312977573-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/0312977573-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 92,
          "title": "Animated films",
          "slug": 1586998338681
        }
      ]
    },
    {
      "id": 93,
      "title": "Dragonball Z",
      "slug": 1586998338682,
      "unit": null,
      "author": {
        "id": "OL5360622A",
        "name": "Alicia Ashby",
        "avatar": "http://covers.openlibrary.org/a/olid/OL5360622A-S.jpg",
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Prima Games",
        "isbn": "0761552502",
        "edition": 2005,
        "country": null,
        "languages": [
          "eng"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/0761552502-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/0761552502-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9780761552505-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 93,
          "title": "Dragon Ball Z (Television program)",
          "slug": 1586998338682
        }
      ]
    },
    {
      "id": 94,
      "title": "Qi long zhu Z",
      "slug": 1586998338683,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9789573424031",
        "edition": 1995,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9789573424031-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573424031-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573424037-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 94,
          "title": "Graphic novels.",
          "slug": 1586998338683
        }
      ]
    },
    {
      "id": 95,
      "title": "Qi long zhu Z",
      "slug": 1586998338684,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9789573406389",
        "edition": 1993,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9789573406389-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573406389-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573406381-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 95,
          "title": "Graphic novels",
          "slug": 1586998338684
        }
      ]
    },
    {
      "id": 96,
      "title": "Qi long zhu Z",
      "slug": 1586998338685,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9789573418320",
        "edition": 1994,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9789573418320-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573418320-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573418320-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 96,
          "title": "Graphic novels",
          "slug": 1586998338685
        }
      ]
    },
    {
      "id": 97,
      "title": "Qi long zhu Z",
      "slug": 1586998338686,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9573452472",
        "edition": 1997,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9573452472-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573452472-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573452478-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 97,
          "title": "Graphic novels",
          "slug": 1586998338686
        }
      ]
    },
    {
      "id": 98,
      "title": "Qi long zhu Z",
      "slug": 1586998338687,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9573403226",
        "edition": 1993,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9573403226-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573403226-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573403227-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 98,
          "title": "Graphic novels",
          "slug": 1586998338687
        }
      ]
    },
    {
      "id": 99,
      "title": "Qi long zhu Z",
      "slug": 1586998338688,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9573421380",
        "edition": 1994,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9573421380-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573421380-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573421382-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 99,
          "title": "Graphic novels",
          "slug": 1586998338688
        }
      ]
    },
    {
      "id": 100,
      "title": "Qi long zhu Z",
      "slug": 1586998338689,
      "unit": null,
      "author": {
        "id": "undefined",
        "name": "null",
        "avatar": null,
        "bio": null,
        "email": null,
        "website": null,
        "socials": [
          {
            "id": null,
            "media": null,
            "profileLink": null
          }
        ]
      },
      "meta": {
        "publisher": "Dong li chu ban she",
        "isbn": "9573404567",
        "edition": 1993,
        "country": null,
        "languages": [
          "chi"
        ],
        "numberOfReader": null,
        "numberOfPage": null,
        "samplePDF": null
      },
      "price": 0,
      "salePrice": 0,
      "discountInPercent": 0,
      "description": null,
      "type": "book",
      "image": "http://covers.openlibrary.org/b/isbn/9573404567-L.jpg",
      "gallery": [
        {
          "url": "http://covers.openlibrary.org/b/isbn/9573404567-L.jpg"
        },
        {
          "url": "http://covers.openlibrary.org/b/isbn/9789573404569-L.jpg"
        }
      ],
      "categories": [
        {
          "id": 100,
          "title": "Graphic novels.",
          "slug": 1586998338689
        }
      ]
    }
  ]);
}
