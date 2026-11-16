import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function screenSize() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('sm'));  // Triggered true if < 600px

}