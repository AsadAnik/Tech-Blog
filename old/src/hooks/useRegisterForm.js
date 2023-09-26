import { useState } from "react";

const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation (add your validation logic)
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return { formData, errors, isSubmitting, handleChange, handleSubmit };
};

export default useRegisterForm;
