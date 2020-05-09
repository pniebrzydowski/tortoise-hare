import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

interface Props {
  fieldId: string;
  label?: string;
  error?: string;
}

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled("label")`
  font-size: 0.8rem;
  font-weight: bold;
  padding: ${(props) =>
    `${props.theme.spacing.xSmall} ${props.theme.spacing.medium}`};
`;

const StyledError = styled(StyledLabel)`
  color: ${(props) => props.theme.colors.error};
`;

const FieldWrapper: FunctionComponent<Props> = ({
  fieldId,
  label,
  error,
  children,
}) => {
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={fieldId}>{label}</StyledLabel>}
      {children}
      {error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};

export default FieldWrapper;
