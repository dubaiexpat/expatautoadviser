import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singapore" element={<Singapore />} />
      <Route path="/singapore/should-i-get-a-car" element={<SGShouldIGetACar />} />
      <Route path="/singapore/leasing-guide" element={<SGLeasingGuide />} />
      <Route path="/singapore/insurance-guide" element={<SGInsuranceGuide />} />
      <Route path="/singapore/licence-conversion" element={<SGLicenceConversion />} />
      <Route path="/singapore/ev-guide" element={<SGEVGuide />} />
      <Route path="/hongkong" element={<HongKong />} />
      <Route path="/hongkong/should-i-get-a-car" element={<HKShouldIGetACar />} />
      <Route path="/hongkong/buying-guide" element={<HKBuyingGuide />} />
      <Route path="/hongkong/frt-tax-explained" element={<HKFRTExplained />} />
      <Route path="/hongkong/insurance-guide" element={<HKInsuranceGuide />} />
      <Route path="/hongkong/mot-maintenance" element={<HKMOTMaintenance />} />
      <Route path="/hongkong/licence-conversion" element={<HKLicenceConversion />} />
      <Route path="/hongkong/ev-guide" element={<HKEVGuide />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
