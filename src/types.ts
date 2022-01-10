
export type Industry = '3d-design' | 'personal' | 'real-state' | 'other' | 'hospitality';

export interface FirestoreUser {
    id: string;
    country: string;
    email: string;
    industry: Industry;
    lastUpdate: string;
    registerDate: string;
    tourCount: number;
    name: string;
    planId: string;
    acceptNotifications: boolean;
    stripeCustomerId: string;
}

export interface Plan {
    id: string;
    benefits: string[];
    icon: string;
    label: string;
    maxTourCount: number;
    stripePriceCodeMonth: string;
    stripePriceCodeYear: string;
    monthlyPrice: number;
    yearlyPrice: number;
}

export interface Panorama {
    fileUrl: string;
    id: string;
    name: string;
    links: {
        POV: POV,
        targetPOV: POV & { toId: string }
    }[]
}

interface POV {
    pich: number;
    yaw: number;
}

export interface FirestoreTour {
    coverPicUrl: string;
    dateCreated: string;
    dateUpdated: string;
    description: string;
    hotness: number;
    likes: number;
    views: number;
    ownerId: string;
    panoramas: Panorama[]
    startPanorama: {
        POV: POV
    }
}