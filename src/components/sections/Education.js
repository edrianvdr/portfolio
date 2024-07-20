import Card from '../../components/Card';

// Education Images
import dmcfi from '../../assets/images/about/education/DMCFI.png';
import mc from '../../assets/images/about/education/MC.png';

import academicExcellenceAward1 from '../../assets/images/about/certificates/Academic Excellence Award - 1st Year - SY 2019-2020.jpg';
import academicExcellenceAward2 from '../../assets/images/about/certificates/Academic Excellence Award - 2nd Year - SY 2021-2022.jpg';
import academicExcellenceAward3 from '../../assets/images/about/certificates/Academic Excellence Award - 3rd Year - SY 2022-2023.jpg';
import tagisanNgTalino from '../../assets/images/about/certificates/Academic Excellence Award - 1st Year - SY 2019-2020.jpg';


const Education = () => {
    return (
        <>
            <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4 hover:text-gray-700 text-center">
                Education
            </h2>

            <div className="flex flex-wrap justify-center">
                <Card
                    title="Bachelor of Science in Computer Science"
                    description="Divine Mercy College Foundation, Inc / 2019, 2021-2024"
                    src={ dmcfi }
                    alt="Logo of Divine Mercy College Foundation Inc."
                />
                <Card
                    title="Special Science Class, High School"
                    description="Meycauayan College"
                    src={ mc }
                    alt="Logo of Meycauayan College"
                />
            </div>
        </>
    );
}

export default Education;
