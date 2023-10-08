import { Location } from "../types/Location";
import { faker } from "@faker-js/faker";

const createRandomLocation = (): Location => ({
  id: faker.string.uuid(),
  title: faker.location.city(),
  location: faker.location.country(),
  image: faker.image.urlLoremFlickr({ category: "city" }),
});

const locations: Location[] = [...new Array(20)].map(() =>
  createRandomLocation()
);

export default locations;
