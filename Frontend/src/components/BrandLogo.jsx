import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import { Link } from 'react-router-dom';

const BrandLogo = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20">
      <ConnectWithoutContactOutlinedIcon className="h-6 w-6" />
    </div>
    <span className="text-slate-900 font-semibold">ConnectSphere</span>
  </div>
);

export default BrandLogo;
