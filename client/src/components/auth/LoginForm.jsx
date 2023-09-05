import React from 'react';
import useLoginForm from '../../hooks/useLoginForm';
import './AuthForm.css';

const LoginForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Name or Email"
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

      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
