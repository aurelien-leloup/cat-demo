import {InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities} from "angular-in-memory-web-api";
import {Breed} from "../models/breed";
import {ImageMocked} from "./image-mocked";


export class InMemoryCatService extends InMemoryDbService {

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl | undefined {
    const newUrl = url.replace(/\/images\/search/, '/images');
    return utils.parseRequestUrl(newUrl);
  }


  createDb(): { breeds: Breed[], images: ImageMocked[] } {
    return {
      breeds: [
        {
          "id": "bsho",
          "name": "British Shorthair",
          "temperament": "Affectionate, Easy Going, Gentle, Loyal, Patient, calm",
          "description": "The British Shorthair is a very pleasant cat to have as a companion, ans is easy going and placid. The British is a fiercely loyal, loving cat and will attach herself to every one of her family members. While loving to play, she doesn't need hourly attention. If she is in the mood to play, she will find someone and bring a toy to that person. The British also plays well by herself, and thus is a good companion for single people.",
          "image":
            {
              "id": "s4wQfYoEk",
              "width": 1600,
              "height": 1457,
              "url": "https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg"
            }
        }, {
          "id": "lihu",
          "name": "Dragon Li",
          "temperament": "Intelligent, Friendly, Gentle, Loving, Loyal",
          "description": "The Dragon Li is loyal, but not particularly affectionate. They are known to be very intelligent, and their natural breed status means that they're very active. She is is gentle with people, and has a reputation as a talented hunter of rats and other vermin.",
          "image":
            {
              "id": "BQMSld0A0",
              "width": 1080,
              "height": 1080,
              "url": "https://cdn2.thecatapi.com/images/BQMSld0A0.jpg"
            }
        },
        {
          "name": "Korat",
          "id": "kora",
          "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
          "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
          "image":
            {
              "id": "DbwiefiaY",
              "width": 1200,
              "height": 627,
              "url": "https://cdn2.thecatapi.com/images/DbwiefiaY.png"
            }
        }
      ],
      images: [
        {
          "breed_id": "kora",
          "id": "xPuWATvp9",
          "url": "https://cdn2.thecatapi.com/images/xPuWATvp9.jpg"
        },
        {
          "breed_id": "lihu",
          "id": "POPfuPq8t",
          "url": "https://cdn2.thecatapi.com/images/POPfuPq8t.jpg"
        },
        {
          breed_id: "bsho",
          "id": "2b2pFY0-t",
          "url": "https://cdn2.thecatapi.com/images/2b2pFY0-t.jpg"
        }
      ]
    }

  }


}
