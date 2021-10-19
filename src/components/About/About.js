import React from 'react';

const About = () => {
    return (
        <div>
            <div className="about-container text-center">
                <div className="about-container-clone d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="display-1 text-white shadow-lg">WECOME TO ABOUT PAGE</h1>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="container my-5 py-md-5">
                <h1 className="display-3 text-primary mb-4">ABOUT US</h1>
                <p className="fs-5">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories. Specialized hospitals can help reduce health care costs compared to general hospitals.[2] Hospitals are classified as general, specialty, or government depending on the sources of income received.</p>
            </div>
        </div>
    );
};

export default About;