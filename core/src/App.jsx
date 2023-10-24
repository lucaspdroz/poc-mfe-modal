import React from "react";
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import './i18n';
import "./index.css";

import Button from '@mui/material/Button';
import { Box, Fade, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CustomModal from "./components/customModal";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div>{t('isMFE')}</div>
      <CustomModal />
    </div>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
