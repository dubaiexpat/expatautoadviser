import { ViteSSG } from 'vite-ssg';
import Layout from './components/Layout';
import Home from './pages/Home';
import Singapore from './pages/Singapore';
import HongKong from './pages/HongKong';
import SGShouldIGetACar from './pages/singapore/ShouldIGetACar';
import SGLeasingGuide from './pages/singapore/LeasingGuide';
import SGInsuranceGuide from './pages/singapore/InsuranceGuide';
import SGLicenceConversion from './pages/singapore/LicenceConversion';
import SGEVGuide from './pages/singapore/EVGuide';
import HKShouldIGetACar from './pages/hongkong/ShouldIGetACar';
import HKBuyingGuide from './pages/hongkong/BuyingGuide';
import HKFRTExplained from './pages/hongkong/FRTExplained';
import HKInsuranceGuide from './pages/hongkong/InsuranceGuide';
import HKMOTMaintenance from './pages/hongkong/MOTMaintenance';
import HKLicenceConversion from './pages/hongkong/LicenceConversion';
import HKEVGuide from './pages/hongkong/EVGuide';
import './index.css';

export const createApp = ViteSSG(
  // Root component — just a passthrough, routing is handled by vite-ssg
  { render: (_, { router }) => router.currentRoute.value.matched[0]?.components?.default ?? null },
  {
    routes: [
      { path: '/', component: Home },
      { path: '/singapore', component: Singapore },
      { path: '/singapore/should-i-get-a-car', component: SGShouldIGetACar },
      { path: '/singapore/leasing-guide', component: SGLeasingGuide },
      { path: '/singapore/insurance-guide', component: SGInsuranceGuide },
      { path: '/singapore/licence-conversion', component: SGLicenceConversion },
      { path: '/singapore/ev-guide', component: SGEVGuide },
      { path: '/hongkong', component: HongKong },
      { path: '/hongkong/should-i-get-a-car', component: HKShouldIGetACar },
      { path: '/hongkong/buying-guide', component: HKBuyingGuide },
      { path: '/hongkong/frt-tax-explained', component: HKFRTExplained },
      { path: '/hongkong/insurance-guide', component: HKInsuranceGuide },
      { path: '/hongkong/mot-maintenance', component: HKMOTMaintenance },
      { path: '/hongkong/licence-conversion', component: HKLicenceConversion },
      { path: '/hongkong/ev-guide', component: HKEVGuide },
    ],
  }
);
