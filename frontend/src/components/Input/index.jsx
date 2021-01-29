import React, { useState, useCallback } from 'react';

import { Container } from './styles';

export default function Input({ onChange, placeholder, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(true);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...props}
      />

    </Container>
  );
}
