function warn(...args: any): void;
export function verifyInit(): boolean;
export function init(partnerId: string, subDomain?: string, disabled?: boolean): void;
export function track(conversionId?: string, partnerId?: string, subDomain?: string): void;

export default LinkedInTag;
