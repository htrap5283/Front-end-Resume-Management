import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { useDispatch } from 'react-redux';
import '../CSS/EmpDetailsForm.css';
import { updateSkills } from '../redux/skillSlice';
import { resetProjectState } from '../redux/projectSlice';
import { KeyboardArrowLeft, Visibility, Add, Delete } from '@mui/icons-material';
import { Fab, IconButton } from '@mui/material';
import { addSkillsCertificates, updateCertificationName, updateCertificationStartDate, updateCertificationEndDate } from '../redux/certificateSlice';



const EmpSkillCertificationForm = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;
  const { projects } = location.state || {};
  const [skills, setSkills] = useState(state?.skills || []);
  const [certificates, setCertifications] = useState(state?.certificates || [
    {
      certificationName: '',
      certificationStartDate: '',
      certificationExpiryDate: '',
      errors: {},
    },
  ]);



  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCertifications = [...certificates];
    updatedCertifications[index] = { ...updatedCertifications[index], [name]: value };

    if (name === 'certificationExpiryDate') {
      const startDate = updatedCertifications[index].certificationStartDate;
      const expiryDate = value;
      if (startDate && expiryDate) {
        const startDateObj = new Date(startDate);
        const expiryDateObj = new Date(expiryDate);
        if (expiryDateObj <= startDateObj) { // Use <= instead of <
          updatedCertifications[index].errors.certificationExpiryDate = 'Expiry Date cannot be before or equal to Start Date';
        } else {
          updatedCertifications[index].errors.certificationExpiryDate = '';
        }
      }
    }

    if (['certificationStartDate', 'certificationExpiryDate'].includes(name)) {
      const yearPattern = /^\d{4}$/;
      const currentDate = new Date(value);
      const year = currentDate.getFullYear().toString();
      if (!year.match(yearPattern) || currentDate.getFullYear() < 1950 || currentDate.getFullYear() > 2099) {
        const errors = { ...updatedCertifications[index].errors };
        errors[name] = 'Please enter a valid year between 1950 and 2099';
        updatedCertifications[index].errors = errors;
      } else {
        const errors = { ...updatedCertifications[index].errors };
        delete errors[name];
        updatedCertifications[index].errors = errors;
      }
    }
    setCertifications(updatedCertifications);
  };

  const handleAddCertification = () => {
    const newCertificate = {
      certificationName: '',
      certificationStartDate: '',
      certificationExpiryDate: '',
      errors: {},
    };
    setCertifications([...certificates, newCertificate]);
  };



  const handleRemoveCertification = (index) => {
    const updatedCertifications = [...certificates];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };



  const handlePreview = () => {
    if (validateForm()) {
      certificates.forEach((certificate, index) => {
        dispatch(updateCertificationName({ index, name: certificate.certificationName }));
        dispatch(updateCertificationStartDate({ index, startDate: certificate.certificationStartDate }));
        dispatch(updateCertificationEndDate({ index, endDate: certificate.certificationExpiryDate }));
      });
      skills.forEach((skill, index) => {
        dispatch(updateSkills({ index, skills: skills }));
      });
      navigate('/display', { state: { ...state, skills, certificates } });
    }
  };



  const validateForm = () => {
    let formIsValid = true;
    const updatedCertifications = [...certificates];

    for (let i = 0; i < updatedCertifications.length; i++) {
      const certification = updatedCertifications[i];
      const errors = {};

      if (certification.certificationName.trim() === '') {
        errors.certificationName = 'Please enter a certification name';
        formIsValid = false;
      }

      if (certification.certificationStartDate.trim() === '') {
        errors.certificationStartDate = 'Please select a certification start date';
        formIsValid = false;
      }

      if (certification.certificationExpiryDate.trim() === '') {
        errors.certificationExpiryDate = 'Please select a certification expiry date';
        formIsValid = false;
      }

      updatedCertifications[i].errors = errors;
      dispatch(addSkillsCertificates({
        index: i,
        certificate: {
          certificationName: certification.certificationName,
          certificationStartDate: certification.certificationStartDate,
          certificationExpiryDate: certification.certificationExpiryDate,
        },
      }));
    }
    setCertifications(updatedCertifications);
    return formIsValid;
  };



  const handlePrevious = () => {
    dispatch(resetProjectState());
    navigate('/emp-project-details', { state: { ...state, projects } });
  };



  return (
    <>
      <div className='container'>
        <section className='emp_details_form'>
          <div className='form-heading-block'>
            <h2 className='my-3 form-heading'>Employee Skills & Certifications</h2>
          </div>
          <div className='form-container'>
            <form className='p-4 form_block'>
              {certificates.map((certification, index) => (
                <div key={index} className='certification-details my-3'>
                  <h4 className='text-center'>
                    Certification {index + 1}
                    <div className='add-btn-wrapper'>
                     <Fab color='primary' aria-label='add' className='add-certification-button' onClick={handleAddCertification}>
                      <Add />
                    </Fab>
                    </div>
                  </h4>
                  <div className={`form-group row my-3 d-flex align-items-center justify-content-center ${certification.errors.certificationName ? 'has-error' : ''}`}>
                    <label htmlFor={`certificationName-${index}`} className='col-md-4 col-form-label text-start'>
                      Certification Name
                    </label>
                    <div className='col-md-8'>
                      <input
                        type='text'
                        id={`certificationName-${index}`}
                        name='certificationName'
                        value={certification.certificationName}
                        onChange={(e) => handleCertificationChange(index, e)}
                        placeholder='Enter Certification Name'
                        className={`form-control ${certification.errors.certificationName ? 'is-invalid' : ''}`}
                        required
                      />
                      {certification.errors.certificationName && <div className='invalid-feedback'>{certification.errors.certificationName}</div>}
                    </div>
                  </div>
                  <div className={`form-group row my-3 d-flex align-items-center justify-content-center ${certification.errors.certificationStartDate ? 'has-error' : ''}`}>
                    <label htmlFor={`certificationStartDate-${index}`} className='col-md-4 col-form-label text-start'>
                      Certification Start Date
                    </label>
                    <div className='col-md-8'>
                      <input
                        type='date'
                        id={`certificationStartDate-${index}`}
                        name='certificationStartDate'
                        value={certification.certificationStartDate}
                        onChange={(e) => handleCertificationChange(index, e)}
                        className={`form-control ${certification.errors.certificationStartDate ? 'is-invalid' : ''}`}
                        required
                      />
                      {certification.errors.certificationStartDate && <div className='invalid-feedback'>{certification.errors.certificationStartDate}</div>}
                    </div>
                  </div>
                  <div className={`form-group row my-3 d-flex align-items-center justify-content-center ${certification.errors.certificationExpiryDate ? 'has-error' : ''}`}>
                    <label htmlFor={`certificationExpiryDate-${index}`} className='col-md-4 col-form-label text-start'>
                      Certification Expiry Date
                    </label>
                    <div className='col-md-8'>
                      <input
                        type='date'
                        id={`certificationExpiryDate-${index}`}
                        name='certificationExpiryDate'
                        value={certification.certificationExpiryDate}
                        onChange={(e) => handleCertificationChange(index, e)}
                        className={`form-control ${certification.errors.certificationExpiryDate ? 'is-invalid' : ''}`}
                        required
                      />
                      {certification.errors.certificationExpiryDate && <div className='invalid-feedback'>{certification.errors.certificationExpiryDate}</div>}
                    </div>
                  </div>
                  {index > 0 && (
                    <div className='form-group row my-3 d-flex align-items-center justify-content-end'>
                      <div className='col-sm-12 col-md-12 d-flex justify-content-end'>
                        <IconButton className='remove-certification' onClick={() => handleRemoveCertification(index)}>
                          <Delete />
                        </IconButton>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className='skills-details my-5'>
                <div className={`form-group row my-3 d-flex align-items-center justify-content-center`}>
                  <label htmlFor="skills" className='col-md-4 col-form-label text-start'>
                    Skills
                  </label>
                  <div className='col-md-8'>
                    <TagsInput
                      value={skills}
                      onChange={(tags) => setSkills(tags)}
                      inputProps={{
                        placeholder: 'Add Skills',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group row mb-3 d-flex align-items-center justify-content-center text-end'>
                <div className='col-sm-12 col-md-12 d-flex justify-content-between'>
                  <button type='button' className='btn btn-secondary fixed-width-btn justify-text' onClick={handlePrevious}>
                    <KeyboardArrowLeft /> Previous
                  </button>
                  <button type='button' className='btn btn-primary fixed-width-btn justify-text' onClick={handlePreview}>
                    Preview <Visibility style={{ marginLeft: '5px', verticalAlign: 'bottom' }} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};



export default EmpSkillCertificationForm;