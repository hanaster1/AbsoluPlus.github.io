// creator: myhamster1
// website main page
// creator: myhamster1
// website main page

import { Container, Typography, Box, Button } from '@mui/material';
import { LocalDrink, Build, Opacity, Speed, VerifiedUser, Lightbulb, CleaningServices } from "@mui/icons-material";
import roboticImage from '/assets/images/robot-arm.png';

export function App() {
  return (
    <Box sx={{ fontFamily: 'sans-serif' }}>
      {/* Hero */}
      <Box sx={{ backgroundColor: '#06314d', color: 'white', py: 6 }}>
        <Container>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={4}>
            <Box flex={1}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Automating Clean Packaging for the Future
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Professional solutions for beverage and septic packaging systems.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Contact Us
              </Button>
            </Box>

            <Box flex={1} display="flex" justifyContent="flex-end">
              <img src={roboticImage} alt="automation" style={{ width: '60%' }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Solutions */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container>
          <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom>
            Our Solutions
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
            {[
              { icon: <LocalDrink fontSize="large" />, label: "Beverage Packaging Automation" },
              { icon: <Build fontSize="large" />, label: "Custom Industrial Automation" },
              { icon: <Opacity fontSize="large" />, label: "Clean & Septic-Safe Design" },
            ].map((item, index) => (
              <Box width={{ xs: '100%', md: '30%' }} textAlign="center" key={index}>
                {item.icon}
                <Typography variant="subtitle1" mt={1}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom>
            Why Choose Us
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
            {[
              { icon: <Lightbulb />, title: "Smart Technology", desc: "Smart tech for precise automation." },
              { icon: <CleaningServices />, title: "Sanitary Processes", desc: "Efficiency and hygiene at every step." },
              { icon: <Speed />, title: "Efficiency & Speed", desc: "Fast delivery, long-term reliability." },
              { icon: <VerifiedUser />, title: "Trusted Partner", desc: "Reliable for industrial clients." },
            ].map((item, i) => (
              <Box width={{ xs: '100%', md: '30%' }} key={i} textAlign="center">
                {item.icon}
                <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact */}
      <Box sx={{ backgroundColor: '#f0f0f0', py: 4 }}>
        <Container>
          <Typography variant="h6" fontWeight="bold">Address</Typography>
          <Typography>123 Automation Way, Suite 100, Bangkok, Thailand</Typography>
          <Typography>Email: info@example.com</Typography>
          <Typography>Phone: +66 123 456 789</Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App

// Backup the original code 
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/