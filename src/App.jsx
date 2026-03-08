import { RouterProvider, createBrowserRouter, createMemoryRouter } from 'react-router-dom';
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

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/singapore', element: <Singapore /> },
  { path: '/singapore/should-i-get-a-car', element: <SGShouldIGetACar /> },
  { path: '/singapore/leasing-guide', element: <SGLeasingGuide /> },
  { path: '/singapore/insurance-guide', element: <SGInsuranceGuide /> },
  { path: '/singapore/licence-conversion', element: <SGLicenceConversion /> },
  { path: '/singapore/ev-guide', element: <SGEVGuide /> },
  { path: '/singapore/calculators', element: <Singapore section="calculators" /> },
  { path: '/singapore/garage-finder', element: <Singapore section="garages" /> },
  { path: '/hongkong', element: <HongKong /> },
  { path: '/hongkong/should-i-get-a-car', element: <HKShouldIGetACar /> },
  { path: '/hongkong/buying-guide', element: <HKBuyingGuide /> },
  { path: '/hongkong/frt-tax-explained', element: <HKFRTExplained /> },
  { path: '/hongkong/insurance-guide', element: <HKInsuranceGuide /> },
  { path: '/hongkong/mot-maintenance', element: <HKMOTMaintenance /> },
  { path: '/hongkong/licence-conversion', element: <HKLicenceConversion /> },
  { path: '/hongkong/ev-guide', element: <HKEVGuide /> },
  { path: '/hongkong/calculators', element: <HongKong section="calculators" /> },
  { path: '/hongkong/garage-finder', element: <HongKong section="garages" /> },
];

export default function App({ isClient, router }) {
  return <RouterProvider router={router} />;
}
