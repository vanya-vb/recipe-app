import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = "G-H0ZLXSYFGW";

export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: location.pathname,
            });
        }
    }, [location]);
};