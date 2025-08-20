# Fertility Healthcare App

A modern, responsive fertility healthcare application built with React and Tailwind CSS. This application provides a comprehensive platform for fertility health management and care coordination.

## Features

- **Splash Screen**: Welcoming introduction for patients and healthcare providers
- **Welcome Interface**: User-friendly landing page with healthcare navigation
- **Package Selection**: Browse and select from various fertility treatment packages
- **Booking Confirmation**: Secure appointment and treatment booking confirmation
- **Responsive Design**: Optimized for all device sizes including mobile and tablet
- **Modern UI**: Clean, healthcare-focused design with calming gradient backgrounds

## Tech Stack

- **Frontend**: React 18 with javaScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Language**: TypeScript/JSX

## Project Structure

```
src/
├── components/
│   ├── splashScreen.jsx         # Initial welcome screen for users
│   ├── WelcomeScreen.jsx        # Main healthcare dashboard/landing
│   ├── PackageSelection.jsx     # Fertility treatment package selection
│   └── BookingConfirmation.jsx  # Appointment/treatment confirmation
├── App.jsx                      # Main application with routing
├── main.jsx                     # Application entry point
└── index.css                    # Tailwind CSS and global styles
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fertility-healthcare-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to "https://huhahealth.vercel.app/"

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build

## Application Routes

- `/` - Welcome screen and main healthcare dashboard
- `/packages` - Browse fertility treatment packages and services
- `/confirmation` - Appointment and treatment booking confirmation

## Design Philosophy

The application features a calming healthcare-appropriate design with a gradient background (`from-blue-50 via-white to-green-50`) that creates a trustworthy, medical environment. The design prioritizes:

- **Accessibility**: Clear navigation and readable typography
- **Trust**: Professional healthcare aesthetic
- **Responsiveness**: Seamless experience across all devices
- **User Experience**: Intuitive flow for patients and providers

s

## Key Features by Component

### SplashScreen
- Initial loading and welcome experience
- Brand introduction for the healthcare facility

### WelcomeScreen
- Main dashboard for patient navigation
- Overview of available services and information

### PackageSelection
- Detailed fertility treatment options
- Service packages and pricing information
- Treatment plan comparisons

### BookingConfirmation
- Secure appointment scheduling
- Treatment plan confirmation
- Patient information verification

## Development Guidelines

### Adding New Components

1. Create component files in `src/components/`
2. Use TypeScript for type safety
3. Follow healthcare UI/UX best practices
4. Add appropriate routes in `App.jsx`

### Styling Standards

- Use Tailwind CSS utility classes
- Maintain healthcare-appropriate color schemes
- Ensure WCAG accessibility compliance
- Follow mobile-first responsive design
- Use consistent spacing and typography

### Code Quality

- JavaScript for type safety
- ESLint for code quality
- Component-based architecture
- Proper error handling for healthcare data

## Security Considerations

- Patient data privacy (HIPAA compliance considerations)
- Secure routing for sensitive information
- Input validation for all forms
- Secure API communications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Patient portal integration
- Electronic health records (EHR) connectivity
- Telemedicine capabilities
- Appointment scheduling system
- Payment processing integration
- Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Follow coding standards and healthcare compliance guidelines
4. Submit a pull request with detailed description





## Compliance

This application is designed with healthcare standards in mind. Ensure proper compliance with:
- HIPAA (Health Insurance Portability and Accountability Act)
- Local healthcare regulations
- Data privacy requirements

---

**Note**: This application is for healthcare management purposes. Always consult with qualified healthcare professionals for medical advice and treatment decisions.
