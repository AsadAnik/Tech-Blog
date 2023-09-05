import React from 'react';
import useRegisterForm from '../../hooks/useRegisterForm';
import './AuthForm.css';

const RegisterForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <input
        type="password"
        name="retypePassword"
        placeholder="Retype Password"
        value={formData.retypePassword}
        onChange={handleChange}
      />
      {errors.retypePassword && (
        <div className="error">{errors.retypePassword}</div>
      )}

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />

      <button type="submit" disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
