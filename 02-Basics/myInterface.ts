interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string; // same as below
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// Interface can be re-opened or re-write or something, while Type Aliases cannot
interface User {
  gitHubToken: string;
}

interface NewAttrib {
  skill: 'fire' | 'water' | 'earth' | 'wind';
}

interface Admin extends User, NewAttrib {
  role: 'admin' | 'ta' | 'learner';
}

const kerbe: Admin = {
  dbId: 22,
  role: 'admin',
  gitHubToken: '1122',
  email: 'dc@adw.com',
  userId: 123,
  skill: 'fire',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'discount', dc: 20) => {
    return 10;
  },
};
