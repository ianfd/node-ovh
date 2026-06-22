export type OvhEndpoint = 'ovh-eu' | 'ovh-ca' | 'ovh-us';

export interface EndpointConfig {
  baseUrl: string;
  legacyBaseUrl: string;
  tokenUrl: string;
  authTimeUrl: string;
  schemaIndexUrl: string;
}

export const endpoints: Record<OvhEndpoint, EndpointConfig> = {
  'ovh-eu': {
    baseUrl: 'https://api.eu.ovhcloud.com/v2',
    legacyBaseUrl: 'https://eu.api.ovh.com/1.0',
    tokenUrl: 'https://www.ovh.com/auth/oauth2/token',
    authTimeUrl: 'https://api.eu.ovhcloud.com/v1/auth/time',
    schemaIndexUrl: 'https://api.eu.ovhcloud.com/v2',
  },
  'ovh-ca': {
    baseUrl: 'https://ca.api.ovh.com/v2',
    legacyBaseUrl: 'https://ca.api.ovh.com/1.0',
    tokenUrl: 'https://ca.ovh.com/auth/oauth2/token',
    authTimeUrl: 'https://ca.api.ovh.com/v1/auth/time',
    schemaIndexUrl: 'https://ca.api.ovh.com/v2',
  },
  'ovh-us': {
    baseUrl: 'https://api.us.ovhcloud.com/v2',
    legacyBaseUrl: 'https://api.us.ovhcloud.com/1.0',
    tokenUrl: 'https://us.ovhcloud.com/auth/oauth2/token',
    authTimeUrl: 'https://api.us.ovhcloud.com/v1/auth/time',
    schemaIndexUrl: 'https://api.us.ovhcloud.com/v2',
  },
};
