const fs = require('fs');
const path = require('path');

const files = [
  // app/(public)
  'app/(public)/layout.jsx',
  'app/(public)/page.jsx',
  'app/(public)/about/page.jsx',
  'app/(public)/login/page.jsx',
  'app/(public)/register/page.jsx',
  'app/(public)/register/steps/PersonalInfoStep.jsx',
  'app/(public)/register/steps/KYCUploadStep.jsx',
  'app/(public)/register/steps/VerifyStep.jsx',
  'app/(public)/legal/terms/page.jsx',
  'app/(public)/legal/privacy/page.jsx',

  // app/(dashboard)
  'app/(dashboard)/layout.jsx',
  'app/(dashboard)/dashboard/page.jsx',
  'app/(dashboard)/card/page.jsx',
  'app/(dashboard)/card/freeze/page.jsx',
  'app/(dashboard)/card/order-physical/page.jsx',
  'app/(dashboard)/investments/page.jsx',
  'app/(dashboard)/investments/[portfolioId]/page.jsx',
  'app/(dashboard)/investments/deposit-withdraw/page.jsx',
  'app/(dashboard)/p2p/page.jsx',
  'app/(dashboard)/p2p/escrow/page.jsx',
  'app/(dashboard)/p2p/escrow/[escrowId]/page.jsx',
  'app/(dashboard)/transactions/page.jsx',
  'app/(dashboard)/settings/page.jsx',
  'app/(dashboard)/settings/security/page.jsx',
  'app/(dashboard)/settings/profile/page.jsx',

  // app/(admin)
  'app/(admin)/layout.jsx',
  'app/(admin)/admin/page.jsx',
  'app/(admin)/users/page.jsx',
  'app/(admin)/users/[userId]/page.jsx',
  'app/(admin)/kyc-queue/page.jsx',
  'app/(admin)/cards/page.jsx',
  'app/(admin)/cards/physical-orders/page.jsx',
  'app/(admin)/cards/inventory/page.jsx',
  'app/(admin)/transactions/page.jsx',
  'app/(admin)/ai-ops/page.jsx',
  'app/(admin)/ai-ops/advisory-controls/page.jsx',
  'app/(admin)/ai-ops/profit-split/page.jsx',
  'app/(admin)/ai-ops/system-health/page.jsx',
  'app/(admin)/vault/page.jsx',

  // app/api
  'app/api/auth/[...nextauth]/route.js',
  'app/api/webhooks/stripe/route.js',

  // app/ root
  'app/layout.jsx',
  'app/globals.css',

  // components/layout
  'components/layout/PublicHeader.jsx',
  'components/layout/PublicFooter.jsx',
  'components/layout/DashboardSidebar.jsx',
  'components/layout/DashboardTopbar.jsx',
  'components/layout/AdminSidebar.jsx',
  'components/layout/AdminTopbar.jsx',

  // components/landing
  'components/landing/HeroSection.jsx',
  'components/landing/FounderCard.jsx',
  'components/landing/AIAdvisoryBanner.jsx',

  // components/dashboard
  'components/dashboard/overview/OverviewStats.jsx',
  'components/dashboard/card/NFCCardPreview.jsx',
  'components/dashboard/card/CardControls.jsx',
  'components/dashboard/card/OrderPhysicalCardButton.jsx',
  'components/dashboard/investment/AIYieldWidget.jsx',
  'components/dashboard/investment/ROIChart.jsx',
  'components/dashboard/investment/PortfolioSelector.jsx',
  'components/dashboard/investment/DepositWithdrawForm.jsx',
  'components/dashboard/p2p/P2PTransferWidget.jsx',
  'components/dashboard/p2p/RecipientIdInput.jsx',
  'components/dashboard/p2p/EscrowToggle.jsx',
  'components/dashboard/security/TwoFactorSetup.jsx',
  'components/dashboard/security/BiometricAuthPrompt.jsx',

  // components/admin
  'components/admin/UserManagementTable.jsx',
  'components/admin/KYCQueueTable.jsx',
  'components/admin/CardOpsPanel.jsx',
  'components/admin/AIOpsChart.jsx',
  'components/admin/ProfitSplitMatrix.jsx',
  'components/admin/SystemHealthPanel.jsx',

  // components/ui
  'components/ui/Button.jsx',
  'components/ui/Card.jsx',
  'components/ui/Modal.jsx',
  'components/ui/Table.jsx',
  'components/ui/Input.jsx',
  'components/ui/Badge.jsx',

  // lib
  'lib/api/axiosClient.js'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(fullPath)) {
    let content = '';
    const ext = path.extname(file);
    const basename = path.basename(file, ext);

    if (ext === '.jsx' || ext === '.js') {
      if (file.includes('route.js')) {
        content = `export async function GET(request) {\n  return new Response('Hello, Next.js!', { status: 200 });\n}\n`;
      } else if (file === 'lib/api/axiosClient.js') {
        content = `import axios from 'axios';\n\nconst axiosClient = axios.create({\n  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',\n});\n\nexport default axiosClient;\n`;
      } else {
        const componentName = basename === 'page' || basename === 'layout' 
          ? \`\${path.basename(path.dirname(file)).replace(/[^a-zA-Z0-9]/g, '')}\${basename.charAt(0).toUpperCase() + basename.slice(1)}\` 
          : basename;
        content = `export default function ${componentName}() {\n  return (\n    <div>\n      <h1>${componentName}</h1>\n    </div>\n  );\n}\n`;
      }
    } else if (ext === '.css') {
      content = `/* Globals CSS */\n`;
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Created \${file}`);
  } else {
    console.log(`Skipped \${file} (already exists)`);
  }
});
console.log('Done!');
