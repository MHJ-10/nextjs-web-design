import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box sx={{
        background: "red",
        borderRadius: "15px",
        p: 4,
        m:4,
      }}>
        <Typography variant="h1">hello world</Typography>
      </Box>
    </Container>
  );
}
