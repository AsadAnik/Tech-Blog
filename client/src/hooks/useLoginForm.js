import { useState } from "react";

const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        console.log("Login Form submitted:", formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return { formData, errors, isSubmitting, handleChange, handleSubmit };
};

export default useLoginForm;
