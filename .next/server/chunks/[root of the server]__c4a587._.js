module.exports = {

"[node]/.next/server/app/api/auth/[...nextauth]/route/actions.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),
"[project]/app/api/auth/[...nextauth]/auth.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "authOptions": ()=>authOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/credentials.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const authOptions = {
    pages: {
        signIn: "/auth/login"
    },
    session: {
        strategy: "jwt"
    },
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"]({
            name: "Sign in",
            credentials: {
                username: {
                    label: "Name",
                    type: "username",
                    placeholder: "Name"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                console.log("credentials", credentials);
                const res = await fetch("https://dummyjson.com/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                        expiresInMins: 1
                    })
                });
                const user = await res.json();
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user, account, profile, isNewUser }) {
            console.log("token", token);
            if (account) {
                token.user = user;
            }
            return token;
        },
        async session ({ session, token }) {
            session.user = token.user;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};

})()),
"[project]/app/api/auth/[...nextauth]/route.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>handler,
    "POST": ()=>handler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$auth$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/auth/[...nextauth]/auth.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const handler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$auth$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
;

})()),

};

//# sourceMappingURL=[root of the server]__c4a587._.js.map