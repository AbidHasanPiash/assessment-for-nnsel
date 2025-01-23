// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const isServer = typeof window === 'undefined';
const API_URL = isServer
  ? process.env.API_URL // Server-side URL
  : process.env.NEXT_PUBLIC_API_URL; // Client-side URL
export default {
    BASE_URL: `${API_URL}`,

    //────────────────────────────────────────────
    //? API: ---- Work
    //────────────────────────────────────────────
    GET_WORK_LIST : '/work'
}