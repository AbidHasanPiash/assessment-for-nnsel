const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default {
    BASE_URL: `${BASE_URL}`,

    //────────────────────────────────────────────
    //? API: ---- Auth
    //────────────────────────────────────────────
    MEMBER_LOGIN: '/auth/login',
    ADMIN_LOGIN: '/auth/admin/login',
    SUPER_ADMIN_LOGIN: '/auth/super-admin/login',

    REFRESH_TOKEN: '/auth/refresh-token',
}