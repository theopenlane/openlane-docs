import React from 'react';
import {AutomationArt, ComplianceArt, ExposureArt, GrcArt, RegistryArt, TrustArt} from '@theopenlane/react-animations';
import '@theopenlane/react-animations/styles.css';

/* The illustrated panels at the top of each area card, keyed by the area key
   used in the AREAS list. Edit text and links in index.tsx; the artwork lives
   in @theopenlane/react-animations. */

const ART: Record<string, React.ComponentType> = {
  'grc-fundamentals': GrcArt,
  'compliance-management': ComplianceArt,
  'registry': RegistryArt,
  'exposure': ExposureArt,
  'trust-center': TrustArt,
  'automation': AutomationArt,
};

export default function CardArt({ area }: { area: string }) {
  const Art = ART[area];
  return Art ? <Art /> : null;
}
