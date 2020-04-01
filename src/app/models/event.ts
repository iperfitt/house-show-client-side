import { EventAddress } from './eventaddress';

export class Event {

    constructor(
        public eventId: number,
        public eventName: string,
        public eventAddress: EventAddress,
        public eventGenre: string
      ) {  }
}
