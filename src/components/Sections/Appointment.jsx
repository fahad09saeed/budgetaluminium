/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "./Footer";
// Styled Components
const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  margin-top:100px;
  text-align: center;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background: gray;
  }
`;

const ServiceBox = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#007bff" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
`;

const Appointment = () => {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
    <TopNavbar/>
    <Container>
        <h1>Estimate Booking Form</h1>
      {/* Step Indicator */}
      <Step>
        {["Items", "Schedule", "Details", "Summary"].map((s, index) => (
          <div key={index} style={{ fontWeight: step === index ? "bold" : "normal" }}>
            {s}
          </div>
        ))}
      </Step>

      {/* Step 1: Select Service */}
      {step === 0 && (
        <>
          <h2>Select a Service</h2>
          {["Patio Cover", "Railings", "Sun Room", "Fence"].map((service) => (
            <ServiceBox key={service} selected={selectedService === service} onClick={() => setSelectedService(service)}>
              {service}
            </ServiceBox>
          ))}
          <Button onClick={nextStep} disabled={!selectedService}>
            Continue
          </Button>
        </>
      )}

      {/* Step 2: Select Schedule */}
      {step === 1 && (
        <>
          <h2>Select a Visit Time</h2>
          {["3:00pm-4:00pm", "4:00pm-5:00pm", "5:00pm-6:00pm"].map((time) => (
            <ServiceBox key={time} selected={selectedTime === time} onClick={() => setSelectedTime(time)}>
              {time}
            </ServiceBox>
          ))}
          <div>
            <Button onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} disabled={!selectedTime}>
              Continue
            </Button>
          </div>
        </>
      )}

      {/* Step 3: Contact Info */}
      {step === 2 && (
        <>
          <h2>Provide Your Contact Info</h2>
          <Input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <div>
            <Button onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} disabled={!formData.firstName || !formData.lastName || !formData.email}>
              Continue
            </Button>
          </div>
        </>
      )}

      {/* Step 4: Summary */}
      {step === 3 && (
        <>
          <h2>Summary</h2>
          <p><b>Service:</b> {selectedService}</p>
          <p><b>Time:</b> {selectedTime}</p>
          <p><b>Name:</b> {formData.firstName} {formData.lastName}</p>
          <p><b>Email:</b> {formData.email}</p>
          <div>
            <Button onClick={prevStep}>Back</Button>
            <Button onClick={() => alert("Appointment Submitted!")}>Submit</Button>
          </div>
        </>
      )}
    </Container>
    <Footer/>
    </>
  );
};

export default Appointment;
