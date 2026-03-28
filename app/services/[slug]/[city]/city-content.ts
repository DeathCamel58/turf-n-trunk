export interface CityInfo {
  name: string;
  intro: string;
  nearbyAreas: string;
}

export const CITY_CONTENT: Record<string, CityInfo> = {
  "peachtree-city": {
    name: "Peachtree City",
    intro:
      "Peachtree City's unique cart-path community and lush tree canopy make it one of the most beautiful places to live in Georgia — and one of the most rewarding to landscape. From the established neighborhoods around Lake Peachtree to newer developments along the paths, Turf n Trunk understands the specific needs of Peachtree City properties: shade-tolerant grass varieties, careful tree management around cart paths, and landscape designs that complement the natural character of the community.",
    nearbyAreas:
      "We also serve nearby areas including Fayetteville, Tyrone, and southern Fayette County.",
  },
  fayetteville: {
    name: "Fayetteville",
    intro:
      "As the county seat of Fayette County, Fayetteville blends historic charm with growing suburban neighborhoods. Whether you're in one of the established homes near the downtown square or a newer subdivision off Highway 54, Turf n Trunk provides landscaping services tailored to Fayetteville's mix of property styles. Our team is familiar with the area's clay-heavy soils, mature hardwood trees, and the aesthetic standards that Fayetteville homeowners expect.",
    nearbyAreas:
      "We also serve neighboring Peachtree City, Tyrone, and the surrounding Fayette County area.",
  },
  senoia: {
    name: "Senoia",
    intro:
      "Senoia's small-town character and beautifully maintained historic district set a high bar for property appearance. Whether you live in the charming homes near downtown or in one of the growing neighborhoods along the Senoia corridor, Turf n Trunk delivers landscaping services that match the community's pride in curb appeal. We understand the unique mix of historic and new construction in the area and tailor our approach accordingly.",
    nearbyAreas:
      "We also serve the nearby communities of Peachtree City, Newnan, and southern Coweta County.",
  },
  newnan: {
    name: "Newnan",
    intro:
      "Newnan's tree-lined streets and stately homes make it one of Coweta County's most attractive communities. From the historic districts to the expanding neighborhoods along the I-85 corridor, Turf n Trunk provides professional landscaping that enhances Newnan properties year-round. Our crews are experienced with the area's soil conditions, the mix of sun and shade typical of Newnan lots, and the level of quality that homeowners here expect.",
    nearbyAreas:
      "We also serve nearby Senoia, Peachtree City, and the greater Coweta County area.",
  },
  tyrone: {
    name: "Tyrone",
    intro:
      "Tyrone's quiet, family-friendly neighborhoods and generous lot sizes make it an ideal community for homeowners who take pride in their outdoor spaces. Turf n Trunk serves Tyrone residents with the same professional landscaping and lawn care that our Peachtree City and Fayetteville customers have come to rely on. Whether you need regular lawn maintenance or a complete landscape overhaul, we're right in your backyard.",
    nearbyAreas:
      "We also serve neighboring Peachtree City, Fayetteville, and the surrounding Fayette County area.",
  },
};
