/** @type {import('@remix-run/dev').AppConfig} */
export default {
    appDirectory: 'app',
    ignoredRouteFiles: ['**/.*'],
    watchPaths: ['./public', './.env'],
    server: './server.ts',
}
