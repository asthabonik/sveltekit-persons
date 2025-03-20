/*
 * Make requests to some backend
 * Based on https://github.com/sveltejs/realworld/blob/master/src/node_modules/api.js
 */
import { PUBLIC_DEBUG_MODE } from '$env/static/public';

async function send({
  method,
  path,
  data,
  session,
  base,
}: {
  method: string;
  path: string;
  data?: any;
  session: any;
  base: string;
}): Promise<{
  response: any;
  json: any;
}> {
  // const fetch =
  //   typeof window !== 'undefined'
  //     ? window.fetch
  //     : await import('node-fetch').then((mod) => mod.default);
  const opts: any = { method, headers: {} };

  if (data) {

    if (data.creds) {
      opts.credentials = 'include';
      delete data.creds;
    }

    if (!data.type) {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(data);      
    } 
    else if (data.type === 'formData') {
      // console.log('formData gdgd', data);
      // TODO: refactor this to work better for file uploads
      const formData = new FormData();
      formData.append('avatar', data.image[0]);
      opts.body = formData;
      // NOTE: for `fetch` we don't send Content-Type
      // opts.headers['Content-Type'] = 'multipart/form-data';
    }
  }

  if (session) {
    // Set the JWT_AUD header
    if (session.aud) {
      opts.headers['JWT_AUD'] = session.aud;
    }
    // Set the session_id header
    if (session.session_id) {
      opts.headers['session_id'] = session.session_id;
    }
    
    // Set the Authorization header
    if (session.jwt) {
      if (session.jwt.includes('Bearer')) {
        opts.headers['Authorization'] = session.jwt;
      } else {
        opts.headers['Authorization'] = `Bearer ${session.jwt}`;
      }
    }
  }

  const fullPath: string = encodeURI(`${base}/${path}`);
  // opts.headers['jwt-tukun-mama'] =  `jwt-tukun-tion`;    

  if (PUBLIC_DEBUG_MODE == true) {    
    console.log(method, fullPath);
    console.log(opts);
  }

  // console.log('fullPath', fullPath);
  // console.log('opts', opts);

  const response = await fetch(fullPath, opts);
  const json: any = await response.json();    
  // console.log('From api.ts DEBUG:', json);
  if (PUBLIC_DEBUG_MODE == true) {
    console.log('DEBUG:', json);
  }
  return { response, json };
}

/*
 * Shortcut methods for send
 */
export function get(
  base: string,
  path: string,  
  session?: any
): Promise<{
  response: any;
  json: any;
}> {
  return send({ method: 'GET', path, session, base });
}

export function del(
  base: string,
  path: string,
  data: any,
  session?: any
): Promise<{
  response: any;
  json: any;
}> {
  return send({ method: 'DELETE', path, data, session, base });
}

export function post(
  base: string,
  path: string,
  data: any,
  session?: any
): Promise<{
  response: any;
  json: any;
}> {
  return send({ method: 'POST', path, data, session, base });
}

export function put(
  base: string,
  path: string,
  data: any,
  session?: any
): Promise<{
  response: any;
  json: any;
}> {
  return send({ method: 'PUT', path, data, session, base });
}