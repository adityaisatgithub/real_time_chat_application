import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css';

const Footer = ({ className }) => {
  return (
    <Box className={`footer ${className}`}>
      <Typography variant="body2" className="footer-text">
        <CopyrightIcon fontSize="small" /> <span className="hotpink">2025</span> All rights reserved. Unauthorized use will result in <span className="red-bold">endless legal drama</span> and unsolicited emails. Your inbox will never be the same again.
        But seriously!! Please don&apos;t steal, it&apos;s not cool. Just ask for <span className="red-bold">permission</span>.
      </Typography>
    </Box>
  );
};

export default Footer;
