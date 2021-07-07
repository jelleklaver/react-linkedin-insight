export class LinkedInTag {
    initialized: boolean;
    disabled: boolean;
    partnerId: string;
    subDomain: string;

    constructor();

    warn(...args: any): void;
    verifyInit(): boolean;
    init(partnerId: string, subDomain?: string, disabled?: boolean): void;
    track(conversionId?: string, partnerId?: string, subDomain?: string): void;
  }

  declare var instance: LinkedInTag;
  export default instance;
