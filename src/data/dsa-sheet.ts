import { DSASection } from './dsa-types';
import { dsaSections1 } from './dsa-sections-1';
import { dsaSections2 } from './dsa-sections-2';
import { dsaSections3 } from './dsa-sections-3';
import { dsaSections4 } from './dsa-sections-4';
import { dsaSections5 } from './dsa-sections-5';
import { dsaSections6 } from './dsa-sections-6';
import { dsaSections7 } from './dsa-sections-7';

export type { DSAProblem, DSASubSection, DSASection } from './dsa-types';

export const dsaSheetData: DSASection[] = [
  ...dsaSections1,
  ...dsaSections2,
  ...dsaSections3,
  ...dsaSections4,
  ...dsaSections5,
  ...dsaSections6,
  ...dsaSections7,
];
