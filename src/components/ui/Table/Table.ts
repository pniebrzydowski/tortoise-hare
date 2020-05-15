import styled from 'styled-components';

export const StyledTable = styled("table")`
  border-spacing: 0;
  border-radius: ${(props) => props.theme.borders.radius};
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.small};

  th,
  td {
    padding: ${(props) =>
      `${props.theme.spacing.xSmall} ${props.theme.spacing.small}`};
    border-top: ${(props) =>
      `${props.theme.borders.style} ${props.theme.colors.light}`};
    border-right: ${(props) =>
      `${props.theme.borders.style} ${props.theme.colors.light}`};
  }
  tr {
    th:first-of-type,
    td:first-of-type {
      border-left: ${(props) =>
        `${props.theme.borders.style} ${props.theme.colors.light}`};
    }
    &:nth-child(even) td {
      background: #fff;
    }
    &:last-of-type {
      td {
        border-bottom: ${(props) =>
          `${props.theme.borders.style} ${props.theme.colors.light}`};

        :first-of-type {
          border-bottom-left-radius: ${(props) => props.theme.borders.radius};
        }
        :last-of-type {
          border-bottom-right-radius: ${(props) => props.theme.borders.radius};
        }
      }
    }
  }

  th {
    background: ${(props) => props.theme.colors.tertiary};
    font-weight: bold;

    :first-of-type {
      border-top-left-radius: ${(props) => props.theme.borders.radius};
    }
    :last-of-type {
      border-top-right-radius: ${(props) => props.theme.borders.radius};
    }
  }
`;
