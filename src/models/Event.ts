import Sighting from "./Sighting";

export default interface Event {
  _id?: string;
  name?: string;
  description: string;
  category: string;
  date: string;
  time?: string;
  lat: number;
  lng: number;
  media?: string;
  uid: string;
  returned: boolean;
  type: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  preferedContact: string;
  sightings?: Sighting[];
}
