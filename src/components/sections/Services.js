import React from 'react';

import Heading2 from '../../components/Heading2';
import Card from '../../components/Card';

// Awards Images
import webDevelopment from '../../assets/images/services/Web Development.png';
import webAccessibility from '../../assets/images/services/Web Accessibility.png';
import responsiveDesign from '../../assets/images/services/Responsive Design.png';
import websiteMaintenance from '../../assets/images/services/Website Maintenance.png';

const Services = () => {
    return (
        <>
            <Heading2 h2="Services" />

            <div className="flex flex-wrap justify-center grid grid-cols-2 lg xl:grid-cols-4 gap-4">
                <Card
                    title="Web Development"
                    description="Let's create your personal or business website following the best practices."
                    src={ webDevelopment }
                    alt="Less than, slash, and greater than icon"
                />
                <Card
                    title="Web Accessibility"
                    description="Audit and comply with Web Content Accessibility Guidelines to reach all users despite any disability."
                    src={ webAccessibility }
                    alt="Web Accessibility Icon"
                />
                <Card
                    title="Responsive Design"
                    description="Design your website to make it appealing and fit regardless of the size of the user's device."
                    src={ responsiveDesign }
                    alt="Devices from small screens up to extra large screens"
                />
                <Card
                    title="Website Maintenance"
                    description="Maintain your website up and running with the most updated content."
                    src={ websiteMaintenance }
                    alt="Icon of the web with a gear"
                />
            </div>
        </>
    );
}

export default Services;