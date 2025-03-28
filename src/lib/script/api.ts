import { PUBLIC_DEBUG_MODE } from '$env/static/public';

const DEBUG_MODE = PUBLIC_DEBUG_MODE === 'true'; // Ensure boolean conversion

interface Session {
  aud?: string;
  session_id?: string;
  jwt?: string;
}

interface SendOptions {
  method: string;
  path: string;
  data?: any;
  session?: Session;
  base: string;
}

async function send({ method, path, data, session, base }: SendOptions): 
  Promise<{ response: Response; json: any }> {
  
  const opts: RequestInit = {
    method,
    headers: new Headers(),
  };

  if (data) {
    prepareRequestBody(opts, data);
  }

  if (session) {
    attachSessionHeaders(opts.headers as Headers, session);
  }

  const fullPath = encodeURI(`${base}/${path}`);

  if (DEBUG_MODE) {
    console.debug(`[DEBUG] ${method} ${fullPath}`, opts);
  }

  try {
    const response = await fetch(fullPath, opts);
    const json = await response.json();

    if (DEBUG_MODE) {
      console.debug('[DEBUG] Response:', json, PUBLIC_DEBUG_MODE);
    }

    return { response, json };
  } catch (error) {
    console.error(`[ERROR] Request failed: ${method} ${fullPath}`, error);
    throw new Error('Network request failed');
  }
}

/**
 * Helper function to attach request body based on data type
 */
function prepareRequestBody(opts: RequestInit, data: any) {
  if (data.creds) {
    (opts as any).credentials = 'include';
    delete data.creds;
  }

  if (!data.type) {
    opts.headers = new Headers({ 'Content-Type': 'application/json' });
    opts.body = JSON.stringify(data);
  } else if (data.type === 'formData') {
    const formData = new FormData();
    formData.append('avatar', data.image[0]);
    opts.body = formData;
  }
}

/**
 * Helper function to attach session headers
 */
function attachSessionHeaders(headers: Headers, session: Session) {
  if (session.aud) headers.set('JWT_AUD', session.aud);
  if (session.session_id) headers.set('session_id', session.session_id);
  if (session.jwt) headers.set('Authorization', session.jwt.startsWith('Bearer') ? session.jwt : `Bearer ${session.jwt}`);
}

/**
 * Shortcut functions for API requests
 */
export const get = (base: string, path: string, session?: Session) => 
  send({ method: 'GET', path, session, base });

export const del = (base: string, path: string, data: any, session?: Session) =>
  send({ method: 'DELETE', path, data, session, base });

export const post = (base: string, path: string, data: any, session?: Session) =>
  send({ method: 'POST', path, data, session, base });

export const put = (base: string, path: string, data: any, session?: Session) =>
  send({ method: 'PUT', path, data, session, base });
