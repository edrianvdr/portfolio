import React from 'react';

import Heading2 from '../../components/Heading2';
import Card from '../../components/Card';

// Awards Images
import ae1y from '../../assets/images/about/certificates/Academic Excellence - 1st year.png';
import ae2y from '../../assets/images/about/certificates/Academic Excellence - 2nd year.png';
import ae3y1s from '../../assets/images/about/certificates/Academic Excellence - 3rd year 1st sem.png';
import ae3y2s from '../../assets/images/about/certificates/Academic Excellence - 3rd year 2nd sem.png';
import ae4y from '../../assets/images/about/certificates/Academic Excellence - 4th year.png';
import championTnt from '../../assets/images/about/certificates/Champion of DMCFI Tagisan ng Talino 2023.png';
import championLmc from '../../assets/images/about/certificates/Champion of Logo Making Contest.png'

const Awards = () => {
    return (
        <>
            <Heading2 h2="Awards" />

            <div className="flex flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg xl:grid-cols-4">
                <Card
                    title="Academic Excellence Award (1st Year)"
                    description="Received on my 1st year in college during the school year 2019 to 2020"
                    src={ ae1y }
                    alt="Academic Excellence Award for School Year 2018 to 2020"
                />
                <Card
                    title="Academic Excellence Award (2nd Year)"
                    description="Received on my 2nd year in college during the school year 2021 to 2022"
                    src={ ae2y }
                    alt="Academic Excellence Award for School Year 2021 to 2022"
                />
                <Card
                    title="Academic Excellence Award (3rd Year 1st sem)"
                    description="Received on my 3rd year 1st sem in college during the school year 2022 to 2023"
                    src={ ae3y1s }
                    alt="Academic Excellence Award for School Year 2022 to 2023"
                />
                <Card
                    title="Academic Excellence Award (3rd Year 2nd sem)"
                    description="Received on my 3rd year 2nd sem in college during the school year 2022 to 2023"
                    src={ ae3y2s }
                    alt="Academic Excellence Award for School Year 2022 to 2023"
                />
                <Card
                    title="Academic Excellence Award (4th Year)"
                    description="Received on my 4th year in college during the school year 2023 to 2024"
                    src={ ae4y }
                    alt="Academic Excellence Award for School Year 2023 to 2024"
                />
                <Card
                    title="Champion of DMCFI Tagisan ng Talino 2023"
                    description="A quiz bee contest competed by the entire high school and college departments."
                    src={ championTnt }
                    alt="Certificate of Recognition for winning the DMCFI Tagisan ng Talino 2023"
                />
                <Card
                    title="Champion of CCSS Logo Making Contest"
                    description="The contest for the official logo of our college department."
                    src={ championLmc }
                    alt="Certificate of Recognition for winning the CCSS Logo Making Contest"
                />
            </div>
        </>
    );
}

export default Awards;