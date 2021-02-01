import React, { useState, useCallback } from 'react';

import { Container } from './styles';

export default function InputSearch({
  onChange,
  placeholder,
  value,
}) {
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </Container>
  );
}
