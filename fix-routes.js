const fs = require('fs');
const path = require('path');

console.log('Fixing route conflicts...');

// 1. Fix root page conflict (app/page.tsx vs app/(public)/page.jsx)
const rootPage = path.join(__dirname, 'app', 'page.tsx');
const rootPageBak = path.join(__dirname, 'app', 'page.tsx.bak');
if (fs.existsSync(rootPage)) {
    fs.renameSync(rootPage, rootPageBak);
    console.log('✅ Renamed app/page.tsx to app/page.tsx.bak to resolve root path conflict.');
} else {
    console.log('ℹ️ app/page.tsx not found, skipping.');
}

// 2. Fix admin route conflict (app/(admin)/transactions vs app/(dashboard)/transactions)
const adminOld = path.join(__dirname, 'app', '(admin)');
const adminNew = path.join(__dirname, 'app', 'admin');
if (fs.existsSync(adminOld)) {
    fs.renameSync(adminOld, adminNew);
    console.log('✅ Renamed app/(admin) to app/admin to resolve /transactions conflict.');
} else {
    console.log('ℹ️ app/(admin) not found or already renamed.');
}

console.log('🎉 Done! Please restart your Next.js server (npm run dev) if it does not automatically update.');
